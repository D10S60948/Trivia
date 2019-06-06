import React, { Component } from 'react'
import { View } from 'react-native'
import { LinearGradient } from 'expo'
import { connect } from 'react-redux'
import SubHeader from '../components/headers/SubHeader'
import HighScoreRecord from '../components/highScores/HighScoreRecord'

class HighestScoresPage extends Component {

    getHighScoreRecord(value, index) {
        return <HighScoreRecord ranking={ index + 1 } name={ value.name } score={ value.score } key={index} />
    }

    render() {
        return (
            <LinearGradient
            colors={['#43B2B0', '#438BB0', '#4378B0', '#5674B5', '#466BB5', '#3b5998', '#162A5E']}
            start={[0.2,0]} end={[0.8,1]}
            style={{flex: 1}}
            >
                <View style={{flex: 1}}>
                    <SubHeader text={['HIGHEST', 'SCORES']}/>
                    <View style={{flex: 2}}>
                        {this.props.scores.map(this.getHighScoreRecord)}
                    </View>
                </View>
            </LinearGradient>
        );
    }
}

function mapStateToProps(state) {
    return {
        scores: state.score.highestScoreList
    };
  }

export default connect(mapStateToProps, null)(HighestScoresPage)