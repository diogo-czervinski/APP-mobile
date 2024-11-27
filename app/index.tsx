import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import Title from "./src/components/Title/index";
import React from "react";
import Main from "./src/components/main";

export default function Index() {
  return (
    <View style={styles.container}>
        <Title/>
        <Main/>
    </View>
    );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
     justifyContent:'center'
  }
})
