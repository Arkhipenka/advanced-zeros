module.exports = function getZerosCount(number, base) {
  // your implementation
var i = 2;
    var repb = base;
    var arr = [];
    
    while (i <= base) {
        if (repb % i === 0) {
            repb = repb/i;
            arr.push([i,1]);
        } else {
            i++;
        }
    }     
    for (var i = 0; i< arr.length - 1; i++) {
        if (arr[i][0] === arr[i+1][0]) {
            arr[i][1]++;
            arr.splice(i+1, 1);
            i--;
        }
    }
    function someSum(number, cof) {
        var result = 0;
        var check = true;
        var i = 1;
        
        while (check) {
            result = result + Math.floor(number/Math.pow(cof,i));
            i++;
            if (number < Math.pow(cof,i)) {
                check = false;
            }
        }
        return result;
    }
    var min = Math.floor(1/arr[0][1] * someSum(number,arr[0][0]));
     
    for (var i = 1; i < arr.length; i++) {
        if (min > Math.floor(1/arr[i][1] * someSum(number,arr[i][0]))) {
            min = Math.floor(1/arr[i][1] * someSum(number,arr[i][0]));
        }
    }
    return min;
}
