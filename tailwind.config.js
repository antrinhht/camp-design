/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        camp: {
          blue: '#144A9B',
          yellow: '#FFD335',
          pink: '#FA7A96',
          lightblue: '#74C9F4',
          textdark: '#2A0A0A',
        }
      },
      fontFamily: {
        title: ['"Baloo 2"', 'sans-serif'],
        body: ['"Be Vietnam Pro"', 'sans-serif'],
        pixel: ['"VT323"', 'monospace'],
        glass: ['Outfit', 'sans-serif'],
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
        },
        'shake-intense': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translate(-8px, -5px) rotate(-3deg) scale(1.05)' },
          '20%, 40%, 60%, 80%': { transform: 'translate(8px, 5px) rotate(3deg) scale(1.05)' },
          '95%': { transform: 'translate(0, -15px) scale(1.1)' } // Chuẩn bị bật nắp
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'card-flip': {
          '0%': { opacity: '0', transform: 'perspective(1000px) rotateY(90deg) scale(0.5) translateY(-100px)' },
          '50%': { opacity: '1', transform: 'perspective(1000px) rotateY(-10deg) scale(1.1) translateY(0)' },
          '100%': { opacity: '1', transform: 'perspective(1000px) rotateY(0deg) scale(1) translateY(0)' },
        }
      },
      animation: {
        shake: 'shake 0.5s ease-in-out',
        'shake-intense': 'shake-intense 0.4s cubic-bezier(.36,.07,.19,.97) forwards',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'card-flip': 'card-flip 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
      }
    },
  },
  plugins: [],
}
