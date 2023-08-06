import { FluentProvider, webDarkTheme, webLightTheme } from '@fluentui/react-components';

const tokens = {
    fontFamilyBase: '"Fira Sans", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif'
};

export const darkTheme = {
    ...webDarkTheme,
    ...tokens
};

export const lightTheme = {
    ...webLightTheme,
    ...tokens
};

export { FluentProvider as ThemeProvider };