import React from 'react'
import {spacing,fontSizes} from '../utils/sizes'
import {View,Text,StyleSheet,FlatList} from 'react-native'
import {Color} from '../utils/color'
export const FocusHistory = ({history}) =>{
  if(!history||!history.length) return null
   const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;
  return(
  <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
     flex:1,
     padding:spacing.lg,

  },
  item:{
    color:Color.white,
  },
  title:{
    color:Color.white,
    fontWeight:'Bold',
    
  }

})