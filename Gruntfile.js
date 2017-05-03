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
        },
        compass: {
                files: [
                  'client/scss/*.scss',
                ],
                tasks: ['compass']
              },
        watch: {
            css: {
                files: 'client/scss/*.scss',

                tasks: ['sass']
              }          
        },
  });

  // Load the plugin that provides the "uglify" task.
 // grunt.loadNpmTasks('grunt-contrib-uglify');
  
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-express-server');
  // Default task(s).
  grunt.registerTask('default', ['sass','watch','compass','server']);

};