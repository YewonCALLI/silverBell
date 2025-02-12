// TODO: write documentation about fonts and typography along with guides on how to add custom fonts in own
// markdown file and add links from here

import { Platform } from "react-native"
import {
  SpaceGrotesk_300Light as spaceGroteskLight,
  SpaceGrotesk_400Regular as spaceGroteskRegular,
  SpaceGrotesk_500Medium as spaceGroteskMedium,
  SpaceGrotesk_600SemiBold as spaceGroteskSemiBold,
  SpaceGrotesk_700Bold as spaceGroteskBold,
} from "@expo-google-fonts/space-grotesk"

export const customFontsToLoad = {
  spaceGroteskLight,
  spaceGroteskRegular,
  spaceGroteskMedium,
  spaceGroteskSemiBold,
  spaceGroteskBold,
  suitExtraLight: require("../../assets/fonts/SUIT-ExtraLight.otf"),
  suitLight: require("../../assets/fonts/SUIT-Light.otf"),
  suitThin: require("../../assets/fonts/SUIT-Thin.otf"),
  suitRegular: require("../../assets/fonts/SUIT-Regular.otf"),
  suitMedium: require("../../assets/fonts/SUIT-Medium.otf"),
  suitSemiBold: require("../../assets/fonts/SUIT-SemiBold.otf"),
  suitBold: require("../../assets/fonts/SUIT-Bold.otf"),
  suitExtraBold: require("../../assets/fonts/SUIT-ExtraBold.otf"),
}

const fonts = {
  suit: {
    // Main custom font.
    extraLight: "suitExtraLight",
    light: "suitLight",
    thin: "suitThin",
    normal: "suitRegular",
    medium: "suitMedium",
    semiBold: "suitSemiBold",
    bold: "suitBold",
    extraBold: "suitExtraBold",
  },
  spaceGrotesk: {
    // Cross-platform Google font.
    light: "spaceGroteskLight",
    normal: "spaceGroteskRegular",
    medium: "spaceGroteskMedium",
    semiBold: "spaceGroteskSemiBold",
    bold: "spaceGroteskBold",
  },
  helveticaNeue: {
    // iOS only font.
    thin: "HelveticaNeue-Thin",
    light: "HelveticaNeue-Light",
    normal: "Helvetica Neue",
    medium: "HelveticaNeue-Medium",
  },
  courier: {
    // iOS only font.
    normal: "Courier",
  },
  sansSerif: {
    // Android only font.
    thin: "sans-serif-thin",
    light: "sans-serif-light",
    normal: "sans-serif",
    medium: "sans-serif-medium",
  },
  monospace: {
    // Android only font.
    normal: "monospace",
  },
}

export const typography = {
  /**
   * The fonts are available to use, but prefer using the semantic name.
   */
  fonts,

  /**
   * The primary font. Used in most places.
   */
  primary: fonts.suit,

  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary: Platform.select({ ios: fonts.helveticaNeue, android: fonts.sansSerif }),

  /**
   * Lets get fancy with a monospace font!
   */
  code: Platform.select({ ios: fonts.courier, android: fonts.monospace }),
}
