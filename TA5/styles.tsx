import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: '#FF4000', // Fondo color naranja Charizard
  },
  imagenContainer: {
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#4b909f', // Color celeste verde agua, como el interior de las alas de Charizard
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#FFD580', // Fondo color naranja claro
  },
  imagen: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  descripcion: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#B22222', // Color rojo oscuro para la descripción, inspirado en las llamas de Charizard
  },
});
