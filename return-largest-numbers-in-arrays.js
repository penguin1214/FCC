/**
 * Created by yang on 12/11/16.
 */
function largestOfFour(arr) {
    // You can do this!
    arr = arr.map(function(cur) {  //cur is an array e.g [4,5,1,3]
        return Math.max.apply(Math, cur);
    });
    return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

