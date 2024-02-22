import React, { useState } from 'react';
import { View } from 'react-native';

import Register from './src/components/regis/Register';
import UserList from './src/components/regis/UserList';

const App: React.FC = () => {
  const [users, setUsers] = useState([]);

  const handleRegister = (name: string, username: string, email: string, address: string, phoneNumber: string) => {
    setUsers((prevUsers) => [...prevUsers, { name, username, email, address, phone: phoneNumber }]);
  };

  return (
    <View>
      <Register onRegister={handleRegister} />
      <Register users={users} />
    </View>
  );
};

export default App;