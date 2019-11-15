import React from 'react';
import { View, Text } from 'react-native';

class Test extends React.Component {

  finishTest() {
    const { navigation } = this.props;
    navigation.goBack();
    navigation.state.params.setTestResult(true);
    
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text onPress={this.finishTest.bind(this)}>TestPage</Text>
      </View>
    );
  }
}

export default Test;