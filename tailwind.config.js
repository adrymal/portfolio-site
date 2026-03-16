module.exports = {
  content: [
    './layouts/**/*.html',
    './content/**/*.md'
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Courier Prime"', 'monospace'],
        sans: ['"Courier Prime"', 'monospace']
      },
      colors: {
        ink: '#111827',
        parchment: '#F7FAFF',
        accent: '#2563EB'
      },
      boxShadow: {
        editorial: '0 24px 80px -32px rgba(37, 99, 235, 0.18)'
      }
    }
  },
  plugins: []
}
