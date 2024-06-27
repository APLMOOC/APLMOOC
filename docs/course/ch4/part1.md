# Creating vectors

!!! abstract "This part will cover"

    - Vector generating functions
        - Iota
        - Rho
        - Replicate
        - Catenate
        - Roll/deal
    - Index origin
    - The empty vector

---

All of the functions that we covered in Chapter 3 have been *scalar functions*.
When you apply a scalar function to a scalar, you get another scalar:

```apl
      |¯4.2
4.2
      2+3
5
```

When you apply a scalar function to an array, it just applies it to each element and returns an array of the same length:

```apl
      |¯4.2 5 ¯3 0 ¯7
4.2 5 3 0 7
      1 2 3 + 4 5 6
5 7 9
      1 + 1 2 3
2 3 4
```

However, there are also functions that operate on whole vectors all at once.
In this part, we will cover vector-generating functions: those that take in arguments to produce new vectors.

## Index generator

!!! note "Typing the index generator `⍳`"

    Prefix method: <kbd>PREFIX</kbd> <kbd>i</kbd>

    Tab method: <kbd>i</kbd> <kbd>i</kbd> ++tab++

This is probably one of the most common and simple vector functions in APL.
Can you see what it does?

```apl
      ⍳5
1 2 3 4 5
      ⍳10
1 2 3 4 5 6 7 8 9 10
      ⍳1
1
```

That's right, it just generates a vector containing the numbers from 1 to whatever you give it as an argument.
This is quite useful, since you can now apply our familiar scalar functions to get a whole load of other vectors.
For example, here is how you get the even numbers from 1 to 10:

```apl
      ⍳5
1 2 3 4 5
      2×⍳5
2 4 6 8 10
```

Or, if you want the numbers from 1 to 10 in decreasing order:

```apl
      ⍳10
1 2 3 4 5 6 7 8 9 10
      -⍳10
¯1 ¯2 ¯3 ¯4 ¯5 ¯6 ¯7 ¯8 ¯9 ¯10
      11-⍳10
10 9 8 7 6 5 4 3 2 1
```

There's a lot of different vectors you can create: you'll get to have fun with this in the exercises.

Let's try breaking the `⍳` function.
What do you think will happen if we give it a negative number or a letter as an argument?

```apl
      ⍳¯1
DOMAIN ERROR
      ⍳¯1
      ∧
      
      ⍳'a'
DOMAIN ERROR
      ⍳'a'
      ∧
```

That's right, it's a domain error.
APL can't handle these values, so it just throws an error.
One last question: what about the number 0?

```apl
      ⍳0

```

Nothing got printed, but also no error was produced.
This is because of a pattern: `⍳5` produces a vector of length 5, `⍳4` produces a vector of length 4, `⍳3` produces a vector of length 3, `⍳2` produces a vector of length 2, `⍳1` produces a vector of length 1.
The APL developers decided that it would also be helpful if `⍳0` produced a vector of length 0: the empty vector.
This is sometimes handy to use if you want to have a vector and then add elements to it later.
You can also get the empty vector directly using the *zilde* sign, `⍬`

!!! note "Typing the empty vector `⍬`"

    Prefix method: <kbd>PREFIX</kbd> <kbd>}</kbd>

    Tab method: <kbd>0</kbd> <kbd>~</kbd> ++tab++

## Index origin

Sometimes you want your numbers to start from 0 instead of 1.
For example, if we wanted to generate a vector of all the numbers from 0 to 10, we could do it as before:

```apl
      ⍳11
1 2 3 4 5 6 7 8 9 10 11
      ¯1+⍳11
0 1 2 3 4 5 6 7 8 9 10
```

However, this isn't always practical.
A handy tool to get around this is to use the *index origin* variable, `⎕IO`.
You can set the value of `⎕IO` to either 1 or 0, which will change the behaviour of all origin-sensitive functions.
An example of an origin-sensitive function is the index generator.
Let's see what happens when we change the index origin:

```apl
      ⎕IO
1
      ⍳5
1 2 3 4 5

      ⎕IO ← 0
      ⎕IO
0
      ⍳5
0 1 2 3 4
```

Note that now `⍳` still generates a vector of the *length* you give it, and not *up to the value* you give it.

Remember to always change back the index origin after you're done to avoid messing up other code that expects it to be 1:

```apl
      ⎕IO ← 1
      ⎕IO
1
```

## Reshape

## Replicate

## Roll and deal

## Catenate

The dyadic replicate `/` function repeats elements of its right hand argument array by a specified left hand argument array. This allows the use of boolean masks, which makes it commonly used to filter arrays.

```apl
       (2|⍳9)/'ballooned'
blond
       (~2|⍳9)/'ballooned'
aloe
       2 1 1 1 1 1/'elfish'
eelfish
       (5=8|⍳26)/⎕A
EMU
       0 0 0 1 1 0 0 0 1 1 0 0/'flamethrower'
meow
```