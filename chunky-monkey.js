/**
 * Created by yang on 12/11/16.
 */
function chunk(arr, size) {
    // Break it up.
    var count = Math.floor(arr.length / size);
    var i = 0;
    var ret = [];
    for (i; i<count; i++) {
        ret.push(arr.slice(i*size, i*size+size));
    }
    if (arr.length % size) {
        ret.push(arr.slice(count*size));
    }
    return ret;
}

