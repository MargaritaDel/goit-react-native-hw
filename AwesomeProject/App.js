import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View, ImageBackground } from 'react-native';
import LoginScreen from './Screens/LoginScreen'
import imagebg from './assets/images/imagebg.png';


export default function App() {
  return (
    <ImageBackground
    resizeMode="cover"
    source={imagebg}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <LoginScreen />
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    width: 375,
    height: 812,
    flex: 1,
    justifyContent: 'center',
  },
});


