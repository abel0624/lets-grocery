import { SplashScreenController } from "@/components/splash-screen-controller";
import { useAuthContext } from "@/hooks/use-auth-context";
import AuthProvider from "@/providers/auth-provider";
import ShoppingProvider from "@/providers/shopping-provider";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

function RootNavigator() {
  const { isLoggedIn } = useAuthContext();
  return (
    <Stack>
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack.Protected>
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <ShoppingProvider>
        <SplashScreenController />
        <RootNavigator />
        <StatusBar style="auto" />
      </ShoppingProvider>
    </AuthProvider>
  );
}
