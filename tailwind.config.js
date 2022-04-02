module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      gridTemplateRows: {
        form: "repeat(5, auto)",
      },
      gridTemplateColumns: {
        form: "repeat(2, 1fr)",
        todo: "5% 35% 40% 10% 10%",
      },
    },
  },
  plugins: [],
};
