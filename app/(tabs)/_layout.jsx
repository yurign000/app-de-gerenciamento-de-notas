import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: 'darkblue',
    }}>
      <Tabs.Screen name="home" options={{
        headerShown: false,
        title: 'Ínicio',
        tabBarIcon: () => <Ionicons name='home-sharp'/>
      }} />
      <Tabs.Screen name="new-item" options={{
        headerShown: false,
        title: 'Adicionar',
        tabBarIcon: () => <Ionicons name='add-circle'/>
      }} />
      <Tabs.Screen name="configuration" options={{
        headerShown: false,
        title: 'Configurações',
        tabBarIcon: () => <Ionicons name='settings-sharp'/>
      }} />
    </Tabs>
  );
}
