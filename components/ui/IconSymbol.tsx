// This file is a fallback for using MaterialIcons on Android and web.

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolWeight } from 'expo-symbols';
import React from 'react';
import { OpaqueColorValue, StyleProp, ViewStyle, Image, ImageStyle, ImageSourcePropType } from 'react-native';

// Add your SFSymbol to MaterialIcons mappings here.
const MAPPING = {
  // See MaterialIcons here: https://icons.expo.fyi
  // See SF Symbols in the SF Symbols app on Mac.
  'house.fill': 'home',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
  'custom.search' : require('@/assets/images/search-icon.svg'),
  'custom.star' : require('@/assets/images/star-icon.svg'),
  'custom.home' : require('@/assets/images/home-icon.svg'),
  'custom.bookmark' : require('@/assets/images/bookmark-icon.svg'),
  'custom.account' : require('@/assets/images/account-icon.svg'),
} as Partial<
  Record<
    string,
    React.ComponentProps<typeof MaterialIcons>['name'] | ImageSourcePropType
  >
>;

export type IconSymbolName = keyof typeof MAPPING;

/**
 * An icon component that uses native SFSymbols on iOS, and MaterialIcons on Android and web. This ensures a consistent look across platforms, and optimal resource usage.
 *
 * Icon `name`s are based on SFSymbols and require manual mapping to MaterialIcons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
}) {
  const IconSource = MAPPING[name];
  if (name.startsWith('custom.')) {
    return (
      <Image 
        source={IconSource as ImageSourcePropType}
        style={[
          { width: size, height: size },
        ] as StyleProp<ImageStyle>}
      />
    );
  }
  return <MaterialIcons color={color} size={size} name={IconSource as any} style={style as any} />;
}
