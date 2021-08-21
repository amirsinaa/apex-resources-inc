// bundle.config.js
module.exports = {
  bundle: {
    main: {
      scripts: './js/main.js',
      styles: './css/main.css'
    },
    vendor: {
      scripts: [
        './vendor/jquery/jquery.min.js',
        './vendor/bootstrap/js/bootstrap.bundle.min.js',
        './vendor/jquery-easing/jquery.easing.min.js',
        './vendor/wowjs/wow.min.js',
        './vendor/waypoints/jquery.waypoints.min.js',
        './vendor/owl.carousel/dist/owl.carousel.min.js'
      ],
      styles: [
        './vendor/bootstrap/css/bootstrap.min.css',
        './vendor/animate.css/animate.min.css',        
        './vendor/owl.carousel/dist/assets/owl.carousel.min.css',
        './vendor/owl.carousel/dist/assets/owl.theme.default.min.css'
      ],
    }
  }
};