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

The monadic index generator `⍳` (iota) is probably one of the most common and simple vector functions in APL.
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
What about the number 0?

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

You can also give iota a vector as a right argument.
In this case, it generates a table (array) with a vector of coordinates in each cell.
For example, if we give it `5 5`, it creates a 2D array with little vectors that tell you what square it is in each position.

```apl
       ⍳5 5
┌───┬───┬───┬───┬───┐
│1 1│1 2│1 3│1 4│1 5│
├───┼───┼───┼───┼───┤
│2 1│2 2│2 3│2 4│2 5│
├───┼───┼───┼───┼───┤
│3 1│3 2│3 3│3 4│3 5│
├───┼───┼───┼───┼───┤
│4 1│4 2│4 3│4 4│4 5│
├───┼───┼───┼───┼───┤
│5 1│5 2│5 3│5 4│5 5│
└───┴───┴───┴───┴───┘
```

The same thing happens if we give it `2 2 2`: now, it makes a 3D table in the same way.

```apl
       ⍳2 2 2
┌─────┬─────┐
│1 1 1│1 1 2│
├─────┼─────┤
│1 2 1│1 2 2│
└─────┴─────┘
┌─────┬─────┐
│2 1 1│2 1 2│
├─────┼─────┤
│2 2 1│2 2 2│
└─────┴─────┘
```

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

You've already seen this one, but let's see how it works in more detail.

!!! note "Typing the reshape operator `⍴`"

    Prefix method: <kbd>PREFIX</kbd> <kbd>r</kbd>

    Tab method: <kbd>r</kbd> <kbd>r</kbd> ++tab++

The dyadic reshape operator, `⍴`, takes in a shape on the left and a value to use as a filler on the right.
Let's see it in action:

```apl
      5 ⍴ 3
3 3 3 3 3
      7 ⍴ 0
0 0 0 0 0 0 0
```

You can also use a vector of filler items on the right.
If there's not enough elements, they get repeated.
If there are too many elements, they get left out.

```apl
      5 ⍴ 1 2
1 2 1 2 1
      10 ⍴ 1 2 3 4
1 2 3 4 1 2 3 4 1 2
      4 ⍴ 1 2 3 4 5 6
1 2 3 4
```

Iota and rho are besties: we can combine them to make nice vectors!

```apl
      ⍳3
1 2 3
      14 ⍴ ⍳3
1 2 3 1 2 3 1 2 3 1 2 3 1 2
```

This also works with letters.

```apl
      33 ⍴ 'aybabtu'
aybabtuaybabtuaybabtuaybabtuaybab
      100 ⍴ 'A'
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
```

Reshape also works nicely with higher dimensional arrays.
The argument on the left is now a vector that tells you the size of each of the dimensions of your array.

```apl
      3 3 ⍴ 1
1 1 1
1 1 1
1 1 1
      5 5 ⍴ ⍳5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
      2 3 4 ⍴ 1 2
1 2 1 2
1 2 1 2
1 2 1 2
       
1 2 1 2
1 2 1 2
1 2 1 2
```

## Replicate

What about this one?

```apl
      3 / 1 2 3 4
1 1 1 2 2 2 3 3 3 4 4 4
```

This is the dyadic replicate function, `/`.
If you give it a vector on the right and a scalar on the left, it repeats each element of the vector that many times.
You can also give it two vectors of the same length on each side:

```apl
      1 2 1 2 / 1 2 3 4
1 2 2 3 4 4
      1 0 1 1 0 0 1 / 3 4 5 6 7 8 9
3 5 6 9
       0 0 0 1 1 0 0 0 1 1 0 0/'flamethrower'
meow
      0 0 0 1 1 0 0 0 7 1 0 0/'flamethrower'
meooooooow
```

When the left-hand side contains just zeros and ones, it is called a *bitmask*.
We can use bitmasks to select parts of a vector, which sometimes comes in useful.

```apl
      ⍳9
1 2 3 4 5 6 7 8 9
      2|⍳9
1 0 1 0 1 0 1 0 1
      ~2|⍳9
0 1 0 1 0 1 0 1 0

      (2|⍳9)/'ballooned'
blond
      (~2|⍳9)/'ballooned'
aloe
```

A little more complicated example:

```apl
      ⍳26
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26
      8|⍳26
1 2 3 4 5 6 7 0 1 2 3 4 5 6 7 0 1 2 3 4 5 6 7 0 1 2
      5=8|⍳26
0 0 0 0 1 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1 0 0 0 0 0

      ⎕A
ABCDEFGHIJKLMNOPQRSTUVWXYZ
      (5=8|⍳26)/⎕A
EMU
```

## Roll and deal

Take a gamble: what does the dyadic `?` function do?

```apl
      3?5
1 3 5
      3?5
4 1 5
      3?5
3 2 5
      6?100
64 53 77 98 10 11
```

It's a random number generator called "deal".
Specifically, it "deals out" numbers without replacement.
The expression `3?5` means: "generate 3 numbers from 1 to 5 **without** any repetitions".

!!! warning "Pseudorandom numbers"

      The `?` function generates *pseudorandom* numbers.
      They are good for simulations and generic random numbers, but never use them for cryptography since they aren't truly random.

What if we wanted to include zero?
We could, of course, subtract 1 from everything.
However, deal is origin-sensitive, so we can just use our favourite `⎕IO` variable (remember to set it back once you're done).

```apl
      ⎕IO←0

      5?5
1 2 0 4 3

      ⎕IO←1
```

Ok, but what if we want repetitions?
Say I wanted a random list of ones and zeros.
Just trying to force APL to generate these doesn't end well...

```apl
      ⎕IO←0

      10?2
DOMAIN ERROR: Deal right argument must be greater than or equal to the left argument
      10?2
        ∧
      
      ⎕IO←1
```

There is actually another way to use deal that gives you numbers without replacement: it's called roll (like rolling a die)!
And we don't even need another symbol: it's just the monadic version of `?`.

```apl
      ?5
2
      ?5
5
      ?5
2
      ?5
1
      ?5
3
```

If we want more random numbers, we just give it more numbers as an argument.

```apl
      ?5 5 5 5 5 5 5 5 5 5
5 1 2 4 3 2 5 4 4 2
```

Think about this for a moment: how would you use the functions you already know to do the same thing?
Here's two possible answers:

```apl
      ?10⍴5
1 2 2 4 3 4 5 4 2 2
      ?10/5
3 4 3 5 2 1 2 3 5 3
```

And, before we forget to answer the question we had before, here's how to generate a long list of random bits (ones and zeros):

```apl
      ⎕IO←0

      ?15⍴2
0 0 0 1 0 0 0 1 1 1 1 0 1 0 1

      ⎕IO←1
```

## Catenate

You're also familiar with this one!
Let's revise it just to be sure :)

Remember that, when you have two vectors, combining them with a space makes them into a nested vector (**S**paces **S**eparate **S**calars):

```apl
      A←'abc'
      B←'def'

      A B
┌───┬───┐
│abc│def│
└───┴───┘
```

But if you want to combine them into one vector, you can use the catenate function:

```apl
      A←'abc'
      B←'def'

      A,B
abcdef
```
