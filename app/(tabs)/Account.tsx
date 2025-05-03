import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { StatusBar } from "@/components/StatusBar";
import { Header } from "@/components/Header";
import { AccountCard } from "@/components/AccountCard";
import { Colors } from "@/constants/Colors";

export const AccountScreen = () => {
  const AccountSteps = [{label: "Profile", route: "/Profile"}, {label: "Email", route: "/Email"}, {label: "Password", route: "/Password"}, {label: "Notifications", route: "/Notifications"}];

  return (
    <View style={styles.container}>
      <StatusBar />
      <ScrollView contentContainerStyle={styles.scroll}>
        <Header />
        <Text style={styles.title}>Hello, Jesslyn{"\n"}</Text>
        
        <View style={styles.cardsContainer}>
          {AccountSteps.map((step) => (
            <AccountCard key={step.label} label={step.label} />
          ))}
        </View>
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
    fontSize: 42,
    fontWeight: "bold",
    color: "white",
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    color: "white",
    marginTop: 10,
    marginBottom: 24,
    lineHeight: 22,
  },
  cardsContainer: {
    gap: 14,
  },
});

export default AccountScreen;