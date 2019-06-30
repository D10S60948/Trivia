import React, { Component } from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'
import { LinearGradient } from 'expo'
import { connect } from 'react-redux'
import SubHeader from '../components/headers/SubHeader'
import QuestionsSubjectPicker from '../components/settings/QuestionsSubjectPicker'
import { toggleSounds } from '../redux/actions'

class SettingsPage extends Component {

    render() {
        return (
            <LinearGradient
            colors={['#43B2B0', '#438BB0', '#4378B0', '#5674B5', '#466BB5', '#3b5998', '#162A5E']}
            start={[0.2,0]} end={[0.8,1]}
            style={{flex: 1}}
            >
                <View style={{flex: 1}}>
                    <SubHeader text={['SETTINGS']}/>
                    <View style={styles.container}>
                        <View style={styles.mainContentContainer}>
                            <View style={styles.setting}>
                                <Text style={styles.text}>Set questions by subject</Text>
                                <QuestionsSubjectPicker />
                            </View>
                            <View style={styles.setting}>
                                <Text style={styles.text}>Sound</Text>
                                <Switch 
                                    onValueChange = {this.props.toggleSounds} 
                                    value = {this.props.soundsOn}/>
                            </View>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        alignItems: 'center'
    },
    mainContentContainer: {
        width: '90%',
        height: '90%',
        paddingVertical: '5%',
        paddingHorizontal: '7%',
        borderRadius: 10,
        backgroundColor: 'rgba(0,51,102,0.25)',
    },
    setting: {
        flex: 1, 
        backgroundColor: 'rgba(0,0,0,0.07)}', 
        margin: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    text: {
        fontSize: 22,
        fontFamily: 'Caveat'
    }
})

function mapStateToProps(state) {
    return {
        soundsOn: state.notifications.sounds.isOn
    };
}

export default connect(mapStateToProps, { toggleSounds })(SettingsPage)