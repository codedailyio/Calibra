import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import Card from "./card";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.headerButton}>
            <Text style={styles.headerButtonText}>Menu</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <ScrollView horizontal style={styles.scroll} contentContainerStyle={styles.innerScroll}>
            <View style={styles.spacing}>
              <Card />
            </View>
            <View style={styles.spacing}>
              <Card />
            </View>
            <View style={styles.spacing}>
              <Card />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
      <View style={styles.footer}>
        <View style={styles.footerBalance}>
          <Text style={styles.myBalance}>My Balance</Text>
          <View style={styles.balanceContainer}>
            <Text style={styles.libraValue}>~163.20</Text>
            <Text>
              <Text style={styles.currency}>USD </Text>
              <Text style={styles.currencyValue}>166.00</Text>
            </Text>
          </View>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.footerButton}>
            <MaterialCommunityIcons name="cash-refund" size={16} color="#FFF" />
            <Text style={styles.footerButtonText}>Request</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.footerButton}>
            <FontAwesome name="send" size={16} color="#FFF" />
            <Text style={styles.footerButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6fc"
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    flexDirection: "row"
  },
  headerButton: {
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 9,
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 8
  },
  scroll: {
    flex: 1
  },
  innerScroll: {
    paddingLeft: 40,
    paddingVertical: 20,
    alignItems: "center"
  },
  spacing: {
    marginRight: 20
  },
  headerButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600"
  },
  content: {
    flex: 1
  },
  footer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    paddingBottom: 80,

    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 9,
    borderRadius: 24
  },
  footerBalance: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20
  },
  buttonRow: {
    justifyContent: "space-between",
    flexDirection: "row"
  },
  footerButton: {
    width: "45%",
    flexDirection: "row",
    backgroundColor: "#6248f2",
    borderRadius: 15,
    paddingVertical: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 9,
    alignItems: "center",
    justifyContent: "center"
  },
  footerButtonText: {
    marginLeft: 8,
    color: "#FFF"
  },
  balanceContainer: { alignItems: "flex-end" },
  myBalance: {
    fontSize: 20,
    color: "#000",
    fontWeight: "800"
  },
  libraValue: {
    fontSize: 30,
    color: "#000",
    fontWeight: "800"
  },
  currency: {
    color: "#c1c2c6"
  },
  currencyValue: {
    color: "#000",
    fontWeight: "bold"
  }
});
