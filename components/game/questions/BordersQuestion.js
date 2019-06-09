import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class BordersQuestion extends Component {

    alpha3codeToName(code) {
        let countries = this.props.countries
        for(let i=0; i < countries.length; i++) {
            if(code == countries[i].alpha3Code) {
                return countries[i].name
            }
        }
        return ''
    }

    render() {
        let randomIndex = Math.floor(Math.random()*this.props.borders.length)
        return (
            this.props.borders.length == 0) ?
            (
                <View style={styles.container}>
                    <View style={{flexWrap: 'wrap', flexDirection: 'column', paddingHorizontal: 20}}>
                        <Text style={{ fontFamily: 'Mplus-Bold' }}>{ this.props.name }</Text>
                        <Text style={{ fontFamily: 'Mplus' }}> does not share borders with any country</Text>
                    </View>
                </View>
            )
            : 
            (
                <View style={styles.container}>
                    <View style={{flexWrap: 'wrap', flexDirection: 'row', paddingHorizontal: 20}}>
                        <Text style={{ fontFamily: 'Mplus-Bold' }}>{ this.props.name }</Text>
                        <Text style={{ fontFamily: 'Mplus' }}> and </Text>
                        <Text style={{ fontFamily: 'Mplus-Bold' }}>{this.alpha3codeToName(this.props.borders[randomIndex])}</Text>
                        <Text style={{ fontFamily: 'Mplus' }}> share border</Text>
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
