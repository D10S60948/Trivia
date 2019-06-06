import React, { Component } from 'react'
import { StyleSheet, View, Text, AsyncStorage, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import { addCountry, resetAnwersAndQuestion, setHighestScores } from '../redux/actions'
import { withNavigation } from 'react-navigation';
import { getQuery, URL } from '../assistance/queries'
import { Font } from 'expo'
import { LinearGradient } from 'expo'

const allCountryCodesQuery = '{ countries { code name emoji currency languages { name } } }'

class WelcomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ready: false
        }
    }

    async setHighestScores() {
        let highestScoresList = await AsyncStorage.getItem('highScores')
        if(highestScoresList !== null) {
            highestScoresList = JSON.parse(highestScoresList)
        }
        else {
            highestScoresList = []
            AsyncStorage.setItem('highScores', JSON.stringify(highestScoresList))
        }
        this.props.setHighestScores(highestScoresList)
    }

    async componentWillMount() {
        await Font.loadAsync({ 'Modak': require('../assets/fonts/Modak-Regular.ttf') });
        this.setState({ ready: true })
    }
    
    async componentDidMount() {
        await this.setHighestScores()
        await Font.loadAsync({ 'Signika': require('../assets/fonts/Signika-Regular.ttf') });
        await Font.loadAsync({ 'Caveat': require('../assets/fonts/CaveatBrush-Regular.ttf') });
        await Font.loadAsync({ 'Delius': require('../assets/fonts/DeliusSwashCaps-Regular.ttf') });
        await Font.loadAsync({ 'Mplus-Bold': require('../assets/fonts/MPLUS1p-Bold.ttf') });
        await Font.loadAsync({ 'Mplus': require('../assets/fonts/MPLUS1p-Regular.ttf') });
        await fetch(URL, getQuery(allCountryCodesQuery))
            .then(res => res.json())
                .then(res => res.data.countries.map(country => this.props.addCountry(country)))
                    .catch(err => console.log(`GamePage.componentDidMount  error: ${err}`))
        this.props.resetAnwersAndQuestion()
        this.props.navigation.navigate('MainPage')
    }

    render() {
        return (
            <LinearGradient
            colors={['#43B2B0', '#438BB0', '#4378B0', '#5674B5', '#466BB5', '#3b5998', '#162A5E']}
            start={[0.2,0]} end={[0.8,1]}
            style={{flex: 1}}
            >
                <ImageBackground 
                source={require('../images/logo4.png')} 
                style={styles.container} 
                imageStyle={{opacity: 0.5}}
                resizeMode='cover'
                >
                    {
                        this.state.ready ?
                            <View style={styles.container}>
                                <View style={styles.container}>
                                    <Text style={{fontSize: 50, fontFamily: 'Modak'}}>Welcome to</Text>
                                </View>
                                <View style={{...styles.container, flex: 2}}>
                                    <Text style={{fontSize: 65, fontFamily: 'Modak'}}>COUNTRIES</Text> 
                                    <Text style={{fontSize: 75, fontFamily: 'Modak'}}>TRIVIA</Text>
                                </View>
                                <View style={styles.container}>
                                    <Text style={{fontSize: 12}}>This application was made by</Text>
                                    <Text style={{fontSize: 14}}>Elad Itzhak && Avishai Nudelman</Text>
                                </View>
                            </View>
                        : null
                    }       
                </ImageBackground>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default connect(null, { addCountry, resetAnwersAndQuestion, setHighestScores })(withNavigation(WelcomePage))