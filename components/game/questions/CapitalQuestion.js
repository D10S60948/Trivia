import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class CapitalQuestion extends Component {

    getCountryName() {
        if(this.props.countryName == '') {
            return 'No capital'
        }
        return this.props.countryName
    }

    render() {
        return (
            <View style={{...styles.container, flexDirection: 'row', paddingHorizontal: 20}}>
                <Text style={{ fontFamily: 'Mplus' }}>What is the capital of </Text>
                <Text style={{ fontFamily: 'Mplus-Bold' }}>{this.getCountryName()}</Text>
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
