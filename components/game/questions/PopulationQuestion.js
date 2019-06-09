import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class PopulationQuestion extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={{flexWrap: 'wrap', paddingHorizontal: 20}}>
                    <Text style={{ fontFamily: 'Mplus' }}>The population of { this.props.name } is </Text>
                </View>
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
