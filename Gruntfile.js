module.exports = function(grunt) {
  
  require('load-grunt-tasks')(grunt);
  
  grunt.initConfig({

    // bootstrap css
    less: {
      compileCore: {
        options: {
          strictMath: true,
          sourceMap: false,
          outputSourceFiles: true,
          sourceMapURL: 'bootstrap.css.map',
          sourceMapFilename: 'dist/css/bootstrap.css.map'
        },
        src: 'bootstrap/less/bootstrap.less',
        dest: 'bootstrap/dist/forSass/_bootstrap.scss'
      },
      compileTheme: {
        options: {
          strictMath: true,
          sourceMap: false,
          outputSourceFiles: true,
          sourceMapURL: 'bootstrap-theme.css.map',
          sourceMapFilename: 'dist/css/bootstrap-theme.css.map'
        },
        src: 'bootstrap/less/theme.less',
        dest: 'bootstrap/dist/forSass/_bootstrap-theme.scss'
      }
    },
    
    // project css
    sass: {
      options: {
        sourceMap: true,
        //outputStyle: 'expanded'
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
          'bootstrap/js/transition.js',
          'bootstrap/js/collapse.js',
          'bootstrap/js/dropdown.js',
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

    copy: {
      bootstrap: {
        files: [
          {expand: true, 
           flatten: true,
           filter: 'isFile',
           src: [
             'bootstrap/js/transition.js',
             'bootstrap/js/collapse.js',
             'bootstrap/js/dropdown.js'
           ], 
           dest: 'dist/js/vendor/bootstrap'}
        ],
      },
      vendor: {
        files: [
          {expand: true, 
           flatten: true,
           filter: 'isFile',
           src: [
             'js/vendor/jquery-1.12.4.min.js',
             'js/vendor/modernizr-custom.js',
             'js/vendor/selectric.js'
           ], 
           dest: 'dist/js/vendor'}
        ],
      },
      app: {
        files: [
          {expand: true, 
           flatten: true,
           filter: 'isFile',
           src: [
             'js/app/app.js',
             'js/app/app-addsite.js',
             'js/app/app-selectric.js'
           ], 
           dest: 'dist/js/app'}
        ],
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
      bootstrap: {
        files: ['bootstrap/less/bootstrap.less'],
        tasks: ['clean:css','less:compileCore','sass'],
      },
      css: {
        files: ['css/**/*.css','css/**/*.scss'],
        tasks: ['clean:css','sass'],
      },
      js: {
        files: ['js/**/*.js'],
        //tasks: ['clean:js','copy:bootstrap','copy:vendor','copy:app','concat','uglify'],
        tasks: ['clean:js','concat','uglify'],
      },
    }
  });

  // loadNpmTasks
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  // registerTask
  grunt.registerTask('default', ['clean:js','clean:css','concat','uglify','less:compileCore','sass']);
  grunt.registerTask('watcher', ['clean:js','clean:css','concat','uglify','less:compileCore','sass','watch']);
  //grunt.registerTask('default', ['clean:js','clean:css','copy:bootstrap','copy:vendor','copy:app','concat','uglify','less:compileCore','sass']);
  //grunt.registerTask('watcher', ['clean:js','clean:css','copy:bootstrap','copy:vendor','copy:app','concat','uglify','less:compileCore','sass','watch']);
  
};