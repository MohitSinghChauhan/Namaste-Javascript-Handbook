---
sidebar_position: 3
---

# Episode 3: Hoisting in JavaScript!

> `Note:` Everything in this episode will be all intutive, If you feels like you have problem in understanding then consider watching Ep 2.

Hoisting is a concept in JavaScript that allows variables and function declarations to be accessed before they are actually defined in the code. During the memory creation phase of the execution context, variables are initialized to `undefined`, while function declarations are stored in memory as they are.

(Same Knowledge but in points 🙃)

-   Variables are initialized as `undefined` and function declarations are stored as they are during the memory allocation phase.
-   Hoisting enables us to use variables and call functions before they are actually declared in the code.
-   Using a variable or calling a function before its declaration will not result in an error, but the variable will have the value `undefined` until it is assigned a value.
-   If a variable is not declared at all, it is considered "not defined" and will result in an error when accessed.
-   Hoisting works differently for function declarations, function expressions and arrow function expression. Function declarations are fully hoisted, while function expressions and arrow function expression behave like variables and are hoisted with an initial value of `undefined`.

> `Memory Aid:` <br />
> Variable declarations are scanned and are made undefined<br />
> Function declarations are scanned and are made available

## Examples of Hoisting:

### Example 1:

```js
getName(); // Namaste Javascript
console.log(x); // undefined
var x = 7;
function getName() {
	console.log('Namaste Javascript');
}
```

<details>
<summary>Try to understand by yourself </summary>
<h3>Below is Technical Language (Use this in Interviews)</h3>

<ul>
<li> Despite calling the getName() function before its actual declaration, it executes successfully and prints "Namaste Javascript" because function declarations are hoisted.</li>
<li> The variable x is hoisted as well but is assigned the value undefined until it is later assigned the value 7.</li>
</ul>
</details>

### Example 2:

```js
getName(); // Namaste JavaScript
console.log(x); // Uncaught Reference: x is not defined.
console.log(getName); // f getName(){ console.log("Namaste JavaScript); }
function getName() {
	console.log('Namaste JavaScript');
}
```

<details> <summary>Try to understand by yourself </summary>
<h3>Below is Technical Language (Use this in Interviews) </h3>
<ul>
<li>In this code block, we can see that the function getName() is called before its declaration. However, it executes successfully and prints "Namaste JavaScript" because function declarations are hoisted.</li>
<li>The variable x is accessed, but since it is not declared, it throws an error Uncaught Reference: x is not defined.</li>
<li>The console.log(getName) statement outputs the function definition as ,br /> <code> f getName() 	
&#123; console.log("Namaste JavaScript"); &#125; </code></li>
</ul></details>

### Example 3:

```js
getName(); // Uncaught TypeError: getName is not a function
console.log(getName);
var getName = function () {
	console.log('Namaste JavaScript');
};
// The code won't execute as the first line itself throws a TypeError.
```

<details>
<summary>Try to understand by yourself </summary>
<h3>Below is Technical Language (Use this in Interviews) </h3>
<ul>
<li>In this code block, we have a function expression assigned to the variable getName.</li>
<li>When getName() is called before the variable declaration, it throws a TypeError because at that point, getName is not a function but a variable with the initial value undefined.</li>
<li>The console.log(getName) statement outputs the value of the variable getName, which is undefined.</li>
<li>The code execution stops after the first line due to the TypeError, so the function expression is never assigned to the variable getName.</li>
</ul>
</details>

> `Note:` It's important to understand the distinction between function declarations and function expressions when dealing with hoisting. Function declarations are fully hoisted, while function expressions behave like variables and are hoisted with an initial value of undefined.

Watch Live On Youtube below:
<a href="https://www.youtube.com/watch?v=Fnlnw8uY6jo&ab_channel=AkshaySaini" target="_blank"><img src="https://img.youtube.com/vi/Fnlnw8uY6jo/0.jpg"  width="550" height="500"
alt="Hoisting Youtube Link"/></a>
