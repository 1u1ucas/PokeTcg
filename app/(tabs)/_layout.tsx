import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
      <Tabs>
        <Tabs.Screen name="index" options={{ title: 'Home', headerShown: false,
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="home" size={24} color={focused ? 'blue' : 'black'} />
          ) }} /> 
        <Tabs.Screen name="pokeList" options={{ title: 'Pokémons', headerShown: false,
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="pokeball" size={24} color={focused ? 'blue' : 'black'} />
          ) }} />
        <Tabs.Screen name="typeList" options={{ title: 'Types', headerShown: false,
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="format-list-bulleted" size={24} color={focused ? 'blue' : 'black'} />
          ) }} />
          <Tabs.Screen name='randPoke' options={{ title: 'Random Pokémons', headerShown: false, 
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="shuffle" size={24} color={focused ? 'blue' : 'black'} />
          ) }} />
          <Tabs.Screen name='poke/fight/createTeam' options={{ title: 'fight', headerShown: false,
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="sword" size={24} color={focused ? 'blue' : 'black'} />
          ) }} />


        <Tabs.Screen name="poke/id/[id]" options={{ title: 'poke', headerShown: false, href: null }} />
        <Tabs.Screen name="poke/name/[name]" options={{ title: 'pok', headerShown: false, href: null }} />
        <Tabs.Screen name="type/[id]" options={{ title: 'Types', headerShown: false, href: null }} />
        <Tabs.Screen name="poke/fight/fight/[pokemonName]" options={{ title: 'Type', headerShown: false, href: null }} />
      </Tabs>
  )
}
