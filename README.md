## Gatsby.js Bulma CSS

> ⚠ if got an error `Node Sass version 5.0.0 is incompatible with ^4.0.0.`, follow as alternatives below:

1️⃣ change `node_modules/node-sass/package.json`, point to `version": "5.0.0"` replace with `"version": "4.14.1"`
run again with `gatsby build`

2️⃣ if as above doesn't work, try install node-sass to 4.14.1
```
npm uninstall node-sass
npm install node-sass@4.14.1
```
