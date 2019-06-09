import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class LanguagesQuestion extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{flexWrap: 'wrap', paddingHorizontal: 20}}>
                    <Text style={{ fontFamily: 'Mplus' }}>The spoken languages in { this.props.name } are: </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    { this.props.languages.map((lang, index) => 
                    <Text key={index} style={{ fontFamily: 'Mplus-Bold'}}>
                    {
                        index > 0 ?  
                            ', ' + this.props.languages[index].name  :  
                            this.props.languages[index].name
                    }
                    </Text>
                    )}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column', 
  }
});
