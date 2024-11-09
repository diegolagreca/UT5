import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Platform.OS === 'ios' ? '#f0f0f0' : '#e0e0e0', // fondo diferente si es ios o android, para que se note la diferencia
    padding: 20,
  },
  title: {
    fontSize: width > 400 ? 28 : 22, // si el ancho de la pantalla es mayor a 400, le damos una fuente más grande
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  description: {
    fontSize: width > 400 ? 18 : 14, // ajustar tamaño de fuente dependiendo del ancho del dispositivo
    color: Platform.OS === 'ios' ? '#666' : '#444', // cambiamos el color del texto según sea ios o android
    textAlign: 'center',
    marginBottom: 20,
  },
  location: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
});
