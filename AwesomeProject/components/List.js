import { StyleSheet, Text, View ,FlatList,StatusBar } from 'react-native';
import React from 'react';

const list = () => {
    const data = [
        {
            name:'Anmol Singh'
        },{
            name:'Love Singh'
        },{
            name:'Chaudary Singh'
        },{
            name:'vicy Singh'
        },{
            name: 'Arsh Singh '
        }
    ]
  return (
    <View>
          <Text style={styles.heading}>The Student names</Text>
          {
              data.map((item) => <Text style={styles.txt}>{ item.name}</Text>)
          }
    </View>
  );
};


const styles = StyleSheet.create({
    heading: {
        fontSize: 50,
        textAlign:'center'
    },
    txt: {
        backgroundColor: 'pink',
        padding: 20,
        margin:(5 ,10),
        textAlign: 'center',
        borderColor: 'blue',
        borderRadius: 10,
        fontWeight: '100',
        
    }
});

export default list;


