import React from 'react';
import {View, Text, ImageBackground, StyleSheet, TouchableWithoutFeedback} from 'react-native';

class MyPlants extends React.Component {
  moveToCalendar() {
    console.log('move to calendar');
    this.props.navigation.push('Calendar');
  }

  render() {
    return (
    <TouchableWithoutFeedback style={styles.container} onPress={this.moveToCalendar.bind(this)}>
      <ImageBackground
        source={require('../assets/firstDay.png')}
        style={{width: '100%', height: '100%'}}>
        <Text style={styles.text}>First Day</Text>
      </ImageBackground>
    </TouchableWithoutFeedback>
    );
  }
}

var styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        // backgroundColor:
    },
    text: {
        fontSize: 60,
        width: '100%',
        fontFamily: 'samsung-bold'
    }
});

export default MyPlants;