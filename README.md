<div align="center">
  <br>

# randoizer

The Node.js package to generate random stuff! (Yes, like numbers.)

<a href="https://www.npmjs.com/package/randoizer"><img src="https://img.shields.io/npm/v/randoizer.svg?maxAge=3600" alt="NPM version" /></a>
<a href="https://www.npmjs.com/package/randoizer"><img src="https://img.shields.io/npm/dt/randoizer.svg?maxAge=3600" alt="NPM downloads" /></a>

<br>

<p>
<a href="https://nodei.co/npm/randoizer/"><img src="https://nodei.co/npm/randoizer.png?downloads=true&stars=true" alt="npm installnfo" /></a>
</p>

</div>

# Documentation

## Getting Started

To use randoizer, we need to install it! Run `npm install randoizer`. Once that is complete, insert this in your code:
```js
var client = require("randoizer");
```

### Getting random numbers:
```js
console.log(client.randomNoGenerator(min, max))
```

### Getting random letters:
```js
console.log(client.randomLetters(length))
```

### Getting random color hex codes:
```js
console.log(client.randomColors())
```

### Getting random names:
```js
console.log(client.randomNames())
```
