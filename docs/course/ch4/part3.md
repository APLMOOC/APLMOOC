# Selecting from a vector

!!! abstract "This part will cover"

    - The 5 ways to select from an array
    - Modifying elements

---

There are 5 ways to select things from an array in APL.
Here they are: let's go through them all!

- Choosing the first or last N numbers (`↑`)
- Choosing all but the first or last N numbers. (`↓`)
- Choosing the numbers at specific positions (`[]` or `⌷`)
- Choosing the numbers that satisfy certain conditions. (`/`)
- Choosing the first item (`⊃`)

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


