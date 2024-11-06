import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import axios from 'axios';
import { styles } from './styles';

export default function App() {
  const [titulo, setTitulo] = useState('');
  const [pelicula, setPelicula] = useState(null);
  const [error, setError] = useState('');
  const api_key = '8ee32290';

  // función ocultar teclado cuando se toca afuera
  const ocultarTeclado = () => {
    Keyboard.dismiss();
  };

  const buscarPelicula = async () => {
    if (titulo.trim() === '') {
      setError('Por favor, ingrese un nombre de película.');
      setPelicula(null);
      return;
    }
    try {
      const respuesta = await axios.get(`https://www.omdbapi.com/?t=${titulo}&apikey=${api_key}`);
      if (respuesta.data.Response === 'True') {
        setPelicula(respuesta.data);
        setError('');
      } else {
        setError('Película no encontrada.');
        setPelicula(null);
      }
    } catch (e) {
      setError('Hubo un error al buscar la película.');
      setPelicula(null);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={ocultarTeclado}>
      <View style={styles.container}>
        <Text style={styles.label}>Buscar Película:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese el nombre de la película..."
          placeholderTextColor="#888"
          value={titulo}
          onChangeText={(text) => setTitulo(text)}
        />
        <TouchableOpacity style={styles.botonBuscar} onPress={buscarPelicula}>
          <Text style={styles.botonTexto}>Buscar</Text>
        </TouchableOpacity>

        {error ? <Text style={styles.error}>{error}</Text> : null}

        {pelicula && (
          <View style={styles.resultadoContainer}>
            <Text style={styles.titulo}>{pelicula.Title}</Text>
            <Image source={{ uri: pelicula.Poster }} style={styles.poster} />
            <Text style={styles.sinopsis}>Sinopsis: {pelicula.Plot}</Text>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}
