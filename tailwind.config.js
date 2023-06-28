
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//     backgroundImage: {
//       heroBackground: "url('./assets/herobackground.jpg')",
//     },
//     fontFamily: {
//       headingFont: "Space Mono",
//       bodyFont: "Rubik",
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        myGradient: {
          start: "#2a4f6a",
          end: "#ffffff",
        },
      },
    },
    backgroundImage: {
      heroBackground: "url('./assets/herobackground.jpg')",
    },
    fontFamily: {
      headingFont: "Space Mono",
      bodyFont: "Rubik",
    },
  },
  plugins: [],
};
