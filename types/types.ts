import { ImageSourcePropType } from 'react-native';

export type RootStackParamList = {
  Welcome: undefined;
  NameInput: undefined;
  Gender: { name: string };
  XpLevel: { name: string; gender: string };
  AssistLevel: { name: string; gender: string; xpLevel: string};
  SkinConcerns: { name: string; gender: string; xpLevel: string; assistLevel: string };
  KnowSkin: { name: string; gender: string; xpLevel: string; assistLevel: string; skinConcerns: string };
  SkinType: { name: string; gender: string; xpLevel: string; assistLevel: string; 
    skinConcerns: string; knowSkin: string };
  SkinFeel: { name: string; gender: string; xpLevel: string; assistLevel: string; 
    skinConcerns: string; knowSkin: string; skinType: string };
  DryExp: { name: string; gender: string; xpLevel: string; assistLevel: string; 
    skinConcerns: string; knowSkin: string; skinType: string; skinFeel: string; };
  SkinProd: { name: string; gender: string; xpLevel: string; assistLevel: string; 
    skinConcerns: string; knowSkin: string; skinType: string; skinFeel: string; dryExp: string };
  Allergies: { name: string; gender: string; xpLevel: string; assistLevel: string; 
    skinConcerns: string; knowSkin: string; skinType: string; skinFeel: string; dryExp: string; skinProd: string };
  SkinGoals: { name: string; gender: string; xpLevel: string; assistLevel: string; 
    skinConcerns: string; knowSkin: string; skinType: string; skinFeel: string; dryExp: string; skinProd: string;
    allergies: string };
  SkinPref: { name: string; gender: string; xpLevel: string; assistLevel: string; 
    skinConcerns: string; knowSkin: string; skinType: string; skinFeel: string; dryExp: string; skinProd: string;
    allergies: string; skinGoals: string };
  PricePref: {name: string; gender: string; xpLevel: string; assistLevel: string; 
    skinConcerns: string; knowSkin: string; skinType: string; skinFeel: string; dryExp: string; skinProd: string;
    allergies: string; skinGoals: string; skinPref: string };
  IngrPref: {name: string; gender: string; xpLevel: string; assistLevel: string; 
    skinConcerns: string; knowSkin: string; skinType: string; skinFeel: string; dryExp: string; skinProd: string;
    allergies: string; skinGoals: string; skinPref: string; pricePref: string };
  ActIngrPref: {name: string; gender: string; xpLevel: string; assistLevel: string; 
    skinConcerns: string; knowSkin: string; skinType: string; skinFeel: string; dryExp: string; skinProd: string;
    allergies: string; skinGoals: string; skinPref: string; pricePref: string; ingrPref: string };
  Result: {name: string; gender: string; xpLevel: string; assistLevel: string; 
    skinConcerns: string; knowSkin: string; skinType: string; skinFeel: string; dryExp: string; skinProd: string;
    allergies: string; skinGoals: string; skinPref: string; pricePref: string; ingrPref: string; actIngrPref: string };
};

  export interface ProductCardProps {
    title: string;
    image: ImageSourcePropType;
  }
  
  export interface ProductSectionProps {
    title: string;
    products: ProductCardProps[];
  }

  export interface RoutineItemProps {
    title: string;
    imageUrl: string;
  }
  
  export interface StatusBarIconProps {
    uri: string;
    width: number;
  }