# Higher dimensional space

!!! abstract "This part will cover"

    - Constructing matrices
    - Constructing 3D arrays
    - The reshape function

---

<link rel="stylesheet" href="/styles/ch5part2.css">

The astute reader may have noticed that, although the vector data is much more structured, the dates and times of the measurements have been completely forgotten.

First, we need a format to represent dates and times. For now, we will represent dates using strings. 

*Strings* in APL are vectors of characters, defined using single quotes. The useful ``⎕A`` constant stores the upper-case english alphabet 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.

```apl
      WORD ← 'STONE'
      WORD
STONE

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
      TEMPERATURE_PAGE1 ← 21.4 21.8 22.0 21.5 21.3 22.3
      TEMPERATURE_PAGE1_DATE ← 'Day 1 07:42' 'Day 1 08:47' 'Day 1 10:10' 'Day 1 12:01' 'Day 1 14:36' 'Day 1 16:50'
      TEMPERATURE_PAGE2 ← 22.8 21.5 22.1 22.0 21.9 22.4
      TEMPERATURE_PAGE2_DATE ← 'Day 1 18:23' 'Day 1 19:30' 'Day 1 21:12' 'Day 2, 07:15' 'Day 2, 08:30' 'Day 2, 09:45'
```

For the second measurement, 

```apl
      TEMPERATURE_PAGE1[2]
21.8
      TEMPERATURE_PAGE1_DATE[2]
Day 1 08:47
```

We can see that the temperature is 21.8 degrees on day 1 at 08:47.

However, this lack of structure is exactly what introducing vectors was supposed to solve; two closely related pieces of information, the time of a measurement and the value of the measurement, are kept separate when they should logically be part of the same collection of data. Measurement data of this form are usually stored in tables, and it is only natural to try to store them in the same manner in a computer system.

You decide to start over yet again, and store data in a matrix instead

```apl
      TEMPERATURE_PAGE1 ← 6 2 ⍴ 21.4 'Day 1 07:42' 21.8 'Day 1 08:47' 22.0 'Day 1 10:10' 21.5 'Day 1 12:01' 21.3 'Day 1 14:36' 22.3 'Day 1 16:50'
      TEMPERATURE_PAGE2 ← 6 2 ⍴ 22.8 'Day 1 18:23' 21.5 'Day 1 19:30' 22.1 'Day 2, 21:12' 22.0 'Day 3, 07:15' 21.9 'Day 3, 08:30' 22.4 'Day 3, 09:45'
```

---

Matrices are rectangles of data. They can be created by reshaping (⍴) a vector.

!!! info "Typing the reshape function `⍴`"
     Prefix method: <kbd>PREFIX</kbd> <kbd>r</kbd>
     Tab method: <kbd>r</kbd> <kbd>r</kbd> ++tab++

!!! info "Function Valence"
	
	The symbol ⍴ actually represents two different functions depending on the manner in which arguments are given. 
	
	When applied to a single argument, ⍴X, it acts as the *shape* function; when two arguments are given one on either side, X⍴Y, it acts as the *reshape* function. 
	
	The former function is the monadic function associated to the symbol ⍴, and the latter is the dyadic function associated with the symbol ⍴. 

The reshape function takes a vector of elements as its right argument, and reshapes them to fit the dimensions specified by the left argument. Concretely, turning the temperature data from a vector to a 6 by 2 matrix

```apl
      TEMPERATURE_DATA ← 21.4 'Day 1 07:42' 21.8 'Day 1 08:47' 22.0 'Day 1 10:10' 21.5 'Day 1 12:01' 21.3 'Day 1 14:36' 22.3 'Day 1 16:50'
      6 2 ⍴ TEMPERATURE_DATA
21.4 Day 1 07:42
21.8 Day 1 08:47
22   Day 1 10:10
21.5 Day 1 12:01
21.3 Day 1 14:36
22.3 Day 1 16:50
      ⍝ The reshaped matrix has 6 rows and 2 columns
```

Another example is the following 5 by 5 pyramid

