/**
 * Created by yang on 12/13/16.
 */
/*
* My Solution
*/
function sym(args) {
    args = Array.prototype.slice.call(arguments);
    raw = args.reduce(function (a,b) {
        var ret = [];
        a.forEach(function(cur) {
            if ((b.indexOf(cur) == -1) && (ret.indexOf(ret) == -1)) {
                ret.push(cur);
            }
        });

        b.forEach(function(cur) {
            if (a.indexOf(cur) == -1 && (ret.indexOf(ret) == -1)) {
                ret.push(cur);
            }
        });

        return ret;
    });
    
    return raw.filter(function (cur, index) {
        return index == raw.indexOf(cur);
    });
}
sym([1, 2, 3], [5, 2, 1, 4]);

/*
* Intermediate Solution
*/

function sym() {

    // Convert the argument object into a proper array
    var args = Array.prototype.slice.call(arguments);

    // Return the symmetric difference of 2 arrays
    var getDiff = function(arr1, arr2) {

        // Returns items in arr1 that don't exist in arr2
        function filterFunction(arr1, arr2) {
            return arr1.filter(function(item) {
                return arr2.indexOf(item) === -1;
            });
        }

        // Run filter function on each array against the other
        return filterFunction(arr1, arr2)
            .concat(filterFunction(arr2, arr1));
    };

    // Reduce all arguments getting the difference of them
    var symarray = args.reduce(getDiff, []);

    // Run filter function to get the unique values
    var unique = symarray.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
    });
    return unique;
}

// test here
sym([1, 2, 3], [5, 2, 1, 4]);

/*
* Advanced Solution
*/
function sym() {
    // difference between set A and set B
    const diff = (A, B) => new Set([...A].filter(n => !B.has(n)));
    // spread operator to convert array like object to array
    const result = [...arguments]
    // map elements in arguments (array) to Set
.map(arr => new Set(arr))
    // using the formula in https://en.wikipedia.org/wiki/Symmetric_difference
    // i reduce it by uniting the diff(A, B) and diff(B, A)
.reduce((acc, set) => new Set([...diff(acc, set), ...diff(set, acc)]));

    // convert the set to array by using spread operator again
    return [...result];
}

// test here
sym([1, 2, 3], [5, 2, 1, 4]);