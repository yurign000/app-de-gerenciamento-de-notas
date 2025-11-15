import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: 'tomato',
    }}>
      <Tabs.Screen name="home" options={{
        headerShown: false,
        title: 'Ínicio',
        tabBarIcon: ({focused}) => <Ionicons color={focused ? 'tomato' : 'black'}  name='home-sharp'/>
      }} />
      <Tabs.Screen name="new-item" options={{
        headerShown: false,
        title: 'Adicionar',
        tabBarIcon: ({focused}) => <Ionicons color={focused ? 'tomato' : 'black'} name='add-circle'/>
      }} />
      <Tabs.Screen name="configuration" options={{
        headerShown: false,
        title: 'Configurações',
        tabBarIcon: ({focused}) => <Ionicons color={focused ? 'tomato' : 'black'}  name='settings-sharp'/>
      }} />
    </Tabs>
  );
}
