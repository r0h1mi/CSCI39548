//RC start here//

// FOR EACH //
Array.prototype.myEach = function(callbackFn) {
    for (let i = 0; i < this.length; i++)
    {
        if (this[i] === undefined)
        {
            continue;
        }
        callbackFn(this[i], i, this);
    }
};


    /* TEST EACH  
    const arr=[1,2,3,4,5,6,7,8];

    console.log("myEach: ")
    arr.myEach((x) => console.log(x) );

    console.log("forEach: ")
    arr.forEach( (x) => console.log(x) );

    const isEven = (number) => console.log(number%2 === 0);
    arr.myEach( isEven ); 
    */


// MAP //
Array.prototype.myMap = function(callbackFn) {
    let thisnew = [];
    for (let i = 0; i < this.length; i++)
    {
        thisnew[i] = callbackFn(this[i],i,this);
    }
    return thisnew;
};

    /* TEST MAP
    console.log("Elements cubed:",arr.myMap(num => num * num * num));
    console.log("-----------\n");
    */

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
    let thisnew = [];
    for (let i = 0; i < this.length; i++)
    {
        if (callbackFn(this[i]))
        {
            thisnew.push(this[i]);
        }
    }
    return thisnew;
};


    /* TEST FILTER 
    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

    const result = words.filter(word => word.length > 6);
    const result2 = words.myFilter(word => word.length > 6);

    console.log(result);
    console.log(result2);


    // expected output: Array ["exuberant", "destruction", "present"]
    */

// SOME //
Array.prototype.mySome = function(callbackFn) {
    for (let i = 0; i < this.length; i++)
    {
        if (callbackFn(this[i],i,this))
        {
            return true;
        }
    }
    return false;
};

    /* TEST SOME 
    const array = [1, 2, 3, 4, 5];

    // checks whether an element is even
    const even = (element) => element % 2 === 0;
    const even2 = (element) => element % 2 === 0;

    console.log(array.some(even));
    console.log(array.mySome(even2));
    // expected output: true
    */


// EVERY //
Array.prototype.myEvery = function(callbackFn) {
    for (let i = 0; i < this.length; i++)
    {
        if (!(callbackFn(this[i],i,this)))
        {
            return false;
        }
    }
    return true;
}; 

    /* TEST EVERY
    const isBelowThreshold = (currentValue) => currentValue < 40;

    const array1 = [1, 30, 39, 29, 10, 13];
    const array2 = [1, 30, 39, 29, 10, 13];
    console.log(array1.every(isBelowThreshold));
    console.log(array2.myEvery(isBelowThreshold));
    // expected output: true
    */

// REDUCE //
Array.prototype.myReduce = function(callbackFn, Values) {
    for (let i = 0; i < this.length; i++)
    {
        if (Values === undefined)
        {
            Values = this[i];
        }
        else if (Values != undefined)
        {
            Values = callbackFn(Values, this[i]);
        }
    }
    return Values;
};

    /* TEST REDUCE 
    const array1 = [1, 2, 3, 4];
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    const array2 = [1, 2, 3, 4];
    // 1 + 2 + 3 + 4
    console.log(array1.reduce(reducer));
    console.log(array2.myReduce(reducer));
    // expected output: 10

    // 5 + 1 + 2 + 3 + 4
    console.log(array1.reduce(reducer, 5));
    console.log(array2.myReduce(reducer, 5));
    // expected output: 15
    */
//RC ENDS HERE//


//MG STARTS HERE//
// INCLUDES //
Array.prototype.myIncludes = function(obj) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
};
    // //TEST INCLUDES FUNCTION:
    // const array1 = [1, 2, 3];

    // console.log(array1.myIncludes(2));
    // console.log(array1.includes(2));
    // // expected output: true

    // const pets = ['cat', 'dog', 'bat'];

    // console.log(pets.myIncludes('cat'));
    // console.log(pets.includes('cat'));
    // // expected output: true

    // console.log(pets.myIncludes('at'));
    // console.log(pets.includes('at'));
    // // expected output: false


// INDEXOF //
Array.prototype.myIndexOf = function(obj) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === obj) {
            return i;
        }
    }
    return -1;
};
    // //TEST INDEXOF FUNCTION:
    // const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
    // console.log(beasts.myIndexOf('bison'));
    // console.log(beasts.indexOf('bison'));
    // // expected output: 1

    // console.log(beasts.myIndexOf('ant'));
    // console.log(beasts.indexOf('ant'));
    // // expected output: 0

    // console.log(beasts.myIndexOf('giraffe'));
    // console.log(beasts.indexOf('giraffe'));
    // // expected output: -1

// PUSH //
Array.prototype.myPush = function(...args) {
    let arg_i = 0;
    let length = this.length;
    
    for (let i = length; i < length + args.length; i++) {
        this[i] = args[arg_i];
        arg_i++;
    }
    return this.length;
};
    // //TEST PUSH:
    // const arr = [1, 7];
    // console.log(arr.myPush(10, 20));
    // arr.push(100,200);
    // console.log(arr); //should print [1,7,10,20,100,200]

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(obj) {
    for (let i = this.length - 1; i >= 0; --i) {
        if (this[i] === obj) {
            return i;
        }
    }
    return -1;
};
    // //TEST LASTINDEX FUNCTION:
    // const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

    // console.log(animals.myLastIndexOf('Dodo'));
    // // expected output: 3

    // console.log(animals.lastIndexOf('Tiger'));
    // // expected output: 1


// KEYS //
Object.grabKeys = function(obj) {
    let keys = [];
    for (let key in obj) {
        keys.push(key);
    }
    return keys;
};
    // //TEST GRAB KEYS FUNCTION:
    //     const object1 = {
    //         a: 'somestring',
    //         b: 42,
    //         c: false
    //     };
    // console.log(Object.grabKeys(object1));
    // console.log(Object.keys(object1));
    // // expected output: Array ["a", "b", "c"]

// VALUES //
Object.grabValues = function(obj) {
    let vals = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)){
            vals.push(obj[key]);
        }
    }
    return vals;
};

    // //Test grabValues
    // const object = {
    //     a: 'somestring',
    //     b: 42,
    //     c: false
    // };
    
    // console.log(Object.grabValues(object));
    // console.log(Object.values(object));
    // // expected output: Array ["somestring", 42, false]
