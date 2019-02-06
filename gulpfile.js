"use strict";

const { src, dest } = require("gulp");
const imagemin = require("gulp-imagemin");

function optimize() {
  return src(["**/*", "!**/README.md"], { cwd: "src" })
    .pipe(imagemin())
    .pipe(dest("dist/"));
}

exports.default = optimize;
