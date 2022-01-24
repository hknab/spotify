export default function themePalette(options) {
  const { colors } = options;
  return {
    mode: options.customization.mode,
    primary: {
      main: colors.primaryMain,
      dark: colors.primaryDark,
      light: colors.primaryLight,
    },
    secondary: {
      main: colors.secondary1,
      1: colors.secondary1,
      2: colors.secondary2,
      3: colors.secondary3,
      4: colors.secondary4,
    },
    neutral: {
      main: colors.neutral1,
      1: colors.neutral1,
      2: colors.neutral2,
      3: colors.neutral3,
    },
    other: {
      main: colors.cyan400,
      cyan: colors.cyan400,
      blue: colors.blue400,
      purple: colors.purple400,
      pink: colors.pink400,
      red: colors.red400,
      orange: colors.orange400,
      yellow: colors.yellow400,
      teal: colors.teal400,
    },
  };
}
