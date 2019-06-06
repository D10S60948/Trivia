import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight, Text, ImageBackground } from 'react-native';
import { connect } from 'react-redux'
import { addPoints, resetScore, reduceLife, editMessage, setVisibility } from '../../redux/actions';
import { correctAnswerAlerts, wrongAnswerAlerts } from '../../assistance/alerts'

class Answer extends Component {

    handleAnswer = () => {
        let toBeComparedWith = this.props.questionType == 'selection' ? this.props.correctAnswer.name : this.props.correctAnswer.trueOrFalse
        let notificationContentIndex = Math.floor(Math.random() * 4)
        
        if(this.props.content == toBeComparedWith)  {
            this.props.editMessage("CORRECT !\n\n" + correctAnswerAlerts[notificationContentIndex])
            this.props.questionType == 'selection' ? this.props.addPoints(10) : this.props.addPoints(5) 
        }
        else {
            if(this.props.livesLeft == 1) {
                this.props.reduceLife()
                this.props.editMessage('GAME OVER')
            }
            else {
                let message = this.props.livesLeft == 2 ? 'Wrong again..\n\nLast chance..' : "Wrong answer..\n\n" + wrongAnswerAlerts[notificationContentIndex]
                this.props.editMessage(message)
                this.props.reduceLife()
            } 
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
        livesLeft: state.lives
    };
}

export default connect(mapStateToProps, { addPoints, resetScore, reduceLife, editMessage, setVisibility })(Answer)
