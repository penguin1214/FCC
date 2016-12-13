/**
 * Created by yang on 12/13/16.
 */
var Person = function(firstAndLast) {
    var first = firstAndLast.split(' ')[0];
    var last = firstAndLast.split(' ')[1];

    this.getFirstName = function() {
        return first;
    };

    this.getLastName = function() {
        return last;
    };

    this.getFullName = function() {
        return first + ' ' + last;
    };

    this.setLastName = function(l) {
        last = l;
    };

    this.setFirstName = function(f) {
        first = f;
    };

    this.setFullName = function(n) {
        first = n.split(' ')[0];
        last = n.split(' ')[1];
    };

    return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();

