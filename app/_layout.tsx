import useThemeColors from '@/contexts/ThemeColors'
import ThemeProvider from '@/contexts/ThemeContext'
import { PortalHost } from '@rn-primitives/portal'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Stack } from 'expo-router'
import React from 'react'
import { Platform } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import '../global.css'

export default function RootLayout() {
  const queryClient = new QueryClient()
  const colors = useThemeColors()

  return (
    // <ClerkProvider
    //   tokenCache={tokenCache}
    //   publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
    // >
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView
        className={`bg-background  ${Platform.OS === 'ios' ? 'pb-0 ' : ''}`}
        style={{ flex: 1 }}
      >
        <ThemeProvider>
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: colors.bg },
            }}
          />
          <PortalHost />
        </ThemeProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
    // </ClerkProvider>
  )
}
