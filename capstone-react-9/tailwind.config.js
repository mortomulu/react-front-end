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
      "primary-10" : "#B8DBFF",
      "primary-30" : "#85C2FF",
      "primary-50" : "#51A8FF",
      "primary-70" : "#1F8FFF",
      "primary-90" : "#0075EB",
      "netral-10" : "#F2F2F2",
      "netral-30" : "#D9D9D9",
      "netral-50" : "#BEBEBE",
      "netral-70" : "#A6A6A6",
      "netral-90" : "#8C8C8C",
      "succes-10" : "#A2F6D8",
      "succes-30" : "#74F1C4",
      "succes-50" : "#47EDB1",
      "succes-70" : "#17E89D",
      "succes-90" : "#12BA7D",
      "warning-10" : "#FFE066",
      "warning-30" : "#FFD633",
      "warning-50" : "#FFCC00",
      "warning-70" : "#CCA300",
      "warning-90" : "#997A00",
      "error-10" : "#FFA3A3",
      "error-30" : "#FF7070",
      "error-50" : "#FF3B3B",
      "error-70" : "#FF0A0A",
      "error-90" : "#D60000",
      "darker-10" : "#222C36",
      "darker-30" : "#262A2D",
      "darker-50" : "#1A2227",
      "darker-70" : "#1B1B1B",
      "darker-90" : "#0C0F0E",
    },
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
  ],
}

