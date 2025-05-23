# Literals

literals are values that are directly inserted into the code, such as numbers, strings, etc. They are exact values that are not variables and do not change during the execution of the program.
## Number Literals

Numbers can be expressed in various formats:

```glimmr
20
10_000_000
50
```

Glimmr also supports decimal numeric literals. Similar to `Integer` number literals , decimal literals can also be separated by `_`.


```glimmr
20.5
30.5
```

## String Literals

Strings allow embedding text and expressions:

- **Basic String:** 

```glimmr
"Alice"
"Hello, I'm  a basic string"
```

Glimmr also supports **Interpolated Strings**, which can embed expressions. An interpolated string is denoted by a dollar sign ($). The expressions are enclosed in curly braces {} and can be used to embed dynamic values into the string.

```glimmr
"${5} * 2 = ${5 * 2}"
"Hello ${'World'}"
```

## Boolean Literals

Boolean values are used for logical operations:

- `true`
- `false`

## Tuple Literals
A tuple literal is represented by a sequence of values enclosed in parentheses `()`, with each value separated by a comma `,`. 

```glimmr
(1, 2, 3)
("Hello", 1, "World")
```

Tuples are useful for grouping multiple values together, and can be used in a variety of contexts, such as function return values or data structures.

## List Literal 
List literals allow us to store multiple values of the same type in an ordered single data structure. A list literal is represented by a sequence of values enclosed in square brackets `[]`, with each value separated by a comma `,`.

```glimmr
[1, 2, 3]
["apple", "banana", "orange"]
```

## Unit Literal

The Unit type represents an empty value:

- `()`

## Comments

Comments are useful for documenting code and providing context to developers. This language supports the following types of comments:

#### Single line comments

```glimmr
// Yow, I'm a comment
```

#### Multi-line comments

```glimmr
/* 
 * Glimmr supports multi-line comments :)
 */
```

Comments are ignored by the compiler/interpreter and do not affect the execution of the code.

## What's next?
Now that we've explored the basics of literals in Glimmr, we can move on to more exciting topics. In the next section, we'll delve into Glimmr data types. We'll discover how Glimmr's type system works static typing can help us avoid writing error prone programs. 