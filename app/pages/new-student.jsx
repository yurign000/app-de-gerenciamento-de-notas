import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Student } from "../../db/example";

export default function NewStudent(){
  const [name, setName] = useState("");
  
  const addNewStudent = () => {
    const success = Student.add(name);

    if(success){
      alert("Estudante criado com sucesso!");
    }
    else alert("O nome não pode estar em branco");
  }

  const handleName = (value) => {
    setName(value);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Nome do estudante</Text>
        <TextInput style={styles.input} value={name} onChangeText={handleName}/>
      </View>
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.button} onPress={addNewStudent}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    backgroundColor: '#ffffff44',
    gap: 5,
    padding: 10,
  },
  inputLabel: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center'
  },
  input: {
    width: 300,
    height: 40,
    fontSize: 15,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: 'tomato',
    borderRadius: 3,
    padding: 5,
    width: 300,
    height: 40,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  }
})