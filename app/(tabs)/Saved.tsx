import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Header } from "@/components/Header";
import { StatusBar } from "@/components/StatusBar";
import { ProductList } from "@/components/ProductList";
import { Colors } from "@/constants/Colors";

export const Cart = () => {
  return (
    <View style={styles.container}>
          <StatusBar />
          <ScrollView contentContainerStyle={styles.scroll}>
            <Header />
            <Text style={styles.title}>Saved{"\n"}Products</Text>
            <ProductList/>
          </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  scroll: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  title: {
    color: "rgba(246, 246, 245, 1)",
    fontSize: 58,
    fontFamily: "Poppins",
    fontWeight: "600",
    lineHeight: 60,
    letterSpacing: -3,
    marginTop: -5,
    width: 298,
  },
});

export default Cart;
