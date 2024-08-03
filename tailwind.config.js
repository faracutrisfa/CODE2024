/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        MadeMirage: ["MadeMirage", "sans-serif"],
      },
      colors: {
        "primary-10": "#FEFEFE",
        "primary-30": "#EEF0EC",
        "primary-50": "#E2E6DF",
        "primary-70": "#D2DDD2",
        "primary-90": "#C1CFC0",
        "secondary-10": "#576589",
        "secondary-30": "#3D526D",
        "secondary-50": "#2B465B",
        "secondary-70": "#19354C",
        "secondary-90": "#11324D",
        "neutral-10": "#E1E1E1",
        "neutral-30": "#DDDDDD",
        "neutral-50": "#D9D9D9",
        "neutral-70": "#C3C3C3",
        "neutral-90": "#AEAEAE",
      },
      spacing: {
        "18": "70px",
        "15" : "60px",
        "19" : "76px",
      },
    },
  },
  plugins: [],
};
