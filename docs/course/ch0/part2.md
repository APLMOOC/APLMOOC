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
This requires a separate form of thinking from how you would program in other languages,
which makes it interesting to learn even if you already know an imperative language like Python.

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

There are many ways to solve this problem (try it in Python or a language you are already familiar with!).
The naïve way - multiplying all the numbers together - is inefficient and may cause integer overflow for big lists or big numbers in some languages.

Consider the following efficient solution in Python.

!!! note "Python solution"
    
    Solution:
    ```python
    def solution(values):
        result = 1

        for value in values:
            if value == 0:
                result = 0
                break
            elif value > 0:
                continue
            else:
                result *= -1

        print(result)
    ```

    Execution:
    ```python
    solution([1, 3, 5, -4])
    ```

    Result:
    ```python
    -1
    ```

Sure, this solution could definitely be optimised and shortened.
However, this is also how beginner Python programmers are often taught to approach problems such as this.

You'll notice that there is a lot of overhead in this solution:
the programmer manually go through the list using a loop,
handle all of the different cases (making sure they are exhaustive),
and print the result to the screen themselves.
New students have to understand that functions are called using parentheses, while square brackets and commas are used for lists.

Compare this to the equivalent APL solution.

!!! note "APL solution"

    Solution:
    ```apl
    solution ← ×/×
    ```

    Execution:
    ```apl
    solution 1 3 5 ¯4
    ```

    Result:
    ```
    ¯1
    ```

This isn't just part of the solution, this isn't a little section thereof, this is _the whole solution_.

To an APL thinker, this is perfectly clear and legible!
The symbols essentially tell the interpreter the following:
"Take the signs of all the elements of the input list, and multiply them together".
There is no mention of types, no mention of loops, just operations acting on a structured list of data.

This is the power of APL: you can express simple constructs simply and effectively, with the rest abstracted away!
