import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Font from 'expo-font';


class HomeScreen extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        stage: 2,
        finishTest: false,
      }
  }

  componentDidMount() {
    Font.loadAsync({
      'samsung-bold': require('../assets/fonts/SamsungSharpSans-Bold.ttf')
    })
  }

  setTestResult(finished) {
    const { stage } = this.state;
    console.log(finished, stage)
    if (finished == true && stage <= 0 ) {
      this.setState({
        stage: 1,
        finishTest: true,
      });
    }
  }

  moveToTest() {
    console.log('move to test');
    this.props.navigation.navigate('Test', { setTestResult: this.setTestResult.bind(this) });
  }

  moveToRecommend() {
    console.log('move to recommend');
    this.props.navigation.navigate('Recommend');
  }

  moveToMyPlants() {
    console.log('move to myPlants')
    this.props.navigation.navigate('MyPlants');
  }

  renderButtons(stage) {
    console.log(stage);
    var ret = null;
    switch(stage) {
      case 0: // test
        ret = (
        <Text onPress={this.moveToTest.bind(this)}>
          Go to Test
        </Text>
      )
      break;
      case 1: // recommend
        ret = (
        <Text onPress={this.moveToRecommend.bind(this)}>
          Recommend
        </Text>)
      break;
      case 2:
        ret = (<View>
                <Text onPress={this.moveToRecommend.bind(this)}>Recommend</Text>
                <Text onPress={this.moveToMyPlants.bind(this)}>My Plants</Text>
              </View>)
      break;
    }
    return ret;
  }

  render() {
    const { stage } = this.state;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>HomePage</Text>
        {this.renderButtons(stage)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default HomeScreen;