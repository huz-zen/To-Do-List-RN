import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View ,ScrollView,FlatList,TouchableOpacity} from 'react-native';

export default function App() {
  const input = 
    [
    {name: 'shaun',id:'0'},
    {name: 'shaun',id:'1'},
    {name: 'shaun',id:'2'},
    {name: 'shaun',id:'3'},
    {name: 'shaun',id:'4'},
    {name: 'shaun',id:'6'},
    {name: 'shaun',id:'7'},
    {name: 'shaun',id:'8'},
    {name: 'shaun',id:'9'},
    {name: 'shaun',id:'10'}
  ];
  const [people,setpeople] = useState(input);

  const pressHandler= (id)=>{
    setpeople((prevPeople)=>{
      return prevPeople.filter(person =>person.id != id);
    })
  }
  return (
    <View style={styles.container}>
      <View style = {styles.containerIn}>
      <FlatList
      keyExtractor={(item)=>{item.id}}
      data ={people}
      renderItem = {({item})=>(
        <TouchableOpacity onPress={()=>pressHandler(item.id)}>
        <Text style= {styles.item}>{item.name}</Text>
        </TouchableOpacity>
      )
}      />
</View>  
      <Button title='Reset' style={styles.buttonContainer} onPress={()=>setpeople(input)}/>
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
  item:{
    marginTop:24,
    padding:30,
    backgroundColor : 'lightblue',
    fontSize: 24,
    marginTop: 2,
    marginHorizontal: 10

  }
  ,buttonContainer:{
    marginTop:20
  },
  containerIn:{
    height: "80%"
  }
});
