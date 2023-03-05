import gulpHtmlImgWrapper from 'gulp-html-img-wrapper';
import fileinclude from 'gulp-file-include';

export const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(fileinclude())
        .pipe(gulpHtmlImgWrapper({
            logger: true, // false for not showing message with amount of wrapped img tags for each file
            extensions: ['.jpg', '.png', '.jpeg'], // write your own extensions pack (case insensitive)
        }))
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browsersync.stream())
}