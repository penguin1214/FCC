/**
 * Created by yang on 12/11/16.
 */
function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    arr = arr.filter(function(value) {
        return value;
    });
    return arr;
}

bouncer([7, "ate", "", false, 9]);

