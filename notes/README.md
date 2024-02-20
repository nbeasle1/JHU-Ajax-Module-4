# Notes for Ajax Module 4

## Lecture 40, part 2

- JS files executed sequentially (aka, where you place in the HTML file DOES matter)

## Lecture 41, part 1

- Assigning a function to a variable refers to the function itself (not the result of said function). Note that the function itself is anonymous. 

```javascript

    var a = function() {...}

    // then, you would call the following just as usual

    a(); 

```

- Scopes

   1. Global
     
      - These are defined everywhere

   2. Function (lexical)

      - Variables/functions defined here are only available within this function
            - This allows for closures!

- Scope Chain

    - Everything executed in execution context

    - function invocation creates new execution context 

        - Each context has its own variable environment, and this keyword

    - Global scope has no outer environment

    - To search for variables, engine looks at current scope, then outer, then outer's outer (i.e., this recursively looks at each scope available until it finds the variable OR nothing is found in global scope)

- Quick Note About Scope

    1. Variable scope (at least with var) depends on WHERE the function using said variable is defined 

        - i.e., if I call a function defined in GLOBAL scope, it's going to look to global scope for said variable it requires as a param 

## Lecture 42, part 1

- Data types

    1. boolean - true/false
    2. undefined - lack of definition
    3. null - lack of value
    4. number - double 64-bit float (no ints)
    5. string - sequence of characters used to represent text
    6. symbol - new to es6

## Lecture 43, Part 1

- Type coercion 

    - JS converts types to another type to do comparison (see this with '==')

    - '===' or "Strict Equality" prevents type coercion

## Lecture 43, Part 2

- True/False (or truthy/falsy)

    - false vals are: false, null, undefined, "", 0, NaN
    - true vals are: true, "hello" 1, -1, "false" 

    - just really have to be aware of these


## Lecture 43, Part 3

- Curlies on same lines

- One of few times where this matters is returning a JSON object (if return statement sees no curly brace on same line, it'll screw up)

## Lecture 44

- Default values

    - Use variableA || variableB to choose default (if no param provided)

## Lecture 45, part 1

- Creating objects in different ways

    - multiple ways to define objects

        - var something = new Object(); is one way 

## Lecture 45, part 2

- There's better ways to create objects

```javascript
var facebook = {
    name : "Facebook",
    ceo : {
        firstName : "Mark",
        favColor : "blue"
    }
}
```

- {} is just a JSON object

## Lecture 46

- Functions are actually objects (first-class data types)

- Factory functions (good design pattern)

```javascript
// factory function
function makeMultiplier(multiply) {
    var myFunc = function (x) {
        return multiplier * x;
    };
    return myFunc;
}

// create new function from factory
var multiplyBy3 = makeMultiplier(3);

// call function
multiplyBy3(10);
```

- Functions can be passed as args

```javascript
// execute function on x
function doOperationOn(x, operation) {
    return operation(x);
}

// note, we don't actually CALL the function, we pass reference
// Also, this is pretty much just a call back (e.g., like addEventListener)
var result = doOperationOn(x, multiplyBy3);
```

## Lecture 47, part 1

- Passing by value

    - Given b=a, passing/copying by value means changing copied value in b doesn't affect value stored in a, vice/versa

- Passing by reference

    - Given b=a, passing/copying by reference means changing copied value in b DOES affect value stored in a, vice/versa

- Primitives are passed by value (copied), objects are passed by reference (copied)

    - Under the hood, everything is passed by value

- Objects are stored in some memory location, which has pointers to where attributes are stored (pretty cool)

    - Again, this is basically just key value pairs

    - BUT, when we create assign the object to a new variable, both objects have pointers **TO THE SAME K/V PAIRS**, hence the mutability

## Lecture 48

- Function constructors

```javascript
function Circle (radius) {
    console.log(this);
}

var myCircle = new Circle(10); 

console.log(myCircle); // Circle {}
```

- This is very much like creating objects in other languages, but just worded a bit different. 

    - In the constructor, we can assign things via this.property = property

```javascript
function Circle (radius) {
    this.radius = radius; 

    // object method
    this.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
}
```
- Note that every time we say 'new', we always create the getArea method (i.e., we're doing more work than need be)

    - So, instead of doing the above, we can use Object.prototype:

```javascript
function Circle (radius) {
    this.radius = radius;
}

Circle.prototype.getArea = function () {
    return Math.PI * Math.pow(this.radius, 2);
}
```

- Prototype methods/attributes belong to all objects of said type

- In new (ES6+) versions of JS, this is still doable, but "replaced" via syntactic sugar because we can actually create "classes". Matter of choice in that aspect. 

## Lecture 49

- We can basically do the same thing with object literals - although scope appears to change

    - *this* now refers to the object itself

## Lecture 50, part 1

- Arrays in JS

    - We can have multiple different types of data in arrays (to include functions)

    - Shorthand notation:

    ```javascript
    var names = ["test", "test1", "..."];
    ```

## Lecture 51

- Closures, yee yee

- Example: 

```javascript
function makeMultiplier (multiplier) {
    return (
        function (x) {
            return x * multiplier;
        }
    );
}

var doubleAll = makeMultiplier(2);

console.log(doubleAll(10)) // 20
```

