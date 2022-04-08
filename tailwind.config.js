module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      sl: ["14px", "17px"],
      sm: ["16px", "20px"],
      md: ["18px", "22px"],
      lg: ["24px", "29px"],
    },
    extend: {},
  },
  plugins: [],
};
