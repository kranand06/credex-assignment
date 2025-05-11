export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  important : true,
  theme: {
    extend: {
      colors: {
        background: {
          light: '#F9FAFB',
          dark: '#1E1E2F',
        },
        text1: {
          light: '#111827',
          dark: '#F9FAFB',
        },
        text2: {
          light: '#6B7280',
          dark: '#9CA3AF',
        },
        primary: {
          light: '#7C3AED', // Blue-600
          dark: '#bb86fc',  // Blue-500
        },
        hover: {
          light: '#6D28D9', // Blue-700
          dark: '#9b6fef',  // Blue-600
        },
        secondary: {
          light: '#10B981', // Green-500
          dark: '#34D399', // Green-400
        },
      },
    },
  },
  plugins: [],
};