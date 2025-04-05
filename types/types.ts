import { ImageSourcePropType } from 'react-native';

export type RootStackParamList = {
    Welcome: undefined;
    NameInput: undefined;
    Gender: { name: string };
    SkinType: { name: string; gender: string };
    Result: { name: string; gender: string; skinType: string };
  };

  export interface ProductCardProps {
    title: string;
    image: ImageSourcePropType;
  }
  
  export interface ProductSectionProps {
    title: string;
    products: ProductCardProps[];
  }