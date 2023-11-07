import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";

export default function BottomTab() {
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <View style={styles.tabCard}>
          <AntDesign name="home" size={24} color="#d1d5db" />
        </View>

        <View style={styles.tabCard}>
          <FontAwesome5 name="comment" size={24} color="#d1d5db" />
        </View>

        <View style={[styles.tabCard, styles.profContainer]}>
          <Ionicons name="person-outline" size={24} color="#f87171" />

          <Text style={styles.profText}>Profile</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
    width: "100%",
    paddingVertical: 10,
  },

  tabContainer: { flexDirection: "row", justifyContent: "space-around" },

  tabCard: {
    // flex: 1,
    // alignItems: "center",
  },

  profContainer: {
    backgroundColor: "#f5f5f5",
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    alignItems: "center",
  },

  profText: { color: "#f87171", marginLeft: 5 },
});
