import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { styles } from './styles';

const { width, height } = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplicación Responsive</Text>
      <Text style={styles.description}>Este texto cambia de tamaño dependiendo del dispositivo.</Text>
    </View>
  );
}
