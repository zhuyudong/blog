module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    styles: {
      options: {
        processors: []
      },
      dist: {
        file: [{
          expand: true,
          cwd: 'dev/',
          src: ['**/*.css'],
          dest: 'prod/'
        }]
      }
    }
  });
  grunt.loadNpmTasks('grunt-postcss');
};