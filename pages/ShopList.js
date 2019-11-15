import React from 'react';
import {ImageBackground,
        Image,
        TouchableOpacity,
        StyleSheet
    } from 'react-native';

class ShopList extends React.Component {
  moveToBuy() {
      console.log('moveToBuy');
      this.props.navigation.push('Buy');
  }

  render() {
    return (
        <ImageBackground
            source={require('../assets/shopList.png')}
            style={{width: '100%', height: '100%'}}>
            <TouchableOpacity onPress={this.moveToBuy.bind(this)} style={styles.button}>
                <Image source={require('../assets/buyBtn.png')} style={styles.buyBtn} />
            </TouchableOpacity>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        backgroundColor: '#DDDD',
        // padding: 10,
        top: 215, left: 265,
    },
    buyBtn: {width: 87, height: 30}
    // buyBtn: {top: 215, left: 265, width: 87, height: 30, zIndex: 1}
})

export default ShopList;