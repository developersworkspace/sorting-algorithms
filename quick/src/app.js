function sort(arr, left, right) {
    var len = arr.length,
        pivot,
        partitionIndex;


    if (left < right) {
        pivot = right;
        partitionIndex = partition(arr, pivot, left, right);

        //sort left and right
        sort(arr, left, partitionIndex - 1);
        sort(arr, partitionIndex + 1, right);
    }
    return arr;
}


function partition(arr, pivot, left, right) {
    var pivotValue = arr[pivot],
        partitionIndex = left;

    for (var i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(arr, right, partitionIndex);
    return partitionIndex;
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let array = [10, 15, 7, 70, 20, 18, 14, 8, 19, 23];
console.log(array);
console.log(sort(array, 0, array.length - 1));