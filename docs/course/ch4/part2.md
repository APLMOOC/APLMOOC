# Reductions and scans
---

This part will cover:

- The six useful reduction functions
- The six useful scan functions

The dyadic replicate / function repeats elements of its right hand argument array by a specified left hand argument array. This allows the use of boolean masks, which makes it commonly used to filter arrays.

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

The monadic reduce / operator applies its left function argument between every element of a vector, or more generally, column of an array, and reduces the rank of the array by one. More on axis operations in Chapter 6.

```apl
       ⍳10
1 2 3 4 5 6 7 8 9 10
       +/⍳10
55
       1+2+3+4+5+6+7+8+9+10
55
       -/⍳10
¯5
       1-2-3-4-5-6-7-8-9-10
¯5
       ∧/⍳20 ⍝ LCM of numbers from 1 to 20
2520
       3 3⍴⍳9
1 2 3
4 5 6
7 8 9
       +/3 3⍴⍳9
6 15 24
       3 3 3⍴⍳27
 1  2  3
 4  5  6
 7  8  9
10 11 12
13 14 15
16 17 18
19 20 21
22 23 24
25 26 27
       +/3 3 3⍴⍳27
 6 15 24
33 42 51
60 69 78
```