```apl
     PYRAMID_ENTRIES ← 1 1 1 1 1 1 2 2 2 1 1 2 3 2 1 1 2 2 2 1 1 1 1 1 1 1
      5 5 ⍴ PYRAMID_ENTRIES ⍝ 5 rows and 5 columns
1 1 1 1 1
1 2 2 2 1
1 2 3 2 1
1 2 2 2 1
1 1 1 1 1
```

If the right argument is too short to fill the array, the reshape (dyadic ⍴) function repeats the right argument's entries.

```
      5 25 ⍴ ALPHABET 
ABCDEFGHIJKLMNOPQRSTUVWXY
ZABCDEFGHIJKLMNOPQRSTUVWX
YZABCDEFGHIJKLMNOPQRSTUVW
XYZABCDEFGHIJKLMNOPQRSTUV
WXYZABCDEFGHIJKLMNOPQRSTU

      5 4⍴WORD
STON
ESTO
NEST
ONES
TONE
```

The shape (monadic ⍴) function acts on one array, its right argument, by returning a vector whose entries are the lengths of the axes.

```apl
      TEMPERATURE_DATA ← 21.4 'Day 1 07:42' 21.8 'Day 1 08:47' 22.0 'Day 1 10:10' 21.5 'Day 1 12:01' 21.3 'Day 1 14:36' 22.3 'Day 1 16:50'
      TEMPERATURE_PAGE1 ← 6 2 ⍴ TEMPERATURE_DATA
      ⍴TEMPERATURE_PAGE1
6 2

      ⍴100 ⍝ (1)

      ⍴⎕A ⍝ (2)
26
```

1. A scalar has no axes, and so the result is an empty vector
2. The number of letters in the english alphabet

Since elements in matrices are ordered along two axes, an element of a matrix can be specified by two position, the row and column. If only a row position (or column position) is specified, the whole row (respectively, column) is returned.

```apl

     TABLE ← 5 5 ⍴ 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25
     TABLE
 1  2  3  4  5
 6  7  8  9 10
11 12 13 14 15
16 17 18 19 20
21 22 23 24 25

     TABLE[1;1]
1
     TABLE[1;]
1 2 3 4 5
     TABLE[;1]
1 6 11 16 21

     WORD_SQUARE ← 5 5 ⍴ "HEARTEMBERABUSERESINTREND"
     WORD_SQUARE
HEART
EMBER
ABUSE
RESIN
TREND
     WORD_SQUARE[1;]
HEART
     WORD_SQUARE[;1]
HEART
     WORD_SQUARE[5;]
TREND
     WORD_SQUARE[;5]
TREND

     TEMPERATURE_DATA1 ← 21.4 'Day 1 07:42' 21.8 'Day 1 08:47' 22.0 'Day 1 10:10' 21.5 'Day 1 12:01' 21.3 'Day 1 14:36' 22.3 'Day 1 16:50'
     TEMPERATURE_PAGE1 ← 6 2 ⍴ TEMPERATURE_DATA1
     TEMPERATURE_PAGE1
21.4 Day 1 07:42
21.8 Day 1 08:47
22   Day 1 10:10
21.5 Day 1 12:01
21.3 Day 1 14:36
22.3 Day 1 16:50
     TEMPERATURE_PAGE1[1;1]
21.4
     TEMPERATURE_PAGE1[1;2]
Day 1 07:42
     TEMPERATURE_PAGE1[1;]
21.4 Day 1 07:42
     TEMPERATURE_PAGE1[3;2]
Day 1 10:10

     TEMPERATURE_PAGE2 ← 6 2 ⍴ 22.8 'Day 1 18:23' 21.5 'Day 1 19:30' 22.1 'Day 2 21:12' 22.0 'Day 3 07:15' 21.9 'Day 3 08:30' 22.4 'Day 3 09:45'
     TEMPERATURE_PAGE2
22.8 Day 1 18:23
21.5 Day 1 19:30
22.1 Day 2 21:12
22   Day 3 07:15
21.9 Day 3 08:30
22.4 Day 3 09:45
     TEMPERATURE_PAGE2[1;2]
Day 1 18:23
     TEMPERATURE_PAGE2[2;2]
Day 1 19:30
     TEMPERATURE_PAGE2[3;2]
Day 2 21:12
     TEMPERATURE_PAGE2[;2]
Day 1 18:23 Day 1 19:30 Day 2 21:12 Day 3 07:15 Day 3 08:30 Day 3 09:45
```

