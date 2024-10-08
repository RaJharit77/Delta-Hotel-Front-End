/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        bordeaux: '#800020', // Couleur bordeaux
        dore: '#D4AF37',     // Couleur doré
        creme: '#FFFDD0',
        noir: '#000000',       // Couleur noir pour l'élégance
        or: '#FFD700',         // Couleur or pour les accents luxueux
        blancCasse: '#F5F5DC', // Couleur blanc cassé pour l'équilibre et la lumière
        marineFonce: '#002147',// Couleur marine foncé pour un look formel
        argente: '#C0C0C0',    // Couleur argenté pour des touches modernes
        ivoire: '#FFFFF0',
        emerald: {
          950: '#0B6B43', // Couleur vert émeraude
        },
      },
    },
  },
  plugins: [],
}

