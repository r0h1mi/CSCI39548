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


// TEST EACH // 
const arr=[1,2,3,4,5];

console.log("myEach: ")
arr.myEach((x) => console.log(x) );

console.log("forEach: ")
arr.forEach( (x) => console.log(x) );

const isEven = (number) => console.log(number%2 === 0);
arr.myEach( isEven ); 


// MAP //
Array.prototype.myMap = function(callbackFn) {
    let thisnew = [];
    for (let i = 0; i < this.length; i++)
    {
        thisnew[i] = callbackFn(this[i]);
    }
    return thisnew;
};
// TEST MAP//
console.log("Elements cubed:",arr.myMap(num => num * num * num));
console.log("-----------\n");

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
    let thisnew = [];
    for (let i = 0; i < this.length; i++)
    {
        if (callbackFn(this[i]))
        {
            thisnew.push(this[i]);
        }
        return thisnew;
    }
};

// TEST FILTER // 
console.log("All odd elements: ", arr.myFilter(num => num % 2 !== 0));
console.log("-----------\n");

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

// MG starts here
// INCLUDES //
Array.prototype.myIncludes = function() {

};

// INDEXOF //
Array.prototype.myIndexOf = function() {

};

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
//TEST PUSH:
const arr = [1, 7];
console.log(arr.myPush(10, 20));
arr.push(100,200);
console.log(arr); //should print [1,7,10,20,100,200]

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};

//Test grabValues
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.values(object1));
// expected output: Array ["somestring", 42, false]