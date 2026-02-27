import { Ionicons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import { Image, Text, TouchableOpacity, View } from 'react-native'

type Props = {
  image: string | null
  onChange: (uri: string) => void
}

export function BodyPhotoPicker({ image, onChange }: Props) {
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.8,
    })

    if (!result.canceled) {
      onChange(result.assets[0].uri)
    }
  }

  return (
    <TouchableOpacity
      onPress={pickImage}
      className="border border-dashed border-gray-300 rounded-2xl h-56 items-center justify-center"
    >
      {image ? (
        <Image source={{ uri: image }} className="w-full h-full rounded-2xl" />
      ) : (
        <View className="items-center">
          <Ionicons name="add" size={32} color="#9ca3af" />
          <Text className="mt-2 font-medium">Tap to add photo –</Text>
          <Text className="text-gray-500">Camera or library</Text>
        </View>
      )}
    </TouchableOpacity>
  )
}
