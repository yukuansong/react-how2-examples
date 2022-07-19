
// leverage the "http-proxy-middleware"


const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app) {
    app.use('/get-data', 
            createProxyMiddleware({
                target: 'http://localhost:5000',
                changeOrigin: true,
            })
    );
}