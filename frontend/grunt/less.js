module.exports = {
	dev: {
		options: {
			paths: ['<%= path.development %>/<%= folder.less %>']
		},
		files: [
			{
				expand: true,
				cwd: '<%= path.development %>/<%= folder.styles %>',
				src: ['*.less', '!_*.less'],
				dest: '<%= path.temp %>/<%= folder.styles %>',
				ext: '.css'
			}
		]
	},
	dist: {
		options: {
			paths: ['<%= path.development %>/<%= folder.less %>']
		},
		files: [
			{
				expand: true,
				cwd: '<%= path.development %>/<%= folder.styles %>',
				src: ['*.less', '!_*.less'],
				dest: '<%= path.temp %>/<%= folder.styles %>',
				ext: '.css'
			}
		]
	},
	compile: {
		options: {
			paths: ['<%= path.development %>/<%= folder.less %>']
		},
		files: [
			{
				expand: true,
				cwd: '<%= path.development %>/<%= folder.styles %>',
				src: ['*.less', '!_*.less'],
				dest: '<%= path.production %>/<%= folder.styles %>',
				ext: '.css'
			}
		]
	}
};