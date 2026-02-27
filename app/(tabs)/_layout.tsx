import { TabButton } from '@/components/TabButton'
import useThemeColors from '@/contexts/ThemeColors'
import { shadowPresets } from '@/utils/useShadow'
import { TabList, Tabs, TabSlot, TabTrigger } from 'expo-router/ui'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function Layout() {
  const colors = useThemeColors()
  const insets = useSafeAreaInsets()
  return (
    <Tabs>
      <TabSlot />
      <TabList
        style={{
          alignItems: 'center',
          backgroundColor: colors.secondary,
          paddingBottom: insets.bottom,
          ...shadowPresets.large,
        }}
      >
        {/* Home Tab */}
        <TabTrigger name="index" href="/" asChild>
          <TabButton labelAnimated={true} icon="Navigation">
            Discover
          </TabButton>
        </TabTrigger>
      </TabList>
    </Tabs>
  )
}
