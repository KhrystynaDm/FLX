function findTypes(...arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(typeof arr[i]);
    }
    return newArr.toString();
}

findTypes(null, 5, "hello");

function executeforEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

executeforEach([1, 2, 5], function (el) {
    console.log(el)
});

function mapArray(array, callback) {
    let mapArray = [];
    executeforEach(array, function (el) {
        mapArray.push(callback(el));
    });
    return mapArray;
}

console.log(mapArray([2, 5, 8], function (el) {
    return el + 3
}));

function filterArray(array, callback) {
    let filterArray = [];
    executeforEach(array, function (el) {
        if (callback(el)) {
            filterArray.push(el);
        }
    });

    return filterArray;
}

console.log(filterArray([1, 34, 6, 9, -10, 26, -9], function (el) {
    return el > 3
}));

let data = [{
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    "age": 39,
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
},
    {
        "_id": "5b5e3168e328c0d72e4f27d8",
        "index": 1,
        "age": 38,
        "eyeColor": "blue",
        "name": "Cortez",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5b5e3168cc79132b631c666a",
        "index": 2,
        "age": 2,
        "eyeColor": "blue",
        "name": "Suzette",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e31682093adcc6cd0dde5",
        "index": 3,
        "age": 19,
        "eyeColor": "green",
        "name": "George",
        "favoriteFruit": "banana"
    }
]

function getAmountOfAdultPeople(data) {
    return filterArray(data, function (el) {
        console.log(el);
        return el.age > 18
    })
}

console.log(getAmountOfAdultPeople(data).length);

function getGreenAdultBananaLovers(data) {
    return mapArray(
        filterArray(data, function (el) {
            if ((el.favoriteFruit === "banana") && (el.eyeColor === "green")) {
                return el.name;
            }
        }),
        function (el) {
            if (el.age > 18) {
                return el.name;
            }
        }
    );
}

console.log(getGreenAdultBananaLovers(data));

function keys(obj) {
    let keysArr = [];
    for (let el in obj) {
        if (el) {
            keysArr.push(el);
        }
    }
    return keysArr;
}

console.log(keys({keyOne: 1, keyTwo: 2, keyThree: 3}));


function values(obj) {
    let valuesArr = [];
    for (let el in obj) {
        if (el) {
            valuesArr.push(obj[el]);
        }
    }
    return valuesArr;
}

console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3}));


function showFormattedDate(date) {
    let month = date.toLocaleString('en-us', {month: 'short'});
    let year = date.getFullYear();
    let day = date.getDate();
    return `Date: ${day} of ${month}, ${year}`;
}

console.log(showFormattedDate(new Date('2019-01-27T01:10:00')));

function isEvenYear(date) {
    let year = date.getFullYear();
    if (year % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEvenYear(new Date('2019-02-27T01:10:00')));


function isEvenMonth(date) {
    let month = date.getMonth() + 1;
    if (month % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEvenMonth(new Date('2019-02-27T01:10:00')));
