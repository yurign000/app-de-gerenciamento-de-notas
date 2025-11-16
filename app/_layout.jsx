import { Stack } from "expo-router";

export default function RootLayout(){
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{
        headerShown: false,
      }}/>
      <Stack.Screen name="pages/new-student" options={{
        title: "Novo estudante",
        headerTitleAlign: 'center',
        headerTintColor: 'tomato',
      }}/>
      <Stack.Screen name="pages/new-test" options={{
        title: "Nova avaliação",
        headerTitleAlign: 'center',
        headerTintColor: 'tomato',
      }}/>
      <Stack.Screen name="pages/new-score" options={{
        title: "Nova nota",
        headerTitleAlign: 'center',
        headerTintColor: 'tomato',
      }}/>
      <Stack.Screen name="pages/student/[student]" options={{
        title: "Informações do estudante",
        headerTitleAlign: 'center',
        headerTintColor: 'tomato',
      }}/>
      <Stack.Screen name="pages/test/[test]" options={{
        title: "Informações da avaliação",
        headerTitleAlign: 'center',
        headerTintColor: 'tomato',
      }}/>
    </Stack>
  )
}