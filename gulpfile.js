 // INCLUDES
var gulp            =     require('gulp');
var gutil           =     require('gulp-util');
var connect         =     require('gulp-connect');
var concat          =     require('gulp-concat');
var tplCache        =     require('gulp-angular-templatecache');
var sass            =     require('gulp-ruby-sass');
var uglify          =     require('gulp-uglify');
var minifyCSS       =     require('gulp-minify-css');
var mainBowerFiles  =     require('main-bower-files');
var gulpFilter      =     require('gulp-filter');
var clean           =     require('gulp-clean');
var plumber         =     require('gulp-plumber');
var async           =     require('async');


var errorHandler = function (error) {
    console.log(error);
};

var bowerJs =  gulpFilter('**/*.js');

gulp.task('clean', function () {
    return gulp.src(['./build/**/*.*'], {read: false})
        .pipe(clean());
});

gulp.task('appJS', function() {
  gulp.src(['./app/**/*.js'])
        .pipe(plumber({
            errorHandler: errorHandler
        }))
        //.pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./build'));
});

gulp.task('templates', function() {
  gulp.src(['./app/common/**/*.html', './app/modules/**/*.html'])
      .pipe(plumber({
          errorHandler: errorHandler
      }))
      .pipe(tplCache('templates.js',{standalone:true}))
      .pipe(gulp.dest('./build'));
});

gulp.task('assets', function() {
    gulp.src(['./app/assets/**/*.*'])
        .pipe(plumber({
            errorHandler: errorHandler
        }))
        .pipe(gulp.dest('./build'));
});

gulp.task('appCSS', function () {
    gulp.src('./app/sass/app.scss')
        .pipe(plumber({
            errorHandler: errorHandler
        }))
        .pipe(sass({style: 'compressed'}))
        .pipe(gulp.dest('./build'));
});

gulp.task('libJS', function() {
  return gulp.src(mainBowerFiles({includeDev: true}), { base: 'bower_components/' })
      .pipe(plumber({
          errorHandler: errorHandler
      }))
      .pipe(bowerJs)
      //.pipe(uglify())
      .pipe(concat('lib.js'))
      .pipe(gulp.dest('./build'));
});

gulp.task('libCSS', function() {
  gulp.src(['!./bower_components/**/*.min.css',
      './bower_components/**/*.css'])
      .pipe(plumber({
          errorHandler: errorHandler
      }))
      .pipe(concat('lib.css'))
      .pipe(minifyCSS({keepBreaks:false}))
      .pipe(gulp.dest('./build'));
});

gulp.task('index', function() {
  gulp.src(['./app/index.html'])
      .pipe(plumber({
          errorHandler: errorHandler
      }))
    .pipe(gulp.dest('./build'));
});

gulp.task('watch',function() {

  // watch files to build
    gulp.watch(['./app/**/*.js'], ['appJS']);
    gulp.watch(['./app/sass/**/*.scss'], ['appCSS']);
    gulp.watch(['./app/common/**/*.html', './app/modules/**/*.html'], ['templates']);
    gulp.watch(['./app/assets/**/*.*'], ['assets']);
    gulp.watch(['./bower_components/**/*.js', './bower_components/**/*.css'], ['libCSS', 'libJS']);
    gulp.watch(['./app/index.html'], ['index']);

});

gulp.task('default', function() {

    var tasks = ['clean', 'appJS', 'templates', 'assets', 'index', 'libJS', 'appCSS', 'libCSS','watch'];
    var sync = tasks.map(function(task) {

        return function(callback) {

            gulp.start(task, function(err) {

                callback(err);

            });

        };

    });
    async.series(sync);

});