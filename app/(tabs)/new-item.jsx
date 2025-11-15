import { Link, router } from 'expo-router';
import { Text, View, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';

export default function NewItem() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/pages/new-student')}>
        <Text style={styles.buttonText}>Novo estudante</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/pages/new-test')}>
        <Text style={styles.buttonText}>Nova avaliação</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/pages/new-score')}>
        <Text style={styles.buttonText}>Nova nota</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  button: {
    backgroundColor: 'tomato',
    borderRadius: 3,
    padding: 5,
    width: 180,
    height: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  }
})