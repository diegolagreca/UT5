import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import * as Location from 'expo-location';
import { styles } from './styles';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('permiso para acceder a la ubicación fue denegado');
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
    })();
  }, []);

  let texto = 'cargando ubicación...';
  if (errorMsg) {
    texto = errorMsg;
  } else if (location) {
    texto = `latitud: ${location.coords.latitude}, longitud: ${location.coords.longitude}`;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplicación de ubicación con expo location</Text>
      <Text style={styles.location}>{texto}</Text>
    </View>
  );
}