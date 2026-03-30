# Episode 4: Async / Await

---

### 🔹 Introduction

**`async`** — A keyword in JavaScript used to create **asynchronous functions**.  
**Async functions** always return a **Promise**, regardless of what you return inside them.

---

### 🧩 Example 1: Async Function Always Returns a Promise

```js
async function getData() {
  return "Namaste JS";
}

const dataPromise = getData();
console.log(dataPromise);

dataPromise.then((res) => console.log(res));
```

📘 Output:

```
Promise {<fulfilled>: "Namaste JS"}
Namaste JS
```

✅ Even though we're returning a string, JavaScript automatically wraps it in a Promise.

---

### 🔹 Handling Promises Using Async / Await

```js
const p = new Promise((resolve, reject) => {
  resolve("Promise Resolved Value!");
});

async function handlePromise() {
  const val = await p;
  console.log(val);
}

handlePromise();
```

💡 `await` pauses the execution of the async function until the promise resolves.

---

### 🔍 Deep Dive: Promise Resolution vs Async / Await

#### 🧩 Normal .then() Approach

```js
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value!");
  }, 10000);
});

function getData() {
  p.then((res) => console.log(res));
  console.log("Namaste JS");
}

getData();
```

📘 Output:

```
Namaste JS
// after 10 seconds
Promise resolved value!
```

```js
async function getData() {
  return "Namaste JS";
}

const dataPromise = getData();
console.log(dataPromise);

dataPromise.then((res) => console.log(res));
```

📘 Output:

```
Promise {<fulfilled>: "Namaste JS"}
Namaste JS
```

✅ Even though we’re returning a string, JavaScript automatically wraps it in a Promise.

---

### 🔹 Handling Promises Using Async / Await

```js
const p = new Promise((resolve, reject) => {
  resolve("Promise Resolved Value!");
});

async function handlePromise() {
  console.log("Hello World");

  const val = await p;
  console.log("Namaste JavaScript");
  console.log(val);

  const val2 = await p;
  console.log("Namaste JavaScript 2");
  console.log(val2);
}

handlePromise();
```

📘 Output:

```
Hello World
// after 10 seconds
Namaste JavaScript
Promise resolved value!
Namaste JavaScript 2
Promise resolved value!
```

⚡ Key Insight:  
“Time, tide, and JavaScript wait for none.”  
JavaScript doesn’t literally pause execution. When it sees an `await`, it suspends the function execution and lets the event loop handle other tasks until the awaited Promise resolves.

---

### 🔹 Example with Multiple Promises

```js
const p1 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 1 Resolved!"), 1000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 2 Resolved!"), 5000);
});

async function handlePromise() {
  console.log("Hello World");

  const v1 = await p1;
  console.log("Namaste JavaScript");
  console.log(v1);

  const v2 = await p2;
  console.log("Namaste JS 2");
  console.log(v2);
}

handlePromise();
```

📘 Output:

```
Hello World
// after 1 second
Namaste JavaScript
Promise 1 Resolved!
// after 5 seconds
Namaste JS 2
Promise 2 Resolved!
```

---

### 🌐 Real-World Example: Fetching API Data

```js
const API_URL = "https://api.github.com/users/prakhaaar";

async function handlePromise() {
  try {
    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    console.log(jsonValue);
  } catch (err) {
    console.log("Error:", err);
  }
}

handlePromise().catch((err) => console.log(err));
```

📘 Notes:

- `fetch()` returns a Promise.
- `response.json()` also returns a Promise.
- Hence we use two awaits.
- We can handle errors via `try...catch` or `.catch()`.

---

### 💬 Interview Insights: Async / Await

1️⃣ `async` keyword is used to create asynchronous functions.  
2️⃣ `await` can only be used inside an async function.  
3️⃣ It’s used to wait for promises to resolve in a cleaner, synchronous-like manner.  
4️⃣ Helps avoid callback hell or long promise chains.  
5️⃣ Under the hood, it’s just syntactic sugar over `.then()` and `.catch()`.

---

### ⚖️ Async / Await vs .then() / .catch()

| Feature        | Async / Await           | Promise .then()                |
| -------------- | ----------------------- | ------------------------------ |
| Syntax         | Synchronous-looking     | Chained callbacks              |
| Readability    | Very clean and readable | Becomes messy with many chains |
| Error Handling | `try...catch`           | `.catch()`                     |
| Under the Hood | Built on Promises       | Base Promise handling          |

💡 Async/Await is preferred for modern codebases — cleaner flow, easier debugging, and fewer nested callbacks.

---

### 🧾 Recap

✅ `async` → always returns a Promise  
✅ `await` → pauses async function until Promise resolves  
✅ JS doesn’t block, it suspends function execution  
✅ Handle errors with `try...catch`  
✅ Perfect for sequential async operations

<hr />

Watch Live On YouTube below:

<a href="https://www.youtube.com/watch?v=6nv3qy3oNkc&list=PLxnjbfm5MCHFbRlyVCAqpJFdIzPN_IPID" target="_blank">
  <img
    src="https://img.youtube.com/vi/6nv3qy3oNkc/maxresdefault.jpg"
    width="750"
    alt="Namaste JS Video Thumbnail"
  />
</a>
