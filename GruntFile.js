module.exports = function(grunt) {
  'use strict';
  
  grunt.initConfig({
    uglify: {
      main: {
        options: {
          sourceMap: true,
          sourceMapName: 'dist/StickyScroll.sourcemap.map'
        },
        files: {
          'dist/StickyScroll.min.js': ['src/StickyScroll.js']
        }
      }
    },    
    watch: {
      scripts: {
        files: [
          'src/*.js'
          ],
        tasks: ['default'],
        options: {
          spawn: false,
        },
      },
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['uglify']);
};