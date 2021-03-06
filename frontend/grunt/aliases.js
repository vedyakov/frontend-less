module.exports = {
	"server": [
		"clean:dev",
		"rig:dev",
		"less:dev",
		"autoprefixer:dev",
		"connect:dev",
		"watch"
	],
	"build": [
		"clean:dist",
		"rig:dist",
		"less:dist",
		"autoprefixer:dist",
		"uglify:dist",
		"cssmin:dist",
		"imagemin:dist",
		"copy:dist"
	],
	"rebuild": [
		"rig:dist",
		"newer:less:dist",
		"newer:autoprefixer:dist",
		"newer:uglify:dist",
		"newer:cssmin:dist",
		"newer:imagemin:dist",
		"newer:copy:dist"
	],
	"compile": [
		"clean:dist",
		"rig:compile",
		"less:compile",
		"autoprefixer:compile",
		"imagemin:dist",
		"copy:dist"
	],
	"default": [
		"build"
	]
};
