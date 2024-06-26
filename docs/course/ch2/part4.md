# Higher dimensional space

!!! abstract "This part will cover"

    - Constructing matrices
    - Constructing 3D arrays
    - The reshape operator

---

The astute reader may have noticed that, although the new data is much more structured, the dates and times of the measurements have been completely forgotten.

One solution is to use more vectors to organize this data, here using floating-point decimal encoded format. This format stores the dates as decimal numbers, where the integer part stores the year, month, and day, and the fractional part stores the hour, minute, and second, yyyymmdd.hhmmss.

```apl
      TEMPERATURE_PAGE1 ← 21.4 21.8 22.0 21.5 21.3 22.3
      TEMPERATURE_PAGE1_HOUR ← 7 8 10 12 14 16
      TEMPERATURE_PAGE2 ← 22.8 21.5 22.1 22.0 21.9 22.4
      TEMPERATURE_PAGE2_HOUR ← 18 19 21 7 8 9
```

and access dates and times using the same index;

```apl
      TEMPERATURE_PAGE1[2]
21.8
      TEMPERATURE_PAGE1_HOUR[2]
8
```

However, this lack of structure is exactly what introducing vectors was supposed to solve; two closely related pieces of information, the time of a measurement and the value of the measurement, are kept separate when they should logically be part of the same collection of data. Measurement data of this form are usually stored in tables, and it is only natural to try to store them in the same manner in a computer system.

You decide to start over yet again, and decide to store data in a matrix instead

```apl
      TEMPERATURE_PAGE1 ← 6 2 ⍴ 21.4 7 21.8 8 22.0 10 21.5 12 21.3 14 22.3 16
      TEMPERATURE_PAGE2 ← 6 2 ⍴ 22.8 18 21.5 19 22.1 21 22.0 7 21.9 8 22.4 9
```

---

Matrices are two-dimensional ordered collections of data, they are rectangles of data. They can be created by reshaping (`⍴`) a vector.

!!! info "Typing the reshape operator `⍴`"
	
	Prefix method: <kbd>PREFIX</kbd> <kbd>r</kbd>

     Tab method: <kbd>r</kbd> <kbd>r</kbd> ++tab++

The reshape operator acts by returning an array whose entries are the entries of its right operand, and whose axes are specified by a vector of integers as its left operand, more concretely,

```apl
      TEMPERATURE_DATA ← 21.4 7 21.8 8 22.0 10 21.5 12 21.3 14 22.3 16
      6 2 ⍴ TEMPERATURE_DATA
21.4  7
21.8  8
22   10
21.5 12
21.3 14
22.3 16
      ⍝ The reshaped matrix has 6 rows and 2 columns
```

turns the vector TEMPERATURE_DATA into a matrix with axes of length six and two, consisting of the entries in TEMPERATURE_DATA.

```apl
     PYRAMID_ENTRIES ← 1 1 1 1 1 1 2 2 2 1 1 2 3 2 1 1 2 2 2 1 1 1 1 1 1 1
      5 5 ⍴ PYRAMID_ENTRIES ⍝ 5 rows and 5 columns
1 1 1 1 1
1 2 2 2 1
1 2 3 2 1
1 2 2 2 1
1 1 1 1 1

      ALPHABET ← ⎕A ⍝ The ⎕A function return the string 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'. 
      ⍝ 'Strings' in APL are vectors of characters, defined using single quotes.
      26 25 ⍴ ALPHABET 
ABCDEFGHIJKLMNOPQRSTUVWXY
ZABCDEFGHIJKLMNOPQRSTUVWX
YZABCDEFGHIJKLMNOPQRSTUVW
XYZABCDEFGHIJKLMNOPQRSTUV
WXYZABCDEFGHIJKLMNOPQRSTU
VWXYZABCDEFGHIJKLMNOPQRST
UVWXYZABCDEFGHIJKLMNOPQRS
TUVWXYZABCDEFGHIJKLMNOPQR
STUVWXYZABCDEFGHIJKLMNOPQ
RSTUVWXYZABCDEFGHIJKLMNOP
QRSTUVWXYZABCDEFGHIJKLMNO
PQRSTUVWXYZABCDEFGHIJKLMN
OPQRSTUVWXYZABCDEFGHIJKLM
NOPQRSTUVWXYZABCDEFGHIJKL
MNOPQRSTUVWXYZABCDEFGHIJK
LMNOPQRSTUVWXYZABCDEFGHIJ
KLMNOPQRSTUVWXYZABCDEFGHI
JKLMNOPQRSTUVWXYZABCDEFGH
IJKLMNOPQRSTUVWXYZABCDEFG
HIJKLMNOPQRSTUVWXYZABCDEF
GHIJKLMNOPQRSTUVWXYZABCDE
FGHIJKLMNOPQRSTUVWXYZABCD
EFGHIJKLMNOPQRSTUVWXYZABC
DEFGHIJKLMNOPQRSTUVWXYZAB
CDEFGHIJKLMNOPQRSTUVWXYZA
BCDEFGHIJKLMNOPQRSTUVWXYZ
      ⍝ If the right operand is too short to fill the array, the reshape (dyadic ⍴) operator repeats the right operand's entries
```

