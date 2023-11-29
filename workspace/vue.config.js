const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

devServer:{
  host: '0.0.0.0';
  port: 8888;
  client:{
    WebSocketURL:'ws://0.0.0.0:8888/ws';
  }
  headers:{
    'Access-Control-Allow-Origin', '*'
  }
  proxy:{
    ws:false
  }
}
