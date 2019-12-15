# Boilerplate for React


##### Install Babel for browser supports (compile modern JS to legacy JS)
`npm i -D @babel/core @babel/cli @babel/preset-env`

##### run node bin using babel for one file to see the transformation
`$(npm bin)/babel ./src/greet.js`
`$(npm bin)/babel ./src/greet.js --presets=@babel/preset-env`

##### webpack config - configure loader to pass our src code through before it get bundled for distribution
`npm i -D babel-loader`

##### install babel loader for react to compile jsx <br>
`npm i -D @babel/preset-react`

##### To inject js bundle into html file <br>
`npm i -D html-webpack-plugin`

##### We can run webpack in watch mode so the changes get reflected <br>
`"dev": "webpack --watch --mode development"`

##### Create separate webpack configs using merge <br>
`npm i -D webpack-merge`   

##### To run files on local server <br>
`npm i -D webpack-dev-server`

##### Generating source maps for better debug <br>
`devTool: "source-map"`

##### Support proposed JS features with babel <br>
`npm i -D @babel/plugin-proposal-class-properties`

##### Config <br>
```$xslt
rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ['@babel/plugin-proposal-class-properties']
                }
            }
        ]
```

##### Import css in webpack using style-loader and css-loader <br>
`npm i -D css-loader style-loader`

* css-loader: handle css syntax <br>
* style-loader: take css and inject it in the html

##### hot reload rect with hot module
`npm i -S react-hot-loader`

- edit webpack file <br>
    `plugins: ['react-hot-loader/babel]`
- edit App.js <br>
    `import {hot} from 'react-hot-loader'` <br>
    `export default hot(module)(App)`
- edit package.son <br>
    `dev:hot": "webpack-dev-server --open --hot --config webpack.config.dev.js`

##### Analyze a Production JS bundle using webpack bundle analyzer
`npm i -D webpack-bundle-analyzer` <br>
- inside webpack.prod.config.js
```$xslt
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

plugins: [ new BundleAnalyzerPlugin({
        analyzerMode: 'static'
    })]
```
