import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

interface ReviewHeaderProps {
  time?: string;
  statusIcons: string[];
  logo: string;
  brandImage: string;
}

export const ReviewHeader: React.FC<ReviewHeaderProps> = ({
  time = "9:41",
  statusIcons,
  logo,
  brandImage,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <Text style={styles.time}>{time}</Text>
        <View style={styles.iconContainer}>
          {statusIcons.map((icon, index) => (
            <Image
              key={index}
              source={{ uri: icon }}
              style={index === 0 ? styles.firstIcon : styles.secondIcon}
            />
          ))}
        </View>
      </View>
      <View style={styles.brandContainer}>
        <Image
          source={{ uri: logo }}
          style={styles.logo}
        />
        <Image
          source={{ uri: brandImage }}
          style={styles.brandImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingLeft: 8,
    paddingRight: 59,
    paddingTop: 22,
    paddingBottom: 1,
  },
  statusBar: {
    display: 'flex',
    width: '100%',
    maxWidth: 298,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  time: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 15,
    fontFamily: 'SF Pro Text',
    fontWeight: '600',
    letterSpacing: -0.3,
    textAlign: 'center',
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  firstIcon: {
    width: 17,
    aspectRatio: 1.7,
    resizeMode: 'contain',
  },
  secondIcon: {
    width: 15,
    aspectRatio: 1.36,
    resizeMode: 'contain',
  },
  brandContainer: {
    display: 'flex',
    marginTop: 6,
    width: 252,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 56,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  brandImage: {
    width: 130,
    aspectRatio: 1.78,
    resizeMode: 'contain',
  },
});