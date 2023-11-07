import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Profile from "./components/Profile";
import Feed from "./components/Feed";
import BottomTab from "./components/BottomTab";

export default function App() {
  return (
    <View style={styles.container}>
      <Profile />

      <Feed />

      <BottomTab />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
