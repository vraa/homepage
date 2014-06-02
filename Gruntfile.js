module.exports = function(grunt){

	grunt.initConfig({
		sass : {
			dist : {
				files : {
					'css/main.css' : 'css/main.scss'
				}
			}
		},
		watch : {
			css : {
				files : '**/*.scss',
				tasks : ['sass']
			}
		},
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
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
};