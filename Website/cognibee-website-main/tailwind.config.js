/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cognibee-primary': '#0A2F5B',      // Deep Blue
        'cognibee-secondary': '#B0A89B',    // Warm Gray
        'cognibee-accent': '#FFB627',       // Honey Gold
        'cognibee-white': '#FFFFFF',
        'cognibee-light-gray': '#F5F7FA',
        'cognibee-dark-text': '#212529',
        'clarivita-dark-bg': '#1A1D23',
        'clarivita-card-bg': '#252A33',
        'clarivita-border': '#343A46',
        'clarivita-text-primary': '#F0F0F0',
        'clarivita-text-secondary': '#A0A0A0',
        'clarivita-accent': '#FFC107',
        'clarivita-accent-hover': '#FFA000',
        'hive-yellow': '#FFC107',
        'hive-orange': '#FFB400',
        'hive-dark': '#333333',
        'hive-darker': '#2B2B2B',
        'hive-neutral-light': '#F4F4F4',
        'hive-neutral-dark': '#A9A9A9',
        'hive-primary': '#007BFF',
        'hive-primary-dark': '#0056b3',
        'hive-text': '#2D3748',
        'hive-gray': {
          light: '#F7FAFC',
          DEFAULT: '#E2E8F0',
          dark: '#A0AEC0',
        },
        'alert-red': '#DC2626',
        'alert-orange': '#F59E0B',
        'alert-yellow': '#D69E2E',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'], // Default body font
        montserrat: ['Montserrat', 'sans-serif'], // Example for headings
        raleway: ['Raleway', 'sans-serif'],     // Alternative for headings
        lato: ['Lato', 'sans-serif'],           // Alternative for body
        roboto: ['Roboto', 'sans-serif'],       // Alternative for body
        // Ensure Poppins is still available if used elsewhere or remove if not needed
        poppins: ['Poppins', 'sans-serif'], 
      },
    },
  },
  plugins: [],
} 