import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Feather } from "@expo/vector-icons";
import CurrentWeather from "./src/components/CurrentWeather";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <CurrentWeather />
    </View>
  );
}
