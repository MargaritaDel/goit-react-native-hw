import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View, ImageBackground } from 'react-native';
import LoginScreen from './Screens/LoginScreen'
import imagebg from './images/imagebg.png';
import RegistrationScreen from './Screens/RegistrationScreen'


export default function App() {
  return (
    <ImageBackground
    resizeMode="cover"
    source={imagebg}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <LoginScreen  />
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: 'center',
    justifyContent: "flex-end",
    position: "relative",
    marginTop: 263,
    borderRadius: 25,


   
  },
  backgroundImage: {
    justifyContent: 'center',
    flex: 1,
    position: 'absolute',
    width:"100%",
    height:"100%",
    position: "absolute",
    resizeMode: "cover",

  },
});


