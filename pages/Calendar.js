import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Calendar extends React.Component {

  goBack() {
    this.props.navigation.goBack();
  }

  moveToPhoto() {
      this.props.navigation.push('Photo');
  }

  render() {
    return (
        <ImageBackground
        source={require('../assets/calendar.png')}
        style={{width: '100%', height: '100%'}}>
        <TouchableOpacity
            onPress={this.goBack.bind(this)}
            style={styles.goBack}>
            <Text>{"<"}</Text>
        </TouchableOpacity>
        </ImageBackground>
    );
  }
}


var styles = StyleSheet.create({
    goBack: {
        // flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#ff0000',
        width: '100%',
        height: 40,
    }

});
export default Calendar;