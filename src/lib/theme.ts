import { type MantineThemeOverride, rem } from "@mantine/core";

export const theme: MantineThemeOverride = {
  fontFamily: "var(--font-sans)",
  headings: { fontFamily: "var(--font-sans)" },
  colors: {
    primary: [
      "var(--color-primary-50)",
      "var(--color-primary-100)",
      "var(--color-primary-200)",
      "var(--color-primary-300)",
      "var(--color-primary-400)",
      "var(--color-primary-500)",
      "var(--color-primary-600)",
      "var(--color-primary-700)",
      "var(--color-primary-800)",
      "var(--color-primary-900)",
    ],
  },
  primaryColor: "primary",
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(16),
    lg: rem(18),
    xl: rem(22),
  },
  defaultRadius: "md",
  components: {
    Card: {
      styles: {
        root: {
          borderColor: "var(--color-primary-500)", // qualquer var CSS tua
        },
      },
    },
  },
};
