import React, { Component } from 'react'
import { View, TouchableHighlight, Text, Modal, StyleSheet, AsyncStorage } from 'react-native'
import {  setNotReady, resetAnwersAndQuestion, setVisibility, resetLives, resetScore } from '../../redux/actions'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

export class Popup extends Component {

    handleClosePopup() {
        this.props.setNotReady()
        this.props.resetAnwersAndQuestion()
        this.props.setVisibility(false)
    }

    componentWillMount() {
        if(this.props.livesLeft == 0) {
            this.setState({ isGameOver: true })
        }
    }

    render() {
        return (
            <Modal
            animationType="fade"
            onRequestClose={() => { console.log('Modal has been closed.') }}
            transparent={true}
            visible={this.props.visibility}
            >
                <View style={styles.container}>
                    <View style={styles.box}>
                        <Text style={styles.text}>{this.props.message}</Text>
                        <TouchableHighlight onPress={() => this.handleClosePopup()} style={styles.closeModal}>
                            <Text style={{ fontFamily: 'Signika'}}>close</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        backgroundColor: 'black',
        height: '32%',
        width: '80%',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 20
    },
    closeModal: {
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 7,
        paddingHorizontal: 10
    },
    text: {
        fontFamily: 'Signika', 
        color: 'white', 
        marginVertical: 25,
        textAlign: 'center'
    }
})

function mapStateToProps(state) {
    return {
        visibility: state.notifications.visibility,
        message: state.notifications.message,
        livesLeft: state.lives,
        score: state.score.currentScore,
        highestScores: state.score.highestScoreList
    };
}

export default connect(mapStateToProps, { setNotReady, resetAnwersAndQuestion, setVisibility, resetLives, resetScore })(withNavigation(Popup))
