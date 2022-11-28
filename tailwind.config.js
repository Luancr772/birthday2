/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["font-family: 'Kalam', cursive;"],
      },

      colors: {
        Mauchudao: "#ccdde4",
        Primary: "#58aec3",
      },
    },
  },
  plugins: [],
};
