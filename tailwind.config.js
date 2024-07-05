/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          ...require("daisyui/src/theming/themes")["light"],
          "primary": "#FF3811",
          ".btn-primary": {
            "color": "#FFFF"
          },

          ".btn-outline.btn-primary:hover": {
            "color": "#FFFF"
          }
        },
      },
      "dark",
      "cupcake",
    ],
  },
};
