module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["us-sans-serif", "system-ui"],
      kaushan: ["Kaushan Script"],
    },
    boxShadow: {
      "custom-light": " 0 0 10px #313131",
      "custom-dark": "5px 5px 10px #0a0c0e",
    },

    extend: {
      animation: {
        infiniteScroll: "infiniteScroll 20s linear infinite",
      },
      keyframes: {
        infiniteScroll: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      width: {
        100: " 30rem",
        101: " 32rem",
        150: " 40rem",
        180: " 55rem",
        200: " 60rem",
      },
      height: {
        screen: "100vh",
        "screen-custom": "calc(100vh - 300px)",
        98: " 28rem",
        99: " 29rem",
        100: " 30rem",
        101: " 32rem",
        120: " 35rem",
        150: " 40rem",
      },
      rounded: {
        left: { "border-top-right-radius": ".5rem" },
      },
      colors: {
        accent: {
          DEFAULT: "#f20404",
        },
        light: {
          DEFAULT: "#ffffff",
          100: "#efefef",
          200: "#e6e6e6",
          300: "#e0e0e0",
          400: "#d0d0d0",
          500: "#E9EBEC",
        },
        dark: {
          DEFAULT: "#090909",
          100: "#121212",
          200: "#181818",
          300: "#1b1b1b",
          400: "#202020",
          500: "#424242",
        },
      },
    },
    variants: {
      extend: {
        boxShadow: ["dark"],
      },
    },
  },
  plugins: [],
};
