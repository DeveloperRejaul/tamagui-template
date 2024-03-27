import { Stack } from "expo-router";
import AppContext from "src/context/AppContext";

export default function Layout() {
  return (
    <AppContext>
      <Stack screenOptions={{ headerShown: false }} />
    </AppContext>
  )
}
