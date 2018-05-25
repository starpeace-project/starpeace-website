'use strict';

module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    clean: {
      build: ['build/']
    },

    watch: {
      coffee: {
        files: ['src/server/**/*', 'src/webapp/coffee/**/*'],
        tasks: ['coffee', 'uglify']
      },
      css: {
        files: ['src/webapp/sass/*.sass'],
        tasks: ['sass', 'cssmin'],
        options: {
          livereload: true
        }
      },
      haml: {
        files: ['src/webapp/haml/**/*.haml'],
        tasks: ['haml'],
        options: {
          livereload: true
        }
      }
    },

    sass: {
      dist: {
        options: {
          sourceMap: false,
          outputStyle: 'compact'
        },
        files: [{
          expand: true,
          flatten: true,
          src: ['src/webapp/sass/*.sass'],
          dest: 'build/tmp',
          ext: '.css'
        }]
      }
    },

    cssmin: {
      target: {
        files: {
          'build/public/assets/website-main.min.css': ['build/tmp/*.css']
        }
      }
    },

    coffee: {
      asset_compile: {
        expand: true,
        flatten: true,
        cwd: "src/",
        src: ['webapp/coffee/**/*.coffee'],
        dest: 'build/tmp/',
        ext: '.js'
      },
      compile: {
        expand: true,
        flatten: true,
        cwd: "src/",
        src: ['server/**/*.coffee'],
        dest: 'build',
        ext: '.js'
      }
    },

    uglify: {
      dist: {
        files: {
          'build/public/assets/website-main.min.js': ['build/tmp/*.js']
        }
      }
    },

    copy: {
      assets: {
        files: [
          {expand: true, flatten: true, src: ['src/webapp/assets/**'], dest: 'build/public/assets', filter: 'isFile'}
        ]
      }
    },

    haml: {
      compile: {
        files: {
          'build/public/index.html': 'src/webapp/haml/index.haml',
          'build/public/privacy.html': 'src/webapp/haml/privacy.haml',
          'build/public/docs/index.html': 'src/webapp/haml/docs/index.haml',
        }
      }
    },

    run: {
      server: {
        cmd: 'node',
        args: [
          'build/server.js'
        ]
      }
    }
  });

  grunt.registerTask('build', ['clean', 'haml', 'sass', 'cssmin', 'coffee', 'uglify', 'copy']);
  grunt.registerTask('default', ['build']);
  grunt.registerTask('server', ['build', 'run:server']);
}
