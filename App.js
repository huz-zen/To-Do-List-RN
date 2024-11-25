import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View ,ScrollView,FlatList,TouchableOpacity, LogBox} from 'react-native';

export default function App() {
    
    
    var taskList = []
    const [tasks,setTasks] = useState(taskList);
    const [task, setTask] = useState('');
    const [del,delTask] = useState(false)
    const [editingTask, setEditingTask] = useState(null);


  function delPress(selected){
      if(del===true){
      const newTasks = tasks.filter((item) => item !== selected);
      setTasks(newTasks)}
      delTask(false)
    }


  function editPress(selected){
    setEditingTask(selected)
    setTask(selected)    }

    function saveEdit() {
      if (!task.trim()) {
        alert('Task cannot be empty!');
        return;
      }
      const updatedTasks = tasks.map((item) =>
        item === editingTask ? task : item
      );
      setTasks(updatedTasks);
      setEditingTask(null); 
      setTask('');
    }
    
  function addTask(){
    if(!task.trim()){
      alert('Task cannot be empty!');
      return
    }
    setTasks((prevTasks) => [...prevTasks,task]);
    setTask('')
  }

  return (
    <View style={styles.container}>
      <Text style= {styles.header}>To-Do List</Text>
      
      <View >        
      <FlatList
      data ={tasks}
      renderItem = {({item})=>(
        <TouchableOpacity onLongPress={()=>{editPress(item)}} onPress={()=>{delPress(item)}}>
        <Text style= {styles.item}>{item}</Text>
        {del && (
              <TouchableOpacity onPress={() => delPress(item)}>
                <Text> ❌</Text>
              </TouchableOpacity>
            )}
        </TouchableOpacity>
      )}   
      keyExtractor={(item, index) => index.toString()} 
      />
           <TextInput style = {styles.input} value={task}  placeholder='Clean washroom'  onChangeText={setTask} />

      </View>  
      {editingTask ? (
        <Button title="Save" color="blue" onPress={saveEdit} />
      ) : (
        <Button title="Add Task" color="green" onPress={addTask} />
      )}
      <Button title='Delete' style={styles.buttonContainer} color={'red'} onPress={()=>{delTask(true)}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
   textAlign:'center',
   fontSize:60,
  }
  ,
  container: {
    flex:1,
    backgroundColor: "lightblue",
    paddingTop:100,
    paddingHorizontal: 60,
    alignContent:'stretch',  
  },
  input:{
     borderWidth:1,
      height:40,
      padding:10,
      margin:50,
      width:200,
      borderColor:'darkblue',
    }
  ,
  item:{
    marginTop:30,
    padding:20,
    borderColor:'black',
    borderWidth:2,
    backgroundColor : 'white',
    fontSize: 20,
    marginTop: 15,
    marginHorizontal: 20,
    borderRadius:50,
  }
});
