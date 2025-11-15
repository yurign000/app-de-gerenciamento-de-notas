import { Stack } from "expo-router";

export default function RootLayout(){
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{
        headerShown: false,
      }}/>
      <Stack.Screen name="pages/new-student" options={{
        title: "Novo estudante",
        headerTitleAlign: 'center'
      }}/>
      <Stack.Screen name="pages/new-test" options={{
        title: "Nova avaliação",
        headerTitleAlign: 'center'
      }}/>
      <Stack.Screen name="pages/new-score" options={{
        title: "Nova nota",
        headerTitleAlign: 'center',
      }}/>
      <Stack.Screen name="pages/student/[student]" options={{
        title: "Informações do estudante",
        headerTitleAlign: 'center',
      }}/>
    </Stack>
  )
}