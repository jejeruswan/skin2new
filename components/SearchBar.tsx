import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';
import { colors, typography1 } from '@/constants/Theme';

interface SearchHeaderProps {
  searchText: string;
  onSearchChange: (text: string) => void;
}

export const SearchHeader: React.FC<SearchHeaderProps> = ({
  searchText,
  onSearchChange,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Image
          source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/9ebead7fe6d840afa98c8d4eed64d9de/c45bd1058c8201f8982a409a2d52d0eb364af46b?placeholderIfAbsent=true' }}
          style={styles.logo}
        />
        <View style={styles.inputWrapper}>
          <Image
            source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/9ebead7fe6d840afa98c8d4eed64d9de/359ecf47155ce4f8a515873e6826232a6f48823b?placeholderIfAbsent=true' }}
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search products..."
            value={searchText}
            onChangeText={onSearchChange}
            style={styles.input}
            placeholderTextColor={colors.textPrimary}
          />
        </View>
      </View>
      <Image
        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/9ebead7fe6d840afa98c8d4eed64d9de/930f4b3e80e8ae36d05f014efb346005de2bdf2f?placeholderIfAbsent=true' }}
        style={styles.menuIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    gap: 9,
  },
  searchContainer: {
    flex: 1,
  },
  logo: {
    width: 56,
    height: 56,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 10,
    padding: 5,
    gap: 8,
  },
  searchIcon: {
    width: 25,
    height: 25,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: colors.textPrimary,
    fontFamily: typography1.poppins,
  },
  menuIcon: {
    width: 34,
    height: 34,
  },
});