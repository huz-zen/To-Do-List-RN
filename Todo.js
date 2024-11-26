import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, FlatList, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [del, setDelTask] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  let indexGlob=0;

  function addTask() {
    if (!task.trim()) {
      alert('Task cannot be empty!');
      return;
    }
    setTasks((prevTasks) => [...prevTasks, task]);
    setTask('');
  }

  function editPress(selected) {
    setEditingTask(tasks[selected]);
    setTask(tasks[selected]);
  }

  function saveEdit(selected) {
    if (!task.trim()) {
      alert('Task cannot be empty!');
      return;
    }
    const updatedTasks = tasks.map((item,index) => (item === editingTask && index === selected ? task : item));
    setTasks(updatedTasks);
    setEditingTask(null);
    setTask('');
  }

  function delPress(selected) {
    if (del === true) {
      const taskTemp = [...tasks]
      taskTemp.splice(selected,1)
      setTasks(taskTemp);
    }
    setDelTask(false);
  }

  function toggleDeleteMode() {
    setDelTask(!del);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>To-Do List</Text>
      <TextInput
        style={styles.input}
        value={task}
        placeholder="Create a new task"
        onChangeText={setTask}
      />
      <View >
          {editingTask ? (
            <TouchableOpacity style={styles.saveButton} onPress={()=>saveEdit(indexGlob)}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.addButton} onPress={addTask}>
              <MaterialIcons name="add" size={30} color="white" />
            </TouchableOpacity>
          )}

          <TouchableOpacity style={styles.deleteModeButton} onPress={toggleDeleteMode}>
            <Text style={styles.buttonText}>{del ? 'Cancel' : 'Delete Mode'}</Text>
          </TouchableOpacity>

      </View>
      
      
      <FlatList
        data={tasks}
        renderItem={({ item ,index}) => {
          indexGlob = index;
          return <View style={styles.taskContainer}>
            <TouchableOpacity
              style={styles.taskItem}
              onLongPress={() => editPress(index)}
              onPress={() => del && delPress(index)}
            >
            <View style={styles.checkBox}>
            {/* <Checkbox value={true}/>  */}
            <Text style={styles.itemText}>{item}</Text>
            </View>
            </TouchableOpacity>
            {del && (
              <TouchableOpacity onPress={() => delPress(index)} style={styles.deleteButton}>
                <Text style={styles.deleteText}>❌</Text>
              </TouchableOpacity>
            )}
          </View>
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    paddingTop: 50,
    paddingHorizontal: 40,
    position: 'relative',
  },
  input: {
    borderWidth: 1,
    height: 40,
    padding: 10,
    marginVertical: 20,
    width: '100%',
    borderColor: 'darkblue',
    borderRadius: 10,
    fontSize: 16,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  taskItem: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginRight: 10,
  },
  itemText: {
    fontSize: 18,
    color: '#333',
  },
  deleteButton: {
    borderRadius: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteText: {
    color: 'white',
    fontSize: 20,
  },
  addButton: {
    position: 'absolute',
    bottom: 60,
    right: 10,
    width: 70,
    height: 70,
    backgroundColor: 'blue',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  saveButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
    marginVertical: 20,
    alignItems: 'center',
  },
  deleteModeButton: {
    backgroundColor: 'orange',
    padding: 10,
    height:50,
    right:60,
    borderRadius: 10,
    marginTop: 10,  
    margin:'20%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  }, 
  checkBox:{
  }
  
});
