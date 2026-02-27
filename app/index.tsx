import { useState } from 'react'

import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {
  const [image, setImage] = useState<string | null>(null)
  const [description, setDescription] = useState('')

  const handleGenerate = () => {
    console.log('Generating StyleSwap')
  }
  return (
    <SafeAreaView className="flex-1">
      <Text className="text-red-400">QQ</Text>
      <View className="flex-1 bg-blue-500"></View>
    </SafeAreaView>
  )
}
