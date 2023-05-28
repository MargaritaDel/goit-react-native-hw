import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function RegistrationScreen() {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFocusedLogin, setisFocusedLogin] = useState(false);
  const [isFocusedEmail, setisFocusedEmail] = useState(false);
  const [isFocusedPassword, setisFocusedPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Реєстрація</Text>
      <TextInput
        placeholder="Логін"
        onChangeText={(newLogin) => setLogin(newLogin)}
        defaultValue={login}
        style={isFocusedLogin ? styles.focusedInput : styles.input}
        onFocus={() => setisFocusedLogin(true)}
      />
      <TextInput
        placeholder="Адреса електронної пошти"
        onChangeText={(newEmail) => setEmail(newEmail)}
        defaultValue={email}
        style={isFocusedEmail ? styles.focusedInput : styles.input}
        onFocus={() => setisFocusedEmail(true)}
      />
      <TextInput
        placeholder="Пароль"
        onChangeText={(newPassword) => setPassword(newPassword)}
        defaultValue={password}
        style={isFocusedPassword ? styles.focusedPassword : styles.password}
        onFocus={() => setisFocusedPassword(true)}
      />
      <TouchableOpacity style={styles.button} onPress={() => console.log('click')}>
        <Text style={styles.buttonText}>Зареєстуватися</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Вже є акаунт? Увійти</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: -110,
    backgroundColor: '#fff',
    
  },
  input: {
    height: 50,
    padding: 16,
    borderWidth: 1,
    marginBottom: 16,
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderRadius: 8,
  },
  focusedInput: {
    borderColor: '#FF6C00',
    height: 50,
    padding: 16,
    borderWidth: 1,
    marginBottom: 16,
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
  },
  title: {
    marginTop: 92,
    marginBottom: 32,
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
    textAlign: 'center',
    color: '#212121',
  },
  password: {
    height: 50,
    padding: 16,
    borderWidth: 1,
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderRadius: 8,
    marginBottom: 43,
  },
  btnText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#FFF', // Change the text color to white
    lineHeight: 19,
  },
  focusedPassword: {
    borderColor: '#FF6C00',
    height: 50,
    padding: 16,
    borderWidth: 1,
    marginBottom: 43,
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
  },
  text: {
    marginTop: 16,
    marginBottom: 114,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#FF6C00',
    width: 344,
    height: 50,
    borderRadius: 100,
    padding: 16,
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 19,
    color: '#fff',
    textAlign: 'center',
  },
});
