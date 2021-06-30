import React from "react";

import { StyleSheet, Button, Text, View, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

const Login = () => {
  const [loginCredentials, setLoginCredentials] = React.useState({
    email: "",
    password: ""
  });
  const [hidePass, setHidePass] = React.useState(true);

  function onChangeText() {

  }

  return <View>
    <Text>Login</Text>
    <Text>EMAIL</Text>
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={loginCredentials.email}
      placeholder="email"
    />
    <Text>PASSWORD</Text>
    <TextInput
      style={styles.input}
      onChange={onChangeText}
      value={loginCredentials.password}
      placeholder="password"
      secureTextEntry={hidePass ? true : false}
    />
    <Icon
      name={hidePass ? 'eye-slash' : 'eye'}
      size={15}
      color="grey"
      onPress={() => setHidePass(!hidePass)}
    />
    <Text>Forgot Password</Text>
    <Button title="LOG IN" onPress={() => null} />
    <Text>Don't have a account?</Text><Text>Sign up here</Text>
  </View>;

};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default Login;
