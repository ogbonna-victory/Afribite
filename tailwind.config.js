/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'primarycolor': '#e2725b',
        'hover': '#ffcc00',
      },
      fontFamily: {
        'body': ['"poppins"']
      },
      borderWidth: {
        '1': ['1px']
      },
      fontSize: {
        'sm': ['16px', '18px'],
        'large': ['28px', '36px', '48px']
      },
      padding: {
        '28px': '28px',
        '16px': '16px',
        '18px': '18px',
        '20px': '20px',
        '24px': '24px',
      }
    },
  },
  plugins: [],
};
