/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#05050b',
        nebula: '#0f1022',
        glow: {
          cyan: '#22d3ee',
          violet: '#8b5cf6',
          pink: '#ec4899',
        },
      },
      boxShadow: {
        glass:
          '0 0 0 1px rgba(168,85,247,0.2), 0 8px 30px rgba(15,23,42,0.65), inset 0 1px 0 rgba(255,255,255,0.08)',
        neon: '0 0 25px rgba(139,92,246,0.45)',
      },
      backgroundImage: {
        aurora:
          'radial-gradient(1200px circle at 10% 10%, rgba(139,92,246,.18), transparent 50%), radial-gradient(900px circle at 90% 20%, rgba(34,211,238,.14), transparent 45%), linear-gradient(145deg, #05050b 0%, #0a0d1d 55%, #101531 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
