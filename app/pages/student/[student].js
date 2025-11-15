import { useGlobalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Score, Student } from "../../../db/example";

export default function StudentPage() {
  const { student } = useGlobalSearchParams();
  const [scoresObj, setScoresObj] = useState([]);
  const [studentObj, setStudentObj] = useState({});

  useEffect(() => {
    setStudentObj(Student.getOne(student).student);
    setScoresObj(Score.getAll().filter(score => score.student.id == student));
  }, []);

  const getScoresList = () => {
    return scoresObj.map(score => 
      <View key={score.score.id} style={styles.scoreData}>
        <Text style={styles.scoreDataTest}>{score.test.name}</Text>
        <Text style={styles.scoreDataValue}>{score.score}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.studentContainer}>
        <Text style={styles.studentName}>{studentObj.name}</Text>
        <View style={styles.score}>
          <View style={styles.scoreHeader}>
            <Text style={styles.scoreHeaderTest}>Avaliações</Text>
            <Text style={styles.scoreHeaderValue}>Notas</Text>
          </View>
          {getScoresList()}
          <View style={styles.scoreAverage}>
            <Text style={styles.scoreHeaderTest}>Media</Text>
            <Text style={styles.scoreHeaderValue}>
              {scoresObj.reduce((a, c) => {
                console.log(c.score)
                return a + c.score
              }, 0) / scoresObj.length}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    paddingTop: 20,
    paddingBottom: 60,
    paddingLeft: 10,
    paddingRight: 10,
  },
  studentContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ffffff1e'
  },
  studentName: {
    textAlign: 'center',
    fontSize: 20,
    color: '#ffffffff',
    marginBottom: 20
  },
  score: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#7c7c7c44',
    borderColor: '#fff',
    borderWidth: 2,
  },
  scoreHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderColor: 'transparent',
    borderBottomColor: '#fff',
    padding: 5,
  },  
  scoreHeaderTest: {
    color: 'white'
  },
  scoreHeaderValue: {
    color: 'white'
  },
  scoreData: {
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scoreDataTest: {
    color: 'white'
  },
  scoreDataValue: {
    color: 'white'
  },
  scoreAverage: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 2,
    borderColor: 'white',
    padding: 5,
  }
})