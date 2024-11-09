import React from 'react';
import { View, Text, Platform } from 'react-native';
import { styles } from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplicación Responsive por Sistema Operativo</Text>
      <Text style={styles.description}>
        {Platform.OS === 'ios' ? 'Este texto se muestra en un dispositivo iOS.' : 'Este texto se muestra en un dispositivo Android.'}
      </Text>
    </View>
  );
}