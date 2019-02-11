import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import firebase, { database } from 'firebase';
import MapViewDirections from 'react-native-maps-directions';

//Config til firebase databasen
var config = {
    //Hidden from public view
    apiKey: "",
    authDomain: "roomfinder-46c74.firebaseapp.com",
    databaseURL: "https://roomfinder-46c74.firebaseio.com",
    projectId: "roomfinder-46c74",
    storageBucket: "roomfinder-46c74.appspot.com",
};
firebase.initializeApp(config);

//Succes call-back funktionen der anvendes som callback ved getCurrentPos på linje 13
function succes(pos) {
   userLoc = pos.coords;
    
}

//Får brugerens nuværende position
navigator.geolocation.getCurrentPosition(succes);

//Kald til databasen for at hente Ks48. 
//Fremtidigt ville man her lave rumId dynamisk afhængigt af brugerens input
function databaseCall() {
    return firebase.database().ref('/Ks48').once('value').then(function(snapshot) {
        room = (snapshot.val());
    });
}

//Kalder databasen
databaseCall();

export default class FinderScreen extends React.Component {
    //Navigationstitel i toppen af skærmen
    static navigationOptions = {
        title: "Finder"
    };

    render() {
        return ( 
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
            <MapView
                style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,}}
                initialRegion={{
                    latitude: room.latitude,
                    longitude: room.longitude,
                    latitudeDelta: 0.011,
                    longitudeDelta: 0.011,
                }}
                //Viser brugeren på kortet ved hjælp af Google Maps 
                showsUserLocation={true}>
            
                <Marker title="Ks48" description="EVENTS TODAY: DØK Intro @13:00" coordinate={{latitude: room.latitude, longitude: room.longitude}}></Marker>
                <MapViewDirections
                origin={{latitude: userLoc.latitude, longitude: userLoc.longitude}} destination={{latitude: room.latitude, longitude: room.longitude}} 
                mode={"walking"} apikey={"AIzaSyDibji46_FeU6VCqZlZC_Xt5nvgDcguZIY"} strokeColor="#85A0E7" strokeWidth={5}>
                </MapViewDirections>
            </MapView>
            </View>

        );
    }
}