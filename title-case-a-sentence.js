function titleCase(str) {
    arr = str.split(" ");

    str = arr.map(function (cur) {
        return cur.charAt(0).toUpperCase() + cur.slice(1).toLowerCase();
    });

    return str.join(' ');
}

titleCase("I'm a little tea pot");
