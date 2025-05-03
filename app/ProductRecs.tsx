import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useRouter } from "expo-router";
import { StatusBar } from '@/components/StatusBar';
import { ProductHeader } from '@/components/ProductHeader';
import { ProductImage } from '@/components/ProductImage';
import { ProductInfo } from '@/components/ProductInfo';
import { OptionButton } from "@/components/OptionButton";
import { ProductDescription } from '@/components/ProductDescription';

const ProductRecs = () => {
    const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <StatusBar />
        <ProductHeader />
      </View>
      <ProductImage />
      <ProductInfo />
      <View style={styles.bottomSection}>
        <View style={styles.content}>
        <OptionButton
            label="Add to Routine  +"
            onPress={() => router.push("/(tabs)/routine")}
            style={styles.button}
        />
        <ProductDescription />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8E9DCC",
  },
  header: {
    zIndex: 10,
    display: 'flex',
    width: '100%',
    paddingLeft: 8,
    paddingRight: 59,
    paddingTop: 26,
    paddingBottom: 1,
  },
  bottomSection: {
    position: 'relative',
    aspectRatio: 1.262,
    marginTop: 16,
    width: '100%',
  },
  content: {
    padding: 19,
    paddingBottom: 82,
  },
  button: {
    width: 259,
    height: 71,
  },
});

export default ProductRecs;