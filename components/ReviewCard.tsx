import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface ReviewCardProps {
  userName: string;
  rating: string;
  review: string;
  imageUrl?: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  userName,
  rating,
  review,
  imageUrl,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.userName}>{userName}</Text>
        <Image
          source={{ uri: rating }}
          style={styles.ratingImage}
        />
      </View>
      <Text style={styles.reviewText}>{review}</Text>
      {imageUrl && (
        <Image
          source={{ uri: imageUrl }}
          style={styles.bottomImage}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    width: '100%',
    maxWidth: 318,
    paddingHorizontal: 14,
    paddingTop: 9,
    paddingBottom: 17,
    overflow: 'hidden',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: -1,
    color: 'rgba(107, 118, 152, 1)',
  },
  ratingImage: {
    width: 105,
    aspectRatio: 5.52,
    resizeMode: 'contain',
  },
  reviewText: {
    marginTop: 11,
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 16,
    letterSpacing: -0.3,
    color: 'rgba(107, 118, 152, 1)',
  },
  bottomImage: {
    width: '100%',
    aspectRatio: 4.52,
    resizeMode: 'contain',
    marginTop: 10,
  },
});