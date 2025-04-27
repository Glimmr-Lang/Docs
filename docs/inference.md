# Type Inference
> Type inference is the process of automatically determining the data types of variables in a programming language. It allows developers to write code without explicitly specifying the type of every variable, making the code more concise and easier to maintain. The compiler  then infers the types based on the assigned values, expressions, and usage of the variables. 

Glimmr supports type inference. So when calling a function or assigning a value to a variable, you don't need to specify the type explicitly. The Glimmr compiler analyzes the assigned values, expressions, and usage of the variables to automatically infer their types, allowing you to write more concise and expressive code.

## Type System
Glimmr uses a somewhat good implementation of the Hindley-Milner type system, a well-established and widely used type inference algorithm. This type system is capable of inferring types for a wide range of programming constructs, including function calls, variable assignments, and complex expressions. The Hindley-Milner algorithm is known for its ability to infer types accurately and efficiently, making it a popular choice for functional and statically-typed programming languages. 

Lets look at some example expressions:

```glimmr
20 * 2
```

The above expression will have the result of type `Number`. Why? 
Because:
- `20` and `2` are both numbers
- `*` is an operator that returns `Number` and takes two `Number` expressions.

```glimmr
(a / 2) * c 
```
The above expression will have the result of type `Number`. Why? 

Because:

- `a` is inferred to be a `Number` because it's being divided by `2`, which is a `Number`, and the `/` operator returns a `Number`.
- The result of `(a / 2)` is a `Number` because `/` returns a `Number`.
- `c` is inferred to be a `Number` because it's being multiplied by the result of `(a /2)`, which is a `Number`, and the `*` operator requires two `Number` expressions. 
- Therefore, the result of the entire expression `(a /2) * c` is also a `Number`, as the `*` operator returns a `Number` given two `Number` operands.

Glimmr can infer any expression, including `String` , `List` and `Tuple` types.

## What's next?
