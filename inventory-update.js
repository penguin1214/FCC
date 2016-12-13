/**
 * Created by yang on 12/13/16.
 */

/*
* My Solution
* */
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    var names = [];
    arr1.map(function(cur) {
        names.push(cur[1]);
    });
    console.log(names);

    arr2.forEach(function(cur) {
        var index = names.indexOf(cur[1]);
        if (index < 0) {
            //add to curInv
            arr1.push(cur);
            names.push(cur[1]);
        } else {
            arr1[index][0] += cur[0];
        }
    });

    console.log(arr1);
    arr1.sort(function(a,b) {
        if (a[1] < b[1]) {
            return -1;
        } else {
            return 1;
        }
    });

    return arr1;
}

/*
* Intermediate Solution
* 由于arr1一定包含于arr2,故直接用arr2来排序即可。
*/
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!

    var index;
    var arrCurInvName = []; // Names of arr1's items
    var arrNeInvName = []; // Names of arr2's items

    // Same as using two for loops, this takes care of increasing the number of stock quantity.
    arr1.map(function(item1) {
        return arr2.map(function(item2) {
            if (item1[1] === item2[1]) {
                item1[0] = item1[0] + item2[0]; //Increase number of stock
            }
        });
    });

    // Get item's name for new Inventory
    arr2.map(function(item) {
        arrNeInvName.push(item[1]);
    });

    // Get item's name for Current Inventory
    arr1.map(function(item) {
        arrCurInvName.push(item[1]);
    });

    // Add new inventory items to current inventory.
    arrNeInvName.map(function(item) {
        if (arrCurInvName.indexOf(item) === -1) {
            index = arrNeInvName.indexOf(item);
            arr1.push(arr2[index]);
        }
    });

    // Sort the array alphabetically using the second element of the array as base.
    arr1.sort(function(currItem, nextItem) {

        //Ternary function to avoid using if else
        return currItem[1] > nextItem[1] ? 1 : -1;
    });

    return arr1;
}

/*
* Advanced Solution
*/
function updateInventory(arr1, arr2) {
    var flag = 0;
    arr2.forEach(function(item) {
        flag = 0;
        arr1.forEach(function(list) {
            // If the product is already present, increase the quantity
            if(item[1] === list[1]) {
                list[0] += item[0];
                flag = 1;
            }
        });
        //If not already present, add the product
        if(flag === 0)
            arr1.push(item);
    });

    //Return the sorted inventory in alphabetical order by product name
    return arr1.sort(function(a, b) {
        return a[1] > b[1] ? 1 : -1;
    });
}
// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
