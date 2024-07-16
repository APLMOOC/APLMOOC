# Searching

!!! abstract "This part will cover"
    
    - Different search methods on 1D arrays:
        - Iota
        - Iota underbar
        - Epsilon
        - Epsilon underbar

---

## Indices of

The most used searching function is the dyadic _indices of_, which shares its symbol with the index function `⍳`.

!!! note "Typing the indices of function `⍳`"

    Prefix method: <kbd>PREFIX</kbd> <kbd>i</kbd>

    Tab method: <kbd>i</kbd> <kbd>i</kbd> ++tab++

If you want a simple way to find a value in an array, `⍳` is your guy.
On the left, you give it an array to search in; on the right, you give it an array of values to find.
The function will output the indices where your values are located.

```apl
      3 5 2 1 4 ⍳ 2
3
      'asdfghjkl' ⍳ 'agl'
1 5 9
```

What do you think happens when you try to search for a value that doesn't exist?
Pick your guess:

- `0`
- Big number
- `VALUE ERROR`
- `LENGTH ERROR`

If you picked any of the errors, then you think APL is too mean.
After all, why punish the programmer when they are just trying to search for a value?
No, there's a way better way of handling this issue.
If you picked `0`, you're closer, but still a little off.
It could work if zero was never a valid index; however, `⍳` is index-sensitive. Look:

```apl
      'asdfghjkl' ⍳ 'agl'
1 5 9

      ⎕IO ← 0

      'asdfghjkl' ⍳ 'agl'
0 4 8

      ⎕IO ← 1
```

Instead of returning zero (or a negative number), the APL developers decided to be clever and return a number that's one larger than the length of the array.

```apl
      'asdfghjkl' ⍳ 'agl'
1 5 9
      'asdfghjkl' ⍳ 'aglö'
1 5 9 10
```

This is actually super useful!
Let's say we have two vectors: `STUDENTS` contains student names, and `GPAS` contains their grades.
For example,

```apl
      STUDENTS ← 'ALICE' 'BOB' 'CHARLIE' 'DAVID' 'EEVA'
      GPAS ← 5.0 3.4 1.0 4.2 4.1
```

Say we wanted to get to find David's and Charlie's GPAs from the list, but we didn't know what position they were in.
To do this, we can use iota to find their indices, and then use them along with the brackets `[]` to get the GPAs from the list:

```apl
      STUDENTS ⍳ 'DAVID' 'CHARLIE'
4 3
      GPAS[STUDENTS ⍳ 'DAVID' 'CHARLIE']
4.2 1
```

Then, if we try to find a user that doesn't exist, we will get an index that's one larger than the largest item.
So, we can just add one more "default" item to the GPA list and use that as a "not found" element!

```apl
      GPAS,'X'
5 3.4 1 4.2 4.1 X
      ⍴GPAS,'X'
6
      (GPAS,'X')[STUDENTS ⍳ 'DAVID' 'CHARLIE']
4.2 1
      (GPAS,'X')[STUDENTS ⍳ 'DAVID' 'CHARLIE' 'JULIET']
4.2 1 X
      (GPAS,'X')[STUDENTS ⍳ 'DAVID' 'CHARLIE' 'JULIET' 'BOB']
4.2 1 X 3.4
      (GPAS,'X')[STUDENTS ⍳ 'DAVID' 'CHARLIE' 'JULIET' 'BOB' 'ROMEO']
4.2 1 X 3.4 X
```

Handy!

Here's another APL idiom that you should remember: changing one value to another.

```apl
      NUMS ← 9 4 1 2 0 3
      NUMS
9 4 1 2 0 3

      NUMS[NUMS⍳4]
4
      NUMS[NUMS⍳4]←6

      NUMS
9 6 1 2 0 3
```

So, using `NUMS[NUMS⍳4]` just gets you the number you were searching for (`4`), but adding an assignment `←` lets you reset whatever was in the position.

Even though iota is handy, it's not perfect.
Let's say our array had repeats in it, and we wanted to find them all...

```apl
      LETTERS ← 'abcdefgaaahijkl'
      LETTERS
abcdefgaaahijkl

      LETTERS ⍳ 'a'
1
      LETTERS ⍳ 'aa'
1 1
      LETTERS ⍳ 'aaa'
1 1 1
```

Nope. Iota just finds the first occurrence of `'a'` and stops.
We'll learn how to find more than just one value later.

Here's a funny error that can happen with `⍳`:

```apl
      10 ⍳ 10 11 12
RANK ERROR
      10⍳10 11 12
        ∧
```

You could think that this should return `1 2 2` (the first element, and two elements not in the list).
But actually, the number 10 is a scalar and not an array! So you can't search inside it. Rip.

## Member of

Dyadic iota `⍳` answers the question "where is it?"; dyadic epsilon `∊` answers the question "is it?"

```apl
      4 ∊ 1 3 4 5 6
1
      4 ∊ 1 3 2 5 6
0
      4 3 ∊ 1 3 2 5 6
0 1
      4 3 4 3 ∊ 1 3 2 5 6
0 1 0 1
```

It gives a simple yes/no answer, telling you whether the value is in the array or not.

!!! note "Typing the member of function `∊`"

    Prefix method: <kbd>PREFIX</kbd> <kbd>e</kbd>

    Tab method: <kbd>e</kbd> <kbd>e</kbd> ++tab++

!!! warning "Watch out!"

    Iota `⍳` takes in the array to search on the **left** and the value(s) to find on the **right**.

    Epsilon `∊` takes in the array to search on the **right** and the value(s) to find on the **left**.

    Be careful!

This one's farily straightforward.

## Where



## Find



## Slashiotarho



## Interval index
