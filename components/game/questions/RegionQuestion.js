import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class RegionQuestion extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={{flexWrap: 'wrap', flexDirection: 'row', paddingHorizontal: 20}}>
                    <Text style={{ fontFamily: 'Mplus-Bold' }}>{ this.props.name }</Text>
                    <Text style={{ fontFamily: 'Mplus' }}> is in </Text>
                    <Text style={{ fontFamily: 'Mplus-Bold' }}>{ this.props.region }</Text>
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
