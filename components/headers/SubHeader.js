import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

export default class SubHeader extends Component {

    render() {
        return (
            <View style={styles.container}>    
                <Image source={require('../../images/logo3.png')} style={styles.image} resizeMode='stretch' />
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
    image: {
        position: 'absolute',
        left: 10,
        top: 85,
        width: 80, 
        height: 73
    }
});