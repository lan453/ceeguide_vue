const { defineConfig } = require('@vue/cli-service');
// 导出一个对象，该对象是通过调用 defineConfig 函数生成的 Vue CLI 配置
module.exports = defineConfig({
  // 是否对依赖进行转译
  transpileDependencies: true,
  // 是否在保存时执行 eslint 检查
  lintOnSave: false,
  // 打包后的根路径，通常是相对路径
  publicPath: './',
  // 打包输出目录
  outputDir: 'dist',
  // 静态资源目录，相对于 outputDir
  assetsDir: 'static',
  // 开发服务器配置
  devServer: {
    // 当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html
    historyApiFallback: true,
    // 指定主机名
    host: 'cloud.gzgkzytb.cn',
    // 指定端口
    port: 8094,
    // 配置代理
    proxy: {
      // 代理根路径
      '/': {
        // 是否启用 WebSocket
        ws: false,
        // 目标服务器地址
        target: 'https://cloud.gzgkzytb.cn', // 使用https协议
        // 改变源头，即将请求头中的 host 设置为目标服务器地址
        changeOrigin: true,
        // 不重写请求地址
        pathRewrite: {
          '^/': '/'
        }
      },
      // WebSocket 的代理
      '/ws': {
        ws: true,
        target: 'ws://cloud.gzgkzytb.cn'
      }
    }
  },
  // 配置 webpack
  configureWebpack: {
    // 性能相关配置
    performance: {
      // 入口起点的最大体积
      maxEntrypointSize: 50000000,
      // 生成文件的最大体积
      maxAssetSize: 30000000,
    },
  },
});
