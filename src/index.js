exports.min = function min(array) {
    return array && array.length ? Math.min(...array) : 0;
}

exports.max = function max(array) {
    return array && array.length ? Math.max(...array) : 0;
}

exports.avg = function avg(array) {
    if (array && array.length) {

        var sum = 0;
        for (var i = 0; i < array.length; i++) {
            sum += parseInt(array[i], 10);
        }

        return sum / array.length;

    }

    return 0;
}
