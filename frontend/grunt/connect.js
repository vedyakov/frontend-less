module.exports = {
	dev: {
		options: {
			port: '<%= connect.port %>',
			host: '*',
			hostname: '*',
			livereload: true,
			base: [
				'<%= path.temp %>',
				'<%= path.development %>',
				'<%= path.production %>'
			]
		}
	}
};