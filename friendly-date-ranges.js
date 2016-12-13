/**
 * Created by yang on 12/13/16.
 */

function makeFriendlyDates(arr) {
    var start = arr[0].split('-').map(function (cur) {
        return cur.parseInt();
    });
    var end = arr[1].split('-').map(function (cur) {
        return cur.parseInt();
    });

    var startFlag = 111, endFlag = 111;
    var startUTC = Date.UTC(start[0], start[1], start[2]);
    var endUTC = Date.UTC(end[0], end[1], end[2]);
    var curYear = new Date().getUTCFullYear();

    if ((curYear == start[0]) || ())

    return arr;
}

makeFriendlyDates(['2016-07-01', '2016-07-04']);
