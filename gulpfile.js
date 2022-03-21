var sassRequire = require('gulp-sass')(require('sass'));
const gsmaps = require('gulp-sourcemaps');
const gts = require('gulp-typescript');
var npmDist = require('gulp-npm-dist');
const gulpsass = require('gulp-sass');
const rename = require('gulp-rename');
const gulp = require('gulp');

const distFolderName = 'dist/';
const distFolder = gulp.dest(distFolderName);

exports.Compile_TypeScript = function (callback) {
  const typesRoot = gulp.dest('types/');

  const tsResult = () => {
    const tsPrj = gts.createProject('tsconfig.json');
    const tsSourceCode = tsPrj.src();
    const mapsInit = gsmaps.init();
    const IdentityMap = gsmaps.identityMap();
    return tsSourceCode.pipe(mapsInit).pipe(IdentityMap).pipe(tsPrj());
  };
  const srcUrlMapper = (file) => {
    let x = distFolderName + file.relative.toString().split('\\').join('/') + '.map';
    console.log('RootForSourceMaps: ' + x);
    return x;
  };

  let tsR = tsResult();

  tsR.dts.pipe(typesRoot).on('error', function (err) {
    console.log('Gulp says: ' + err.message);
  });

  tsR.js
    .pipe(
      gsmaps.write('./', {
        includeContent: false,
        addComment: true, //This "Comment" is the "COMMENT" that the browser uses to reference the file.
        sourceMappingURL: srcUrlMapper,
        sourceRoot: '../src',
      })
    )
    .pipe(distFolder);

  callback();
};
exports.Compile_Sass = function (callback) {
  gulp
    .src('src/scss/**/*.scss')
    .pipe(sassRequire())
    .pipe(
      rename(function (path) {
        path.dirname = '/css/' + path.dirname;
      })
    )
    .pipe(distFolder);
  callback();
};

exports.Copy_HTML = function (callback) {
  const distHtml = gulp.dest(distFolderName + 'html/');
  let Source = 'src/html';

  gulp.src(Source + '/**/*.html').pipe(distHtml);
  callback();
};

exports.Copy_Projects = function (callback) {
  let copyHtml = () => {
    const distHtml = gulp.dest(distFolderName + 'projects/');
    let Source = 'src/projects/';

    gulp.src(Source + '/**/*.html').pipe(distHtml);
    callback();
  };
  copyCSS = () => {
    const distProjects = gulp.dest(distFolderName + 'projects/');
    const srcProjects = 'src/projects';

    gulp.src(srcProjects + '/**/*.css').pipe(distProjects);
    callback();
  };
  copyJavaScript = () => {
    const distProjects = gulp.dest(distFolderName + 'projects/');
    const srcProjects = 'src/projects';

    gulp.src(srcProjects + '/**/*.js').pipe(distProjects);
    callback();
  };

  copyHtml();
  copyCSS();
  copyJavaScript();
};
/*-----------------------------------*/

/*
exports.copyTS = function (callback) {
  const typesRoot = gulp.dest('types/');

  const tsResult = () => {
    const tsPrj = gts.createProject('tsconfig.json');
    const tsSourceCode = tsPrj.src();
    const mapsInit = gsmaps.init();
    const IdentityMap = gsmaps.identityMap();
    return tsSourceCode.pipe(mapsInit).pipe(IdentityMap).pipe(tsPrj());
  };
  const srcUrlMapper = (file) => {
    let x = distFolderName + file.relative.toString().split('\\').join('/') + '.map';
    console.log('RootForSourceMaps: ' + x);
    return x;
  };

  let tsR = tsResult();

  tsR.dts.pipe(typesRoot).on('error', function (err) {
    console.log('Gulp says: ' + err.message);
  });

  tsR.js
    .pipe(
      gsmaps.write('./', {
        includeContent: false,
        addComment: true, //This "Comment" is the "COMMENT" that the browser uses to reference the file.
        sourceMappingURL: srcUrlMapper,
        sourceRoot: '../src',
      })
    )
    .pipe(distFolder);

  callback();
};
*/
/*-----------------------------------*/