Multiple numbers can be specified for both row and column indices.

```apl
      ALPHABET ← 5 5⍴⎕A
      ALPHABET[1;]
ABCDE
      ALPHABET[1 2 3;]
ABCDE
FGHIJ
KLMNO
      ALPHABET[1 2 3; 1 2 3]
ABC
FGH
KLM
```

However again, the data measurements are separated without reason, the problem that introducing matrices was supposed to solve. Going one dimension further, the data can be arranged in a three-dimensional ordered collection of data:

```
      TEMPERATURE_ARRAY ← 2 6 2 ⍴ 21.4 'Day 1 07:42' 21.8 'Day 1 08:47' 22.0 'Day 1 10:10' 21.5 'Day 1 12:01' 21.3 'Day 1 14:36' 22.3 'Day 1 16:50' 22.8 'Day 1 18:23' 21.5 'Day 1 19:30' 22.1 'Day 2 21:12' 22.0 'Day 3 07:15' 21.9 'Day 3 08:30' 22.4 'Day 3 09:45'
      TEMPERATURE_ARRAY
21.4 Day 1 07:42
21.8 Day 1 08:47
22   Day 1 10:10
21.5 Day 1 12:01
21.3 Day 1 14:36
22.3 Day 1 16:50
             
22.8 Day 1 18:23
21.5 Day 1 19:30
22.1 Day 2 21:12
22   Day 3 07:15
21.9 Day 3 08:30
22.4 Day 3 09:45

      ⍴TEMPERATURE_ARRAY 
2 6 2

      ⍴⍴TEMPERATURE_ARRAY 
3

      TEMPERATURE_ARRAY[1;;]
21.4 Day 1 07:42
21.8 Day 1 08:47
22   Day 1 10:10
21.5 Day 1 12:01
21.3 Day 1 14:36
22.3 Day 1 16:50

      TEMPERATURE_ARRAY[2;;]
22.8 Day 1 18:23
21.5 Day 1 19:30
22.1 Day 2 21:12
22   Day 3 07:15
21.9 Day 3 08:30
22.4 Day 3 09:45

      TEMPERATURE_ARRAY[;;1]
21.4 21.8 22   21.5 21.3 22.3
22.8 21.5 22.1 22   21.9 22.4
```

!!! info "Rank"
      The number of axes of an array is called the rank of the array. 
      
      The arrays we’ve constructed so far are of rank 0 (scalars), rank 1 (vectors), rank 2 (matrices), and rank 3. The maximum rank of an array in Dyalog APL is 15. 
      
      A useful idiom for getting the rank of an array is the shape of the shape of an array, ⍴⍴X.

Now with your temperature table safely stored in your APL workspace, you can only imagine how many more values you can log and maintain. You excitedly gesture at one of your unimpressed coworkers before you notice you’ve accidentally logged the temperature of the cabin as 226 degrees. Before they have a chance to look at your mistake, you quickly and shamefully change the value.

```apl
      TEMPERATURE_ARRAY
21.4  Day 1 07:42
21.8  Day 1 08:47
226   Day 1 10:01
21.5  Day 1 12:01
21.3  Day 1 14:36
22.3  Day 1 16:50
             
22.8  Day 1 18:23
21.5  Day 1 19:30
22.1  Day 2 21:12
22    Day 3 07:15
21.9  Day 3 08:30
22.4  Day 3 09:45
      TEMPERATURE_ARRAY[1;3;1] ← 22.6
      TEMPERATURE_ARRAY
21.4  Day 1 07:42
21.8  Day 1 08:47
22.6  Day 1 10:01
21.5  Day 1 12:01
21.3  Day 1 14:36
22.3  Day 1 16:50
             
22.8  Day 1 18:23
21.5  Day 1 19:30
22.1  Day 2 21:12
22    Day 3 07:15
21.9  Day 3 08:30
22.4  Day 3 09:45
```

That was close!

Changing values in arrays acts in the same manner as it does for the case of changing variables, specify the element(s) to change and assign a new value.

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
