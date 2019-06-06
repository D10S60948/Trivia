import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

export default class Header extends Component {

    render() {
        return (
            <View style={styles.container}>    
                <Image source={require('../../images/logo4.png')} style={styles.image} resizeMode='stretch' />
                <View style={styles.container}>
                    <Text style={{...styles.text, fontSize: 50, marginBottom: -30}}>COUNTRIES</Text>
                    <Text style={{...styles.text, fontSize: 70}}>TRIVIA</Text>
                </View>
            </View>      
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    text: { 
      fontFamily: 'Modak',
      textShadowOffset: {width: 3,height:2},
      color:'#1F1F3F'
    },
    image: {
        position: 'absolute',
        left:-10,
        top:110,
        width:120, 
        height:120
    }
});