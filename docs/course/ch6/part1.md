# Execute and Format

!!! abstract "This part will cover"
    
    - Execute
    - User Input
    - Format

---

<link rel="stylesheet" href="/styles/ch5part2.css">

Quotation is an important part of reasoning about language; being able to refer to a statement in the abstract allows sentences such as, "the first word in 'Quotation is an important part of language' is 'Quotation'", which use language to describe language itself. Quotations refer to the sentences they are quoting, and so unquoting to retrieve the quoted sentence is always possible. 

Thus, if a programming language allows referring to itself in such a way, it must allow not only the creation of quotations, but also the ability to unquote these quotations. In APL, this functionality is provided by Strings, and the Format ``⍕`` and Execute ``⍎``  functions.

## Strings

Strings were mentioned earlier in the course, as arrays of individual characters denoted using ``'`` quotation marks like ``'the following'``. String also allow quotation marks as characters, using two quotation marks ``''`` one after the other, ``'like ''this''!'``.

```apl
      'like ''this''!'
like 'this'!
```

## Execute

Then, the Execute ``⍎`` function, as its name suggests, executes expressions stored in a string.

```apl
      ⍎'10/1'
1 1 1 1 1 1 1 1 1 1

      ⍎'X ← ⍳10'
      ⍎'X'
1 2 3 4 5 6 7 8 9 10

      ⍎'Y ← ''X ← 0'''
      Y
X ← 0
      ⍎Y
      X
0
```
Using Each ``¨``, we can execute an array of statements at once

```apl
      (⎕A,¨('←'),¨(''''),¨(,\⎕A),¨(''''))
┌─────┬──────┬───────┬────────┬─────────┬──────────┬───────────┬────────────┬─────────────┬──────────────┬───────────────┬────────────────┬─────────────────┬──────────────────┬───────────────────┬────────────────────┬─────────────────────┬──────────────────────┬───────────────────────┬────────────────────────┬─────────────────────────┬──────────────────────────┬───────────────────────────┬────────────────────────────┬─────────────────────────────┬──────────────────────────────┐
│A←'A'│B←'AB'│C←'ABC'│D←'ABCD'│E←'ABCDE'│F←'ABCDEF'│G←'ABCDEFG'│H←'ABCDEFGH'│I←'ABCDEFGHI'│J←'ABCDEFGHIJ'│K←'ABCDEFGHIJK'│L←'ABCDEFGHIJKL'│M←'ABCDEFGHIJKLM'│N←'ABCDEFGHIJKLMN'│O←'ABCDEFGHIJKLMNO'│P←'ABCDEFGHIJKLMNOP'│Q←'ABCDEFGHIJKLMNOPQ'│R←'ABCDEFGHIJKLMNOPQR'│S←'ABCDEFGHIJKLMNOPQRS'│T←'ABCDEFGHIJKLMNOPQRST'│U←'ABCDEFGHIJKLMNOPQRSTU'│V←'ABCDEFGHIJKLMNOPQRSTUV'│W←'ABCDEFGHIJKLMNOPQRSTUVW'│X←'ABCDEFGHIJKLMNOPQRSTUVWX'│Y←'ABCDEFGHIJKLMNOPQRSTUVWXY'│Z←'ABCDEFGHIJKLMNOPQRSTUVWXYZ'│
└─────┴──────┴───────┴────────┴─────────┴──────────┴───────────┴────────────┴─────────────┴──────────────┴───────────────┴────────────────┴─────────────────┴──────────────────┴───────────────────┴────────────────────┴─────────────────────┴──────────────────────┴───────────────────────┴────────────────────────┴─────────────────────────┴──────────────────────────┴───────────────────────────┴────────────────────────────┴─────────────────────────────┴──────────────────────────────┘
      ⍎¨(⎕A,¨('←'),¨(''''),¨(,\⎕A),¨(''''))
      P
ABCDEFGHIJKLMNOP
```

Execute ``⍎`` is a powerful function, and is considered unsafe when used together with arbitrary user input since it allows for arbitrary code execution.

## Format

If the only tools available to deal with quotations were strings and the execute ``⍎`` function, then it would only ever be possible to create quotations specified by the program itself when writing the program. Quoting a numerical array as the result of a computation would not be possible. This naturally leads to the creation of the Format ``⍕`` function. The Format ``⍕`` function allows not only this basic functionality, but also extra styling options for the resulting string

```apl
      X ← 4423
      ⍝ First character of the quote of X
      (⍕X)[1]
4
      ⍝ Length of the quote of X 
      ⍴⍕X
4
      

      Y ← ⍳5 5
      Y
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

      ⍕Y
 1 1  1 2  1 3  1 4  1 5 
 2 1  2 2  2 3  2 4  2 5 
 3 1  3 2  3 3  3 4  3 5 
 4 1  4 2  4 3  4 4  4 5 
 5 1  5 2  5 3  5 4  5 5 

      ⍴⍕Y
5 25
```

## Format specification

Notice that the quote of the array Y is a string of shape ``5 25``, giving ``5`` characters for each column of the array. This can be modified by providing a left argument array

```apl
      Z ← 5 5⍴÷⍳25
      Z
1             0.5           0.3333333333  0.25          0.2          
0.1666666667  0.1428571429  0.125         0.1111111111  0.1          
0.09090909091 0.08333333333 0.07692307692 0.07142857143 0.06666666667
0.0625        0.05882352941 0.05555555556 0.05263157895 0.05         
0.04761904762 0.04545454545 0.04347826087 0.04166666667 0.04         

      10 2⍕Z
      1.00      0.50      0.33      0.25      0.20
      0.17      0.14      0.13      0.11      0.10
      0.09      0.08      0.08      0.07      0.07
      0.06      0.06      0.06      0.05      0.05
      0.05      0.05      0.04      0.04      0.04
```

The first element of the left argument array specifies the characters per column, and the second element the number of decimal places each number should be formatted to.