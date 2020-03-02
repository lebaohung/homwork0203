// Cho một mảng các số nguyên,
// tìm cặp phần tử liền kề tích là lớn nhất và trả về kết quảc

let arr = [ 4, 8, 1, 8, 123, 8, 3];

function findMax(array) {
    let array2 =  array.map(function(item, index, array){
        if(array[index+1] === undefined) return {ele: 0, ind: index};
        return {ele: array[index]*array[index+1], ind: index}
    }).sort(function(item1, item2){
        return item1.ele < item2.ele;
    });
    console.log(array2);
    let result = "", i=0;
    do {
        result += "(" + array[array2[i].ind] + "," + array[array2[i].ind +1] + "). ";
        i++;
    } while(array2[i].ele === array2[i-1].ele)
    return result;
}

findMax(arr);