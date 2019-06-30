import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight, Text, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { addPoints, resetScore, reduceLife, editMessage, setVisibility } from '../../redux/actions';
import { correctAnswerAlerts, wrongAnswerAlerts } from '../../assistance/alerts';
import { makeSound } from '../../assistance/makeSounds';

export class Answer extends Component {

    handleCorrectAnswer(index) {
        if(this.props.soundsOn) makeSound(this.props.sounds.correct)
        this.props.editMessage("CORRECT !\n\n" + correctAnswerAlerts[index])
        this.props.questionType == 'selection' ? this.props.addPoints(10) : this.props.addPoints(5)
    }

    handleWrongAnswer(notificationContentIndex) {
        if(this.props.livesLeft == 1) {
            this.props.editMessage('GAME OVER')
        }
        else {
            if(this.props.soundsOn) makeSound(this.props.sounds.wrong)
            let message = this.props.livesLeft == 2 ? 'Wrong again..\n\nLast chance..' : "Wrong answer..\n\n" + wrongAnswerAlerts[notificationContentIndex]
            this.props.editMessage(message)
        }
        this.props.reduceLife()
    }

    getAnswerByIdentifier() {
        switch(this.props.questionIdentifier) {
            case 'flag':
                return this.props.correctAnswer.name
            case 'capital':
                return this.props.correctAnswer.capital
            case 'population':
                return this.props.correctAnswer.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            case 'region':
                return this.props.correctAnswer.region
        }
    }

    handleAnswer = () => {
        let toBeComparedWith = this.props.questionType == 'selection' ? this.getAnswerByIdentifier() : this.props.correctAnswer.trueOrFalse
        let notificationContentIndex = Math.floor(Math.random() * 4)
        
        if(this.props.content == toBeComparedWith)  {
            this.handleCorrectAnswer(notificationContentIndex) 
        }
        else {
            this.handleWrongAnswer(notificationContentIndex)
        }
        this.props.setVisibility(true)   
    }
    
    render() {
        return (
            <ImageBackground 
                source={require('../../images/backgrounds/questionBG.png')} 
                style={styles.background} 
                imageStyle={{opacity: 0.5}}
                resizeMode='stretch'
                >
                <TouchableHighlight 
                style={this.props.questionType == 'selection' ? styles.container : {...styles.container, alignItems: 'center'}} 
                underlayColor='lightslategrey'
                onPress={this.handleAnswer}
                >
                    <Text style={styles.text}>
                        {this.props.content}
                    </Text>
                </TouchableHighlight>
            </ImageBackground>

        );
    }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    borderRadius: 15,
  },
  text: {
    paddingHorizontal: 40,
    fontFamily: 'Signika',
    fontSize: 17
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 3
  }
});

function mapStateToProps(state) {
    return {
        selectedAnswers: state.play.selectedAnswers,
        correctAnswer: state.play.correctAnswer,
        isReady: state.play.ready,
        questionType: state.play.question.type,
        questionIdentifier: state.play.question.identifier,
        livesLeft: state.lives,
        sounds: state.notifications.sounds,
        soundsOn: state.notifications.sounds.isOn
    };
}

export default connect(mapStateToProps, { addPoints, resetScore, reduceLife, editMessage, setVisibility })(Answer)
