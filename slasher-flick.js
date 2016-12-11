/**
 * Created by yang on 12/11/16.
 */
function slasher(arr, howMany) {
    // it doesn't always pay to be first
    arr.splice(0, howMany);
    return arr;
}

console.log(slasher([1, 2, 3], 2));

