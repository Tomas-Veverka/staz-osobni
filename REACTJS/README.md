# JavaScript Exercises

## Exercise 1: Hello, JavaScript!

**Goal:** Learn to add JavaScript to your HTML and print messages to the console.

### What to do:
- Create an HTML file with a `<script>` tag before the closing `</body>`.
- Inside the `<script>`, write:
    - `console.log()` statements to print your name.
    - `console.log()` statements to print your favorite food.

### Key Concepts:
- `<script>` tag
- `console.log()`
- Strings


## Exercise 2: Variables and Math

**Goal:** Use variables to store numbers and perform math operations.

### What to do:
- Declare two variables, e.g., `num1` and `num2`.
- Assign any numbers you like to them.
- Calculate and print the results of:
    - Addition
    - Subtraction
    - Multiplication
    - Division

### Key Concepts:
- `let` and `const`
- Arithmetic operators: `+`, `-`, `*`, `/`
- `console.log()`


## Exercise 3: User Input and Alerts

**Goal:** Interact with the user using `prompt()` and show messages with `alert()`.

### What to do:
- Use `prompt()` to ask for the user’s name.
- Use `prompt()` again to ask for their favorite color.
- Show an alert that says:

  `Hi [name]! Your favorite color is [color].`

### Key Concepts:
- `prompt()`
- `alert()`
- String concatenation or template literals


## Exercise 4: If Statements and Conditions

**Goal:** Use conditions to display different messages based on user input.

### What to do:
- Ask the user for their age using `prompt()`.
- Convert the input to a number.
- Use `if`, `else if`, and `else` to:
    - Show “You’re a kid!” if age < 13
    - Show “You’re a teenager!” if age is between 13 and 19
    - Show “You’re an adult!” if age is 20 or older

### Key Concepts:
- `if`, `else if`, `else`
- `parseInt()` or `Number()`
- Comparison operators (`<`, `>=`, `<=`)


## Exercise 5: Click Events and DOM Manipulation

**Goal:** Make a button that changes text on the page when clicked.

### What to do:
- Create an HTML page with:
    - A `<h2>` element with some initial text.
    - A `<button>` labeled “Click me!”
- Write JavaScript to:
    - Select the `<h2>` element using `document.getElementById()`.
    - Change the text inside the `<h2>` when the button is clicked using `addEventListener()`.

### Key Concepts:
- DOM manipulation (`getElementById`, `innerText`)
- Event listeners (`addEventListener`)
- Functions and callbacks


## Exercise 6: Learn `async/await` with a Fake Data Loader

**Goal:** Understand how asynchronous code works using `async` and `await`.

### What to do:

1. Create an HTML page with:
  - A `<button>` that says **"Load Message"**
  - An empty `<p>` where the message will appear

2. Add a `<script>` that:
  - Creates a fake function called `fetchMessage()` that:
    - Waits **2 seconds** using `setTimeout` in a Promise
    - Returns the message: `"Hello from the future!"`
  - Adds an event listener to the button
    - When clicked, it:
      - Waits for `fetchMessage()` using `await`
      - Sets the result as the text of the `<p>` tag


### Key Concepts:

- `async` / `await`
- Promises
- Simulated delay using `setTimeout`
- DOM manipulation (`getElementById` or `querySelector`)
- Button click events


### Bonus Challenge:

- While the message is loading, display `"Loading..."` in the paragraph.
- After it finishes, replace it with the final message.


### Example Result:

When the user clicks the button:
- `"Loading..."` appears immediately
- After 2 seconds, it changes to: `"Hello from the future!"`

## Bonus Tips

- Try using template literals: `` `Hello, ${name}!` ``
- Experiment with different messages and styles.
