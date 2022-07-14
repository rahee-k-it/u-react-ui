export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|tomato)$/i,
      date: /Date$/,
    },
  }
}