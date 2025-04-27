# Functions
> Functions play an important role in functional programming, allowing developers to organize and reuse code efficiently. Functions are blocks of code that perform a specific task, taking in inputs, known as arguments or parameters, and returning outputs.  

## Function declaration

In glimmr functions are declared with the `fn` keyword. See the example below.

```glimmr
fn hello() = "hello"
fn world() = "World"
fn space() = " "
```

The functions above are simple and they all return string because of type inference. 

> In Glimmr, the type of the returned value is inferred from the expression on the right-hand side of the equals sign, which in these cases are string literals, so the functions `hello`, `world`, and `space` are all inferred to return strings. This allows for concise and expressive code, without the need for explicit type annotations.

You can also define functions that take arguments, allowing you to create more dynamic and reusable code. In Glimmr, function arguments are specified in parentheses after the function name, and are separated by commas. For example, you can modify the previous functions to take arguments, like this:

```glimmr
fn greet (name: String) : String = "hello " ++ name
fn comma_sep (a: String) (b: String) : String = a ++ "," ++ b
fn inc x = x + 1
fn add a b = a + b
fn concat a b = a ++ b
```

## Calling functions
In Glimmr, you can call functions by using their name followed by the arguments in parentheses, like this: `hello()`, `world()`, or `greet("John")`. When calling functions with multiple arguments, separate them with commas, like `add(2, 3)` or `comma_sep("apple" ,"banana")`. The result of a function call can be used as an expression, allowing you to compose functions together to create more complex computations. For example:

```glimmr
add(add(inc(1), 1), 3)
// or
concat(concat(hello(), space()), world())
```

## What's next?

