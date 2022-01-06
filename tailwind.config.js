module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        acquamarine: "#00FFAD",
      },
      backgroundImage: {
        jumbo: "url('/img/banner-bk.jpg')",
        contact: "url('/img/contact-bk.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
