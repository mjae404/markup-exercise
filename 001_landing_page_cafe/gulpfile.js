const gulp = require("gulp");
const merge = require("merge-stream");
const fileinclude = require("gulp-file-include");
const browserSync = require("browser-sync").create();
const dartSass = require("dart-sass");
const sass = require("gulp-sass")(require("sass"));
const Fiber = require("fibers");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const del = require("del");

const clean = () => {
    return del(["dist"]);
};

const copy = () => {
    const image = gulp.src(["src/img/**/*"]).pipe(gulp.dest("./dist/img/"));
    const js = gulp.src(["src/js/**/*"]).pipe(gulp.dest("./dist/js/"));
    return merge(image, js);
};

const sassToCss = () => {
    const options = {
        fiber: Fiber,
        sass: {
            outputStyle: "expanded",
            indentType: "tab",
            indentWidth: 1,
            compiler: dartSass,
        },
    };

    return gulp
        .src("src/scss/**/**/**.scss")
        .pipe(sourcemaps.init())
        .pipe(sass(options).on("error", sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write("./maps"))
        .pipe(gulp.dest("./dist/css"))
        .pipe(browserSync.stream());
};

const includeFile = () => {
    return gulp
        .src([
            "./src/html/**/**/**.html",
            "!" + "./src/html/include/**.html",
            "!" + "./src/html/html*",
        ])
        .pipe(
            fileinclude({
                prefix: "@@",
                bashpath: "@file",
            })
        )
        .pipe(gulp.dest("./dist/"))
        .pipe(browserSync.stream());
};

const sync = () => {
    browserSync.init(null, {
        server: {
            baseDir: "dist",
            directory: true,
            index: "index.html",
        },
    });

    gulp.watch(
        "./src/**/**/**/**",
        gulp.parallel([copy, sassToCss, includeFile])
    );
    gulp.watch("src/**/**/**/**").on("change", browserSync.reload);
};


gulp.task('default', gulp.series(clean, [
    copy,
    sassToCss,
    includeFile,
    sync,
]));