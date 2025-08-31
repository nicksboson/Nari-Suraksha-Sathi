// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8e44ad',
        'primary-dark': '#732d91',
        secondary: '#ff6b6b',
        accent: '#ffc107',
        light: '#f8f9fa',
        dark: '#343a40',
        success: '#28a745',
        warning: '#ffc107',
        danger: '#dc3545',
        gray: '#6c757d',
        'light-gray': '#e9ecef',
      },
      fontFamily: {
        'main': ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
    },
  },
  plugins: [],
}