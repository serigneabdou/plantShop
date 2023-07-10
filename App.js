import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './appNavigation/appNavigation';



export default function App() {
  return (
    <View style={styles.container}>
      <AppNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
