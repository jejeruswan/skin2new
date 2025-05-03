import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface ReviewStatsProps {
  rating: string;
  reviewCount: string;
  ratingImage: string;
}

export const ReviewStats: React.FC<ReviewStatsProps> = ({
  rating,
  reviewCount,
  ratingImage,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <Image
          source={{ uri: ratingImage }}
          style={styles.ratingImage}
        />
        <Text style={styles.ratingText}>{rating}</Text>
      </View>
      <Text style={styles.reviewCount}>{reviewCount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 5,
  },
  ratingContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  ratingImage: {
    width: 57,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  ratingText: {
    fontSize: 51,
    color: 'rgba(246, 246, 245, 1)',
    fontWeight: '500',
    letterSpacing: -2.84,
  },
  reviewCount: {
    marginTop: 9,
    color: 'rgba(246, 246, 245, 1)',
    fontSize: 26,
    fontWeight: '400',
    letterSpacing: -1.47,
  },
});