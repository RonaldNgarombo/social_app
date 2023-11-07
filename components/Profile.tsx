import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.myProfile}>My Profile</Text>

      <View style={styles.profileRow}>
        <View style={styles.avatarContainer}>
          <Image
            source={require("../assets/avatar.jpeg")}
            style={styles.avatar}
          />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.userName}>Mandy Portman</Text>

          <Text style={styles.userHandle}>@mandyportman</Text>

          <View style={styles.statsContainer}>
            <View>
              <Text style={styles.statsCount}>120</Text>
              <Text style={styles.statsDesc}>Friends</Text>
            </View>

            <View>
              <Text style={styles.statsCount}>12k</Text>
              <Text style={styles.statsDesc}>Followers</Text>
            </View>

            <View>
              <Text style={styles.statsCount}>280</Text>
              <Text style={styles.statsDesc}>Following</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 20 },

  myProfile: {
    marginTop: 40,
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },

  avatar: { width: 90, height: 90, borderRadius: 90 },

  profileRow: { flexDirection: "row", marginTop: 30 },

  avatarContainer: { flex: 1 },

  infoContainer: { flex: 2 },

  userName: { fontSize: 16, fontWeight: "700" },

  userHandle: { color: "grey" },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  //   statsCard: { flex: 1 },

  statsCount: { fontWeight: "700" },

  statsDesc: { color: "grey" },
});
