import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { GestureHandlerRootView, RectButton } from 'react-native-gesture-handler';
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import { styles } from './styles';

export default function App() {
  const [tarea, setTarea] = useState('');
  const [listaTareas, setListaTareas] = useState([]);

  // Función para agregar una tarea
  const agregarTarea = () => {
    if (tarea.trim() !== '') {
      setListaTareas([...listaTareas, tarea]);
      setTarea('');
    }
  };

  // Función para eliminar una tarea
  const eliminarTarea = (index) => {
    setListaTareas(listaTareas.filter((_, i) => i !== index));
  };

  // Componente de renderizado de la acción de eliminar
  const renderRightActions = (index) => (
    <RectButton style={styles.eliminarButton} onPress={() => eliminarTarea(index)}>
      <Text style={styles.eliminarTexto}>Eliminar</Text>
    </RectButton>
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.label}>Añadir Tarea:</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe una nueva tarea..."
          placeholderTextColor="#888"
          value={tarea}
          onChangeText={setTarea}
        />
        <TouchableOpacity style={styles.botonAgregar} onPress={agregarTarea}>
          <Text style={styles.botonTexto}>Añadir</Text>
        </TouchableOpacity>

        <FlatList
          data={listaTareas}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <ReanimatedSwipeable
              renderRightActions={() => renderRightActions(index)}
            >
              <View style={styles.tareaContainer}>
                <Text style={styles.tareaTexto}>{item}</Text>
              </View>
            </ReanimatedSwipeable>
          )}
        />
      </View>
    </GestureHandlerRootView>
  );
}
