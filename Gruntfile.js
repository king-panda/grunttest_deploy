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
          host: '54.152.248.147',
          username: 'ec2-user',
          password: '',
          privateKey: grunt.file.read("myweb.pem"),
          srcBasePath: '/home'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-ssh');
  grunt.registerTask('default', [ 'sftp' ]);
};