import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { StatusBar } from "@/components/StatusBar";
import { Header } from "@/components/Header";
import { FeaturedBanner } from "@/components/FeaturedBanner";
import { ProductSection } from "@/components/ProductSection";

export const HomeScreen = () => {
  const ceraVeProducts = [
    { image: require("@/assets/images/cerave.png"), title: "The Ordinary Cleanser" },
    { image: require("@/assets/images/joseonsunscreen.webp"), title: "The Ordinary Glucoside F..." },
    { image: require("@/assets/images/cerave.png"), title: "The Ordinary Glucoside F..." },
    { image: require("@/assets/images/cerave.png"), title: "The Ordinary Cleanser" },
    { image: require("@/assets/images/cerave.png"), title: "The Ordinary Cleanser" },
    { image: require("@/assets/images/cerave.png"), title: "The Ordinary Cleanser" },
  ];

  const curelProducts = [
    { image: require("@/assets/images/cerave.png"), title: "The Ordinary Glucoside F..." },
    { image: require("@/assets/images/cerave.png"), title: "The Ordinary Glucoside F..." },
    { image: require("@/assets/images/cerave.png"), title: "The Ordinary Glucoside F..." },
    { image: require("@/assets/images/cerave.png"), title: "The Ordinary Cleanser" },
    { image: require("@/assets/images/cerave.png"), title: "The Ordinary Cleanser" },
    { image: require("@/assets/images/cerave.png"), title: "The Ordinary Cleanser" },
  ];

  const ordinaryProducts = [
    { image: require("@/assets/images/cerave.png"), title: "The Ordinary Glucoside F..." },
    { image: require("@/assets/images/cerave.png"), title: "The Ordinary Glucoside F..." },
    { image: require("@/assets/images/cerave.png"), title: "The Ordinary Glucoside F..." },
    { image: require("@/assets/images/cerave.png"), title: "The Ordinary Cleanser" },
    { image: require("@/assets/images/cerave.png"), title: "The Ordinary Cleanser" },
    { image: require("@/assets/images/cerave.png"), title: "The Ordinary Cleanser" },
  ];

  return (
    <View style={styles.container}>
      <StatusBar />
      <ScrollView style={styles.scrollView}>
        <Header />
        <FeaturedBanner />
        <View style={styles.content}>
          <Text style={styles.heading}>Just Dropped!</Text>
          <ProductSection title="CeraVe" products={ceraVeProducts} />
          <ProductSection title="Curel" products={curelProducts} />
          <ProductSection title="The Ordinary" products={ordinaryProducts} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8E9DCC",
    fontFamily: "Poppins",
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 15,
    marginTop: 20,
    paddingBottom: 98,
  },
  heading: {
    fontSize: 40,
    color: "#6B7698",
    fontWeight: "600",
    letterSpacing: -3,
  },
});

export default HomeScreen;
