import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Coustom = ({name,age,height}) => {
    return (
       <View>
       <Text style={styles.text}>Name is { name}</Text>
       <Text style={styles.text}>Age is { age}</Text>
       <Text style={styles.text}>Height  { height}</Text>
       </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'purple',
    fontSize: 30
  }
});

export default Coustom;
