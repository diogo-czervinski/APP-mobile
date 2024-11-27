import React from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Form() {
  return (
    <View>
      <View>
        <Text>Peso</Text>
        <TextInput placeholder="Ex= 1.75" keyboardType="numeric"/>
        <Text>Altura</Text>
        <TextInput placeholder="Ex= 75.5" keyboardType="numeric" />
      </View>
      <View></View>
    </View>
  );
}

