function sort(ar) {
    for (let i = 0; i < ar.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < ar.length; j++) {
            if (ar[j] < ar[min]) {
                min = j;
            }
        }
        let temp = ar[i];
        ar[i] = ar[min];
        ar[min] = temp;
    }

    return ar;
}

let array = [10, 15, 7, 70, 20, 18, 14, 8, 19, 23];
console.log(array);
console.log(sort(array));