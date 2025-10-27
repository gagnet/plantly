import { theme } from "@/theme"
import { Entypo } from "@expo/vector-icons"
import { Link, Stack } from "expo-router"
import { Pressable } from "react-native"

export default function Layout(){
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                title: "Home", headerRight: ()=>(
            <Link href="/new" asChild>
            <Pressable hitSlop={20} style={{marginHorizontal: 6}}>
              <Entypo name="circle-with-plus" size={24} 
              color={theme.colorGreen} />
              </Pressable>
              </Link>
            
  )}}/>
  <Stack.Screen name="plants/[plantId]" options={{title: ""}}/>
        </Stack>
    )
}