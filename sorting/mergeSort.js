function merge(arr, lefti, leftj, righti, rightj) {
    let a = Array(leftj - lefti + 1);
    let b = Array(rightj - righti + 1);
    let k = 0;

    for (let i = lefti; i <= leftj; i++) {
        a[k] = arr[i];
        k++;
    }

    k = 0;
    for (let j = righti; j <= rightj; j++) {
        b[k] = arr[j];
        k++;
    }

    let c = [];
    let i = 0, j = 0;
    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            c.push(a[i]);
            i++
        } else {
            c.push(a[j]);
            j++
        }
    }

    while (j < b.length) {
        c.push(b[j]);
        j++;
    }

    while (i < a.length) {
        c.push(a[i]);
        i++;

    }

    // Copy back to arr
    k = 0;
    for (let i = lefti; i <= rightj; i++) {
        arr[i] = c[k++];
    }
}

function mergeSort(arr, i, j) {
    if (i >= j) return; 
    let mid = Math.floor((i + j) / 2);
    mergeSort(arr, i, mid);
    mergeSort(arr, mid + 1, j);
    merge(arr, i, mid, mid + 1, j);
}

let arr = [9, 1, -1, 3, 8, 12, 4, 6, 11, 2];

mergeSort(arr, 0, arr.length - 1);

console.log(arr); 
