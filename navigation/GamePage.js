import React, { Component } from 'react'
import { View, Text, ActivityIndicator, Image, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo'
import { connect } from 'react-redux'
import Question from '../components/game/Question'
import Answers from '../components/game/Answers'
import Popup from '../components/game/Popup'
import GameOverPopup from '../components/game/GameOverPopup'

class GamePage extends Component {

    leftLivesView() {
        return (
            <View style={styles.globusesContainer}>
                <Image source={require('../images/globus2.png')} style={{...styles.globus, opacity: this.props.livesLeft <= 2 ? 0.1: 1}} resizeMode='center'/>
                <Image source={require('../images/globus2.png')} style={{...styles.globus, opacity: this.props.livesLeft <= 1 ? 0.1: 1}} resizeMode='center'/>    
                <Image source={require('../images/globus2.png')} style={{...styles.globus, opacity: this.props.livesLeft == 0 ? 0.1: 1}} resizeMode='center'/>    
            </View>
        )
    }

    render() {
        return (
            <LinearGradient
            colors={['#43B2B0', '#438BB0', '#4378B0', '#5674B5', '#466BB5', '#3b5998', '#162A5E']}
            start={[0.2,0]} end={[0.8,1]}
            style={{flex: 1}}
            >
                <View style={{flex: 1}}>
                    { this.props.livesLeft == 0 ? <GameOverPopup/> : <Popup/> }
                    <View style={styles.statusBar}>
                        <View style={{ flexDirection: 'row'}}>
                            <Text style={{fontSize: 20, paddingLeft: 10, fontFamily: 'Caveat'}}>score:  </Text>
                            <Text style={{fontSize: 17, fontFamily: 'Delius'}}>{this.props.score}</Text>
                        </View>
                        { this.leftLivesView() }
                    </View>
                    {
                        this.props.isReady ? 
                            <View style={{ flex: 15 }} >
                                <Question/>
                                <Answers/>
                            </View>
                        :
                            <View style={{ flex: 15, justifyContent: 'center', alignItems: 'center' }} >
                                <ActivityIndicator size="large" color="#0000ff" />
                            </View>
                    }
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: 'rgba(248,248,248,0.25)', 
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    globusesContainer: {
        height: '100%', 
        width: '30%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    globus: {
        height: '90%', 
        width:'30%',
    }
})

function mapStateToProps(state) {
    return {
        isReady: state.play.ready,
        score: state.score.currentScore,
        livesLeft: state.lives,
    };
  }

export default connect(mapStateToProps, null)(GamePage)