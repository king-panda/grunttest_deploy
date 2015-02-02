module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      coffee:{
        tasks: 'sftp',
        files:['src/index.html']
      }
    },


    sftp: {
      test: {
        files: {
          "/src": "/src/index.html"
        },
        options: {
          path: 'home',
          host: '',
          username: '',
          password: '',
          privateKey: grunt.file.read(""),
          srcBasePath: '/home'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-ssh');
  grunt.registerTask('default', [ 'sftp' ]);
};