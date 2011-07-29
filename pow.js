exports.pow = function (a, b) {
    /* Check if a number is passed. */
    if (isNaN (a-0) || isNaN (b-0)) {
        return null;
    }

    var ans = 1;
    for(var i = 1; i <= b; i++) {
        ans *= a;
    }
    
    return ans;
}
