function findMinAndRemove(array) {
    let minIndex = array.indexOf(Math.min(...array)) //indexOf returns first index at which a given element can be found (in this case: min value in array)
    return array.splice(minIndex, 1) //removes one element at given index 
}

function selectionSort(array) {
    let sortedArr = [];

    while (array.length) {
        let min = findMinAndRemove(array); // min = arr w/o min value 
        sortedArr.push(...min) //pushing arr w/o min val into new array (sortedArr) 
    }
    return sortedArr
}
