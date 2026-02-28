import ThemedScroller from '@/components/ThemeScroller'
import ThemedText from '@/components/ThemedText'
import BodyPhotoPicker from '@/components/style-swap/body-photo'
import ItemPhotoPicker from '@/components/style-swap/item-photo'
import { StyleDescription } from '@/components/style-swap/style-description'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'

export default function StyleSwapScreen() {
  const [description, setDescription] = useState('')

  const handleGenerate = () => {
    console.log('Generating StyleSwap')
  }
  return (
    <ThemedScroller className="flex-1">
      <View className="flex-1">
        <ThemedText className="text-xl font-semibold text-center my-5">
          StyleSwap
        </ThemedText>

        <ThemedText className="font-semibold text-base">Body Photo</ThemedText>
        <ThemedText className="text-gray-500 mb-3">
          Upload a photo of yourself for the try-on
        </ThemedText>

        <BodyPhotoPicker />

        <ThemedText className="font-semibold text-base mt-5">
          Sample Items
        </ThemedText>
        <ItemPhotoPicker />
      </View>

      <View className="flex-1">
        <ThemedText className="font-semibold text-base mt-5">
          Describe Your Style Request (Optional)
        </ThemedText>
        <StyleDescription value={description} onChange={setDescription} />
      </View>
      <View className="absolute bottom-3 left-0 right-0 px-4 pb-6">
        <TouchableOpacity
          onPress={handleGenerate}
          activeOpacity={0.85}
          className="rounded-2xl overflow-hidden"
        >
          <LinearGradient
            colors={['#F8C3D0', '#C9B6FF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="py-4 items-center"
          >
            <ThemedText className="font-semibold text-base">
              Generate StyleSwap
            </ThemedText>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ThemedScroller>
  )
}
