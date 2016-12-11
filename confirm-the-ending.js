/**
 * Created by yang on 12/11/16.
 */
function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor

    var len = str.length;
    var ending = str.slice(len-target.length);
    if (ending === target){
        return true;
    }else{
        return false;
    }
}

confirmEnding("Bastian", "n");

