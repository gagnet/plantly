import { Stack } from "expo-router";

export default function Layout(){
    return(
    <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown: false, animation: "slide_from_bottom"}} />
        <Stack.Screen name="onboarding" options={{headerShown: false, animation: "slide_from_bottom"}}/>
        <Stack.Screen name="new" options={{presentation: "modal", title: "New Plant"}}/>
    </Stack>
)}