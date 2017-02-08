function sort(ar) {
    for (let i = 1; i < ar.length; i++) {
        let index = ar[i];
        let j = i;
        while (j > 0 && ar[j - 1] > index) {
            ar[j] = ar[j - 1];
            j--;
        }
        ar[j] = index;
    }

    return ar;
}

let array = [10, 15, 7, 70, 20, 18, 14, 8, 19, 23];
console.log(array);
console.log(sort(array));