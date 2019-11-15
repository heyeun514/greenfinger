import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet } from 'react-native';

class Recommend extends React.Component {

  moveToShopList() {
    console.log('move To ShopList')
    this.props.navigation.push('ShopList');
  }
  
  render() {
    return (
        <ImageBackground
            source={require('../assets/buy.png')}
            style={{width: '100%', height: '100%'}}>
            <TouchableOpacity onPress={this.moveToShopList.bind(this)} style={styles.button}>
                <Text>.</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
  }
}

export default Recommend;

var styles = StyleSheet.create({
    button: {
        position: 'absolute',
        top: 301,
        left: 165,
        width: 30,
        height: 30,
        // backgroundColor: '#ffffff'
    }
})