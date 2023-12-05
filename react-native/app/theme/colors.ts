// TODO: write documentation for colors and palette in own markdown file and add links from here

const palette: Record<string, string> = {
  vermilion: "#D55E00",
  bluishGreen: "#009E73",
  skyBlue: "#56B4E9",
  orange: "#E69F00",
  yellow: "#F0E442",
  blue: "#0072B2",
  reddishPurple: "#CC79A7",

  black: "#000000",
  white: "#FFFFFF",

  gray: "#777777",
} as const

export const colors = {
  vermilion: "#D55E00",
  bluishGreen: "#009E73",
  skyBlue: "#56B4E9",
  orange: "#E69F00",
  yellow: "#F0E442",
  blue: "#0072B2",
  reddishPurple: "#CC79A7",

  black: "#000000",
  white: "#FFFFFF",

  gray: "#777777",

  /**
   * A helper for making something see-thru.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The default text color in many components.
   */
  text: palette.black,
  /**
   * Secondary text information.
   */
  textDim: palette.gray,
  /**
   * The default color of the screen background.
   */
  background: palette.bluishGreen,
  /**
   * The default border color.
   */
  border: palette.gray,
  /**
   * The main tinting color.
   */
  tint: palette.gray,
  /**
   * A subtle color used for lines.
   */
  separator: palette.gray,
  /**
   * Error messages.
   */
  error: palette.vermilion,
  /**
   * Error Background.
   *
   */
  errorBackground: palette.white,
}
