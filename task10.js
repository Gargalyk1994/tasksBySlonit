function getSumValuesFromObj(object) {
    let sum = 0;
    for (let key in object) {
        if (typeof object[key] === 'number') {
            sum += object[key];
        } else if (typeof object[key] === 'object' && object[key] !== null) {
            sum += getSumValuesFromObj(object[key]);
        }
    }
    return sum;
}

const obj = {
    a: 5,
    b: {
        c: 10,
        d: {
            e: 20
        }
    },
    f: 30
};

console.log(getSumValuesFromObj(obj)); // Output: 65

function getArrayKeysOnDescFromNumericValuesObject(object) {
    let arrayKeys = [];
    const clone = Object.entries(object).sort((a, b) => b[1] - a[1]);
    for (let key in clone) {
        if (typeof clone[key][1] === 'number') {
            arrayKeys.push(clone[key][0])
        }
    }
    return arrayKeys;
}

const obj2 = {name: 'Vasya', friends: 5, likes: 19, projects: 7};

console.log(getArrayKeysOnDescFromNumericValuesObject(obj2));