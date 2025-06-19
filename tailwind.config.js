/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/**/*.liquid',
    './sections/**/*.liquid', 
    './snippets/**/*.liquid',
    './templates/**/*.json',
    './templates/**/*.liquid'
  ],
  theme: {
    extend: {
      colors: {
        // RoboInk Color System
        parchment: {
          DEFAULT: '#F8F5F0',
          50: '#FFFFFF',
          100: '#FEFCF9',
          200: '#F8F5F0',
          300: '#F2EEE7',
          400: '#ECE7DE',
          500: '#E6E1D5',
          600: '#D4C7B3',
          700: '#C2AD91',
          800: '#A08860',
          900: '#7E6A48'
        },
        navy: {
          DEFAULT: '#1A2634',
          50: '#4A5F7A',
          100: '#445771',
          200: '#39485F',
          300: '#2E394D',
          400: '#232A3A',
          500: '#1A2634',
          600: '#151F2A',
          700: '#101820',
          800: '#0B1116',
          900: '#060A0C'
        },
        brass: {
          DEFAULT: '#D4B483',
          50: '#F4EDDF',
          100: '#F0E5D1',
          200: '#E8D6B6',
          300: '#E0C79A',
          400: '#DCB98E',
          500: '#D4B483',
          600: '#CA9F5F',
          700: '#B8854A',
          800: '#926837',
          900: '#6C4B28'
        },
        copper: {
          DEFAULT: '#E7A977',
          50: '#F6E8DC',
          100: '#F3DFCD',
          200: '#EDCDAF',
          300: '#E7BA91',
          400: '#E7B184',
          500: '#E7A977',
          600: '#E09853',
          700: '#D4822E',
          800: '#A86524',
          900: '#7C4A1A'
        },
        burgundy: {
          DEFAULT: '#800020',
          50: '#F24D73',
          100: '#F0395F',
          200: '#EC1137',
          300: '#C70A2A',
          400: '#A3081F',
          500: '#800020',
          600: '#70001C',
          700: '#600018',
          800: '#500014',
          900: '#400010'
        },
        teal: {
          DEFAULT: '#6DC6C4',
          50: '#D4F0EF',
          100: '#C4EAE9',
          200: '#A5DEDD',
          300: '#86D2D1',
          400: '#79CCC9',
          500: '#6DC6C4',
          600: '#4BB5B2',
          700: '#3A8F8D',
          800: '#2C6B69',
          900: '#1E4746'
        },
        rust: {
          DEFAULT: '#B7410E',
          50: '#F0A582',
          100: '#ED956B',
          200: '#E7753D',
          300: '#E1550F',
          400: '#CC4B0D',
          500: '#B7410E',
          600: '#9A370C',
          700: '#7D2D0A',
          800: '#602308',
          900: '#431906'
        }
      },
      fontFamily: {
        'primary': ['Roboto', 'sans-serif'],
        'heading': ['Roboto Slab', 'serif'],
        'display': ['Cinzel Decorative', 'serif'],
        'sans': ['Roboto', 'sans-serif'],
        'serif': ['Roboto Slab', 'serif']
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      boxShadow: {
        'steampunk': '0 4px 8px rgba(26, 38, 52, 0.15), 0 2px 4px rgba(212, 180, 131, 0.1)',
        'brass': '0 4px 12px rgba(212, 180, 131, 0.3)',
        'copper': '0 4px 12px rgba(231, 169, 119, 0.3)',
        'navy': '0 8px 24px rgba(26, 38, 52, 0.2)'
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse': 'spin-reverse 25s linear infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'steam': 'steam 2s ease-in-out infinite',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite'
      },
      keyframes: {
        'spin-reverse': {
          'from': { transform: 'rotate(360deg)' },
          'to': { transform: 'rotate(0deg)' }
        },
        'shimmer': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' }
        },
        'steam': {
          '0%': { 
            'opacity': '0',
            'transform': 'translateY(0) scale(1)'
          },
          '50%': {
            'opacity': '0.3',
            'transform': 'translateY(-10px) scale(1.1)'
          },
          '100%': {
            'opacity': '0',
            'transform': 'translateY(-20px) scale(1.2)'
          }
        },
        'bounce-subtle': {
          '0%, 100%': {
            'transform': 'translateY(-5%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            'transform': 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
          }
        }
      },
      backgroundImage: {
        'gradient-steampunk': 'linear-gradient(135deg, #F8F5F0 0%, #f5f1ec 100%)',
        'gradient-navy': 'linear-gradient(135deg, #1A2634 0%, #0f1419 100%)',
        'gradient-brass': 'linear-gradient(135deg, #D4B483, #E7A977)',
        'gradient-metallic': 'linear-gradient(135deg, #D4B483, #E7A977, #D4B483)'
      },
      borderRadius: {
        'steampunk': '8px'
      }
    }
  },
  plugins: [
    // Add any plugins you need
  ]
}