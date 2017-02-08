function sort(ar) {
    for (let i = (ar.length - 1); i >= 0; i--) {
        for (let j = 1; j <= i; j++) {
            if (ar[j - 1] > ar[j]) {
                let temp = ar[j - 1];
                ar[j - 1] = ar[j];
                ar[j] = temp;
            }
        }
    }

    return ar;
}

let array = [10, 15, 7, 70, 20, 18, 14, 8, 19, 23];
console.log(array);
console.log(sort(array));