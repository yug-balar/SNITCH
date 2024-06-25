/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      classes: {
        tab: "bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded",
        "tab-active":
          "bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded",
      },
    },
  },
  plugins: [],
};
