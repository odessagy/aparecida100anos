module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme:{
    extend:{

      backgroundImage: theme => ({
        'bkg-videos': 'url(/src/img/lines_bg_aparecida_gray.png)'
        
        
      }),

    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}