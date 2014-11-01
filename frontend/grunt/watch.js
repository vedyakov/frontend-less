module.exports = {
	less: {
		files: ['<%= path.development %>/<%= folder.less %>/{,**/}*.less'],
		tasks: ['less:dev', 'autoprefixer:dev']
	},
	rig: {
		files: [ '<%= path.development %>/<%= folder.scripts %>/{,**/}*.js' ],
		tasks: ['rig:dev']
	},
	livereload: {
		options: {
			interrupt: true,
			livereload: true,
			spawn: false
		},
		files: [ '<%= path.temp %>/{,**/}*' ]
	}
};
