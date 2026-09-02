# Higher dimensional space

!!! abstract "This part will cover"

    - Constructing matrices
    - Constructing 3D arrays
    - The reshape function

---

<link rel="stylesheet" href="/styles/ch5part2.css">

The astute reader may have noticed that although the vector data is much more structured, there is no date or time information! This data is not useful unless the date and time of measurement is also logged.

First, we need a format to represent dates and times. For now, we will represent dates using strings. 

**Strings** in APL are vectors of characters, defined using single quotes. The useful ``⎕A`` constant stores the upper-case english alphabet ``'ABCDEFGHIJKLMNOPQRSTUVWXYZ'``.

```apl
      ALPHABET ← ⎕A
      ALPHABET
ABCDEFGHIJKLMNOPQRSTUVWXYZ

      DATE ← 'Day 1 10:00'
      DATE
Day 1 10:00
```

!!! info "Dates and times"
     The datetime ``⎕DT`` function can be used to convert date-times, see more at [Datetime](https://help.dyalog.com/19.0/Content/Language/System%20Functions/dt.htm).

Then, we will need a way to store the datetime data. One solution is to use two vectors instead of one, where each element of the measurement vector has a corresponding element in the time vector.

```apl
      T1 ← 21.4 21.8 22.0 21.5 21.3 22.3
      T1D ← 'Day 1 07:42' 'Day 1 08:47' 'Day 1 10:10' 'Day 1 12:01' 'Day 1 14:36' 'Day 1 16:50'
      T2 ← 22.8 21.5 22.1 22.0 21.9 22.4
      T2D ← 'Day 1 18:23' 'Day 1 19:30' 'Day 1 21:12' 'Day 2, 07:15' 'Day 2, 08:30' 'Day 2, 09:45'
```

Then we can access the information for the second measurement on the first page using the index ``2``.

```apl
      T1[2]
21.8
      T1D[2]
Day 1 08:47
```

We can see that the temperature is 21.8 degrees on the first day of the journey at 08:47.

## Matrices

However, this lack of structure is exactly what introducing vectors was supposed to solve! Two closely related pieces of information, the time of a measurement and the value of the measurement, are kept separate when they should logically be part of the same collection of data. Measurement data of this form are usually stored in tables, and it is only natural to try to store them in the same manner in a computer system.

You decide to start over yet again, and store data in a matrix instead.

**Matrices** are rectangles of data, they take two indices for each element as opposed to vectors' one index per element. They are said to lay data out along two **axes**, as opposed the single **axis** vectors use; the number of axes can be thought of as the number of indices each element uses. Matrices and vectors are examples of **arrays**, which are any collection of data in APL.

## Array notation

Matrices can be created by wrapping the rows as vectors in ``[square brackets]``, separated by ``⋄`` diamonds; or using the ``⍴`` reshape function on a vector.

```apl
      T1 ← [ 21.4 'Day 1 07:42' ⋄ 
             21.8 'Day 1 08:47' ⋄
             22.0 'Day 1 10:10' ⋄
             21.5 'Day 1 12:01' ⋄
             21.3 'Day 1 14:36' ⋄
             22.3 'Day 1 16:50' ]

      T2 ← [ 22.8 'Day 1 18:23'  ⋄ 
             21.5 'Day 1 19:30'  ⋄
             22.1 'Day 2, 21:12' ⋄
             22.0 'Day 3, 07:15' ⋄
             21.9 'Day 3, 08:30' ⋄
             22.4 'Day 3, 09:45' ]

      T1
┌────┬───────────┐
│21.4│Day 1 07:42│
├────┼───────────┤
│21.8│Day 1 08:47│
├────┼───────────┤
│22  │Day 1 10:10│
├────┼───────────┤
│21.5│Day 1 12:01│
├────┼───────────┤
│21.3│Day 1 14:36│
├────┼───────────┤
│22.3│Day 1 16:50│
└────┴───────────┘
```

!!! info "Typing the diamond glyph `⋄`"
     Prefix method: <kbd>PREFIX</kbd> <kbd>`</kbd>
     Tab method: <kbd><</kbd> <kbd>></kbd> ++tab++

## Reshape

The reshape function takes a vector of elements as its right argument, and reshapes them to fit the dimensions specified by the left argument. Concretely, turning the temperature data from a vector to a 6 by 2 matrix

```apl
      T ← 21.4 'Day 1 07:42' 21.8 'Day 1 08:47' 22.0 'Day 1 10:10' 21.5 'Day 1 12:01' 21.3 'Day 1 14:36' 22.3 'Day 1 16:50'
      6 2 ⍴ T
21.4 Day 1 07:42
21.8 Day 1 08:47
22   Day 1 10:10
21.5 Day 1 12:01
21.3 Day 1 14:36
22.3 Day 1 16:50
```

!!! info "Typing the reshape function `⍴`"
     Prefix method: <kbd>PREFIX</kbd> <kbd>r</kbd>
     Tab method: <kbd>p</kbd> <kbd>p</kbd> ++tab++

Another example is the following 5 by 5 pyramid

```apl
      PYRAMID_ENTRIES ← 1 1 1 1 1 1 2 2 2 1 1 2 3 2 1 1 2 2 2 1 1 1 1 1 1
      5 5 ⍴ PYRAMID_ENTRIES
1 1 1 1 1
1 2 2 2 1
1 2 3 2 1
1 2 2 2 1
1 1 1 1 1
```

If the right argument is too short to fill the array, the reshape ``⍴`` function repeats the right argument's entries.

```apl
      5 25 ⍴ ALPHABET 
ABCDEFGHIJKLMNOPQRSTUVWXY
ZABCDEFGHIJKLMNOPQRSTUVWX
YZABCDEFGHIJKLMNOPQRSTUVW
XYZABCDEFGHIJKLMNOPQRSTUV
WXYZABCDEFGHIJKLMNOPQRSTU

      WORD ← 'STONE'
      5 4⍴WORD
STON
ESTO
NEST
ONES
TONE
```


!!! info "Function Valence"
	
	Glyphs can represent different functions depending on the manner in which arguments are given.
	
	For the glyph ``⍴``, when applied to a single argument, `⍴X`, it acts as the *shape* function; when two arguments are given one on either side, `X⍴Y`, it acts as the *reshape* function. 
	
	The former function is called the monadic function associated to the symbol ⍴, and the latter is called the dyadic function associated with the symbol ⍴. 


The shape ``⍴`` function acts on one array, its right argument, by returning a vector whose entries are the lengths of the axes.

```apl
      ⍴T1
6 2

      ⍴100

      ⍴⎕A
26
```

The number ``100`` above is called a **scalar** array, it does not have any axes (it has rank 0/is "zero-dimensional") and has only a single value, and so the result of ``⍴100`` is an empty vector.

Since elements in matrices are ordered along two axes, an element of a matrix can be specified by two positions, the row and column. If only a row position (or column position) is specified, the whole row (respectively, column) is returned. The indices are always separated by a semicolon ``;``.

```apl
      ⎕ ← ALPHABET ← 5 5⍴⎕A
ABCDE
FGHIJ
KLMNO
PQRST
UVWXY
      ALPHABET[1;]
ABCDE
      ALPHABET[;1]
AFKPU
      ALPHABET[5;]
UVWXY
      ALPHABET[;5]
EJOTY
      T1
┌────┬───────────┐
│21.4│Day 1 07:42│
├────┼───────────┤
│21.8│Day 1 08:47│
├────┼───────────┤
│22  │Day 1 10:10│
├────┼───────────┤
│21.5│Day 1 12:01│
├────┼───────────┤
│21.3│Day 1 14:36│
├────┼───────────┤
│22.3│Day 1 16:50│
└────┴───────────┘
      T1[2;]
┌────┬───────────┐
│21.8│Day 1 08:47│
└────┴───────────┘
```

Multiple numbers can be specified for both row and column indices.

```apl
      WORD_SQUARE ← 5 5 ⍴ 'HEARTEMBERABUSERESINTREND'
      WORD_SQUARE
HEART
EMBER
ABUSE
RESIN
TREND
      WORD_SQUARE[1;]
HEART
      WORD_SQUARE[1 2 3;]
HEART
EMBER
ABUSE
      WORD_SQUARE[1 2 3; 1 2 3]
HEA
EMB
ABU
```

At this point you may ask yourself, if we have multiple temperature matrices now, instead of accessing the individual variables ``T1`` and ``T2``, could we arrange them into an array with 3 indices, one for each variable and the other two for row and column index?

If you did, you are thinking like a true array language user!

Arrays of higher dimension are just as easy to create as matrices, again using array notation or the reshape ``⍴`` function.

```apl
      TData ← [[21.4 'Day 1 07:42' ⋄
                21.8 'Day 1 08:47' ⋄
                22.0 'Day 1 10:10' ⋄
                21.5 'Day 1 12:01' ⋄
                21.3 'Day 1 14:36' ⋄
                22.3 'Day 1 16:50'] ⋄

                [22.8 'Day 1 18:23' ⋄
                21.5 'Day 1 19:30' ⋄
                22.1 'Day 2 21:12' ⋄
                22.0 'Day 3 07:15' ⋄
                21.9 'Day 3 08:30' ⋄
                22.4 'Day 3 09:45']]
      TData
┌────┬───────────┐
│21.4│Day 1 07:42│
├────┼───────────┤
│21.8│Day 1 08:47│
├────┼───────────┤
│22  │Day 1 10:10│
├────┼───────────┤
│21.5│Day 1 12:01│
├────┼───────────┤
│21.3│Day 1 14:36│
├────┼───────────┤
│22.3│Day 1 16:50│
└────┴───────────┘
┌────┬───────────┐
│22.8│Day 1 18:23│
├────┼───────────┤
│21.5│Day 1 19:30│
├────┼───────────┤
│22.1│Day 2 21:12│
├────┼───────────┤
│22  │Day 3 07:15│
├────┼───────────┤
│21.9│Day 3 08:30│
├────┼───────────┤
│22.4│Day 3 09:45│
└────┴───────────┘
```

Again, this can also be achieved using the reshape ``⍴`` function with three axis lengths instead of two.

```apl
      TData ← 2 6 2 ⍴ 21.4 'Day 1 07:42' 21.8 'Day 1 08:47' 22.0 'Day 1 10:10' 21.5 'Day 1 12:01' 21.3 'Day 1 14:36' 22.3 'Day 1 16:50' 22.8 'Day 1 18:23' 21.5 'Day 1 19:30' 22.1 'Day 2 21:12' 22.0 'Day 3 07:15' 21.9 'Day 3 08:30' 22.4 'Day 3 09:45'
      TData
┌────┬───────────┐
│21.4│Day 1 07:42│
├────┼───────────┤
│21.8│Day 1 08:47│
├────┼───────────┤
│22  │Day 1 10:10│
├────┼───────────┤
│21.5│Day 1 12:01│
├────┼───────────┤
│21.3│Day 1 14:36│
├────┼───────────┤
│22.3│Day 1 16:50│
└────┴───────────┘
┌────┬───────────┐
│22.8│Day 1 18:23│
├────┼───────────┤
│21.5│Day 1 19:30│
├────┼───────────┤
│22.1│Day 2 21:12│
├────┼───────────┤
│22  │Day 3 07:15│
├────┼───────────┤
│21.9│Day 3 08:30│
├────┼───────────┤
│22.4│Day 3 09:45│
└────┴───────────┘
```

!!! info "Rank"
      The number of axes of an array is called the rank of the array. 
      
      The arrays we’ve constructed so far are of rank 0 (scalars), rank 1 (vectors), rank 2 (matrices), and rank 3. The maximum rank of an array in Dyalog APL is 15. 
      
      A useful idiom for getting the rank of an array is the shape of the shape of an array, `⍴⍴X`.

## Indexed assignment

Now with your temperature table safely stored in your APL workspace, you can only imagine how many more values you can log and maintain. You excitedly gesture at one of your unimpressed coworkers before you notice you’ve accidentally logged the temperature of the cabin as 218 degrees. Before they have a chance to look at your mistake, you quickly and shamefully change the value.

```apl
      TData
┌────┬───────────┐
│21.4│Day 1 07:42│
├────┼───────────┤
│218 │Day 1 08:47│
├────┼───────────┤
│22  │Day 1 10:10│
├────┼───────────┤
│21.5│Day 1 12:01│
├────┼───────────┤
│21.3│Day 1 14:36│
├────┼───────────┤
│22.3│Day 1 16:50│
└────┴───────────┘
┌────┬───────────┐
│22.8│Day 1 18:23│
├────┼───────────┤
│21.5│Day 1 19:30│
├────┼───────────┤
│22.1│Day 2 21:12│
├────┼───────────┤
│22  │Day 3 07:15│
├────┼───────────┤
│21.9│Day 3 08:30│
├────┼───────────┤
│22.4│Day 3 09:45│
└────┴───────────┘
      TData[1;2;1] ← 21.8
      TData
┌────┬───────────┐
│21.4│Day 1 07:42│
├────┼───────────┤
│21.8│Day 1 08:47│
├────┼───────────┤
│22  │Day 1 10:10│
├────┼───────────┤
│21.5│Day 1 12:01│
├────┼───────────┤
│21.3│Day 1 14:36│
├────┼───────────┤
│22.3│Day 1 16:50│
└────┴───────────┘
┌────┬───────────┐
│22.8│Day 1 18:23│
├────┼───────────┤
│21.5│Day 1 19:30│
├────┼───────────┤
│22.1│Day 2 21:12│
├────┼───────────┤
│22  │Day 3 07:15│
├────┼───────────┤
│21.9│Day 3 08:30│
├────┼───────────┤
│22.4│Day 3 09:45│
└────┴───────────┘
```

That was close!

Changing values in arrays acts in the same manner as it does for the case of changing variables, specify the element(s) to change and assign a new value.

Here's an example using Unicode box drawing characters for fun!

```apl
      BOX ← '╔═══╗║TRY║╠═ ═╣║APL║╚═══╝'
      BOX ← 5 5 ⍴ BOX
      BOX
╔═══╗
║TRY║
╠═ ═╣
║APL║
╚═══╝

      BOX[3;3] ← '═'
      BOX
╔═══╗
║TRY║
╠═══╣
║APL║
╚═══╝

      BOX[3;]
╠═══╣
      BOX[3;] ← '║   ║'
      BOX
╔═══╗
║TRY║
║   ║
║APL║
╚═══╝

      BOX[3;] ← '╬'
      BOX
╔═══╗
║TRY║
╬╬╬╬╬
║APL║
╚═══╝
```
