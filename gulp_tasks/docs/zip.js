const gulp = require('gulp');
const zip = require('gulp-zip');

gulp.task('zip',()=>{
	return gulp.src('Evie/**/*',{base: "."})

	.pipe(zip('evie_theme.zip'))
	.pipe(gulp.dest('docs/downloads/'))
});

gulp.task('zip_docs',()=>{
	//return gulp.src(['gulp_tasks/**/*','src/**/*','app.js','gulpfile.js','LICENSE', 'package.json', 'README.md'],{base: "."})
	return gulp.src(['gulp_tasks/**/*','src/**/*','app.js','gulpfile.js', 'package.json'],{base: "."})
	.pipe(zip('evie_source.zip'))
	.pipe(gulp.dest('docs/downloads/'))
});