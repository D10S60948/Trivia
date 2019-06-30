import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

export default class SubHeader extends Component {

    getImage() {
        if(this.props.text.length != 1) {
            return <Image source={require('../../images/logo3.png')} style={styles.image1} resizeMode='stretch' />
        } else {
            return <Image source={require('../../images/logo1.png')} style={styles.image2} resizeMode='stretch' />
        }
    }

    render() {
        return (
            <View style={styles.container}>    
                { this.getImage() }
                <View style={styles.container}>
                    {
                        this.props.text.length == 1 ?
                            <Text style={{...styles.text, fontSize: 60}}>{this.props.text[0]}</Text>
                        : 
                            <View style={styles.container}>    
                                <Text style={{...styles.text, fontSize: 50, marginBottom: -30}}>{this.props.text[0]}</Text>
                                <Text style={{...styles.text, fontSize: 60}}>{this.props.text[1]}</Text>
                            </View>
                    }
                </View>
            </View>      
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    text: { 
      fontFamily: 'Modak',
      textShadowOffset: {width: 2,height:1},
      color:'#1F1F3F'
    },
    image1: {
        position: 'absolute',
        left: 5,
        top: 135,
        width: 80, 
        height: 73
    },
    image2: {
        position: 'absolute',
        right: 1,
        top: 58,
        width: 76, 
        height: 100,
        zIndex: 10
    }
});