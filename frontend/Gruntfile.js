'use strict';

module.exports = function( grunt ) {
	require('time-grunt')(grunt);

	require('load-grunt-config')( grunt, {
		config: {
			connect: {
				port: '8081'
			},
			path: {
				development: 'sources',
				production: '../build',
				http: '/build',
				temp: '.tmp',
				cache: '.cache-frontend'
			},
			folder: {
				scripts: 'js',
				styles_drafts: 'css-unprefixed',
				styles: 'css',
				less: 'less',
				fonts: 'fonts',
				images: 'img',
				pictures: 'pic',
				components: 'components',
				swf: 'swf',
				video: 'video',
				audio: 'audio'
			},
			meta: {
				header: '/* Copyright 2014, INDEE Interactive */\n',
				footer: '\n/* End of source */'
			}
		}
	});
};
