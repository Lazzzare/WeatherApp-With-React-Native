import React from "react";
import { Feather } from "@expo/vector-icons";
import {
  SafeAreaView,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  View,
} from "react-native";
import IconText from "../components/IconText";

const City = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/CityBackground.png")}
        style={styles.imageLayout}
      >
        <Text style={[styles.cityName, styles.cityText]}>London</Text>
        <Text style={[styles.countryName, styles.cityText]}>UK</Text>
        <View style={[styles.populationWrapper, styles.rowLayout]}>
          <IconText
            iconName={"user"}
            iconColor={"red"}
            bodyText={8000}
            bodyTextStyles={styles.populationText}
          />
        </View>
        <View style={[styles.riseSetWrapper, styles.rowLayout]}>
          <IconText
            iconName={"sunrise"}
            iconColor={"white"}
            bodyText={"10:46:58am"}
            bodyTextStyles={[styles.riseSetText]}
          />
          <IconText
            iconName={"sunset"}
            iconColor={"white"}
            bodyText={"17:28:15pm"}
            bodyTextStyles={styles.riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  imageLayout: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    color: "white",
    fontWeight: "bold",
    justifyContent: "center",
    alignSelf: "center",
  },
  populationWrapper: {
    justifyContent: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
    fontWeight: "bold",
  },
  riseSetWrapper: {
    justifyContent: "space-around",
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  rowLayout: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default City;
