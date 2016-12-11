/**
 * Created by yang on 12/11/16.
 */
function findLongestWord(str) {
    var arr = str.split(' ');
    var len = arr.map(function (cur) {
        return cur.length;
    });

    var max = len.sort(function (a, b) {
        return b-a;
    })[0];

    return max;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
