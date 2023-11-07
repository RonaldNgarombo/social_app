import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather, FontAwesome, Entypo } from "@expo/vector-icons";
import feed from "../feed";
import FeedCard from "./FeedCard";

export default function Feed() {
  return (
    <View style={styles.container}>
      <View style={styles.iconsRow}>
        <View style={[styles.iconCard, styles.coloredBorder]}>
          <Feather name="video" size={24} color="#f87171" />
        </View>

        <View style={styles.iconCard}>
          <FontAwesome name="photo" size={24} color="#d1d5db" />
        </View>

        <View style={styles.iconCard}>
          <Entypo name="heart-outlined" size={24} color="#d1d5db" />
        </View>
      </View>

      <FlatList
        data={feed}
        renderItem={({ item }) => <FeedCard item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 30 },

  iconsRow: { flexDirection: "row" },

  iconCard: { flex: 1, alignItems: "center", paddingBottom: 15 },

  coloredBorder: { borderBottomWidth: 2, borderBottomColor: "#f87171" },
});
