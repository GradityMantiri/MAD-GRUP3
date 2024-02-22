//.
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

interface Props {
  onRegister: (name: string, username: string, email: string, address: string, phoneNumber: string) => void;
}

const Register: React.FC<Props> = ({ onRegister }) => {
  const [name, setName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const handleRegister = () => {
    onRegister(name, username, email, address, phoneNumber);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>Username:</Text>
      <TextInput style={styles.input} value={username} onChangeText={setUsername} />

      <Text style={styles.label}>Email:</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />

      <Text style={styles.label}>Address:</Text>
      <TextInput style={styles.input} value={address} onChangeText={setAddress} />

      <Text style={styles.label}>Phone Number:</Text>
      <TextInput style={styles.input} value={phoneNumber} onChangeText={setPhoneNumber} />

      <Button title="Register" onPress={handleRegister} color="purple" style={styles.button} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    
  },
  label: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 5,
    paddingHorizontal: 10,
  },
  button:{
    marginTop:10,
  }
});

export default Register;