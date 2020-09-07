# randoizer
The Node.js package to generate random stuff! (Yes, like numbers.)

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