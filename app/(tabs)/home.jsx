import { router } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Student, Test } from "../../db/example";

export default function HomePage(){
  const [students, setStudents] = useState(Student.getAll() || []);
  const [tests, setTests] = useState(Test.getAll() || []);

  useEffect(() => {
    setTimeout(() => {
      setStudents(Student.getAll().reverse())
      setTests(Test.getAll().reverse())
    }, 1000);
  }, [students])

  const getFlatListStudents = () => {
    return <FlatList 
      data={students}
      renderItem={({item}) => 
        <View style={styles.flatListItem}>
          <Text onPress={() => router.push('/pages/student/'+item.id)} style={styles.flatListItemText}>{item.name}</Text>
        </View>
      }
      keyExtractor={item => item.id}
    />
  }

  const getFlatListTests = () => {
    return <FlatList 
      data={tests}
      renderItem={({item}) => 
        <View style={styles.flatListItem}>
          <Text style={styles.flatListItemText}>{item.name}</Text>
        </View>
      }
      keyExtractor={item => item.id}
    />
  }

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <Text style={styles.listTitle}>Estudantes</Text>
        {getFlatListStudents()}
      </View>
      <View style={styles.list}>
        <Text style={styles.listTitle}>Avaliações</Text>
        {getFlatListTests()}
      </View>
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
  list: {
    padding: 20,
    width:'90%',
    height:'40%',
    backgroundColor: '#ffffff27',
    overflow: 'scroll',
  },
  flatListItem: {
    backgroundColor: '#ffffffff',
    padding: 10,
    marginTop: -1,
  },
  flatListItemText: {
    color: 'tomato',
    textDecorationLine: 'underline',
  },
  listTitle: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff'
  }
})