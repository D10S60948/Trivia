import React, { Component } from 'react'
import { StyleSheet, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import { resetAnwersAndQuestion } from '../../redux/actions'
import FlagQuestion from './questions/FlagQuestion'
import CapitalQuestion from './questions/CapitalQuestion'
import LanguagesQuestion from './questions/LanguagesQuestion'
import BordersQuestion from './questions/BordersQuestion'
import PopulationQuestion from './questions/PopulationQuestion'
import RegionQuestion from './questions/RegionQuestion'

export class Question extends Component {

    setQuestion() {
        let identifierType = this.props.question.identifier
        let correctAnswerCountry = this.props.correctAnswer

        switch(identifierType) {
            case 'flag':
                return <FlagQuestion flag={ correctAnswerCountry.emoji } />
            case 'capital':
                return <CapitalQuestion countryName={correctAnswerCountry.name} />
            case 'language':
                if(correctAnswerCountry.languages.length == 0) this.props.resetAnwersAndQuestion()
                return <LanguagesQuestion languages={correctAnswerCountry.languages} name={correctAnswerCountry.name} />
            case 'borders':
                return <BordersQuestion borders={correctAnswerCountry.borders} name={correctAnswerCountry.name} countries={this.props.allCountries} />
            case 'population':
                return <PopulationQuestion name={correctAnswerCountry.name} />
            case 'region':
                return <RegionQuestion name={correctAnswerCountry.name} region={correctAnswerCountry.region} />
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
        allCountries: state.play.countries
    };
}

export default connect(mapStateToProps, { resetAnwersAndQuestion })(Question)