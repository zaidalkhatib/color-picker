import React from "react";
import {View, Text, Button, StyleSheet} from "react-native";

const ColorCounter = ({color, IncrementColor, DecremntColor}) => {
  return (
    <View>
      <Text style={Styles.headerStyle}>{color}</Text>
      <Button onPress={IncrementColor} title={`Increase ${color}`} />
      <Button onPress={DecremntColor} title={`Decrease ${color}`} />
    </View>
  );
};

const Styles = StyleSheet.create({
  headerStyle: {textAlign: "center", fontSize: 20, margin: 15},
});

export default ColorCounter;
