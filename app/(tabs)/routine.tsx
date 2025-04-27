import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { StatusBar } from "@/components/StatusBar";
import { Header } from "@/components/Header";
import { RoutineDescription } from "@/components/RoutineDescription";
import { AddItemButton } from "@/components/AddItemButton";
import { RoutineItemList } from "@/components/RoutineItemList";

const RoutinePrototype: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <StatusBar/>
          <Header/>
          <RoutineDescription />
        </View>
        <View style={styles.buttonContainer}>
          <AddItemButton />
        </View>
      </View>
      <RoutineItemList />
      <Image
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/9ebead7fe6d840afa98c8d4eed64d9de/daf397dd414fd9c6b157cfb8e70f982f2388fc80?placeholderIfAbsent=true" }}
        style={styles.footerImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 480,
    width: "100%",
    paddingTop: 22,
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "center",
  },
  content: {
    display: "flex",
    alignItems: "flex-start",
    gap: 2,
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
  },
  buttonContainer: {
    display: "flex",
    alignItems: "flex-start",
    gap: 2,
  },
  footerImage: {
    aspectRatio: 1,
    width: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
  },
});

export default RoutinePrototype;
