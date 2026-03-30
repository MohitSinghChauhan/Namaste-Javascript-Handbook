# Episode 6 : Understanding the this Keyword in JavaScript 🧭

Introduction

The this keyword in JavaScript behaves differently depending on where
and how it is used. Its value is determined at runtime, based on the
calling context --- not where the function is defined.

_🌍 1. Global Scope_

```js
console.log(this);
// Output → window (in browser)
// Output → {} or global (in Node.js)
```

In browsers, the global object is the window. In Node.js, the global
object is global. So, this in the global context refers to the global
object. 🧠 Note: The global object differs across environments.

_🧩 2. Function Scope_

```js
function x() {
  console.log(this);
}
x();
// Output → window (in non-strict mode)
// Output → undefined (in strict mode)
```

_🚨 Strict Mode and this_

```js
"use strict";
function x() {
  console.log(this);
}
x();
// Output → undefined
```

In non-strict mode, this defaults to the global object (window). In
strict mode, this remains undefined.

🔄 3. This Substitution Phenomenon JavaScript uses a behavior called
_"this substitution"_: When this inside a function is undefined (in
non-strict mode), JS automatically substitutes it with the global
object. Example:

```js
function x() {
  console.log(this);
}
x(); // → window (this substitution)
window.x(); // → window
```

💡 When called as a reference (object.method()), this refers to the
object before the dot.

🧱 4. this Inside Objects (Method Call) When a function is a property of
an object, it is called a method.

```js
const obj = {
  a: 10,
  x: function () {
    console.log(this);
  },
};
obj.x();
// Output → obj
```

✅ Inside an object method, this refers to the object itself. ⚠️
However, if you extract the method and call it separately, this will no
longer refer to the object.

```js
const func = obj.x;
func();
// Output → window (non-strict) or undefined (strict)
```

5 call, apply, and bind Methods These are ways to explicitly control
the value of this

-🧩 call() Used to call a function with a specific this context and
arguments passed individually.

```js
function greet(greeting, name) {
  console.log(`${greeting}, ${name}! I'm ${this.role}`);
}
const person = { role: "Developer" };
greet.call(person, "Hello", "Akshay");
// Output → Hello, Akshay! I'm Developer
```

🧩 apply() Same as call(), but arguments are passed as an array.

```js
greet.apply(person, ["Hi", "John"]);
// Output → Hi, John! I'm Developer
```

🧩 bind() Returns a new function with this permanently bound to the
provided object.

```js
const boundGreet = greet.bind(person, "Hey", "Alice");
boundGreet();
// Output → Hey, Alice! I'm Developer
```

⚙️ Use bind() when you want to store a function with a fixed this for
later execution.

⚡ 6. Arrow Functions and this Arrow functions don't have their own
this. They lexically inherit it from their enclosing (parent) scope.

```js
const obj = {
  a: 42,
  x: () => {
    console.log(this);
  },
};
obj.x();
// Output → window (not obj!)
```

Explanation: Arrow functions capture this from the surrounding scope at
the time of creation. Here, this refers to the global scope, not obj.

✅ Correct Example with Regular Function

```js
const obj = {
  a: 42,
  x: function () {
    console.log(this);
  },
};
obj.x();
// Output → obj
```

_💡 Enclosing Lexical Context (in Arrow Functions)_

When we say that an arrow function inherits this from its enclosing lexical context, we mean:

Arrow functions don’t have their own this binding.

Instead, they capture (or close over) the this value from the nearest non-arrow (regular) function or execution context in which they are defined.

🧠 7. Summary Table

| Context               | Value of `this`   | Notes                  |
| --------------------- | ----------------- | ---------------------- |
| Global Scope          | `window / global` | Depends on environment |
| Function (non-strict) | `window`          | this substitution      |
| Function (strict)     | `undefined`       | No substitution        |
| Method in object      | The object        | Depends on call site   |
| Arrow Function        | Lexical `this`    | Inherited from parent  |
| call, apply, bind     | Explicit `this`   | Manually controlled    |

🎯 **Key Takeaways**

- ✅ `this` depends on **how a function is called**, not where it’s defined.
- ⚡ **Arrow functions** don’t have their own `this` — they **lexically inherit** it from their parent scope.
- 🧩 Use **`call()`**, **`apply()`**, or **`bind()`** to manually control the value of `this`.
- 🔒 Always enable **`"use strict"`** to avoid unintended `this` substitution.

## 📺 Watch Live On YouTube

<a href="https://www.youtube.com/watch?v=9T4z98JcHR0&list=PLxnjbfm5MCHFbRlyVCAqpJFdIzPN_IPID" target="_blank">
  <img src="https://img.youtube.com/vi/9T4z98JcHR0/maxresdefault.jpg" width="750" alt="Namaste JS Episode 6 Thumbnail" />
</a>
