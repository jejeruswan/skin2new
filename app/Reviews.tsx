import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { ReviewHeader } from '@/components/ReviewHeader';
import { ReviewStats } from '@/components/ReviewStats';
import { ReviewCard } from '@/components/ReviewCard';
import { layout } from '@/constants/Theme'
import { StatusBar } from '@/components/StatusBar'
import { Colors } from '@/constants/Colors'

export const Reviews = () => {
  const statusIcons = ["https://cdn.builder.io/api/v1/image/assets/TEMP/d307aae2ff343d9d87743e2d2fc46f801626780d?placeholderIfAbsent=true&apiKey=9ebead7fe6d840afa98c8d4eed64d9de", "https://cdn.builder.io/api/v1/image/assets/TEMP/c63fce8acfb497517e20f241c1496db555062cc2?placeholderIfAbsent=true&apiKey=9ebead7fe6d840afa98c8d4eed64d9de"];
  const reviews = [
    {
      userName: "Sharron",
      rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/83e120f14e1168a1c558a05f191800eeae4a9834?placeholderIfAbsent=true&apiKey=9ebead7fe6d840afa98c8d4eed64d9de",
      review: "This is ABSOLUTELY HORRIBLE!! Do not get this under any circumstance. Bought this for my 20 year old dog and it MELTED HER FUR OFF!! NOW SHE'S BALD!! We fs gotta get her skincare now cus her wrinkly ahh skin just out for THE WORLD TO SEE!! At least we know it's not animal tested smh",
    },
    {
      userName: "Clio",
      rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/bf3f1cf6bcdec65d9e0f69ea0b1c5a73030980db?placeholderIfAbsent=true&apiKey=9ebead7fe6d840afa98c8d4eed64d9de",
      review: "I'm so disappointed with this product. I bought it after seeing all the hype online, but it's been a nightmare for my skin. Within 2 days of using it, I broke out in painful cystic acne all over my chin and jawline, areas where I NEVER break out. The texture is also terrible - it pills up when I try to layer it with my other products, and it leaves this sticky film that never seems to absorb. It also has a strong fragrance that burns my eyes even though the packaging says fragrance-free.",
    },
    {
      userName: "David",
      rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/5be2d9b9baabc0d39fe068431070c724c11a3fc4?placeholderIfAbsent=true&apiKey=9ebead7fe6d840afa98c8d4eed64d9de",
      review: "I tried to push through for a week thinking maybe it was just purging, but my skin kept getting worse. Red patches, irritation, and more breakouts. I had to stop using it completely and it took 3 weeks for my skin to calm down. For the price ($45!!), this is absolutely unacceptable. Save your money and buy something else. I wish I could return this but I'm past the return window. Never again.",
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar/>
      <ScrollView style={styles.content}>
        <ReviewStats
          rating="1.0"
          reviewCount="2.7k reviews"
          ratingImage="https://cdn.builder.io/api/v1/image/assets/TEMP/080a0a24b145c2c23133ca43b2b9c30ec3f1460d?placeholderIfAbsent=true&apiKey=9ebead7fe6d840afa98c8d4eed64d9de"
        />
        <View style={styles.reviewsContainer}>
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              userName={review.userName}
              rating={review.rating}
              review={review.review}
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
    paddingHorizontal: layout.padding,
    width: "100%",
    maxWidth: layout.maxWidth,
  },
  content: {
    marginTop: 15,
    paddingHorizontal: 27,
    paddingRight: 10,
  },
  reviewsContainer: {
    marginTop: 24,
    gap: 24,
  },
});

export default Reviews;