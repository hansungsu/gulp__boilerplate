const { src, dest, series } = require('gulp');
// const babel = require('gulp-babel');

const sass = require('gulp-sass')(require('sass'));

function js() {
  return src('src/js/*.js') //gulp가 확인할 파일 위치를 src()로 지정
  // .pipe(babel()) //gulp 자동으로 실행할 명령어를 pipe()로 연결한다.
  .pipe(dest('output/js'));  //최종 변경될 파일 위치를 dest()로 지정한다.
}

function css() {
  return src('src/scss/*.scss') 
  .pipe(sass().on('error', sass.logError))
  .pipe(dest('output/css')); 
  
}



exports.default = function() { //gulp default를 실행한다.
  js()
  css()
}