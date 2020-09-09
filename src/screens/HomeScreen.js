import React from "react";
import {Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styleText.textStyle}>Color Picker</Text>
      <Button
        title="Go to Color Picker"
        onPress={() => {
          navigation.navigate("Square");
        }}
      />
    </View>
  );
};

const styleText = StyleSheet.create({
  textStyle: {
    color: "blue",
    fontSize: 25,
    textAlign: "center",
    backgroundColor: "black",
    height: 65,
    padding: 12,
    marginBottom: 20,
  },
});

export default HomeScreen;
