module.exports = function(grunt) {
  
  require('load-grunt-tasks')(grunt);
  
  grunt.initConfig({
    
    sass: {
      options: {
        sourceMap: true,
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          'dist/css/styles.css': ['css/main.scss']
        }
      }
    },
    
    concat: {
      js: {
        src: [
          'node_modules/bootstrap-sass/assets/javascripts/bootstrap/transition.js',
          'node_modules/bootstrap-sass/assets/javascripts/bootstrap/collapse.js',
          'node_modules/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js',
          'js/vendor/modernizr-custom.js',
          'js/vendor/selectric.js',
          'js/app/app.js',
          'js/app/app-addsite.js',
          'js/app/app-selectric.js'
        ],
        dest: 'dist/js/bundle.js',
      }
    },

    uglify: {
      scripts: {
        files: {
          'dist/js/bundle.min.js': ['dist/js/bundle.js']
        }
      }
    },
    
    clean: {
      js: [
       'dist/js'
      ],
      css: [
       'dist/css'
      ]
    },

    watch: {
      css: {
        files: ['css/**/*.css','css/**/*.scss'],
        tasks: ['clean:css','sass'],
      },
      js: {
        files: ['js/**/*.js'],
        tasks: ['clean:js','concat','uglify'],
      },
    }
  });

  // loadNpmTasks
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  // registerTask
  grunt.registerTask('default', ['clean:js','clean:css','concat','uglify','sass']);
  grunt.registerTask('watcher', ['clean:js','clean:css','concat','uglify','sass','watch']);
  
};