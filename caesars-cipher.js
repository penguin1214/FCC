/**
 * Created by yang on 12/11/16.
 */
function rot13(str) { // LBH QVQ VG!
    var re = /[A-Z]/;
    var ret = [];
    for (var i = 0; i<str.length; i++) {
        if (str[i].match(re)) {
            // convert character
            var charCode = 13 + str.charCodeAt(str.indexOf(str[i]));
            ret.push(String.fromCharCode(charCode>90 ? (65+(charCode%90-1)) : charCode));
        }else {
            ret.push(str[i]);
        }
    }
    return ret.join('');
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
