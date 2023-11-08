import { ThemeConfig, theme } from "antd";
import { MapToken } from "antd/es/theme/interface";

export const COLOR_PRIMARY = "#64ffda";

const TokenAntd = {
  colorPrimary: COLOR_PRIMARY,
  wireframe: false,
};

const CustomColorsDark = {
  // customizar cores do tema dark
  colorBgBase: "#0a192f",
} as MapToken;

const DeviceCofig = {
  device: {
    xs: "@media (max-width: 576px)",
    sm: "@media (max-width: 576px)",
    md: "@media (max-width: 768px)",
    lg: "@media (max-width: 992px)",
    xl: "@media (max-width: 1200px)",
    xxl: "@media (max-width: 1600px)",
  },
};

type TokenType = typeof TokenAntd;
type DeviceType = typeof DeviceCofig;
export type Theme = TokenType & DeviceType & MapToken;

const { darkAlgorithm, defaultAlgorithm, defaultSeed } = theme;

export const onChangeThemeAntd = (t: "LIGHT" | "DARK"): ThemeConfig => {
  const newAlgorithm = t === "DARK" ? darkAlgorithm : defaultAlgorithm;

  if (t === "DARK") {
    return {
      algorithm: newAlgorithm,
      token: { ...TokenAntd, ...CustomColorsDark },
    };
  }
  return { algorithm: newAlgorithm, token: TokenAntd };
};

export const onChangeThemeStyledComponents = (t: "LIGHT" | "DARK"): Theme => {
  const seed = { ...defaultSeed, ...TokenAntd };
  if (t === "DARK") {
    return {
      ...darkAlgorithm({ ...seed, ...CustomColorsDark }),
      ...DeviceCofig,
    };
  }
  return { ...defaultAlgorithm(seed), ...DeviceCofig };
};
