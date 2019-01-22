function alternatingCharacters(s) {
    var arr = s.split('');
    var counter = 0;
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            arr.splice(i + 1, 1);
            counter++;
            i--;
        }
    }
    return counter;
}
module.exports = alternatingCharacters;
