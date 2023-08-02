import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Countdown } from '../components/countDown';
import { RoundedButton } from '../components/RoundedButton';
import { Button, ProgressBar } from 'react-native-paper';
import { spacing } from '../utils/sizes';
import { Color } from '../utils/color';
import { Timming } from './Timming';
export const Timer = ({ focusSubject, clearSubject, onTimerEnd}) => {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.05);
  const onEnd = (reset)=>{
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  }
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={(progress) => {
            setProgress(progress);
          }}
          onEnd={onEnd}
        />
        <View style={{ paddingTop: spacing.xl, justifyContent: 'center' }}>
          <Text style={styles.title}>Focusing on:</Text>
          <Text style={styles.tasks}>{focusSubject}</Text>
        </View>
      </View>

      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar progress={progress} color="green" style={{ height: 6 }} />
      </View>
      <View style={styles.timmingWrapper}>
        <Timming changeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <Button
            style={styles.button}
            labelStyle={{ fontSize: 24, color: Color.white }}
            mode="outlined"
            onPress={() => setIsStarted(true)}>
            {' '}
            Start{' '}
          </Button>
        )}
        {isStarted && (
          <Button
            style={styles.button}
            labelStyle={{ fontSize: 24, color: Color.white }}
            mode="outlined"
            title="pause"
            onPress={() => setIsStarted(false)}>
            {' '}
            Pause{' '}
          </Button>
        )}
      </View>
      <View style={styles.clearButtonWrapper}>
        <RoundedButton size={50} title="Clear" onPress={clearSubject} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: Color.white,
    textAlign: 'center',
    fontWeight: 'Bold',
  },
  tasks: {
    color: Color.white,
    textAlign: 'center',
  },
  button: {
    marginTop: 10,
    flex: 0.5,
    width: 80,
    height: 80,
    borderRadius: 1000,
    borderColor: Color.white,
    justifyContent: 'center',
    alignContent: 'center',
  },
  buttonWrapper: {
    marginTop: 20,
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timmingWrapper: {
    flex: 0.1,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  clearButtonWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
