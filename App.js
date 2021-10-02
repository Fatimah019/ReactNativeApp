import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0)
  const [inputVal, setInputVal] = useState("")

  const handleIncrement= ()=>{
    setCount(count + Number(inputVal))
  }

  const handleDecrement=()=>{
    setCount(count - Number(inputVal))
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>FreeStyling</Text>
      <View style={styles.inputAndResult}>
        <TextInput style={styles.textInput} name="num" placeholder="0" keyboardType="numeric" value={inputVal.toString()} onChangeText={(e) => setInputVal(e)}/>
        <Text style={styles.result}>{count}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={()=> handleIncrement()}/>
        <Button title="Decrement" onPress={()=> handleDecrement()}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading:{
    fontWeight: "bold",
    fontSize: 30
  },
  inputAndResult:{
    marginTop: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textInput:{
    borderColor: "#ccac",
    borderWidth: 3,
    padding: 15,
    width: 250
  },
  result:{
    padding: 10,
  },
  buttonContainer:{
    marginTop: 30,
    width:"80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  }
});
