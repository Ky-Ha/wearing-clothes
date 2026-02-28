import { useBodyStore } from '@/store/body'
import { useItemStore } from '@/store/item'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import { ActivityIndicator, TouchableOpacity, View } from 'react-native'
import ThemedText from '../ThemedText'

type GenerateButtonProps = {
  description: string
}

export default function GenerateButton({ description }: GenerateButtonProps) {
  const bodyImages = useBodyStore((state) => state.images)
  const itemImages = useItemStore((state) => state.images)

  const [loading, setLoading] = useState(false)

  const handleGenerate = async () => {
    if (loading) return // 🔒 prevent double tap

    try {
      setLoading(true)

      //   console.log('bodyImages: ', bodyImages)
      //   console.log('itemImages: ', itemImages)
      console.log('bodyImages number: ', bodyImages.length)
      console.log('itemImages number: ', itemImages.length)
      console.log('description: ', description)

      // 🔥 call API / AI generation here
      // await generateStyleSwap(...)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View className="absolute bottom-3 left-0 right-0 px-4 pb-6">
      <TouchableOpacity
        onPress={handleGenerate}
        activeOpacity={0.85}
        disabled={loading}
        className="rounded-2xl overflow-hidden"
      >
        <LinearGradient
          colors={loading ? ['#D1D1D6', '#D1D1D6'] : ['#F8C3D0', '#C9B6FF']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="py-4 items-center"
        >
          {loading ? (
            <ActivityIndicator />
          ) : (
            <ThemedText className="font-semibold text-base">
              Generate StyleSwap
            </ThemedText>
          )}
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}
