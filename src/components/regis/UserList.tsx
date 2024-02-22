import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  users: {
    name: string;
    username: string;
    email: string;
    address: string;
    phone: string;
  }[];
}
//.
const UserList: React.FC<Props> = ({ users }) => {
  return (
    <View style={styles.container}>
      {users.map((user, index) => (
        <View key={index} style={styles.userContainer}>
          <Text style={styles.userLabel}>Name:</Text>
          <Text style={styles.userText}>{user.name}</Text>

          <Text style={styles.userLabel}>Username:</Text>
          <Text style={styles.userText}>{user.username}</Text>

          <Text style={styles.userLabel}>Email:</Text>
          <Text style={styles.userText}>{user.email}</Text>

          <Text style={styles.userLabel}>Address:</Text>
          <Text style={styles.userText}>{user.address}</Text>

          <Text style={styles.userLabel}>Phone:</Text>
          <Text style={styles.userText}>{user.phone}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  userContainer: {
    marginTop: 16,
  },
  userLabel: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  userText: {
    marginTop: 5,
    fontSize: 16,
  },
});

export default UserList;

