import React from 'react';
import { View, Text, TextInput, Button ,StyleSheet, TouchableOpacity,Alert } from 'react-native';

class LoginScreen extends React.Component {
  state = {
    username: '',
    password: '',
    usernameBorderColor: 'gray',
    passwordBorderColor: 'gray',
  };
  users = [
    {username:'admin',password:'123456'},
    {username:'ozbey',password:'123'}
  ];
  validateUserInput(username,password){
    if (!username && !password) {
      alert('Hata', 'Kullanci adı ve sifre bos olamaz!');
      this.setFormBorderColor(!username ? 'red' : 'gray', !password ? 'red' : 'gray');
      return false;
    }
    return true;
  }
  setFormBorderColor(usernameColor, passwordColor) {
    this.setState({
      usernameBorderColor: usernameColor,
      passwordBorderColor: passwordColor,
    });
  }
  handleLogin(username,password) {
    if (this.validateUserInput(username, password)) {
      const user = this.users.find((u) => u.username === username && u.password === password);
      if (!user) {
        alert('Hata', 'Kullancı adı veya şifre hatalıdır!');
        this.setFormBorderColor(!username ? 'red' : 'gray', !password ? 'red' : 'gray');
      } 
      else {
        this.setFormBorderColor('gray', 'gray');
        this.props.navigation.navigate('Home');
        console.log('Giriş işlemi yapılıyor... Username:', username, 'Password:', password);
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login Screen</Text>
        <TextInput
          style={[styles.input, { borderColor: this.state.usernameBorderColor }]}
          placeholder="Username"
          onChangeText={(text) => this.setState({ username: text })}
        />
        <TextInput
          style={[styles.input, { borderColor: this.state.passwordBorderColor }]}
          secureTextEntry = {true}
          placeholder="Password"
          onChangeText={(text) => this.setState({ password: text })}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.handleLogin(this.state.username,this.state.password)}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
    width: '100%',
    borderRadius: 20,
    fontSize: 16,
  },
  button: {
    width: '100%',
    backgroundColor: 'blue',
    borderRadius: 20
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    padding: 8,
  },
});
export default LoginScreen;