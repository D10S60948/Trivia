import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Answer from './Answer';
import { connect } from 'react-redux'

class Answers extends Component {

    getAnswers(type) {
        if(type == 'selection') {
            return (
                <View style={styles.container}>
                    <Answer content={this.props.selectedAnswers[0].name} />
                    <Answer content={this.props.selectedAnswers[1].name} />
                    <Answer content={this.props.selectedAnswers[2].name} />
                    <Answer content={this.props.selectedAnswers[3].name} />
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
        console.log()
        return (
            <View style={styles.background} >
                { this.props.isReady && this.getAnswers(this.props.questionType) }
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
        questionType: state.play.question.type
    };
}

export default connect(mapStateToProps, null)(Answers)
