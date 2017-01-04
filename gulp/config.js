module.exports = {
    autoprefixer: {
        browsers: [
            'last 2 versions',
            'safari 5',
            'ie 9',
            'opera 12.1',
            'ios 6',
            'android 4'
        ],
        cascade: true
    },

    // JS config
    js: {
        src: [
            "bower_components/jquery/dist/jquery.min.js",
            "bower_components/velocity/velocity.min.js",
            "bower_components/angular/angular.min.js",
            "bower_components/angular-ui-router/release/angular-ui-router.min.js",
            "./scripts/dev/js/*.js",
            "./scripts/dev/js/**/*.js"
        ],
        dest: './scripts',
        concat: "bundle.js"
    },

    //TypeScript config
    typescript: {
        src: [
          './scripts/dev/ts/*.ts',
          './scripts/dev/ts/**/*.ts'
        ],
        dest: './scripts/dev/js/compiled',
        tsconfig: './scripts/dev/ts/tsconfig.json'
    },

    // LESS config
    less: {
        src: './styles/*.less',
        dest: './styles'
    },

    // Icons config
    icons: {
        src: './images/icons/*',
        dest: './styles/common',
        template: './gulp/icons-template',
        concat: 'icons.less'
    },

    // Browser Sync config
    bsync: {
        base: './',
        start: './'
    },

    // Watch config
    watch: {
        less: 'styles/**/*.less',
        icons: 'images/icons/*',
        js: 'scripts/dev/js/**/*.js',
        ts: 'scripts/dev/ts/**/*.ts'
    },

    // Plugins config
    plugins: {
        scope: ['dependencies', 'devDependencies', 'peerDependencies'],
        rename: {
            'gulp-sourcemaps': 'sourcemaps',
            'gulp-plumber': 'plumber',
            'gulp-typescript': 'ts',
            'gulp-less': 'less',
            'gulp-autoprefixer': 'autoprefixer',
            'gulp-image-data-uri': 'uri',
            'gulp-concat': 'concat',
            'gulp-ignore': 'ignore',
            'gulp-babel': 'babel'
        }
    }
};
