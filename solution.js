const groupArrayElements = (array, n) => {
    // If array is empty exit function
    if (array.length <= 0) {
        console.log('Array is empty');
        return;
    }

    // Create empty array to insernt new values into
    const newArray = [];

    // Number of parts to divide array into (integer)
    const divider = Math.ceil(array.length / n);

    for (let i = 0; i < array.length; i += divider) {
        // Extract array elements and push to new array
        const part = array.slice(i, i + divider);
        newArray.push(part);
    }

    return newArray;
};

const split = groupArrayElements([1, 2, 3, 4, 5], 3);
console.log(split);

