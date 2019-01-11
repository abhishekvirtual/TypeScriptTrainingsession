var fs = require('fs');
var path = require('path');
var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
    mode: 'development',
    devtool:'inline-source-map',
    entry:[
    path.resolve(__dirname,'TypeScriptNotes','app','app.ts')
    //  path:path.resolve(__dirname,'TypeScriptNotes','app'),
    //  publicPath:'/',
    //  filename:'index.ts'
    ],
    target:'node',
    resolve: {
      // Add '.ts' and '.tsx' as a resolvable extension.
      extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
    },
    devServer: {
      inline: false,
      contentBase: "./dist",
    },
    output:{
      path:path.resolve(__dirname,'dist'),
      publicPath:'/',
      filename:'index.js'
    },
    module:{
      rules:[
        {
          test: /\.tsx?$/,
          exclude:/(node_modules|bower_components)/,
          loader: 'ts-loader',
      },
      ]
    },
    externals:nodeModules
}

