import React, { Component } from 'react'
import { StyleSheet, Text, ImageBackground, View } from 'react-native'
import { connect } from 'react-redux'
import { resetAnwersAndQuestion } from '../../redux/actions'

class Question extends Component {

    constructor(props) {
        super(props)
        this.state = {
            country: this.props.correctAnswer
        }
        this.setQuestion = this.setQuestion.bind(this)
    }

    setQuestion() {
        let correctAnswerCountry = this.props.correctAnswer
        let identifierType = this.props.question.identifier

        switch(identifierType) {
            case 'flag':
                return (
                    <View style={styles.container}>
                        <Text style={{ fontFamily: 'Mplus' }}>To which country the following flag belongs to</Text>
                        <Text style={{ fontSize: 70 }}> { correctAnswerCountry.emoji } </Text>
                    </View>
                )
            case 'currency':
                return (
                    <View style={{...styles.container, flexWrap: 'wrap'}}>
                        <Text style={{ fontFamily: 'Mplus' }}>The currency in { correctAnswerCountry.name } is { correctAnswerCountry.currency }</Text>
                    </View>
                )
            case 'language':
                if(correctAnswerCountry.languages.length == 0) this.props.resetAnwersAndQuestion()
                return (
                    <View style={styles.container}>
                        <View style={{flexWrap: 'wrap'}}>
                            <Text style={{ fontFamily: 'Mplus' }}>The spoken languages in { correctAnswerCountry.name } are: </Text>
                        </View>
                        <View>
                            <Text style={{ fontFamily: 'Mplus-Bold' }}>{ correctAnswerCountry.languages[0].name }</Text>
                        </View>
                    </View>
                )
        }
    }
    
    render() {
        return (
            <ImageBackground 
            source={require('../../images/backgrounds/questionBG.png')} 
            style={styles.container} 
            imageStyle={{opacity: 0.5}}
            resizeMode='stretch'
            >
                { this.props.ready && this.setQuestion() }
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    flexDirection: 'column', 
    flexWrap: 'wrap'
  }
});

function mapStateToProps(state) {
    return {
        ready: state.play.ready,
        question: state.play.question,
        correctAnswer: state.play.correctAnswer,
    };
}

export default connect(mapStateToProps, { resetAnwersAndQuestion })(Question)