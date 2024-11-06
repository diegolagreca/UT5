import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { GestureHandlerRootView, RectButton, Swipeable } from 'react-native-gesture-handler';
import { styles } from './styles';

export default function App() {
  const [tarea, setTarea] = useState('');
  const [listaTareas, setListaTareas] = useState([]);
  const swipeableRefs = useRef(new Map()); // mapa de referencias para que se vaya el efecto swipe luego de eliminar una tarea

  // función ocultar teclado cuando se toca afuera
  const ocultarTeclado = () => {
    Keyboard.dismiss();
  };

  // función agregar tarea
  const agregarTarea = () => {
    if (tarea.trim() !== '') {
      setListaTareas([...listaTareas, tarea]);
      setTarea('');
    }
  };

  // función eliminar tarea
  // se aplica la referencia para cerrar el swipe de la tarea eliminada
  const eliminarTarea = (index) => {
    const ref = swipeableRefs.current.get(index);
    if (ref) {
      ref.close(); // cierro swipe
    }
    setListaTareas(listaTareas.filter((_, i) => i !== index));
    swipeableRefs.current.delete(index); // eliminamos la refe
  };

  // se renderiza la acción de la derecha
  const renderRightActions = (index) => (
    <RectButton style={styles.eliminarButton} onPress={() => eliminarTarea(index)}>
      <Text style={styles.eliminarTexto}>Eliminar</Text>
    </RectButton>
  );

  return (
    <TouchableWithoutFeedback onPress={ocultarTeclado}>
      <GestureHandlerRootView style={styles.appBackground}>
        <View style={styles.container}>
          <Text style={styles.label}>Añadir Tarea:</Text>
          <TextInput
            style={styles.input}
            placeholder="Escribe una nueva tarea..."
            placeholderTextColor="#888"
            value={tarea}
            onChangeText={(text) => setTarea(text)}
          />
          <TouchableOpacity style={styles.botonAgregar} onPress={agregarTarea}>
            <Text style={styles.botonTexto}>Añadir</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          contentContainerStyle={styles.listContainer}
          data={listaTareas}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <Swipeable
                ref={(ref) => {
                  if (ref) {
                    swipeableRefs.current.set(index, ref);
                  }
                }}
                renderRightActions={() => renderRightActions(index)}
              >
                <View style={styles.tareaContainer}>
                  <Text style={styles.tareaTexto}>{item}</Text>
                </View>
              </Swipeable>
            );
          }}
        />
      </GestureHandlerRootView>
    </TouchableWithoutFeedback>
  );
}
