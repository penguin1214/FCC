/**
 * Created by yang on 12/11/16.
 */
function repeat(str, num) {
    // repeat after me
    ret = '';
    var i = 0;
    for (i; i<num; i++) {
        ret = ret.concat(str);
    }
    return ret;
}

repeat("abc", 3);

