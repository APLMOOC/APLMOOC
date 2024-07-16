# Selecting from a vector

!!! abstract "This part will cover"

    - The 5 ways to select from an array
    - Modifying elements

---

There are 5 ways to select things from an array in APL.
Here they are: let's go through them all!

- Choosing the first or last N numbers (`↑`)
- Choosing all but the first or last N numbers (`↓`)
- Choosing the numbers at specific positions (`[]`)
- Choosing the numbers that satisfy certain conditions (`/`)
- Choosing one specific item (`⊃`)

## Take

This one is very simple: we use the dyadic `↑` function (called *take*) to choose the first or last N numbers of an array.
The left argument is the number of values to take, and the right argument is the array itself.

!!! note "Typing the take function `↑`"

    Prefix method: <kbd>PREFIX</kbd> <kbd>y</kbd>

    Tab method: <kbd>^</kbd> <kbd>|</kbd> ++tab++

Here's a quick example:

```apl
      VEC ← 23 4.3 ¯23 ¯3.3 7.5 ¯8

      3↑VEC
23 4.3 ¯23
      5↑VEC
23 4.3 ¯23 ¯3.3 7.5
      1↑VEC
23
```

If you give it a negative number, it does the opposite and picks the numbers from the back.

```apl
      ¯2↑VEC
7.5 ¯8
      ¯5↑VEC
4.3 ¯23 ¯3.3 7.5 ¯8
      ¯1↑VEC
¯8
```

But watch out: the order is still the same! Take doesn't reverse the list, it just selects from the back.
What if you give it a number that's longer than the length of the list? Make a guess...

```apl
      10↑VEC
23 4.3 ¯23 ¯3.3 7.5 ¯8 0 0 0 0
      ¯10↑VEC
0 0 0 0 23 4.3 ¯23 ¯3.3 7.5 ¯8
```

It's not a `LENGTH ERROR`!
APL just pads the remaining length with zeros. Very handy.
This is actually the only function that works like this: use it wisely.

The same works with character vectors:

```apl
      10↑'Hello!'
Hello!    
```

Oops, looks like there's nothing there. Let's try adding some characters on the side:

```
      '*', (10↑'Hello!'), '*'
*Hello!    *
```

So character vectors get padded with spaces instead of zeros. Nice.

!!! note "Using take"

    The take function is perfect for
    - Truncating
    - Padding

## Drop

The dyadic drop function `↓` works very similarly to take.
Except now, instead of taking the first N elements, it takes everything *but* the first N elements.

!!! note "Typing the take function `↑`"

    Prefix method: <kbd>PREFIX</kbd> <kbd>u</kbd>

    Tab method: <kbd>v</kbd> <kbd>|</kbd> ++tab++

Let's see it in action:

```apl
      VEC ← 23 4.3 ¯23 ¯3.3 7.5 ¯8

      3↓VEC
¯3.3 7.5 ¯8
      4↓VEC
7.5 ¯8
      5↓VEC
¯8
```

Same thing with negative numbers: it drops elements from the back.

```apl
      ¯3↓VEC
23 4.3 ¯23
      ¯4↓VEC
23 4.3
      ¯5↓VEC
23
```

What do you think happens if we drop too many elements?

```apl
      10↓VEC

      ¯10↓VEC

```

We get nothing: just the empty vector! Makes sense.

## Index

Indexing is used to pick out values based on an index from an array.
Let's compare two different programs: the first one is written in Python, and the second one is written in APL.

```py
things = [5, -7, 6, 3, 0, 1]
print(things[2])

# Outputs 6
```

```apl
      THINGS ← 5 ¯7 6 3 0 1
      THINGS[3]
6
```

The syntax is almost exactly the same!
Except, of course, APL starts counting from 1 and not 0.
If you want to change this, you can use the `⎕IO` variable again: the brackets are context-sensitive.

```apl
      ⎕IO ← 0

      THINGS[2]
6

      ⎕IO ← 1
```

There's one big difference between these brackets and Python's brackets, though: APL brackets are _cooler_.
Take a look at this!

```apl
      THINGS ← 5 ¯7 6 3 0 1

      THINGS[3 6 2]
6 1 ¯7
      THINGS[1 2 3]
5 ¯7 6
      THINGS[⍳3]
5 ¯7 6
      THINGS[1 2 2 2]
5 ¯7 ¯7 ¯7
```

By putting in a vector instead of a scalar in the argument, APL will give you back a vector of just those elements. Neat!

One more thing: the brackets won't let you pick stuff from outside a vector.

```apl
      THINGS[0 1 2]
INDEX ERROR
      THINGS[0 1 2]
            ∧

      THINGS[7 1 2]
INDEX ERROR
      THINGS[7 1 2]
            ∧
```

