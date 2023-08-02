import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Color } from '../utils/color';
import { TextInput, Button } from 'react-native-paper';
import {spacing} from '../utils/sizes'
export const Focus = ({addSubject}) => {

 const [sub,setSub] = useState('')
 
  return (
  <View style={style.container}>
    <View style={style.inputContainer}>
      <TextInput style={style.input} onChangeText={setSub}
      label="What do you want to focus on ?"  mode='flat'/>
     <View style={style.button}> 
     <Button mode="contained" onPress={()=> addSubject(sub)}><Text style={{color:'black',padding:'auto'}}>+</Text></Button> 
     </View>
    </View>
  </View>
);
}

const style = StyleSheet.create({
  container: {
 
  },
  button:{ 
   textDecorationColor:'black',
   justifyContent:'center',
  },
  input:{
    flex: 1,
    marginRight:spacing.sm,
    fontSize:12
    
  },
  inputContainer: {
    padding:spacing.sm,
    justifyContent:'top',
    flexDirection: 'row',
  

  },
});
