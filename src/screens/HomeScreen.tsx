import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import { useAuth } from '../context/AuthContext';

export const HomeScreen: React.FC = () => {
  const { userName, setUserName } = useAuth();
  const [editName, setEditName] = useState(userName || '');

  const handleAtualizar = () => {
    setEditName(userName || '');
    Alert.alert('Atualizado', 'Nome recarregado!');
  };

  const handleSalvar = () => {
    if (editName.trim()) {
      setUserName(editName.trim());
      Alert.alert('Salvo', `Nome: ${editName}`);
    } else {
      Alert.alert('Erro', 'Digite um nome');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bem-vindo, {userName}!</Text>
      
      <View style={styles.editSection}>
        <Text style={styles.label}>Alterar nome:</Text>
        <TextInput
          style={styles.input}
          value={editName}
          onChangeText={setEditName}
          placeholder="Digite seu nome"
        />
        
        <View style={styles.buttonRow}>
          <TouchableOpacity style={[styles.button, styles.atualizarButton]} onPress={handleAtualizar}>
            <Text style={styles.buttonText}>🔄 Atualizar</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.button, styles.salvarButton]} onPress={handleSalvar}>
            <Text style={styles.buttonText}>💾 Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  editSection: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 15,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  button: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  atualizarButton: {
    backgroundColor: '#ffc107',
  },
  salvarButton: {
    backgroundColor: '#28a745',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
