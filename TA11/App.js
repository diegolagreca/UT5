
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { styles } from './styles';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('permiso para acceder al álbum fue denegado');
        setHasPermission(false);
      } else {
        setHasPermission(true);
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.assets ? result.assets[0].uri : result.uri);
      setErrorMsg('');
    }
  };

  if (hasPermission === null) {
    return <View style={styles.container}><Text style={styles.loading}>cargando permisos...</Text></View>;
  }

  if (hasPermission === false) {
    return <View style={styles.container}><Text style={styles.error}>{errorMsg}</Text></View>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>selección de imágenes - expo-image-picker</Text>
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>seleccionar imagen</Text>
      </TouchableOpacity>
      {image && (
        <Image source={{ uri: image }} style={styles.image} onLoad={() => console.log('Imagen cargada correctamente')} />
      )}
    </View>
  );
}
