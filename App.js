import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Feather } from "@expo/vector-icons";
import CurrentWeather from "./src/screens/CurrentWeather";
import UpcomingWeather from "./src/screens/UpcomingWeather";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <CurrentWeather />
      {/* <UpcomingWeather /> */}
    </View>
  );
}
