import React, { useState } from 'react';
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import {Image} from 'react-native';
export default function App() {
  const tokyoRegion = {
    latitude: 35.6762,
    longitude: 139.6503,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

//extra code removed for brevity.
//create a Hook to store our region data.
const [region, setRegion] = useState({
  latitude: 51.5079145,
  longitude: -0.0899163,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
});  
  return (
    <View style={styles.container}>
    {/*Render our MapView*/}
      <MapView
        style={styles.map}
        //specify our coordinates.
        initialRegion={tokyoRegion} //your region data goes here.
        onRegionChangeComplete={(region) => setRegion(region)}
        // ref={mapRef}
        
      >
              {/*Make sure the Marker component is a child of MapView. Otherwise it won't render*/}
      <Marker coordinate={tokyoRegion}
        icon={require('./icon.png')}
        tracksViewChanges={false}
      />
      <Marker
    coordinate={{
      latitude: 35.67714827145542,
      longitude: 139.6551462687416,
    }}
    icon={require('./boy3.png')}
    tracksViewChanges={false}
  />
     <Marker
    coordinate={{
      latitude: 35.67714827145542,
      longitude: 139.651462687416,
    }}
    // icon={require('./boy3.png')}
    title='h'
    // tracksViewChanges={false}
  />
    </MapView>
    </View>
  );
}
//create our styling code:
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
