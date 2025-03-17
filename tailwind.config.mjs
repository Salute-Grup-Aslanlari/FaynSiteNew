/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      extend: {
        maskImage: {
          'mask-pattern': "url('/medias/mask.svg')",
        },
        maskSize: {
          '80': '80%',
        },
        maskPosition: {
          'center': 'center',
        },
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite', // 10 saniyede tam tur
        'fade-in': 'fadeIn 1s ease-out forwards', // Yeni eklenen fade-in animasyonu
        'slide-in': 'slideIn 1s ease-out forwards', // Yeni eklenen slide-in animasyonu
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['Source Sans 3', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateX(50px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
