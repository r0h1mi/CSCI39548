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


//TEST// 
const arr=[1,2,3,4,5];

console.log("myEach: ")
arr.myEach((x) => console.log(x) );

console.log("forEach: ")
arr.forEach( (x) => console.log(x) );

const isEven = (number) => console.log(number%2 === 0);
arr.myEach( isEven ); 


// MAP //
Array.prototype.myMap = function(callbackFn) {
    let arrMap = [];
    for (let i = 0; i < this.length; i++)
    {
        arrMap[i] = callbackFn(this[i]);
    }
    return arrMap;
};
// TEST MAP//
console.log("Elements cubed:",arr.myMap(num => num * num * num));
console.log("-----------\n");

// FILTER //
Array.prototype.myFilter = function() {

};

// SOME //
Array.prototype.mySome = function() {

};

// EVERY //
Array.prototype.myEvery = function() {

};

// REDUCE //
Array.prototype.myReduce = function() {

};
//rc end here//

// MG STARTS HERE //
// INCLUDES //
Array.prototype.myIncludes = function() {

};

// INDEXOF //
Array.prototype.myIndexOf = function() {

};

// PUSH //
Array.prototype.myPush = function() {

};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function(obj) {
    var vals = [];
    for (var key in obj) {
        if (obj.hasOwnProperty(key)){
            vals.push(obj[key]);
        }
    }
    return vals;
};

//Test grabValues
    const object1 = {
        a: 'somestring',
        b: 42,
        c: false
    };
    
    console.log(Object.grabValues(object1));
    console.log(Object.values(object1));
// expected output: Array ["somestring", 42, false]
