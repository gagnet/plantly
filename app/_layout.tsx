import * as QuickActions from "expo-quick-actions";
import { useQuickAction } from "expo-quick-actions/hooks";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { Platform } from "react-native";


export default function Layout(){
    useQuickAction()
    useEffect(()=>{
        QuickActions.setItems([
            {
                title: "Add a plant",
                icon: Platform.OS === "ios" ? "symbol:leaf" : "leaf",
                id: "0",
                params:{href: "/new"}
            }
        ])
    },[])
    return(
    <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown: false, animation: "slide_from_bottom"}} />
        <Stack.Screen name="onboarding" options={{headerShown: false, animation: "slide_from_bottom"}}/>
        <Stack.Screen name="new" options={{presentation: "modal", title: "New Plant"}}/>
    </Stack>
)}