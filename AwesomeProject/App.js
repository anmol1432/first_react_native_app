import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Coustom from "./components/Coustom";
import List from "./components/List";
import { StyleSheet, Text, View,Button,Alert  } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Coustom name={"Anmol Singh"} age={22} height={"5.5"} />
      <Button
        title="Press me"
        color="cyan"
        onPress={() => Alert.alert('Button is presssed 🚀')}
      /> */}
      <List />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
