yes.js <a href="https://codeclimate.com/github/bostrt/yes.js"><img src="https://codeclimate.com/github/bostrt/yes.js.png" /></a> [![NPM version](https://badge.fury.io/js/yes.js.png)](http://badge.fury.io/js/yes.js) <img src="http://benschwarz.github.io/bower-badges/badge@2x.png" width="130" heightb="30">
====================================================================================================
_Yes.js_ is basically a wrapper around the `setInterval`
and `clearInterval` JavaScript functions. _Yes.js_ makes it
a little easier to manage repeating interval calls.

Install
------
`bower install yes.js` or `npm install yes.js`

_Node.js users..._`var Yes = require('yes.js');`

API
-----
http://bostrt.github.io/yes.js/

Examples
-------
```javascript
var myYes = new Yes();
var yesID = myYes.yes(function(str) {
    console.log(str);
}, "Oh yes!", 1000);

// ...

yes.kill(yesID);
```

```javascript

function getUserLocation() {
...
}

var myYes = new Yes();

// Same old string
myYes.yes(function(str) {
    console.log(str);
}, "Oh Yes!", 1000);

// You can even pass functions!
myYes.yes(function(func) {
    console.log("User is at " + func());
}, getUserLocation, 5000);

// ...
// Let's kill both of our intervals.
myYes.kill();
```
