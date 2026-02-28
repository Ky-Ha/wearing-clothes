import ThemedScroller from '@/components/ThemeScroller'
import ThemedText from '@/components/ThemedText'
import BodyPhotoPicker from '@/components/style-swap/body-photo'
import GenerateButton from '@/components/style-swap/generate'
import ItemPhotoPicker from '@/components/style-swap/item-photo'
import { StyleDescription } from '@/components/style-swap/style-description'
import { useState } from 'react'
import { View } from 'react-native'

export default function StyleSwapScreen() {
  const [description, setDescription] = useState('')

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

      <GenerateButton description={description} />
    </ThemedScroller>
  )
}
