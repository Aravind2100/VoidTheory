/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          emerald: '#11801c',
          'emerald-dark': '#0c5c14',
          'emerald-light': '#169f23',
          'mint-bg': '#f4fbf6',
          'mint-border': 'rgba(17, 128, 28, 0.18)',
          'mint-glow': 'rgba(17, 128, 28, 0.12)',
          black: '#000000',
          white: '#ffffff',
          'dark-card': '#050a06',
          slate: '#64748b',
          muted: '#94a3b8',
        }
      },
      fontFamily: {
        display: ['"Cal Sans"', '"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['"Lexend Deca"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'verdant': '0 10px 30px -5px rgba(17, 128, 28, 0.25)',
        'verdant-lg': '0 20px 50px -10px rgba(17, 128, 28, 0.35)',
        'glass': '0 8px 32px 0 rgba(17, 128, 28, 0.06), 0 0 0 1px rgba(17, 128, 28, 0.12)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37), 0 0 0 1px rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2.5s infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glowPulse: {
          '0%': { boxShadow: '0 0 15px rgba(17, 128, 28, 0.2)' },
          '100%': { boxShadow: '0 0 35px rgba(17, 128, 28, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}
