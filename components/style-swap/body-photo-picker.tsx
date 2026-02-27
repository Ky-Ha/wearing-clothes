import { Ionicons } from '@expo/vector-icons'
import * as FileSystem from 'expo-file-system/legacy'
import * as ImagePicker from 'expo-image-picker'
import { Camera } from 'lucide-react-native'

import React from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'

type Props = {
  setImage: React.Dispatch<React.SetStateAction<string | null>>
}

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5 MB

export default function BodyPhotoPicker({ setImage }: Props) {
  const pickImage = async (
    requestPermission: () => Promise<{ granted: boolean }>,
    launch: (
      options?: ImagePicker.ImagePickerOptions,
    ) => Promise<ImagePicker.ImagePickerResult>,
    permissionMessage: string,
    additionalOptions: ImagePicker.ImagePickerOptions = {},
  ) => {
    const { granted } = await requestPermission()
    if (!granted) {
      Alert.alert('Permission required', permissionMessage)
      return
    }

    try {
      const result = await launch({
        allowsEditing: true, // Allow user to crop/edit after capture/select
        base64: true,
        quality: 0.3, // Lower quality to reduce size
        ...additionalOptions,
      })

      if (result.canceled || !result.assets?.length) return

      const asset = result.assets[0]

      // Validate file size using expo-file-system
      const fileInfo = await FileSystem.getInfoAsync(asset.uri)

      if (!fileInfo.exists) return

      const size = fileInfo.size ?? 0

      if (fileInfo.exists && fileInfo.size && size > MAX_FILE_SIZE) {
        Alert.alert(
          'Image Too Large',
          'The selected image is too large. Please take a closer photo or select a smaller image.',
        )
        return
      }

      let image: string

      if (asset.base64) {
        const mime = asset.mimeType ?? 'image/jpeg'
        image = `data:${mime};base64,${asset.base64}`
      } else {
        image = asset.uri
      }

      setImage(image)
    } catch (error) {
      console.error('Error picking or processing image:', error)
      Alert.alert('Error', 'Failed to pick or process image. Please try again.')
    }
  }

  return (
    <View className="flex-1 relative">
      {/* ===== TOP (FIXED) ===== */}

      <TouchableOpacity
        className="bg-white border-2 border-dashed border-gray-300 rounded-2xl p-8 items-center justify-center min-h-[300px]"
        onPress={() =>
          pickImage(
            ImagePicker.requestMediaLibraryPermissionsAsync,
            ImagePicker.launchImageLibraryAsync,
            'Gallery access is needed to upload photos.',
            { mediaTypes: ImagePicker.MediaTypeOptions.Images },
          )
        }
      >
        <Ionicons name="add" size={32} color="#9ca3af" />
        <Text className="mt-2 font-medium">Upload photo</Text>
        <Text className="text-gray-500">from gallery</Text>
      </TouchableOpacity>

      {/* ===== BOTTOM (FIXED) ===== */}

      <TouchableOpacity
        onPress={() =>
          pickImage(
            ImagePicker.requestCameraPermissionsAsync,
            ImagePicker.launchCameraAsync,
            'Camera access is needed to take photos.',
          )
        }
        className="flex-col items-center absolute bottom-20 right-4"
      >
        <View className="w-11 h-11  rounded-full items-center justify-center bg">
          <Camera size={27} color={'black'} strokeWidth={2} />
        </View>
        <Text>Camera</Text>
      </TouchableOpacity>
    </View>
  )
}
