const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    colors : {
      "primary-50" : "#51A8FF",
      "primary-90" : "#0075EB"
    },
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
  ],
}

