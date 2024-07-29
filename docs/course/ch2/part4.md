# Higher dimensional space

!!! abstract "This part will cover"

    - Constructing matrices
    - Constructing 3D arrays
    - The reshape function

---

The astute reader may have noticed that, although the vector data is much more structured, the dates and times of the measurements have been completely forgotten.

One solution is to use more vectors to organize this data, here using floating-point decimal encoded format. This format stores the dates as decimal numbers, where the integer part stores the year, month, and day, and the fractional part stores the hour, minute, and second, yyyymmdd.hhmmss.

For example, 00010101.074200 is year 0001, month 01, day 01, hour 05, minute 42, and second 00.

```apl
      TEMPERATURE_PAGE1 ← 21.4 21.8 22.0 21.5 21.3 22.3
      TEMPERATURE_PAGE1_DATE ← 00010101.074200 00010101.084700 00010101.101000 00010101.120100 00010101.143600 00010101.165000
      TEMPERATURE_PAGE2 ← 22.8 21.5 22.1 22.0 21.9 22.4
      TEMPERATURE_PAGE2_DATE ← 00010101.182300 00010101.193000 00010101.211200 00010102.071500 00010102.083000 00010102.094500
```

and access dates and times using the same index;

```apl
      TEMPERATURE_PAGE1[2]
21.8
      TEMPERATURE_PAGE1_DATE[2]
00010101.084700
```

There is a built-in function to deal with dates and times, the ⎕DT command, which will be introduced in chapter 3.

However, this lack of structure is exactly what introducing vectors was supposed to solve; two closely related pieces of information, the time of a measurement and the value of the measurement, are kept separate when they should logically be part of the same collection of data. Measurement data of this form are usually stored in tables, and it is only natural to try to store them in the same manner in a computer system.

You decide to start over yet again, and decide to store data in a matrix instead

```apl
      TEMPERATURE_PAGE1 ← 6 2 ⍴ 21.4 00010101.074200 21.8 00010101.084700 22.0 00010101.101000 21.5 00010101.120100 21.3 00010101.143600 22.3 00010101.165000
      TEMPERATURE_PAGE2 ← 6 2 ⍴ 22.8 00010101.182300 21.5 00010101.193000 22.1 00010102.211200 22.0 00010103.071500 21.9 00010103.083000 22.4 00010103.094500
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

The reshape function acts by returning an array whose entries are the entries of its right operand, and whose axes are specified by a vector of integers as its left operand, more concretely,

```apl
      TEMPERATURE_DATA ← 21.4 00010101.074200 21.8 00010101.084700 22.0 00010101.101000 21.5 00010101.120100 21.3 00010101.143600 22.3 00010101.165000
      6 2 ⍴ TEMPERATURE_DATA
21.4 10101.0742
21.8 10101.0847
22   10101.101
21.5 10101.1201
21.3 10101.1436
22.3 10101.165
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
```
*Strings* in APL are vectors of characters, defined using single quotes. The ⎕A function return the string 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', more on this in Chapter 3.
```
      ALPHABET ← ⎕A 
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
```

If the right operand is too short to fill the array, the reshape (dyadic ⍴) function repeats the right operand's entries. Here, the reshape ⍴ function repeated the alphabet.

The shape (monadic ⍴) function acts on one array, its right operand, by returning a vector whose entries are the lengths of the axes.

```apl
      TEMPERATURE_DATA ← 21.4 00010101.074200 21.8 00010101.084700 22.0 00010101.101000 21.5 00010101.120100 21.3 00010101.143600 22.3 00010101.165000
      TEMPERATURE_PAGE1 ← 6 2 ⍴ TEMPERATURE_DATA
      ⍴TEMPERATURE_PAGE1
6 2
      ⍴100 ⍝ The shape of a scalar is the empty list

      ⍴⎕A ⍝ Number of letters in the alphabet
26
```

Since elements in matrices are ordered along two axes, an element of a matrix can be specified by two position, the row and column. If only a row position (or column position) is specified, the whole row (or column) is returned.

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

      TEMPERATURE_DATA1 ← 21.4 00010101.074200 21.8 00010101.084700 22.0 00010101.101000 21.5 00010101.120100 21.3 00010101.143600 22.3 00010101.165000
      TEMPERATURE_PAGE1 ← 6 2 ⍴ TEMPERATURE_DATA1
      TEMPERATURE_PAGE1
21.4 10101.0742
21.8 10101.0847
22   10101.101
21.5 10101.1201
21.3 10101.1436
22.3 10101.165
      TEMPERATURE_PAGE1[1;1]
21.4
      TEMPERATURE_PAGE1[1;2]
10101.0742
      TEMPERATURE_PAGE1[1;]
21.4 10101.0742
      TEMPERATURE_PAGE1[3;2]
10101.101

     TEMPERATURE_PAGE2 ← 6 2 ⍴ 22.8 00010101.182300 21.5 00010101.193000 22.1 00010102.211200 22.0 00010103.071500 21.9 00010103.083000 22.4 00010103.094500
     TEMPERATURE_PAGE2
22.8 10101.1823
21.5 10101.193 
22.1 10102.2112
22   10103.0715
21.9 10103.083 
22.4 10103.0945
     TEMPERATURE_PAGE2[1;2]
10101.1823
     TEMPERATURE_PAGE2[2;2]
10101.193
     TEMPERATURE_PAGE2[3;2]
10102.2112
     TEMPERATURE_PAGE2[;2]
0101.1823 10101.193 10102.2112 10103.0715 10103.083 10103.0945

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

```apl
     TEMPERATURE_ARRAY ← 2 6 2 ⍴ 21.4 00010101.074200 21.8 00010101.084700 22.0 00010101.101000 21.5 00010101.120100 21.3 00010101.143600 22.3 00010101.165000 22.8 00010101.182300 21.5 00010101.193000 22.1 00010102.211200 22.0 00010103.071500 21.9 00010103.083000 22.4 00010103.094500
     TEMPERATURE_ARRAY
21.4 10101.0742
21.8 10101.0847
22   10101.101 
21.5 10101.1201
21.3 10101.1436
22.3 10101.165 
               
22.8 10101.1823
21.5 10101.193 
22.1 10102.2112
22   10103.0715
21.9 10103.083 
22.4 10103.0945

     ⍴TEMPERATURE_ARRAY 
2 6 2

     ⍴⍴TEMPERATURE_ARRAY 
3

     TEMPERATURE_ARRAY[1;;]
21.4 10101.0742
21.8 10101.0847
22   10101.101 
21.5 10101.1201
21.3 10101.1436
22.3 10101.165

     TEMPERATURE_ARRAY[2;;]
22.8 10101.1823
21.5 10101.193 
22.1 10102.2112
22   10103.0715
21.9 10103.083 
22.4 10103.0945

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
21.4 10101.0742
21.8 10101.0847
226  10101.101 
21.5 10101.1201
21.3 10101.1436
22.3 10101.165 
               
22.8 10101.1823
21.5 10101.193 
22.1 10102.2112
22   10103.0715
21.9 10103.083 
22.4 10103.0945
     TEMPERATURE_ARRAY[1;3;1] ← 22.6
     TEMPERATURE_ARRAY
21.4 10101.0742
21.8 10101.0847
22.6 10101.101 
21.5 10101.1201
21.3 10101.1436
22.3 10101.165 
               
22.8 10101.1823
21.5 10101.193 
22.1 10102.2112
22   10103.0715
21.9 10103.083 
22.4 10103.0945
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
