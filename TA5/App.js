import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { styles } from './styles';

export default function App() {
  // Lista de imágenes locales
  const imagenes = [
    { source: require('./assets/1.png'), descripcion: 'Charmander' },
    { source: require('./assets/2.png'), descripcion: 'Charmeleon' },
    { source: require('./assets/3.png'), descripcion: 'Charizard' },
    { source: require('./assets/1.png'), descripcion: 'Charmander' },
    { source: require('./assets/2.png'), descripcion: 'Charmeleon' },
    { source: require('./assets/3.png'), descripcion: 'Charizard' },
    { source: require('./assets/1.png'), descripcion: 'Charmander' },
    { source: require('./assets/2.png'), descripcion: 'Charmeleon' },
    { source: require('./assets/3.png'), descripcion: 'Charizard' },
    { source: require('./assets/1.png'), descripcion: 'Charmander' },
    { source: require('./assets/2.png'), descripcion: 'Charmeleon' },
    { source: require('./assets/3.png'), descripcion: 'Charizard' },
    { source: require('./assets/1.png'), descripcion: 'Charmander' },
    { source: require('./assets/2.png'), descripcion: 'Charmeleon' },
    { source: require('./assets/3.png'), descripcion: 'Charizard' },
    { source: require('./assets/1.png'), descripcion: 'Charmander' },
    { source: require('./assets/2.png'), descripcion: 'Charmeleon' },
    { source: require('./assets/3.png'), descripcion: 'Charizard' },

  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {imagenes.map((imagen, index) => (
        <View key={index} style={styles.imagenContainer}>
          <Image source={imagen.source} style={styles.imagen} />
          <Text style={styles.descripcion}>{imagen.descripcion}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