Since elements in matrices are ordered along two axes, an element of a matrix can be specified by two position, the row and column. If only a row position (or column position) is specified, the whole row (or column) is returned.

```apl

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

      TEMPERATURE_DATA1 ← 21.4 7 21.8 8 22.0 10 21.5 12 21.3 14 22.3 16
      TEMPERATURE_PAGE1 ← 6 2 ⍴ TEMPERATURE_DATA1
      TEMPERATURE_PAGE1
21.4  7
21.8  8
22   10
21.5 12
21.3 14
22.3 16
      TEMPERATURE_PAGE1[1;1]
21.4
      TEMPERATURE_PAGE1[1;2]
7
      TEMPERATURE_PAGE1[1;]
21.4 7
      TEMPERATURE_PAGE1[3;2]
10

     TEMPERATURE_PAGE2 ← 6 2 ⍴ 22.8 18 21.5 19 22.1 21 22.0 7 21.9 8 22.4 9
     TEMPERATURE_PAGE2
22.8 18
21.5 19 
22.1 21
22   7
21.9 8
22.4 9
     TEMPERATURE_PAGE2[1;2]
18
     TEMPERATURE_PAGE2[2;2]
19
     TEMPERATURE_PAGE2[3;2]
21
     TEMPERATURE_PAGE2[;2]
18 19 21 7 8 9

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

However, again, the data measurements are separated without reason, the problem that introducing matrices was supposed to solve. Going one dimension further, the data can be arranged in a three-dimensional ordered collection of data:

```apl
     TEMPERATURE_ARRAY ← 2 6 2 ⍴ 21.4 7 21.8 8 22.0 10 21.5 12 21.3 14 22.3 16 22.8 18 21.5 19 22.1 21 22.0 7 21.9 8 22.4 9
     TEMPERATURE_ARRAY
21.4  7
21.8  8
22   10
21.5 12
21.3 14
22.3 16
       
22.8 18
21.5 19
22.1 21
22    7
21.9  8
22.4  9
     ⍴TEMPERATURE_ARRAY 
2 6 2
     ⍴⍴TEMPERATURE_ARRAY 
3
     TEMPERATURE_ARRAY[1;5;2]
14
     TEMPERATURE_ARRAY[2;5;2]
8
     TEMPERATURE_ARRAY[1;6;1]
22.3
     TEMPERATURE_ARRAY[2;6;1]
22.4

     TEMPERATURE_ARRAY[1;;]
21.4  7
21.8  8
22   10
21.5 12
21.3 14
22.3 16

     TEMPERATURE_ARRAY[2;;]
22.8 18
21.5 19
22.1 21
22    7
21.9  8
22.4  9

     TEMPERATURE_ARRAY[;1;]
21.4  7
22.8 18


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
21.4  7
21.8  8
22   10
21.5 12
21.3 14
22.3 16
       
22.8 18
21.5 19
22.1 21
22    7
21.9  8
22.4  9
     TEMPERATURE_ARRAY[1;3;1] ← 22.6
     TEMPERATURE_ARRAY
21.4  7
21.8  8
22.6 10
21.5 12
21.3 14
22.3 16
       
22.8 18
21.5 19
22.1 21
22    7
21.9  8
22.4  9
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

In order to make use of our knowledge of data in APL, a good understanding of how different functions act is needed. This is the topic of the rest of the course.

Before moving on, an important function to keep in mind is the monadic index ⍳ functions, which acts on a list, and returns the indices of the array with axes specified by the list. For example,

```apl

       ⍳5
1 2 3 4 5

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
