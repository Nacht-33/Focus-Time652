import React from 'react'
import {View,StyleSheet} from 'react-native'
import {RoundedButton} from '../components/RoundedButton'

export const Timming = ({changeTime})=>{
  return (
    <>
    <View style={styles.timmingButtonWrapper}>
    < RoundedButton  size={48} title='5' onPress={()=>changeTime(5)}/>
    </View>

    <View style={styles.timmingButtonWrapper}>
    < RoundedButton  size={48} title='10' onPress={()=>changeTime(10)}/>
    </View>

    <View style={styles.timmingButtonWrapper}>
    < RoundedButton  size={48} title='20' onPress={()=>changeTime(20)}/>
    </View>
    
    
    </>
  )
}

const styles = StyleSheet.create({
   timmingButtonWrapper:{
     flex: 1,
     flexDirection:'row',
     justifyContent:'center'
   }
});