import {StyleSheet} from "react-native";

export const colors = {
    primary: "#8E9DCC",
    secondary: "#6B7698",
    background: "#8E9DCC",
    text: "#FFF8E6",
    buttonBg: "#EFF0FF",
    buttonText: "#6B7698",
    white: "#FFFFFF",
    textPrimary: "rgba(107, 118, 152, 1)",
    textSecondary: "rgba(142, 157, 204, 1)",
  };
  
  export const typography = {
    heading: {
      fontFamily: "Poppins-Medium",
      fontSize: 46,
      lineHeight: 42.5,
      letterSpacing: -2.5,
      color: colors.text,
    },
    subheading: {
      fontSize: 14,
      fontFamily: "Poppins-Medium",
      fontWeight: "400" as const,
      letterSpacing: 1,
      color: colors.text,
    },
    button: {
      fontFamily: "Poppins",
      fontSize: 24,
      fontWeight: "700" as const,
      color: colors.buttonText,
    },
  };
  
  export const typography1 = {
    sfProText: "SF Pro Text",
    poppins: "Poppins",
  };

  export const spacing = {
    small: 8,
    medium: 16,
    large: 24,
    xlarge: 40,
    xxlarge: 60,
  };
  
  export const layout = {
    maxWidth: 1000,
    padding: 30,
  };
  
  export const commonStyles = StyleSheet.create({
    container: {
      borderRadius: 50,
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 480,
      width: "100%",
      overflow: "hidden",
    },
    flexRow: {
      flexDirection: "row",
      alignItems: "center",
    },
    flexColumn: {
      flexDirection: "column",
    },
  });