(function(root) {

    /**
     * <i>Yes.js</i> is basically a wrapper around the <tt>setInterval</tt>
     * and <tt>clearInterval</tt> JavaScript functions. <i>Yes.js</i> makes it
     * a little easier to manage repeating interval calls.
     * 
     * @title yes.js <a href="https://codeclimate.com/github/bostrt/yes.js"><img src="https://codeclimate.com/github/bostrt/yes.js.png" /></a>
     * @overview JavaScript port of *nix command <a href="https://www.gnu.org/software/coreutils/manual/html_node/yes-invocation.html">Yes</a>.
     * @author Robert Bost <bostrt_at_gmail-d0t-com>
     * @class Yes
     * @copyright (c) 2013 Robert Bost
     * @license MIT
     */
    var Yes = function() {
        this.yesses = [];
    };

    /**
     * Calls the given callback on the given interval. The given arg passed into 
     * the callback on the given interval. If the callback returns <tt>false</tt> 
     * then the repeating interval will be canceled.
     * @method yes
     * @param {function} callback This will be called on the given interval.
     * @param {any} arg This argument will be passed into the callback.
     * @param {int} interval The interval in milliseconds to call the callback.
     * @returns {int} ID for this <tt>yes</tt> call. Use this ID when calling <tt>Yes.kill</tt>.
     */
    Yes.prototype.yes = function(callback, arg, interval)
    {
        if (!arg) {
            arg = 'y'; // Defaults to y
        }
        
        if (!interval) {
            interval = 200; // Defaults to 200 millisecond.
        }

        var timerId = setInterval(function(){
           var result = callback(arg);
           // If callback returns false, undefined, null, or empty string
           // then cancel this "yes"
           if (result === false) {
               clearInterval(timerId);
           }
        }, interval);

        this.yesses.push(timerId);
        return timerId;
    };

    /**
     * Kills a repeating interval with the given <tt>ID</tt>. If <tt>ID</tt> 
     * is false, null, undefined, or empty string then all repeating intervals 
     * that were started with calls to <tt>Yes.yes</tt> will be killed.
     * 
     * @method kill
     * @param {int} id The ID of the interval you wish to cancel. You should 
     * have kept this ID when calling <tt>Yes.yes</tt>.
     */
    Yes.prototype.kill = function(id) {
        // If no ID is provided, clears all current "yesses"
        if (!id) {
            for (var i = 0; i < this.yesses.length; i++) {
                clearInterval(this.yesses[i]);
            }
        }
        clearInterval(id);
    };

    // Export the yes.js class to the world!
    if (typeof define !== 'undefined' && define.amd) {
        define(Yes);
    } else if (typeof exports === 'object') {
        module.exports = Yes;
    } else {
        root.Yes = Yes;
    }
})(this);