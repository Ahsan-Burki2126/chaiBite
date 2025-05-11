module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FAF9F6", // softer white
          100: "#F4EFEA", // elegant light cream
          200: "#E8DFD1", // muted beige
        },
        amber: {
          50: "#FFF9F0", // off-white warm
          100: "#FEEFD6", // pale honey
          200: "#FDDFAE", // soft amber
          300: "#FBC67B", // peachy gold
          400: "#F8AE52", // golden orange
          500: "#F08A24", // refined orange
          600: "#D36F0F", // deep golden
          700: "#AD570D", // rich brown-orange
          800: "#8A420A", // warm dark brown
          900: "#6F3609", // elegant dark tone
        },
        biscuit: {
          100: "#EFE6DA", // light biscuit
          200: "#DCCEB5", // soft cookie beige
          300: "#C6B28E", // muted toasted biscuit
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        display: ["'Libre Baskerville'", "serif"],
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0, 0, 0, 0.08)",
        hard: "0 4px 24px rgba(146, 64, 14, 0.2)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
