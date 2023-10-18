module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.VERCEL_ENV === 'production' ? { cssnano: {} } : {})
  },
}
