import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, Text, StyleSheet} from 'react-native';
import {NativeEventEmitter} from 'react-native';
import {PassbaseSDK, PassbaseButton} from '@passbase/react-native-passbase';

const App = () => {
  const initPassbase = async () => {
    const res = await PassbaseSDK.initialize(
      '098336c09ed3a14acf40f78d9afa29162df2d177daaa65f7c6ed7fda1d6eef9e',
    );
    if (res && res.success) {
      // Do your stuff here, you have successfully initialized.
      console.log(res);
    } else {
      // check res.message for the error message
      console.log(res.message);
    }
  };
  useEffect(() => {
    initPassbase();
    const subscription = new NativeEventEmitter(PassbaseSDK);
    subscription.addListener('onError', (event) => {
      console.log('onError');
    });
    subscription.addListener('onFinish', (event) => {
      console.log('onFinish');
      console.log(
        'Identity Access Key completed with: ',
        event.identityAccessKey,
      );
    });
    subscription.addListener('onStart', (event) => {
      console.log('onStart');
    });
    return () => {
      if (subscription) {
        subscription.removeListener('onError', (event) => {});
        subscription.removeListener('onFinish', (event) => {});
        subscription.removeListener('onStart', (event) => {});
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
