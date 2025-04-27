import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { layout, spacing, typography } from "@/constants/Theme";
import { StatusBar } from "@/components/StatusBar";

export default function CleansersScreen() {
  const products = [
    {
      image: require("@/assets/images/cerave.png"),
      name: "The Ordinary Glucoside Foaming Cleanser, Gentle Foaming Face Wa...",
      tags: "Foam   5 Fl Oz   Cleanser",
    },
    {
      image: require("@/assets/images/cerave.png"),
      name: "Curel Japanese Skin Care Foaming Daily Face Wash for Sensitive Skin, Hyd...",
      tags: "Foam   5 Fl Oz   Cleanser",
    },
    {
      image: require("@/assets/images/cerave.png"),
      name: "CeraVe Foaming Facial Cleanser, Daily Face Wash for Oily Skin with Hyal...",
      tags: "Foam   5 Fl Oz   Cleanser",
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar />
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.header}>
          <Text style={styles.logo}>skin2care</Text>
          <Feather name="filter" size={26} color="white" />
        </View>
        <Text style={styles.title}>Cleansers</Text>
        <Text style={styles.description}>
          Cleansing is the essential first step in removing excess dirt, oil, and other impurities from your skin.
          {"\n"}Let’s see what products work for you!
        </Text>

        {products.map((product, idx) => (
          <View key={idx} style={styles.card}>
            <Image source={product.image} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{product.name}</Text>
              <Text style={styles.tags}>{product.tags}</Text>
            </View>
            <Feather name="chevron-right" size={24} color="#6B7698" />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  scroll: {
    padding: spacing.medium,
    paddingBottom: 100,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.medium,
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
  description: {
    color: "white",
    fontSize: 16,
    marginTop: 8,
    marginBottom: 24,
    lineHeight: 22,
  },
  card: {
    backgroundColor: "#E6E7FA",
    borderRadius: 22,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.medium,
  },
  image: {
    width: 60,
    height: 90,
    resizeMode: "contain",
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#6B7698",
    marginBottom: 4,
  },
  tags: {
    fontSize: 12,
    color: "#6B7698",
  },
});