import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { SearchBar } from 'react-native-elements';

//Hjemmeskærmen, som man ser når appen åbnes
export default class HomeScreen extends React.Component {
  //Bruges til søgekassen 
state = {
    search: '',
  };
  //Funktionen der bliver brugt, når tekst bliver indskrevet i boksen
  updatePlaceholder = search => {
    this.setState({search});
  };

  //Menupunktet i toppen
  static navigationOptions = {
    title: 'ROOM Finder',
};

render() {
    const {search} = this.state;
    return (
        <View style={styles.container}>
        <Text style={styles.titleText}>ROOM Finder</Text>
        <SearchBar placeholder='Search room...' platform="ios" 
        containerStyle={{marginBottom: 80}} onChangeText={this.updatePlaceholder} 
        value={search}></SearchBar>
        <Button
        title="Search!" onPress={() => this.props.navigation.navigate('Finder')}></Button>
        </View>
    )
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#85A0E7',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleText: {
      fontSize: 80,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 50,
    },
  });