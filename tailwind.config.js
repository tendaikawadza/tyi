
const theme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Roboto", ...theme.fontFamily.sans] },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
