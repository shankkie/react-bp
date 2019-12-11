# Boilerplate for React


### Install Babel for browser supports (compile modern JS to legacy JS)
`npm i -D @babel/core @babel/cli @babel/preset-env`

### run node bin using babel for one file to see the transformation
`$(npm bin)/babel ./src/greet.js`
`$(npm bin)/babel ./src/greet.js --presets=@babel/preset-env`

### webpack config - configure loader to pass our src code through before it get bundled for distribution
`npm i -D babel-loader`

install babel loader for react to compile jsx <br>
`npm i -D @babel/preset-react`

To inject js bundle into html file <br>
`npm i -D html-webpack-plugin`

We can run webpack in watch mode so the changes get reflected <br>
`"dev": "webpack --watch --mode development"`

Create separate webpack configs using merge <br>
`npm i -D webpack-merge`   

To run files on local server <br>
`npm i -D webpack-dev-server`

Generating source maps for better debug <br>
`devTool: "source-map"`

Support proposed JS features with babel <br>
`npm i -D @babel/plugin-proposal-class-properties`

Config <br>
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
