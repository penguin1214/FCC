/**
 * Created by yang on 12/11/16.
 */
function where(arr, num) {
    // Find my place in this sorted array.
    arr.push(num);
    arr.sort(function(a,b) {
        return a-b;
    });

    return arr.indexOf(num);
}

where([40, 60], 50);

