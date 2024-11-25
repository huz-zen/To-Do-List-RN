import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name,changename] = useState('Huzaifa')
  const [age,changeage] = useState('20')
  const clickHandler = ()=>{
    changename('Muhammad Huzaifa')
    changeage('42')
  }
  return (
    <View style={styles.container}>
        <Text>Enter name please Mr: {name} whose age is :{age}</Text> 
        <TextInput style={styles.input} placeholder='e.g Muhammad Huzaifa' onChangeText={(val)=>{changename(val )}}/>
        <Text >Enter age please Mr: {name} whose age is :{age}</Text>
        <TextInput style={styles.input} placeholder='e.g 25' onChangeText={(val)=>{changeage(val)}}/>  
        <View style = {styles.buttonContainer}>  
        <Button  title='Update state' onPress={clickHandler}/>
      </View> 
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderWidth:1,
    padding:8,
    margin:10,
    width:150,
    borderColor:'#777'
  }
  // header : {
  //   backgroundColor :'pink',
  //   padding : 20,
  // },
  // boldText:{
  //   fontWeight : 'bold'
  // }
  // ,
  // body:{
  //   backgroundColor:"yellow",
  //   padding: 20,
  //   fontWeight:'bold'
  // }
  ,buttonContainer:{
    marginTop:20
  },
});

