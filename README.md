yes.js
======
*(c) 2013 Robert Bost*

**Author:** Robert Bost <bostrt_at_gmail-d0t-com>

**Overview:** JavaScript port of *nix command <a href="https://www.gnu.org/software/coreutils/manual/html_node/yes-invocation.html">Yes</a>.

<i>Yes.js</i> is basically a wrapper around the <tt>setInterval</tt>
and <tt>clearInterval</tt> JavaScript functions. <i>Yes.js</i> makes it
a little easier to manage repeating interval calls.



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

*int*,  ID for this <tt>yes</tt> call. Use this ID when calling <tt>Yes.stop</tt>.

Yes.stop(id)
------------
Stops a repeating interval with the given <tt>ID</tt>. If <tt>ID</tt>
is false, null, undefined, or empty string then all repeating intervals
that were started with calls to <tt>Yes.yes</tt> will be stopped.

have kept this ID when calling <tt>Yes.yes</tt>.


**Parameters**

**id**:  *int*,  The ID of the interval you wish to cancel. You should

