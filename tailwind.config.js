module.exports = {
  content: ['./src/**/*.{html,js,ts}'],
  theme: {
    extend: {
      gridTemplateRows: {
        form: 'repeat(4, auto)',
      },
      gridTemplateColumns: {
        form: 'repeat(2, 1fr)',
        todo: '5% 35% 40% 10% 10%',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/forms')],
};
