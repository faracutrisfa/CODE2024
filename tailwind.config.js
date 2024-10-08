/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        MadeMirage: ["MadeMirage", "sans-serif"],
        Metropolis: ["Metropolis", "sans-serif"],
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
        18: "70px",
        15: "60px",
        19: "76px",
      },

      backgroundImage: {
        "paper-blue": "url('/src/assets/cover/paperBlue2.svg')",
        "paper-blue-mobile": "url('/src/assets/cover/paperBlue2Mobile.svg')",
        "paper-blue-light": "url('/src/assets/award/paperBluee.svg')",
        "paper-blue-light-mobile": "url('/src/assets/award/paperBlueeMobile.svg')",
        "paper-blue-abstract": "url('/src/assets/cover/abstract.svg')",
        "paper-blue-abstract-2": "url('/src/assets/cover/abstract2.svg')",
        "paper-blue-abstract-3": "url('/src/assets/cover/abstract3.svg')",
        "money": "url('/src/assets/award/money.svg')",
        "certificate": "url('/src/assets/award/certificate.svg')",
        "medal": "url('/src/assets/award/medal.svg')",
        "money-mobile": "url('/src/assets/award/moneyMobile.svg')",
        "certificate-mobile": "url('/src/assets/award/certificateMobile.svg')",
        "medal-mobile": "url('/src/assets/award/medalMobile.svg')",
      },
    },
  },
  plugins: [],
};
