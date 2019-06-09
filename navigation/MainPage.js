import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { LinearGradient } from 'expo'
import Header from '../components/headers/Header'
import NavButton from '../components/NavButton'


export default class MainPage extends Component {
    render() {
        return (
            <LinearGradient
            colors={['#43B2B0', '#438BB0', '#4378B0', '#5674B5', '#466BB5', '#3b5998', '#162A5E']}
            start={[0.2,0]} end={[0.8,1]}
            style={styles.container}
            >
                <View style={styles.container}>
                        <Header/>
                        <View style={styles.buttonsSection} >
                            <NavButton title='Start' page='GamePage'/>
                            <NavButton title='Highest scores' page='HighestScoresPage'/>
                            <NavButton title='Settings' page='GamePage'/>
                        </View>
                </View>
             </LinearGradient>

        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonsSection: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 30
  }
});
