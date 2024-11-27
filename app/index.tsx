import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import Title from "./src/components/Title/index";
import React from "react";

export default function Index() {
  return (
    <View style={styles.container}>
        <Title/>
    </View>
    );
}

const styles = StyleSheet.create({
  container:{
    
  }
})
