import * as React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
  Text,
} from "react-native";

export interface ButtonProps {
  text: string;
  onClick?: (event: GestureResponderEvent) => void;
}

export function Button({ text, onClick }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onClick}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    textAlign: "center",
    borderRadius: 200,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "white",
  },
  text: {
    color: "#004A6D",
    fontSize: 16,
    fontWeight: '600'
  },
});
