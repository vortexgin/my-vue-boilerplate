let mix = require('laravel-mix').webpackConfig({
    watchOptions: {
        ignored: ['node_modules'],
        poll: 500,
    },
});
let isDev = !mix.inProduction();

if (isDev) {
    mix.webpackConfig({
        devtool: "source-map"
    }).sourceMaps();
}

mix
    .copy('node_modules/vue/dist/vue.js', 'dist/vue.js')
    .js('modules/controllers/app.js', 'dist/app.js').vue()
;