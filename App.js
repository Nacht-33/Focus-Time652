import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { Constants } from 'expo-constants';
import { Focus } from './src/features/Focus';
import { Color } from './src/utils/color';
import { Timer } from './src/features/Timer';
import {FocusHistory} from './src/features/FocusHistory'
export default function App() {
  const [currSubject, setCurrSubject] = useState();
  const [history,setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      {!currSubject ? (<>
        <Focus addSubject={setCurrSubject} />
        <FocusHistory history={history} />
      </>
      ) : (
        <Timer
          focusSubject={currSubject}
          onTimerEnd={(subject) => {setHistory([...history,subject])}}
          clearSubject={()=>setCurrSubject(null)}></Timer>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 20 : 0,
    backgroundColor: Color.background,
    
  
    // alignItems: 'center',
  },
});
