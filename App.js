import react from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Table from './components/table';
import {Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [name, setName] = useState('');
  const [age, satAge] = useState('');

   const handelPress = () => {
    setName('Merradou')
    satAge('25')
    
  }

  return (
    <View style={styles.container}>
      <Button onPress={handelPress} title='click here'></Button>

      <Table name={name}>  hello  </Table>
      <Table age={age}>  hello  </Table>
    </View>
  );
}

  // const handelPress = () => {
  //   alert("hello")
  // }
  // return (
  //   <View style={styles.container}>
  //     <Text>hello !</Text>
  //     <Button onPress={handelPress} title='click here'></Button>
  //     <StatusBar style="auto" />
  //   </View>
  // );


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
