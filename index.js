function getUID() {
    let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    let x = Math.floor(Math.random() * 9999);
    let y = '';
    for (let i = 0; i < 3; i++) {
        y += abc[Math.floor(Math.random() * abc.length)];
    }
    let z = [new Date().getSeconds(), new Date().getMilliseconds()].join('');

    return btoa(x + y + z) + x + y + z;
};

let myArray = [];

for (let index = 0; index < 1000000; index++) {
    myArray.push(btoa(getUID()) + getUID());
}

function findDuplicates(array) {
    const duplicates = [];

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j] && !duplicates.includes(array[i])) {
                duplicates.push(array[i]);
            }
        }
    }

    return duplicates;
}

const duplicateElements = findDuplicates(myArray);

console.log(duplicateElements.length);