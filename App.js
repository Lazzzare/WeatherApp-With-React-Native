import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import { ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import * as Location from "expo-location";
import { WEATHER_API_KEY } from "@env";

export default function App() {
  const { container } = styles;
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);
  const [weather, setWeather] = useState([]);

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
      );
      const data = await res.json();
      setWeather(data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setError("Could not fetch weather data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setError("permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLat(location.coords.latitude);
      setLon(location.coords.longitude);
      await fetchWeatherData();
    })();
  }, [lat, lon]);

  if (loading) {
    return (
      <View style={container}>
        <ActivityIndicator size={"large"} color={"blue"} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
