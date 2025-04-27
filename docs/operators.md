​Operators

Operators are special symbols used in expressions to perform operations on values. This section covers the various operators available in Glimmr, along with examples and descriptions.
## Arithmetic Operators

| Operator | Description                                 |
| -------- | ------------------------------------------- |
| `+`      | Adds two numbers.                           |
| `-`      | Subtracts the second number from the first. |
| `*`      | Multiplies two numbers.                     |
| `/`      | Divides the first number by the second.     |
| `%`      | Returns the remainder of division.          |

### Code Snippet
```glimmr
2 + 3
512 % 2
```

## Logical Operators

| Operator | Description                                                       |
| -------- | ----------------------------------------------------------------- |
| `==`     | Checks if two values are equal.                                   |
| `!=`     | Checks if two values are not equal.                               |
| `>`      | Checks if the first value is greater than the second.             |
| `<`      | Checks if the first value is less than the second.                |
| `>=`     | Checks if the first value is greater than or equal to the second. |
| `<=`     | Checks if the first value is less than or equal to the second.    |
| `&&`     | Checks if both operands are equal to true                         |
| `││`     | Checks if one of the operands is equals to true                   |

### Code Snippet

```glimmr
5 * 2 > 10
10 == 5 * 2
```

## Unary Operators

| Operator | Description              |
| -------- | ------------------------ |
| `!`      | Negates a boolean value. |
| `~`      | Inverts all bits.        |

### Code Snippet

```glimmr
!false
```

## Bitwise Operators

| Operator | Description                     |
| -------- | ------------------------------- |
| `&`      | Performs bitwise AND operation. |
| `^`      | Performs bitwise XOR operation. |
| `>>`     | Performs a bitwise right shift. |
| `<<`     | Performs a bitwise left shift.  |

### Code Snippet

```glimmr
1 << 4
1 >> ~2
```

## String Operators

| Operator | Description               |
| -------- | ------------------------- |
| `++`     | Concatenates two strings. |

### Code Snippet

```glimmr
"Good" ++ "Bye"
```

## Pipe Operator

| **Operator** | **Description**                                          |
| ------------ | -------------------------------------------------------- |
| `│>`         | Passes the result of one expression as input to another. |

### Code Snippet

```
"Hello "
|> toUpperCase()
|> concat("World")
```


**IMPORTANT:** *Function calls are discussed in depth, in the functions section of this document.* 

## Dot Operator

| Operator | Description                                 |
| -------- | ------------------------------------------- |
| `.`      | Accesses a property or method of an object. |

### Code Snippet
```glimmr
foo.bar
player.pos.x
```

## What's next?
