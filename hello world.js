import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const handelPress = () => {
    alert("hello")
  }
  return (
    <View style={styles.container}>
      <Text>hello !</Text>
      <Button onPress={handelPress} title='click here'></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
