import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { withNavigation } from 'react-navigation'

class NavButton extends Component {

    render() {
        return (
          <Button 
              type = "clear" 
              title = { this.props.title }
              containerStyle = { styles.buttonContainer } 
              titleStyle = { styles.buttonText }
              onPress = { () => this.props.navigation.navigate(this.props.page) }
          />
        );
    }
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: '17%',
    width: '82%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(245,245,245,0.4)',
    borderRadius: 10
  },
  buttonText: {
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Signika',
    color: '#1F1F3F', 
    fontSize: 20,
  }
});

export default withNavigation(NavButton)
