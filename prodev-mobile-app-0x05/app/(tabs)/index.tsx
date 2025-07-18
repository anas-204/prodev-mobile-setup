import { 
  StyleSheet, 
  View, 
  Text, 
  Image, 
  ImageBackground, 
  Dimensions, 
  TouchableOpacity 
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={require("@/assets/images/background-image.png")}
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.container}>
            <View style={styles.companyLogo}>
              <Image 
                source={require("@/assets/images/Logo.png")} 
                style={styles.logoImage}
              />
            </View>

            <View style={styles.textGroup}>
              <Text style={styles.textLarge}>Find your favorite place here</Text>
              <Text style={styles.textSmall}>The best prices for over 2</Text>
              <Text style={styles.textSmall}>million properties worldwide</Text>
            </View>

            <View style={styles.bottomContainer}>
              <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Join here</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.transparentButton}>
                  <Text style={styles.textSmall}>Sign In</Text>
                </TouchableOpacity>
              </View>
              
              <View style={styles.navigationPrompt}>
                <Text style={styles.navigationText}>Continue to home</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  background: {
    flex: 1,
    width: '100%',
    height: windowHeight,
  },
  companyLogo: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 40,
  },
  logoImage: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
  textGroup: {
    alignItems: 'center',
    marginBottom: 40,
  },
  textLarge: {
    color: 'white',
    fontWeight: '800',
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 45,
  },
  textSmall: {
    color: 'white',
    fontSize: 18,
    fontWeight: '200',
    textAlign: 'center',
    lineHeight: 24,
  },
  bottomContainer: {
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 20,
  },
  button: {
    borderRadius: 40,
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  transparentButton: {
    borderRadius: 40,
    paddingVertical: 15,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
    flex: 1,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },
  navigationPrompt: {
    alignItems: 'center',
  },
  navigationText: {
    color: 'white',
    fontSize: 16,
  },
});