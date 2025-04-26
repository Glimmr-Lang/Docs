
# Operators

Operators are special symbols used in expressions to perform operations on values. This section covers the various operators available in Glimmr, along with examples and descriptions.
## Arithmetic Operators

| Operator | Description                                 | Example  | Result |
| -------- | ------------------------------------------- | -------- | ------ |
| `+`      | Adds two numbers.                           | `2 + 3`  | `5`    |
| `-`      | Subtracts the second number from the first. | `5 - 2`  | `3`    |
| `*`      | Multiplies two numbers.                     | `5 * 2`  | `10`   |
| `/`      | Divides the first number by the second.     | `10 / 2` | `5`    |
| `%`      | Returns the remainder of division.          | `10 % 3` | `1`    |

## Comparison Operators

| Operator | Description                                                       | Example  |  Result |
| -------- | ----------------------------------------------------------------- | -------- | ------- |
| `==`     | Checks if two values are equal.                                   | `5 == 5` | ` true` |
| `!=`     | Checks if two values are not equal.                               | `5 != 2` | `true`  |
| `>`      | Checks if the first value is greater than the second.             | `5 > 2`  | `true`  |
| `<`      | Checks if the first value is less than the second.                | `2 < 5`  | `true`  |
| `>=`     | Checks if the first value is greater than or equal to the second. | `5 >= 5` | `true`  |
| `<=`     | Checks if the first value is less than or equal to the second.    | `2 <= 5` | `true`  |

## Logical Operators

| Operator | Description                               | Example        | Result   |
| -------- | ----------------------------------------- | -------------- | -------- |
| `&&`     | Returns true if both conditions are true. | `true && true` | `true`   |
| `!`      | Negates a boolean value.                  | `!true`        |  `false` |


## Bitwise Operators

| Operator | Description                     | Example  | Result |
| -------- | ------------------------------- | -------- | ------ |
| `&`      | Performs bitwise AND operation. | `5 & 3`  | `1`    |
| `^`      | Performs bitwise XOR operation. | `5 ^ 3`  | `6`    |
| `~`      | Inverts all bits.               | `~5`     | `-6`   |
| `>>`     | Performs a bitwise right shift. | `8 >> 2` | ` 2`   |
| `<<`     | Performs a bitwise left shift.  | `2 << 3` |  `16`  |

## String Operators

| Operator | Description                          | Example              | Result         |
| -------- | ------------------------------------ | -------------------- | -------------- |
| `+`      | Combines two strings into one.       | `"Hello" + "World"`  | `"HelloWorld"` |
| `==`     | Checks if two strings are identical. | `"Hello" == "Hello"` | `true`         |
| `!=`     | Checks if two strings are different. | `"Hello" != "World"` | `true`         |
| `++`     | Concatenates two strings.            | `"Good" ++ "Bye"`    | `"GoodBye"`    |

## Pipe Operator

|**Operator**|**Description**|**Example**|**Result**|
|---|---|---|---|
|`\|>`|Passes the result of one expression as input to another.|`"Hello" \|> "${'World'}"`|`"HelloWorld"`|

## Dot Operator

| Operator | Description                                 | Example           | Result               |
| -------- | ------------------------------------------- | ----------------- | -------------------- |
| `.`      | Accesses a property or method of an object. | `object.property` |  Value of `property` |
