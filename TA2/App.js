import React, { useState } from 'react';
import { View, Text, TextInput, Button, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { styles } from "./styles.tsx"

export default function App() {
  const [texto, setTexto] = useState('');

  const ocultarTeclado = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={ocultarTeclado}>

      <View style={styles.container}>
        <Text style={styles.label}>Ingresa tu texto:</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe algo aquí..."
          placeholderTextColor="#888"
          onChangeText={setTexto}
          value={texto}
        />
        <Text style={styles.resultado}>Texto ingresado: {texto}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
