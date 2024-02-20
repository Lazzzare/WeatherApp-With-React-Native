import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RowText = ({
  messageOne,
  messageTwo,
  containerStyles,
  messageOneStyles,
  messageTwoStyles,
}) => {
  return (
    <View>
      <View style={containerStyles}>
        <Text style={messageOneStyles}>{messageOne}</Text>
        <Text style={messageTwoStyles}>{messageTwo}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RowText;
