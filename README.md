yes.js <a href="https://codeclimate.com/github/bostrt/yes.js"><img src="https://codeclimate.com/github/bostrt/yes.js.png" /></a> [![NPM version](https://badge.fury.io/js/yes.js.png)](http://badge.fury.io/js/yes.js) <img src="http://benschwarz.github.io/bower-badges/badge@2x.png" width="130" heightb="30">
====================================================================================================
*(c) 2013 Robert Bost*

**Author:** Robert Bost <bostrt_at_gmail-d0t-com>

**Overview:** JavaScript port of *nix command <a href="https://www.gnu.org/software/coreutils/manual/html_node/yes-invocation.html">Yes</a>.

<i>Yes.js</i> is basically a wrapper around the <tt>setInterval</tt>
and <tt>clearInterval</tt> JavaScript functions. <i>Yes.js</i> makes it
a little easier to manage repeating interval calls.

<h3>Install</h3>
<tt>bower install yes.js</tt> or <tt>npm install yes.js</tt>

<h3>Examples</h3>
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



class Yes
---------
**Methods**

Yes.yes(callback, arg, interval)
--------------------------------
Calls the given callback on the given interval. The given arg passed into
the callback on the given interval. If the callback returns <tt>false</tt>
then the repeating interval will be canceled.


**Parameters**

**callback**:  *function*,  This will be called on the given interval.

**arg**:  *any*,  This argument will be passed into the callback.

**interval**:  *int*,  The interval in milliseconds to call the callback.

**Returns**

*int*,  ID for this <tt>yes</tt> call. Use this ID when calling <tt>Yes.kill</tt>.

Yes.kill(id)
------------
Kills a repeating interval with the given <tt>ID</tt>. If <tt>ID</tt>
is false, null, undefined, or empty string then all repeating intervals
that were started with calls to <tt>Yes.yes</tt> will be killed.

have kept this ID when calling <tt>Yes.yes</tt>.


**Parameters**

**id**:  *int*,  The ID of the interval you wish to cancel. You should

