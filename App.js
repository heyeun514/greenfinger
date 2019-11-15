import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './pages/Home';
import Test from './pages/Test';
import Recommend from './pages/Recommend';
import ShopList from './pages/ShopList';
import MyPlants from './pages/MyPlants';
import Calendar from './pages/Calendar';
import Photo from './pages/Photo';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        headerShown: false
      })
    },
    Test: Test,
    Recommend: Recommend,
    ShopList: ShopList,
    MyPlants: MyPlants,
    Calendar: Calendar,
    Photo: Photo
  },
  {
    initialRouteName: 'Home',
    // headerMode: 'none',

  }
);

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
