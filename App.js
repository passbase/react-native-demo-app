import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, Text, StyleSheet} from 'react-native';
import {NativeEventEmitter} from 'react-native';
import {PassbaseSDK, PassbaseButton} from '@passbase/react-native-passbase';

const App = () => {
  const initPassbase = () => {
    PassbaseSDK.initialize(
      '098336c09ed3a14acf40f78d9afa29162df2d177daaa65f7c6ed7fda1d6eef9e',
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    initPassbase();
    this.subscription = new NativeEventEmitter(PassbaseSDK);
    this.subscription.addListener('onError', (event) => {
      console.log('onError');
    });
    this.subscription.addListener('onFinish', (event) => {
      console.log('onFinish');
      console.log(
        'Identity Access Key completed with: ',
        event.identityAccessKey,
      );
    });
    this.subscription.addListener('onStart', (event) => {
      console.log('onStart');
    });
    return () => {
      if (this.subscription) {
        this.subscription.removeListener('onError', (event) => {});
        this.subscription.removeListener('onFinish', (event) => {});
        this.subscription.removeListener('onStart', (event) => {});
      }
    };
  }, []);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.titleText}>Welcome to the Passbase Demo App</Text>
        <PassbaseButton style={{backgroundColor: 'white'}} />
      </SafeAreaView>
    </>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
  },
});