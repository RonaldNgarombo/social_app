import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Ionicons,
  Feather,
  Entypo,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";
import { FeedType } from "../feed";

export default function FeedCard({ item }: { item: FeedType }) {
  return (
    <View style={styles.container}>
      <View>
        <Image source={item?.image} style={styles.feedImage} />

        <Ionicons
          name="play-circle"
          size={30}
          color="white"
          style={styles.playIcon}
        />
      </View>

      <View style={styles.statsRow}>
        <View style={styles.iconsContainer}>
          <View style={styles.iconCard}>
            <Entypo name="heart-outlined" size={23} color="grey" />

            <Text style={styles.statCount}>{item?.likes}</Text>
          </View>

          <View style={styles.iconCard}>
            <FontAwesome5 name="comment" size={19} color="grey" />

            <Text style={styles.statCount}>{item?.comments}</Text>
          </View>

          <View style={styles.iconCard}>
            <AntDesign name="eyeo" size={23} color="grey" />

            <Text style={styles.statCount}>{item?.views}</Text>
          </View>
        </View>

        <View>
          <Feather name="more-horizontal" size={24} color="grey" />
        </View>
      </View>

      <Text style={styles.feedContent}>{item?.content}</Text>

      <Text style={styles.viewComments}>View comments</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20, marginTop: 20 },

  feedImage: { width: "100%", height: 300, borderRadius: 15 },

  playIcon: { position: "absolute", bottom: 10, right: 10 },

  statsRow: {
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-between",
  },

  iconsContainer: { flexDirection: "row" },

  iconCard: { flexDirection: "row", marginRight: 10 },

  statCount: { marginLeft: 7, color: "grey" },

  feedContent: { color: "grey", marginTop: 10 },

  viewComments: { color: "grey", marginTop: 10 },
});
