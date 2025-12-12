/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'terminal-bg': '#000000',
        'terminal-text': '#FFFFFF',
        'terminal-accent': '#FF4500',
      },
      fontFamily: {
        mono: ['IBM Plex Mono', 'monospace'],
      },
      borderRadius: {
        none: '0',
      },
      borderWidth: {
        '2': '2px',
        '4': '4px',
      },
    },
  },
  plugins: [],
}

