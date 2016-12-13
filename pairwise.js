/**
 * Created by yang on 12/13/16.
 */

/*
* My Solution
* 感觉是个很烂的解法,需后续修改
*/
function pairwise(arr, arg) {
    var index = 0;
    var ret = arr.map(function(cur, ind) {
        arr[ind] = '*';
        index = arr.indexOf(arg-cur);
        console.log(arr,cur,index);
        if ((index < 0)) {
            //no match
            return 0;
        } else {
            //match!
            arr[index] = 'a';
            return index+ind;
        }
    });

    if (ret.length) {
        return ret.reduce(function (pre, cur) {
            return pre + cur;
        });
    } else {
        return 0;
    }
}

console.log(pairwise([], 2));

