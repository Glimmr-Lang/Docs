# Hello glimmr
Once again, welcome to the language reference of the glimmr programming language. If you have made it here I assume everything went well. If not, you can still follow but it is rather productive to learn practically. In this document we are going to discuss a basic glimr program, hello world. 

```glmr
import std::io { println }

// Entry point
fn main() : Unit = println("Hello, world")
```

## Explanation
- The first line import a module from the standard library and pulls the println function into the current module scope. Modules are discussed in later sections. 
- On line 3 we can see a single line comment starting with `//` .
- On line 4 we are declaring a function named `main` with no arguments that returns type `Unit` and the body is simple a call to the `println` function with the string literal `Hello, world` passed as a parameter. 

## Coding Paradigm
It has been said a countless times at this point that glimr is a functional language. Functions are the basic blocks for building programs. You can compose functions to create complex applications. Functions also be passed to and returned from other functions. Combined with the flexible type system, this makes glimmr a great choice for developing safe applications. 

## Coding styles
Glimr is a free form language. The syntax allows you to use white space to your in your style. You can declare all expressions in a single line or separate it for readability. Observe below:

##### Single line form
```glmr
fn main() : Unit = println("Hello, world")
```

>> VS
##### Multi line form
```glmr
fn main() : Unit = 
	println("Hello, world")
```

You will decide how you want to format your code, we do impose any coding standard or style on you. Do you. 

## Whats next?
Lets dive into our first core topic of the glimmr programming language, `Types`. Lets gooo!