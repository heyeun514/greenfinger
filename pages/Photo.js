import React from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const DATA = [
    {
        source: 'photo_01.png'
    }
]

function Item({}) {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

class Test extends React.Component {

  finishTest() {
    const { navigation } = this.props;
    navigation.goBack();
    navigation.state.params.setTestResult(true);
    
  }

  render() {
    return (
      <SafeAreaView style={StyleSheet.container}>
        <FlatList
            data={DATA}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    },
    title: {
        fontSize: 30, 
        fontFamily: 'samsung-bold',
    }

});


export default Test;