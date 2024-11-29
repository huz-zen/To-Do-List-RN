import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";

export default function Demo() {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [value, setValue] = useState(null);


  useEffect(() => {
    if (sec > 59) {
      setMin(min + 1)
      setSec(0)
    }
  }, [sec]);

  function counter() {
    if (!value) {
      let id = setInterval(() => {
        setSec(prev => prev + 1)
      }, 1000);

      setValue(id)
    }
  }
  function pause() {
    clearInterval(value)
    setValue(0)
  }
  function reset() {
    setMin(0)
    setSec(0)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textcount}>{min} minutes : {sec} seconds</Text>
      <Text>           </Text>
      <TouchableOpacity style={styles.btn} onPress={counter}>
        <Text style={styles.text}>start</Text>
      </TouchableOpacity>
      <Text>           </Text>
      <TouchableOpacity style={styles.btn} onPress={pause}>
        <Text style={styles.text}>stop</Text>
      </TouchableOpacity>
      <Text>           </Text>
      <TouchableOpacity style={styles.btn} onPress={reset}>
        <Text style={styles.text}>reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "red",
    padding: 10,
    paddingHorizontal: 60,

  },
  text: {
    color: "yellow",
    fontSize: 20
  },
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  textcount: {
    color: 'yellow',
    fontSize: 30,
  },
  textheader: {
    color: "yellow",
    fontSize: 80

  }
});
