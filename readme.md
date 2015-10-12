# call-back

> node style callback uitl.

__Why?!__

Most of the CLI app I have made with node have a common pattern:

```js
output(data, function(err, result) {
	if (!err) {
		console.log(result)
	} else {
		throw new Error(err);
	}
});
```

Wanted to reduce it:

```js
output(data, cb);
```


## Install

```
$ npm install --save call-back
```


## Usage

```js
var cb = require('call-back');

output(data, cb); 
// ^ where output is a module that as node-style callback.
```


## License

MIT © [Hemanth.HM](http://h3manth.com)
