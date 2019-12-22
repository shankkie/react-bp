# Boilerplate for React


##### Install Babel for browser supports (compile modern JS to legacy JS)
`npm i -D @babel/core @babel/cli @babel/preset-env`

##### run node bin using babel for one file to see the transformation
`$(npm bin)/babel ./src/greet.js`
`$(npm bin)/babel ./src/greet.js --presets=@babel/preset-env`
- we can also use npx to do this <br>
`npx babel ./src/greet.js`

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
##### Externalize the dependencies to be loaded via CDN
- inside webpack.prod.config.js
```$xslt
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM

    }
```
- inside index.html
```$xslt
<% if(process.env.NODE_ENV === 'production') {%>
   <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
   <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<% } %>
```
##### Interesting part now to support IE :) 
`npm i -S @babel/polyfill`

- changes to webpack base file version 1
    ```$xslt
        presets: [ ['@babel/preset-env', {
            targets: {
                chrome: 68
            },
            useBuiltIns: 'entry'
        }]]
    ```
- run in terminal to get the lists<br>
    `npx browserslist "last 2 versions, not dead"`

- changes to webpack base file version 2
     ```$xslt
            presets: [ ['@babel/preset-env', {
                targets: {
                    chrome: 68
                },
                useBuiltIns: 'entry'
            }]]
        ```
##### Asynchronously loading webpack bundle
install `@babel/plugin-syntax-dynamic-import` <br>
```
const Warning = React.lazy( () => import('./Warning'));
{ this.state.count > 10 ?
    <React.Suspense fallback={null}>
        <Warning/>
    </React.Suspense>
    : null
}
```
##### Testing using Jest <br>
`npm i -D jest`  <br>
then in package.json, <br>
`"test": "jest"`<br>
`npm i -D react-testing-library jest-dom` <br>
`npm i -D  @testing-library/react @testing-library/jest-dom`
 
To overcome the below error,
```
    Jest encountered an unexpected token
    This usually means that you are trying to import a file which Jest cannot parse, e.g. it's not plain JavaScript.
```
- copy and paste the options objects for babel loader as JSON in a separate file called .babelrc

if encounter an issue, with babel version issues,<br>
` npm i -D babel-jest babel-core@bridge`

if encounter an issue, with import (purely happens because the test is running in node), we need to install another library<br>
` npm i -D babel-plugin-dynamic-import-node`

#### Setup testing global in jest
create a new file jest.config.js
```
module.exports = {
     setupTestFrameworkScriptFile : '<rootDir>/testSetup.js'
 };
```
create another new file testSetup.js
```
import '@testing-library/jest-dom';
// import '@testing-library/react/cleanup-after-each'

```
