import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View ,ScrollView,FlatList,TouchableOpacity} from 'react-native';

export default function App() {
 
    
    var taskList = []
    const [tasks,setTasks] = useState(taskList);
    const [task, setTask] = useState('');
    const [keyCounter, setKeyCounter] = useState(0);


  // const pressHandler= ()=>{
  //   return taskRefresh()
  // }

  function addTask(){
    //taskRefresh(prev => prev);
    //taskList.push({taskname:task,key:key})
    //setList([...taskList,{task,key}])
    const newTask = {taskname:task,key:keyCounter.toString()};
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setKeyCounter((prevKey) => prevKey + 1); 
    setTask('')
  }
  return (
    <View style={styles.container}>
      <View >
      <FlatList
      data ={tasks}
      renderItem = {({item})=>(
      <Text style= {styles.item}>{item.taskname}</Text>
      )}   
      />
      <TextInput style = {styles.input} value={task} placeholder='Clean washroom'  onChangeText={setTask}/>
     </View>  
      <Button title='Add' style={styles.buttonContainer} onPress={addTask}/>
      <Button title='Delete' style={styles.buttonContainer} onPress={addTask}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  input:{
    borderWidth:1,
    padding:8,
    margin:100,
    width:180,
    borderColor:'black'
  }
  ,
  item:{
    marginTop:24,
    padding:30,
    backgroundColor : 'blue',
    fontSize: 24,
    marginTop: 2,
    marginHorizontal: 10

  }
  ,buttonContainer:{
    marginTop:20
  }
});