You just get an error: the `INDEX ERROR`.

!!! tip "Square brackets and shape"

      When you pass just one element to the square brackets `[]`, they return a scalar, but when you pass multiple elements it returns a vector.
      Seems a little inconsistent, right?

      Actually, no!
      The square brackets will always return something that has the **same shape as what you give them**.
      
      Let's see this in action. If you pass it a vector of length 2, then the response will also be a vector of length 2.

      ```apl
            ⍴2 5
      2
            THINGS[2 5]
      ¯7 0
            ⍴THINGS[2 5]
      2
       ```

      If you pass it a scalar (whose shape is the empty vector), then it returns a scalar (whose shape is also the empty vector).

      ```apl
            ⍴1
      (nothing gets printed)
            THINGS[1]
      5
            ⍴THINGS[1]
      (nothing gets printed again)            
      ```

      What do you think happens if you pass it a matrix with shape `2 3`?
      Well, it returns a matrix of shape `2 3`!

      ```apl
            2 3⍴1 3 5 2 4 4
      1 3 5
      2 4 4
            ⍴2 3⍴1 3 5 2 4 4
      2 3
            THINGS[2 3⍴1 3 5 2 4 4]
      5 6 0
      ¯7 3 3
            ⍴THINGS[2 3⍴1 3 5 2 4 4]
      2 3
      ```

      We are just converting an array of indices to an array of values.
      The square brackets will always return something that has the **same shape as what you give them**.

## Compress

The dyadic compress function `/` will let you use a mask to pick elements from an array.
This function is perfect for when you need to pick out items **based on a certain condition**.

```apl
      SUBS ← 0 0 0 4 5 0 2 1 4
      1 1 1 1 1 0 0 0 0 / SUBS
0 0 0 4 5
```

We give it a vector of the same length on the left, and it keeps all the positions with a 1 and kills all the positions with a 0.
How do we generate these automatically?
Say we wanted to remove all the zeros from the array.
We can use the boolean function `=` to see where all the zeros are and then use `/` to get rid of them.

```apl
      0=SUBS
1 1 1 0 0 1 0 0 0
      (0=SUBS)/SUBS
0 0 0 0 (1)
      (0≠SUBS)/SUBS
4 5 2 1 4
```

1. Hint: whoops, wrong way around

Same thing, if you wanted all the small numbers, you can use the `<` function:

```apl
      3>SUBS
1 1 1 0 0 1 1 1 0
      (3>SUBS)/SUBS
0 0 0 0 2 1
```

If you want to combine multiple conditions, you can use the other logical functions we covered in Chapter 3.
Go back and revise them if you've forgotten!
Here, let's pick all the values that are small but not zero:

```apl
      3>SUBS
1 1 1 0 0 1 1 1 0
      0≠SUBS
0 0 0 1 1 0 1 1 1
      (3>SUBS)∧0≠SUBS
0 0 0 0 0 0 1 1 0
      ((3>SUBS)∧0≠SUBS)/SUBS
2 1
```

## Pick

You can use the dyadic pick `⊃` function to pick **just one** element from a vector:

```apl
      P ← 1 9 4 ¯3 ¯2 ¯1
      2⊃P
9
      3⊃P
4
      6⊃P
¯1
```

"But why would I ever use this?! Don't the square brackets do the same thing and more? And this is harder to type!"
Good point. There's no real benefit in using pick when you have simple vectors like this.
The only real case where this is useful is when you're working with nested vectors.
Remember how they work?

```apl
      A ← (1 2) (3 4 5) (2 44 2 1)
      A
┌───┬─────┬────────┐
│1 2│3 4 5│2 44 2 1│
└───┴─────┴────────┘
```

Here, we've created a nested vector `A` that has three simple vectors inside it.
If we try to get the second vector out using the square brackets, we get something weird...

```apl
      A[2]
┌─────┐
│3 4 5│
└─────┘
      ⍴A[2]
(nothing gets printed)
```

Instead of getting a vector, we get a vector in a box.
And when we try to use `⍴` to find its shape, we see that its shape is the empty vector: it's a scalar!
We'll get back to exactly why this is in the next chapter.
For now, you can think of your vector as being **trapped in a box and unable to escape**.
To set it free, we use pick!

```apl
      2⊃A
3 4 5
      ⍴2⊃A
3
```

Peace has been restored to the world.

!!! note "Typing the pick function `⊃`"

    Prefix method: <kbd>PREFIX</kbd> <kbd>x</kbd>

    Tab method: <kbd>)</kbd> <kbd>)</kbd> ++tab++
