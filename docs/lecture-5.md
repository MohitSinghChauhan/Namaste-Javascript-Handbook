---
sidebar_position: 5
---

# Episode 5: SHORTEST JS Program | window & this keyword!

## JavaScript Shortest Program
The shortest JavaScript program is an empty file. Although there is no code to execute, the JavaScript engine performs several tasks behind the scenes.

- A global execution context is created, and the global memory component (variable environment) is set up.
- The JavaScript engine creates a global object called "Window" in the browser environment, which contains various functions and variables.
- The global object can be accessed using the `Window` keyword or `this` keyword at the global level (or  At global level, `this === window`).
- If we create any variable in the global scope, then the variables get attached to the global object.

- In different JavaScript Runtime Environments, the global object may have different names (e.g., `window` in browsers, `global` in Node. js).

### Code:
```js
var x = 10;
console.log(x); // 10
console.log(this.x); // 10
console.log(window.x); // 10
```

### Extra Gyaan (Knowledge):
- The global object is unique and shared across all execution contexts within the same JavaScript environment (e.g., browser or Node.js). However, within a function execution context, there is a local object known as the `variable object` or `activation object`. This local object is created specifically for the execution context of the function and contains local variables, function arguments, and function declarations within that scope. In JavaScript, there is no direct or explicit access to the activation context (variable object) from outside the execution context itself.

> ![Gyaan](https://www.atatus.com/blog/content/images/2022/02/giphy--4--1.gif)

Watch Live On Youtube below:
<a href="https://www.youtube.com/watch?v=QCRpVw2KXf8&ab_channel=AkshaySaini" target="_blank"><img src="https://img.youtube.com/vi/QCRpVw2KXf8/0.jpg"  width="550" height="500"
alt="Shortest JS Program, window & this keyword Youtube Link"/></a>
