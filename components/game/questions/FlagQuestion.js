import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class FlagQuestion extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontFamily: 'Mplus' }}>To which country the following flag belongs to</Text>
                <Text style={{ fontSize: 70 }}>{ this.props.flag }</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column', 
  }
});
