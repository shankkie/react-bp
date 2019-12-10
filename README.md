# Boilerplate for React


### Install Babel for browser supports (compile modern JS to legacy JS)
`npm i -D @babel/core @babel/cli @babel/preset-env`

### run node bin using babel for one file to see the transformation
`$(npm bin)/babel ./src/greet.js`
`$(npm bin)/babel ./src/greet.js --presets=@babel/preset-env`

### webpack config - configure loader to pass our src code through before it get bundled for distribution
`npm i -D babel-loader`

