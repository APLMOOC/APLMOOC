# What's the big idea?

## APL...

---

### ...is an array language.

Another (unofficial) name for APL is "Array Programming Language".
All operations in the language work on lists, matrices, and higher dimensional arrays.

Many tasks that require data processing and operations on large amounts of structured data work really well in APL.

You might have heard that programming languages can be classified into a few different types:

- Imperative languages (Python, Java, C, R, etc.)
- Functional languages (Haskell, Clojure, etc.)

A new addition to this list, which you might not have heard of, is

- Array languages (APL and its derivatives, Fortran, etc.)

Array languages are considered separate from the previous two categories, as they operate differently.
Instead of having variables and operations (imperative) or functions (functional) as primitive objects,
array languages use arrays and array algorithms as primitives.
This requires a separate from of thinking from how you would program in other languages, which justifies the study of such languages.

---

### ...uses special characters.

Look at the top of the screen: that long bar with characters is the APL language!

Don't be afraid: while mysterious at first, you'll grow to learn and love them.


---

### ...is untyped.

There is no concept of type in APL.
The underlying interpreter abstracts it all away from you and lets you focus on processing data, not its types.

---

### ...is high-level.

In fact, APL abstracts a lot of normal operations from you.

There are no concepts of memory, pointers, loops (in their traditional sense), or other primitives
that, as a traditional (imperative) programmer, one needs to think about and understand when writing algorithms and code.

---

## The power of APL

Some people say that APL is "confusing" and "difficult to read" due to its special characters.

However, I disagree.
APL is just as readable as any language.
An English person can't read Finnish either without a little practice!

On the contrary, APL is sometimes _easier_ to read than imperative languages.
Consider the following problem:

!!! question "Example problem"

    Write a program that takes in a list of numbers.
    Is the product of all the numbers positive, negative, or zero?
    
    Return the sign of the product (1 if it is positive, -1 if it is negative, and 0 if it is zero).

There are many ways to solve this problem (try it!).
The only arguably _incorrect_ way is to actually multiply all the numbers together
(that would take a lot of time and cause integer overflow for big lists or big numbers).

Consider the following solution in Python.

!!! note "Python solution"
    
    ```python
    raw_values = input()
    values = raw_values.split()

    result = 1

    for str_value in values:
        value = int(str_value)

        if value == 0:
            result = 0
            break
        elif value > 0:
            continue
        else:
            result *= -1

    print(result)
    ```

Sure, this solution could definitely be optimised and shortened.
However, this is also how beginner Python programmers are often taught to approach problems such as this.

You'll notice that there is a lot of overhead in this solution:
the programmer has to split the input, manually go through the list using a loop,
convert string data to integer format, handle all of the different cases themselves ((making sure they are exhaustive),
and print the result to the screen themselves.

Compare this to the equivalent APL solution.

!!! note "APL solution"

    ```apl
    ×/×
    ```

This isn't just part of the solution, this isn't a little section thereof, this is _the whole solution_.

To an APL thinker, this is perfectly clear and legible!
The symbols essentially tell the interpreter the following:
"multiply together all of the elements of the list containing the signs of the input list".
There is no mention of types, no mention of loops, just operations acting on a structured list of data.

Which one do you think is more legible?
