const gulp = require('gulp');
const jasmine = require('gulp-jasmine');
const reporters = require('jasmine-reporters');

gulp.task('default', () => {

});

gulp.task('test', () => {
	gulp.src('spec/ledger.js')
		.pipe(jasmine());
});
