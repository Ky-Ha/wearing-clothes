import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity, View } from 'react-native'
import ThemedText from '../ThemedText'

const ITEMS = ['Hat', 'Jacket', 'Pants', 'Shirt']
export function SampleItems() {
  return (
    <View className="flex-row items-center mt-3">
      {ITEMS.map((item, index) => (
        <View
          key={index}
          className="w-16 h-16 m-1 rounded-full border border-gray-300 items-center justify-center"
        >
          {/* <Image source={item} className="w-8 h-8" resizeMode="contain" /> */}
          <ThemedText className="text-xs mt-1">{item}</ThemedText>
        </View>
      ))}

      <TouchableOpacity className="w-14 h-14 rounded-full bg-pink-400 items-center justify-center">
        <Ionicons name="add" size={26} color="white" />
      </TouchableOpacity>
    </View>
  )
}
