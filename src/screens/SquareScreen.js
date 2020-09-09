import React, {useReducer} from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 10;

const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "red":
      return state.red + action.payLoad > 255 || state.red + action.payLoad < 0
        ? state
        : {...state, red: state.red + action.payLoad};

    case "green":
      return state.green + action.payLoad > 255 ||
        state.green + action.payLoad < 0
        ? state
        : {...state, green: state.green + action.payLoad};

    case "blue":
      return state.blue + action.payLoad > 255 ||
        state.blue + action.payLoad < 0
        ? state
        : {...state, blue: state.blue + action.payLoad};

    default:
      return state;
  }
};
const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
  const {red, blue, green} = state;

  return (
    <View>
      <Text style={styles.headerStyle}>Color Picker</Text>
      <ColorCounter
        IncrementColor={() => {
          dispatch({type: "red", payLoad: COLOR_INCREMENT});
        }}
        DecremntColor={() =>
          dispatch({type: "red", payLoad: -1 * COLOR_INCREMENT})
        }
        color="Red"
      />
      <ColorCounter
        IncrementColor={() => {
          dispatch({type: "green", payLoad: COLOR_INCREMENT});
        }}
        DecremntColor={() =>
          dispatch({type: "green", payLoad: -1 * COLOR_INCREMENT})
        }
        color="Green"
      />
      <ColorCounter
        IncrementColor={() => {
          dispatch({type: "blue", payLoad: COLOR_INCREMENT});
        }}
        DecremntColor={() =>
          dispatch({type: "blue", payLoad: -1 * COLOR_INCREMENT})
        }
        color="Blue"
      />
      <Text
        style={{
          paddingTop: 40,
          paddingBottom: 20,
          textAlign: "center",
        }}
      >{`rgb(${red},${green},${blue})`}</Text>
      <View
        style={{
          backgroundColor: `rgb(${red},${green},${blue})`,
          width: 100,
          height: 100,
          marginLeft: 150,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {fontSize: 30, textAlign: "center", margin: 15},
});

export default SquareScreen;
