
// leverage the "http-proxy-middleware"


const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app) {
    app.use('/v1/passenger', 
            createProxyMiddleware({
                target: 'https://api.instantwebtools.net',
                changeOrigin: true,
            })
    );
}