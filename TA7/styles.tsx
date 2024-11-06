import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      padding: 20,
    },
    label: {
      fontSize: 18,
      marginBottom: 10,
      fontWeight: 'bold',
      color: '#333',
    },
    input: {
      width: '80%',
      height: 50,
      borderColor: '#4CAF50',
      borderWidth: 2,
      borderRadius: 10,
      paddingHorizontal: 10,
      marginBottom: 20,
      backgroundColor: '#fff',
      fontSize: 16,
    },
    botonBuscar: {
      backgroundColor: '#4CAF50',
      paddingVertical: 15,
      paddingHorizontal: 25,
      borderRadius: 10,
      alignItems: 'center',
      marginBottom: 20,
    },
    botonTexto: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    error: {
      color: 'red',
      fontSize: 16,
      marginBottom: 20,
    },
    resultadoContainer: {
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#fff',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    titulo: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#333',
    },
    poster: {
      width: 200,
      height: 300,
      marginBottom: 10,
    },
    sinopsis: {
      fontSize: 16,
      color: '#333',
      textAlign: 'center',
    },
  });
  