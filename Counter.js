import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";

export default function Demo() {
  const [counter, setCounter] = useState(0);
  const [timer,setTimer] = useState(0);
  useEffect(() => {
    console.log(counter,timer)
    if (counter>10 && timer>10){
      setCounter(0)
      setTimer(0)
    }
  },[counter,timer]); 


  function timerUpdate() {
    // setTimeout(() => {
    //   alert(counter);
    //   setCounter(counter+1);
    // }, 1000);
    setTimer(timer+1)
  }
  function countUpdate() {
    // setTimeout(() => {
    //   alert(counter);
    //   setCounter(counter+1);
    // }, 1000);
    setCounter(counter+1)
  }


  return (
    <View style={styles.container}>
      <Text>Timer</Text>
      <TouchableOpacity style={styles.btn} onPress={timerUpdate}>
        <Text style={styles.text}>{timer}</Text>
      </TouchableOpacity>
      <Text>Counter</Text>
      <TouchableOpacity style={styles.btn} onPress={countUpdate}>
        <Text style={styles.text}>{counter}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "red",
    padding: 15,
    paddingHorizontal:60,

  },
  text: {
    color: "yellow",
    fontSize:100
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
