import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { styles } from "./styles.tsx"

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


  return (
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
          <View style={styles.tareaContainer}>
            <Text style={styles.tareaTexto}>{item}</Text>
            <TouchableOpacity
              style={styles.botonEliminar}
              onPress={() => eliminarTarea(index)}
            >
              <Text style={styles.botonTexto}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}