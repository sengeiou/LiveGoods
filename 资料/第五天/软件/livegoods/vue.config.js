module.exports = {
    devServer: {
        port:80,
        proxy: {
            '/api': {
                target: 'http://localhost:4006',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
