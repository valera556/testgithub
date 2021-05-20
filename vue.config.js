module.exports = {
    devServer: {
        // proxy: 'http://localhost:9000/sarafan_main_war_exploded/',
        proxy: 'http://localhost:9000',
        port: 8000
    },
    publicPath: process.env.VUE_APP_API_ENDPOINT,
    // publicPath: '/sarafan-0.0.1-SNAPSHOT/',
    // publicPath: '/sarafan_main_war_exploded/',
    // assetsDir: 'static',
    // indexPath: 'templates/index.html',
/*
    pages: {
        index: {
            // точка входа для страницы
            // entry: 'src/main/resources/static/js/main.js',
            entry: 'src/components/main.js',
            // исходный шаблон
            template: 'src/components/index.html'
        }
        // когда используется строковый формат точки входа, то
        // шаблон будет определяться как `public/subpage.html`,
        // а если таковой не будет найден, то `public/index.html`.
        // Выходное имя файла будет определено как `subpage.html`.
        // subpage: 'src/subpage/main.js'
    }
*/
}

/*
module.exports = {
    pages: {
        index: {
            // точка входа для страницы
            entry: 'src/main/resources/static/js/main.js',
            // entry: 'src/main.js'
        },
        // когда используется строковый формат точки входа, то
        // шаблон будет определяться как `public/subpage.html`,
        // а если таковой не будет найден, то `public/index.html`.
        // Выходное имя файла будет определено как `subpage.html`.
        // subpage: 'src/subpage/main.js'
    },
    devServer: {
        port: 8000,
        proxy : {
            '/message' : {
                target : 'http://localhost:9000' ,
                ws : true ,
                changeOrigin : true
            }
        }
    }
}*/
