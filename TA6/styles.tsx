import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    appBackground: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    container: {
        marginTop: 100,
        alignItems: 'center',
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
    botonAgregar: {
        backgroundColor: '#4CAF50',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 10,
        alignItems: 'center',
    },
    botonTexto: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    listContainer: {
        paddingTop: 20,
        paddingBottom: 20,
    },
    tareaContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    tareaTexto: {
        fontSize: 16,
        color: '#000000',
        flex: 1,
    },
    eliminarButton: {
        backgroundColor: '#FF5722',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        borderRadius: 10,
    },
    eliminarTexto: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});