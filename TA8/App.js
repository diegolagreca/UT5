import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { styles } from './styles';

const { width, height } = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Este título es chiquito en celu, y grandote en tablet :D</Text>
      <Text style={styles.description}>Este texto es grandote en el celu, y chiquito en tablet :D</Text>
    </View>
  );
}
