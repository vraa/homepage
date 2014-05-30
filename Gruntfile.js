module.exports = function(grunt){

	grunt.initConfig({
	  connect: {
	    server : {
	    	options : {
	    		port : 9005,
	    		keepalive : true
	    	}
	    },
	    keepalive : true
	  }
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
};