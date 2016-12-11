/**
 * Created by yang on 12/11/16.
 */

function destroyer(arr) {
    // Remove all the values
    var args = Array.prototype.slice.call(arguments);
    var source = args[0];
    var targets = args.slice(1);
    arr = source;
    for (var i = 0; i<targets.length; i++) {
        var tar = targets[i];
        arr = arr.filter(function(value) {
            return !(value == tar);
        });
        console.log(arr);
    }

    return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


