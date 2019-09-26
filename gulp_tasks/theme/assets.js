// theme_assets
// Move the necessary images to the theme folder ('Evie/assets')

const gulp = require('gulp');

gulp.task('theme_assets', function(done){
	// gulp.src(['src/theme/assets/**/*']).pipe(gulp.dest('build/')); // Transfer every asset
	// return gulp.src(['./README.md',"./LICENSE"]).pipe(gulp.dest('build/')); // Transfer readme and license
	gulp.src(['src/theme/assets/**/*']).pipe(gulp.dest('build/'));
	return gulp.src(['src/CNAME']).pipe(gulp.dest('build/'));
});
