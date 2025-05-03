// app/Cleansers/index.tsx

import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import { StatusBar } from "@/components/StatusBar";
import { Header }    from "@/components/Header";
import { Colors }    from "@/constants/Colors";
import { layout, spacing, typography } from "@/constants/Theme";

export default function CleansersScreen() {
  const router = useRouter();

  const products = [
    {
      image: require("@/assets/images/cerave.png"),
      name:  "The Ordinary Glucoside Foaming Cleanser, Gentle Foaming Face Wash",
      tags:  "Foam   5 Fl Oz   Cleanser",
    },
    {
      image: require("@/assets/images/cerave.png"),
      name:  "Curel Japanese Skin Care Foaming Daily Face Wash for Sensitive Skin.",
      tags:  "Foam   5 Fl Oz   Cleanser",
    },
    {
      image: require("@/assets/images/cerave.png"),
      name:  "CeraVe Foaming Facial Cleanser, Daily Face Wash for Oily Skin with Hyaluronic Acid",
      tags:  "Foam   5 Fl Oz   Cleanser",
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar />

      {/* ← shared header: back‐arrow, logo centered, filter icon */}
      <Header />

      <ScrollView contentContainerStyle={styles.scroll}>
        {/* page title + description match Routine screen */}
        <Text style={[typography.heading, styles.title]}>Cleansers</Text>
        <Text style={styles.description}>
          Cleansing is the essential first step in removing excess dirt, oil,
          and other impurities from your skin.{"\n"}Let’s see what products work
          for you!
        </Text>

        {/* product cards */}
        <View style={styles.cardsContainer}>
          {products.map((product, idx) => (
            <TouchableOpacity
              key={idx}
              activeOpacity={0.7}
              onPress={() => router.push("/ProductRecs")}
            >
              <View style={styles.card}>
                <Image source={product.image} style={styles.image} />
                <View style={styles.info}>
                  <Text style={styles.name}>{product.name}</Text>
                  <Text style={styles.tags}>{product.tags}</Text>
                </View>
                <Feather name="chevron-right" size={24} color="#6B7698" />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:      { flex: 1, backgroundColor: Colors.light.background },
  scroll:         { paddingHorizontal: layout.padding, paddingBottom: 100 },
  title:          {fontFamily: "Poppins", fontSize: 58, lineHeight: 60, fontWeight: "600", color: "rgba(246, 246, 245, 1)", marginTop: 20},
  description:    {
    fontSize: 16,
    color: "white",
    marginTop: 8,
    marginBottom: 24,
    lineHeight: 22,
  },
  cardsContainer: { gap: 14 },
  card: {
    backgroundColor: "#E6E7FA",
    borderRadius: 22,
    padding: spacing.medium,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.medium,
  },
  image: { width: 60, height: 90, resizeMode: "contain", marginRight: 12 },
  info:  { flex: 1 },
  name:  { fontSize: 16, fontWeight: "600", color: "#6B7698", marginBottom: 4 },
  tags:  { fontSize: 12, color: "#6B7698" },
});