import React, { Component } from 'react'
import { View, TouchableHighlight, Text, Modal, StyleSheet, AsyncStorage, TextInput } from 'react-native'
import {  setNotReady, resetAnwersAndQuestion, setVisibility, resetLives, resetScore } from '../../redux/actions'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

class GameOverPopup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            highScore: false,
            userName: '',
            text: ''
        }
        this.addScoreToHighestScores = this.addScoreToHighestScores.bind(this)
        this.resetDataAndSaveScore = this.resetDataAndSaveScore.bind(this)
        this.toMainPage = this.toMainPage.bind(this)
        this.restartGame = this.restartGame.bind(this)
        this.getUserName = this.getUserName.bind(this)
    }

    async addScoreToHighestScores(highestScores, currenctScore) {
        let listLength = highestScores.length
        let wasAdded = false

        for(let i=0; i<listLength; i++) {
            if(currenctScore.score >= highestScores[i].score) {
                highestScores.splice(i, 0, currenctScore)
                if(listLength == 10) {
                    highestScores.pop()
                }
                wasAdded = true
                break
            }
        }
        if(!wasAdded) {
            highestScores.push(currenctScore)
        }
        await AsyncStorage.setItem('highScores', JSON.stringify(highestScores))
    }

    async resetDataAndSaveScore() {
        if(this.state.highScore) {
            await this.addScoreToHighestScores(this.props.highestScores, {score: this.props.score, name: this.state.text})
        }
        this.props.resetScore()
        this.props.setVisibility(false)
        this.props.resetLives()
    }

    async toMainPage() {
        await this.resetDataAndSaveScore()
        this.props.navigation.navigate('MainPage')
    }

    async restartGame() {
        await this.resetDataAndSaveScore()
        this.props.navigation.navigate('GamePage')
    }

    componentWillMount() {
        let highestScoresList = this.props.highestScores
        if(highestScoresList.length < 10 || this.props.score >= highestScoresList[highestScoresList.length-1].score) {
            this.setState({ highScore: true })
        }
    }

    getUserName() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}> 
                <Text style={styles.text}>Your Score was high!</Text>
                <Text style={styles.text}>Please insert name or nickname</Text>
                <TextInput
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    style={{...styles.text, color: 'black', padding: 7, backgroundColor: 'lightgray', width: '80%'}}
                />
            </View>
        )
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
                        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}> 
                            <Text style={styles.text}>GAME OVER</Text>
                        </View>
                        { this.state.highScore ? this.getUserName() : null }
                        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, flexDirection: 'row' }}> 
                            <TouchableHighlight onPress={() => this.toMainPage()} style={styles.restartButton}>
                                <Text style={{ fontFamily: 'Signika'}}>Back to menu</Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => this.restartGame()} style={styles.restartButton}>
                                <Text style={{ fontFamily: 'Signika'}}>Try again</Text>
                            </TouchableHighlight>
                        </View>
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
        height: '92%',
        width: '90%',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 20
    },
    restartButton: {
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 25
    },
    text: {
        fontFamily: 'Signika', 
        color: 'white', 
        marginVertical: 15,
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

export default connect(mapStateToProps, { setNotReady, resetAnwersAndQuestion, setVisibility, resetLives, resetScore })(withNavigation(GameOverPopup))
