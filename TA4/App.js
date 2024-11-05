import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles'; 

export default function App() {
  const [imagenActual, setImagenActual] = useState(0);

  // Lista de imágenes (puedes reemplazar las URLs con las tuyas)
  const imagenes = [
    require('./assets/1.png'),
    require('./assets/2.png'),
    require('./assets/3.png'),
  ];

  // Función para cambiar la imagen
  const cambiarImagen = () => {
    setImagenActual((prevImagen) => (prevImagen + 1) % imagenes.length);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Imagen Actual:</Text>
      <Image source={imagenes[imagenActual]} style={styles.imagen} />
      <TouchableOpacity style={styles.botonCambiar} onPress={cambiarImagen}>
        <Text style={styles.botonTexto}>Cambiar Imagen</Text>
      </TouchableOpacity>
    </View>
  );
}
