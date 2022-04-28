module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-blue": "#44ABDA",
      },
      height: {
        128: "32rem",
      },
      width: {
        128: "32rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
