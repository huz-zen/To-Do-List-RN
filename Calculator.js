import Checkbox from 'expo-checkbox';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';



export default function App() {
  const [display, setDisplay] = useState('');

  function displayVar(x){
    if (!display){
      setDisplay(x.toString())
    }
    setDisplay(display+x.toString())
    }
  function calculate(){
    setDisplay(eval(display))
  }

return (
    <View style={styles.container}>
    <StatusBar style='transparent'/>
    <SafeAreaView>
      <Text style={styles.text}>
        {display}
      </Text>
      
      <View style={styles.row} >
         <TouchableOpacity style={styles.btnSecondary} onPress={()=>{}}> 
          <Text style={styles.btnText}>C</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.btnSecondary}> 
          <Text style={styles.btnText}>+/-</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.btnSecondary}> 
          <Text style={styles.btnText}>%</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.btnAccent} onPress={()=>displayVar('/')}> 
          <Text style={styles.btnText}>/</Text>
          </TouchableOpacity> 
         </View> 
         
         <View style={styles.row} >
         <TouchableOpacity style={styles.btn} onPress={()=>displayVar(7)}> 
          <Text style={styles.btnText}>7</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.btn} onPress={()=>displayVar(8)}> 
          <Text style={styles.btnText}>8</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.btn} onPress={()=>displayVar(9)}> 
          <Text style={styles.btnText}>9</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.btnAccent} onPress={()=>displayVar('x')}> 
          <Text style={styles.btnText}>x</Text>
          </TouchableOpacity> 
         </View> 

         <View style={styles.row} >
         <TouchableOpacity style={styles.btn} onPress={()=>displayVar(4)}> 
          <Text style={styles.btnText}>4</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.btn} onPress={()=>displayVar(5)}> 
          <Text style={styles.btnText}>5</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.btn} onPress={()=>displayVar(6)}> 
          <Text style={styles.btnText}>6</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.btnAccent} onPress={()=>displayVar('-')}> 
          <Text style={styles.btnText}>-</Text>
          </TouchableOpacity> 

         </View> 
         <View style={styles.row} >
         <TouchableOpacity style={styles.btn} onPress={()=>displayVar(1)}> 
          <Text style={styles.btnText}>1</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.btn} onPress={()=>displayVar(2)}> 
          <Text style={styles.btnText}>2</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.btn} onPress={()=>displayVar(3)}> 
          <Text style={styles.btnText}>3</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.btnAccent} onPress={()=>displayVar('+')}> 
          <Text style={styles.btnText}>+</Text>
          </TouchableOpacity> 
         </View> 
      
         <View style={styles.row} >
         <TouchableOpacity style={styles.btnDouble} onPress={()=>displayVar(0)}> 
          <Text style={styles.btnText}>0</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.btn} onPress={()=>displayVar('.')} > 
          <Text style={styles.btnText}>.</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.btnAccent} onPress={()=>calculate()}> 
          <Text style={styles.btnText}>=</Text>
          </TouchableOpacity> 
         </View> 
    
      </SafeAreaView>
      </View>

)
}


const BTN_MARGIN = 5

const screen = Dimensions.get("window")

const buttonWidth = screen.width / 4 - BTN_MARGIN * 2

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#333333",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: BTN_MARGIN,
    borderRadius: 100,
    height: buttonWidth,
  },
  container: {
    flex:1,
    backgroundColor:"#202020",
    justifyContent:"flex-end",
  },
  text:{
    color :'#fff',
    fontSize:50,
    marginRight: 20,
    marginBottom:10,
    textAlign: 'right',
  },
  row:{
    flexDirection:'row'
  },
  button:{
    color:'white'
  },
  btnText: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "500",
  },
  computedVal:{

  },
  btnDouble: {
    backgroundColor: "#333333",
    alignItems: "center",
    justifyContent: "center",
    margin: BTN_MARGIN,
    borderRadius: 100,
    height: buttonWidth,
    alignItems: "flex-start",
    flex: 0,
    width: buttonWidth * 2 + BTN_MARGIN * 2,
    paddingLeft: buttonWidth / 2 - BTN_MARGIN * 1.5,
  },
  btnAccent:{
    backgroundColor:'#f09a36',
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: BTN_MARGIN,
    borderRadius: 100,
    height: buttonWidth,

  },
  btnSecondary:{
    backgroundColor:"#a6a6a6",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: BTN_MARGIN,
    borderRadius: 100,
    height: buttonWidth,
  },
  btnTextSecondary:{
    color: "#060606",
  },

})