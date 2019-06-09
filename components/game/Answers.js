import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Answer from './Answer';
import { connect } from 'react-redux'

class Answers extends Component {

    getAnswerType(answer, key) {
        switch(this.props.questionType.identifier) {
            case 'flag':
                return <Answer key={key} content={answer.name} />
            case 'capital':
                return <Answer key={key} content={answer.capital} />
            case 'population':
                return <Answer key={key} content={answer.population} />
            case 'region':
                return <Answer key={key} content={answer.region} />
        }
    }

    getAnswers() {
        if(this.props.questionType.type == 'selection') {
            return (
                <View style={styles.container}>
                    {this.props.selectedAnswers.map((answer, key) => this.getAnswerType(answer, key))}
                </View>
            )
        }
        else {
            return (
                <View style={styles.container}>
                    <Answer content={'True'} />
                    <Answer content={'False'} />
                </View>
            )
        }
    }

    render() {
        return (
            <View style={styles.background} >
                { this.props.isReady && this.getAnswers() }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    height: '80%',
    width:'98%',
    justifyContent: 'space-around',
  }
});

function mapStateToProps(state) {
    return {
        selectedAnswers: state.play.selectedAnswers,
        isReady: state.play.ready,
        questionType: state.play.question
    };
}

export default connect(mapStateToProps, null)(Answers)
