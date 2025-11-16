import { useGlobalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Score, Test } from "../../../db/example";

export default function TestPage() {
  const { test } = useGlobalSearchParams();
  const [scoresObj, setScoresObj] = useState([]);
  const [testObj, setTestObj] = useState({});

  useEffect(() => {
    setTestObj(Test.getOne(Number(test)));
    setScoresObj(Score.getAll().filter(score => score.test.id == Number(test)));
  }, []);

  const getScoresList = () => {
    return scoresObj.map((score, id) => 
      <View key={id} style={styles.scoreData}>
        <Text style={styles.scoreDataTest}>{score.student.name}</Text>
        <Text style={styles.scoreDataValue}>{score.score}</Text>
      </View>
    )
  }

  const getMedian = () => {
    const scores = scoresObj.map(score => score.score).sort();

    if(scores.length == 0) return 0;

    if(scores.length % 2 == 0){
      return (scores[scores.length/2] + scores[scores.length/2 + 1]) / 2;
    }
    else{
      return (scores[(scores.length + 1) / 2])
    }
  }

  const getMode = () => {
    const scores = scoresObj.map(score => score.score).sort();
    let modeSavedValues = []
    let modes = [];

    scores.forEach(score => {
      if(!modeSavedValues[score]) modeSavedValues[score] = '' 
      modeSavedValues[score] += String(score) + ' ';
    })
    modeSavedValues = modeSavedValues
      .filter(msValue => msValue)
      .map(msValue => msValue.trim().split(' ')
    );
    modeSavedValues = modeSavedValues.sort((a, b) => a.length - b.length).reverse();

    for(let msValue in modeSavedValues){
      if(modeSavedValues[msValue].length > 1){
        if(modes.length == 0) modes.push(modeSavedValues[msValue][0]);
        else if(modeSavedValues[msValue - 1].length == modeSavedValues[msValue].length){
          modes.push(modeSavedValues[msValue][0]);
        }
        else break;
      }
      else break;
    }

    return modes.join(', ');
  }


  getMode()

  return (
    <View style={styles.container}>
      <View style={styles.testContainer}>
        <Text style={styles.testName}>{testObj.name}</Text>
        <View style={styles.score}>
          <View style={styles.scoreHeader}>
            <Text style={styles.scoreHeaderTest}>Estudantes</Text>
            <Text style={styles.scoreHeaderValue}>Notas</Text>
          </View>
          {scoresObj.length ?
          <>
            {getScoresList()}
            <View style={styles.scoreAlgorithms}>
              <Text style={styles.scoreHeaderTest}>Média</Text>
              <Text style={styles.scoreHeaderValue}>
                {(scoresObj.reduce((a, c) => {
                  return a + c.score
                }, 0) / scoresObj.length).toFixed(2)}
              </Text>
            </View>

            <View style={styles.scoreAlgorithms}>
              <Text style={styles.scoreHeaderTest}>Mediana</Text>
              <Text style={styles.scoreHeaderValue}>{getMedian()}</Text>
            </View>

            <View style={styles.scoreAlgorithms}>
              <Text style={styles.scoreHeaderTest}>Moda</Text>
              <Text style={styles.scoreHeaderValue}>{getMode()}</Text>
            </View>
          </>
          : <View style={styles.scoreData} />
          }
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
  testContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ffffff1e'
  },
  testName: {
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
  scoreAlgorithms: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 2,
    borderColor: 'white',
    padding: 5,
  }
})