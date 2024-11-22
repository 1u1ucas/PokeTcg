import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
      <Tabs>
        <Tabs.Screen name="index" options={{ title: 'Home', headerShown: false,
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="pokeball" size={24} color={focused ? 'blue' : 'black'} />
          ) }} /> 
      </Tabs>
  )
}
