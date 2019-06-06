import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class HighScoreRecord extends Component {

    render() {
        return (
            <View style={styles.container} >
                <View style={{ ...styles.field, flex: 1, alignItems: 'center' }}>
                    <Text style={styles.text}>{this.props.ranking}</Text>
                </View>
                <View style={{ ...styles.field, flex: 8 }}>
                    <Text style={{...styles.text, paddingLeft: 10}}>{this.props.name}</Text> 
                </View>
                <View style={{ ...styles.field, flex: 2, alignItems: 'center' }}>
                    <Text style={styles.text}>{this.props.score}</Text>     
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    height: '8%',
    margin: '1%', 
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  field: {
    backgroundColor: 'rgba(0,51,102,0.25)',
    justifyContent: 'center',
    marginHorizontal: 10,
    borderRadius: 7
  },
  text: { 
    fontFamily: 'Delius', 
    fontSize: 16,
  }
});
