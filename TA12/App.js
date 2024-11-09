import React, { useState } from 'react';
import { View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles';

export default function App() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const { status } = await ImagePicker.getCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Necesitamos permisos para avanzar...');
      return;
    }
    try {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 3],
      });
      if (!result.cancelled) {
        console.log(result);
        setImage(result.assets[0].uri); 
      }
    } catch (error) {
      console.log("Error al acceder a la cámara: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Tomar foto" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
}
