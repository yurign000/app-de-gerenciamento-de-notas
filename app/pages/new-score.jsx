import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Score, Student, Test } from "../../db/example";

export default function NewScore(){
  const [score, setScore] = useState('');
  const [selectedStudent, setSelectedStudent] = useState();
  const [selectedTest, setSelectedTest] = useState();

  const getPickerStudentItems = () => {
    return Student.getAll().map(student => 
      <Picker.Item 
        label={student.name}
        value={student.id}
        key={student.id}
      />
    )
  }

  const getPickerTestItems = () => {
    return Test.getAll().map(test => 
      <Picker.Item 
        label={test.name}
        value={test.id}
        key={test.id}
      />
    )
  }

  const addNewScore = () => {
    if(selectedStudent != -1 && selectedTest != -1){
      const success = Score.add(Number(score), Number(selectedStudent), Number(selectedTest));

      console.log(Score.getAll())
      if(success){
        alert("Avaliação criada com sucesso!");
      }
      else alert("Preencha todos os campos");
    }
    else alert('Selecione um estudante e uma avaliação');
  }

  const handleScore = (value) => {
    setScore(value);
  }

  const handleSelectedStudent = (value) => {
    setSelectedStudent(value);
  } 
  
  const handleSelectedTest = (value) => {
    setSelectedTest(value);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Nota tirada</Text>
        <TextInput style={styles.input} value={score} onChangeText={handleScore}/>
      </View>

      <View style={styles.inputContainer}>
        <Picker 
          style={styles.select}
          selectedValue="Selecione um estudante"
          onValueChange={handleSelectedStudent}
        >
          <Picker.Item label="Selecione um estudante" value={-1}/>
          {getPickerStudentItems()}
        </Picker>
      </View>

      <View style={styles.inputContainer}>
        <Picker 
          style={styles.select}
          selectedValue="Selecione uma avaliação"
          onValueChange={handleSelectedTest}
        >
          <Picker.Item label="Selecione uma avaliação" value={-1}/>
          {getPickerTestItems()}
        </Picker>
      </View>

      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.button} onPress={addNewScore}>
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
  },
  select: {
    backgroundColor: '#fff',
    color: 'darkorange',
    width: 300,
    height: 60,
    fontSize: 15,
  }
})