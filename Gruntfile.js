module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'client',
        src: ['scss/*.scss'],
        dest: 'client/css',
        ext: '.css'
      }]
    }
  }
  });

  // Load the plugin that provides the "uglify" task.
 // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  // Default task(s).
  grunt.registerTask('default', ['sass']);

};