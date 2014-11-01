module.exports = {
	dist: {
		options: {
			preserveComments: 'all',
			sourceMap: true
		},
		files: [
			{
				expand: true,
				cwd: '<%= path.temp %>/<%= folder.scripts %>',
				src: ['*.js', '!*.min.js'],
				dest: '<%= path.production %>/<%= folder.scripts %>'
			}
		]
	}
};