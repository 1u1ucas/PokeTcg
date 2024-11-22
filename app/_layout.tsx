import { Stack } from  'expo-router';
import Header from "@/components/header";
import Footer from "@/components/footer";


export default function RootLayout() {
  return (
    <>
        <Header />
        <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false}}/>
        </Stack>
        <Footer />
    </>
  )
}
