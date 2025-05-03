import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { StatusBar } from "@/components/StatusBar";
import { Header } from "@/components/Header";
import { AccountCard } from "@/components/AccountCard";
import { Colors } from "@/constants/Colors";

export const AccountScreen = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const AccountSteps = [
    { 
      label: "Profile", 
      route: "/Profile",
      content: "Jesslyn Ashley Ruswan"
    }, 
    { 
      label: "Email", 
      route: "/Email",
      content: "jejegolfeto@gmail.com"
    }, 
    { 
      label: "Password", 
      route: "/Password",
      content: "**********"
    }, 
    { 
      label: "Notifications", 
      route: "/Notifications",
      content: "30% OFF OLIVE YOUNG!!!"
    }
  ];

  const handleCardPress = (label: string) => {
    setExpandedCard(expandedCard === label ? null : label);
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <ScrollView contentContainerStyle={styles.scroll}>
        <Header />
        <Text style={styles.title}>Hello, Jesslyn</Text>
        <View style={styles.spacer} />
        
        <View style={styles.cardsContainer}>
          {AccountSteps.map((step) => (
            <AccountCard 
              key={step.label} 
              label={step.label}
              content={step.content}
              isExpanded={expandedCard === step.label}
              onPress={() => handleCardPress(step.label)}
            />
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
  spacer: {
    height: 24, // Add space after the greeting
  },
  cardsContainer: {
    gap: 14,
  },
});

export default AccountScreen;