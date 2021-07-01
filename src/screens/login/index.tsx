import React from "react";

import { StyleSheet, Button, Text, View, TextInput, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

const Login = () => {
  const [loginCredentials, setLoginCredentials] = React.useState({
    email: "",
    password: ""
  });
  const [hidePass, setHidePass] = React.useState(true);

  function onChangeText() {

  }

  return <View style={styles.mainContainer}>
    <Text style={styles.loginText}>Log In</Text>
    <View style={styles.loginContainer}>
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
      <Text style={{
        textAlign: "right"
      }}>Forgot Password</Text>
      <Button title="LOG IN" color="#f194ff" onPress={() => null}/>
    </View>
    <View style={{
      marginTop: 100,
      flexDirection: "row",
      justifyContent: "center"
    }}>
    <Text style={{
      fontSize: 20
    }}>Don't have a account?</Text><Text style={{
      fontSize: 20,
      fontWeight: "bold"
    }}> Sign up here</Text>
    </View>
  </View>;

};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FDD7E4',
    width: Dimensions.get('window').width,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "column",
    justifyContent: "center"
  },
  loginText: {
    fontSize: 30,
    fontWeight: "bold",
    // marginTop: 150
  },
  loginContainer: {
    marginLeft: 0,
    marginTop: 50
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default Login;
