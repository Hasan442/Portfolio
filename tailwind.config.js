/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderColor:{
        'primary':'rgb(85 81 227)',
        'secondary':'#2b2d77'
            }
    },
    
    fontFamily:{
      'main-font' : 'Sriracha',
      'Second-font':'Open Sans'
    }
  },
  plugins: [],
}

