Start 1/Oct/2019

https://dev.to/dabit3/building-micro-frontends-with-react-vue-and-single-spa-52op

create new branch
`git branch ppBranch`
`git push origin ppBranch`

set up package.json
`npm init -y`

regular depedencies
- react
- react-dom
- single-spa-react
- single-spa-vue
- vue

babel depedencies
- @babel/core
- @babel/plugin-proposal-object-rest-spread
- @babel/plugin-syntax-dynamic-import
- @babel/preset-env
- @babel/preset-react babel-loader

webpack depedencies
- webpack
- webpack-cli
- webpack-dev-server
- clean-webpack-plugin
- css-loader
- html-loader
- style-loader
- vue-loader
- vue-template-compiler

create webpack.config.js
initialize single-spa by create single-spa.config.js

create .babelrc

create .gitignore for nodemodules

run app
`npm start`

```
# renders both apps
http://localhost:8080/
```

```
# renders only react
http://localhost:8080/react
```

```
# renders only vue
http://localhost:8080/vue
```


