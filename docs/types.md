# Static typing
 
> "A **statically-typed** language is a language where variable types are known at compile time. In most of these languages, types must be expressly indicated by the programmer; in other cases, type inference allows the programmer to not indicate their variable types" - [Mozilla](https://developer.mozilla.org/en-US/docs/Glossary/Static_typing#:~:text=A%20statically%2Dtyped%20language%20is,not%20indicate%20their%20variable%20types.). 

Despite compiling down to a dynamic language (*Javascript*) glimmr is a static typed language. Static typing was chosen for glimmr during its design phase because of the I struggle thinking about code in a dynamic manner and I write better code when its typed. 

## Supported Types

### Scalar Types

Glimmr has support for scalar, sum and composite types (objects). For starters, lets discuss scalar types. 

#### Number Type
> Just like in Javascript, glimr does not separate floats from intergers. This makes the code easier to write and removes the need to constantly convert between types. 

```glimmr
Number
```

#### String Type
> The string type allows us to store data that is human readable. For example: Natural language expressions. This allows us to write applications that display proper information to the end user. 

```glimmr
String
```

#### Boolean Type
> The boolean type is useful for representing `true` or `false` conditions such as comparing two numbers or strings. 

```glimmr
Boolean
```

#### Tuple Type
>> A **tuple** is a finite sequence of objects that may optionally be of the same type which are called the _elements_.

```glimmr
(Number, String, Boolean)
```
 
#### Unit Type
> The unit type is used to represent the state of emptiness or the lack of a useful value. This is nearly equivalent to `void` in mainstream languages. 

```glimmr
Unit
```

### Composite Types
#### Sum Types

> "In computer programming especially functional programming and type theory, an **algebraic data type*(**ADT**) is a kind of composite data type, i.e., a data type formed by combining other types." - wikipedia.

```glimmr
Some a
Left b c
None
```

*IMPORTANT:* Sum types can only be instanciated via their respective literals. So the following are two different types.

```glimr
Some a
// VS
Some a b
```

#### Object Type
> The object type in glimmr is a composite data type that allows for the representation of complex data structures. It is a collection of key-value pairs, where each key is an identifier and each value can be any type, including other objects. This allows for flexible and dynamic data modeling.

```glimmr
{
  name: String,
  age: Number,
  isAdmin: Boolean
}
```

### Type Aliases
> Type aliases allow us to name complex types and reuse them throughout our codebase. This can improve code readability and maintainability by giving meaningful names to complex type definitions. In glimmr, type aliases are defined using the `type` keyword followed by the type name and the type definition.

```glimmr
type Option = Some a | None
type FirstNameType = String
```

## Structural Typing
> In Glimmr, composite types are matched and validated structurally, meaning that two types are considered equal if they have the same structure, i.e., the same properties with the same types. This approach allows for more flexibility and expressiveness in defining complex data structures, as it enables the creation of types that are compatible with each other based on their structure, rather than requiring an exact match of their declarations. 

```glimmr
{
  name: String,
  age: Number
}

// is compatible with

{
  name: String,
  age: Number,
  height: Number
}
```

## What's next?
In the next chapter we will look at type inference, we will explore how glimmr's type system can automatically deduce the types of variables and expressions, making it easier to write code without having to explicitly specify every type. Ready? lets get to it