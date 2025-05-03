import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export const ProductInfo = () => {
    const router = useRouter()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        The Ordinary Glucoside Foaming Cleanser, Gentle Foaming Face Wash for All Skin Types
      </Text>
      <View style={styles.ratingContainer}>
        <Image
          source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0cc2f6a511c884dd1496e74042213ecce22cf563?placeholderIfAbsent=true&apiKey=9ebead7fe6d840afa98c8d4eed64d9de' }}
          style={styles.starIcon}
        />
        <Text style={styles.rating}>4.8</Text>
        <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/Reviews")}
        >
            <Text style={styles.buttonText}>853 Reviews</Text>
        </TouchableOpacity>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 31,
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: 24,
    color: '#6B7698',
    fontWeight: '900',
    letterSpacing: -0.3,
    lineHeight: 25,
    paddingVertical: 19,
  },
  ratingContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  starIcon: {
    width: 31,
    height: 31,
  },
  rating: {
    fontSize: 28,
    fontWeight: '500',
    letterSpacing: -1.54,
    color: '#F6F6F5',
  },
  reviews: {
    fontSize: 22,
    fontWeight: '400',
    letterSpacing: -1.2,
    color: '#F6F6F5',
  },
  button: {
    backgroundColor: "#E6E7FA",
    borderRadius: 22,
    paddingVertical: 19,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: -0.7,
    color: '#6B7698',
  }
});