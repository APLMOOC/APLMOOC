# Nested arrays

!!! abstract "This part will cover"

    - Basics of nested arrays
    - How to catenate vectors properly

---

Be warned, elements of arrays can be vectors, or matrices, or arrays of higher rank as well!

Reducing the length of the temperature arrays for the sake of the following example, look what happens when we try to create a rank 3 array in the following,

```apl
       TEMPERATURE_DATA1 ← 21.4 00010101.074200 21.8 00010101.084700
       TEMPERATURE_DATA2 ← 22.8 00010101.182300 21.5 00010101.193000 
       TEMPERATURE_ARRAY ← 2 2 2 ⍴ TEMPERATURE_DATA1 TEMPERATURE_DATA2

       TEMPERATURE_ARRAY
┌───────────────────────────────┬──────────────────────────────┐
│21.4 10101.0742 21.8 10101.0847│22.8 10101.1823 21.5 10101.193│
├───────────────────────────────┼──────────────────────────────┤
│21.4 10101.0742 21.8 10101.0847│22.8 10101.1823 21.5 10101.193│
└───────────────────────────────┴──────────────────────────────┘
┌───────────────────────────────┬──────────────────────────────┐
│21.4 10101.0742 21.8 10101.0847│22.8 10101.1823 21.5 10101.193│
├───────────────────────────────┼──────────────────────────────┤
│21.4 10101.0742 21.8 10101.0847│22.8 10101.1823 21.5 10101.193│
└───────────────────────────────┴──────────────────────────────┘
```

compared to the expected result, which is

```apl
21.4 00010101.074200 
21.8 00010101.084700

22.8 00010101.182300 
21.5 00010101.193000
```

Attempting to access the elements of the rank 3 array returns vectors, this is because we’ve accidentally created an array of vectors rather than an array of their elements. 

```apl
       ⍝ TEMPERATUER_ARRAY can be thought of as
       ⍝ TEMPERATURE_DATA1 TEMPERATURE_DATA2
       ⍝ TEMPERATURE_DATA1 TEMPERATURE_DATA2
       ⍝
       ⍝ TEMPERATURE_DATA1 TEMPERATURE_DATA2
       ⍝ TEMPERATURE_DATA1 TEMPERATURE_DATA2

       TEMPERATURE_ARRAY[1;1;1] ⍝ the vector TEMPERATURE_DATA1 
21.4 00010101.074200 21.8 00010101.084700
	   TEMPERATURE_ARRAY[2;1;1] ⍝ the vector TEMPERATURE_DATA1
21.4 00010101.074200 21.8 00010101.084700
	   TEMPERATURE_ARRAY[1;2;1] ⍝ the vector TEMPERATURE_DATA1 
21.4 00010101.074200 21.8 00010101.084700
	   TEMPERATURE_ARRAY[2;2;1] ⍝ the vector TEMPERATURE_DATA1
21.4 00010101.074200 21.8 00010101.084700


       TEMPERATURE_ARRAY[1;1;2] ⍝ the vector TEMPERATURE_DATA2
22.8 00010101.182300 21.5 00010101.193000 
	   TEMPERATURE_ARRAY[2;1;2] ⍝ the vector TEMPERATURE_DATA2
22.8 00010101.182300 21.5 00010101.193000 
	   TEMPERATURE_ARRAY[1;2;2] ⍝ the vector TEMPERATURE_DATA2 
22.8 00010101.182300 21.5 00010101.193000 
	   TEMPERATURE_ARRAY[2;2;2] ⍝ the vector TEMPERATURE_DATA2
22.8 00010101.182300 21.5 00010101.193000 
```

If we replace TEMPERATURE_DATA1 and TEMPERATURE_DATA2 with scalars, the situation is a bit more clear.
```apl
	   ARRAY ← 2 2 2 ⍴ 1 2
	   ARRAY
1 2
1 2
   
1 2
1 2

	   ARRAY[1;1;1]
1
	   ARRAY[2;1;1]
1
	   ARRAY[1;2;1]
1
	   ARRAY[2;2;1]
1

	   ARRAY[1;1;2]
2
	   ARRAY[2;1;2]
2
	   ARRAY[1;2;2]
2
	   ARRAY[2;2;2]
2
```

The monadic ravel operator , can be used to “unravel” a matrix into a vector of its elements in left-right top-down order, called ravel order. Dyadically, the catenate , function glues two arrays together along a common axis.

```apl
       ARRAY ← 2 2 2 ⍴ 1 2 3 4 5 6 7 8
       ARRAY
1 2
3 4
   
5 6
7 8

       ,ARRAY
1 2 3 4 5 6 7 8

       ARRAY,1
1 2 1
3 4 1
     
5 6 1
7 8 1

       ARRAY,ARRAY
1 2 1 2
3 4 3 4
       
5 6 5 6
7 8 7 8


       TEMPERATURE_DATA1 ← 21.4 00010101.074200 21.8 00010101.084700
       TEMPERATURE_DATA2 ← 22.8 00010101.182300 21.5 00010101.193000 
       TEMPERATURE_ARRAY ← 2 2 2 ⍴ TEMPERATURE_DATA1 , TEMPERATURE_DATA2
21.4 10101.0742
21.8 10101.0847
               
22.8 10101.1823
21.5 10101.193
```

When dealing with nested arrays, useful functions to keep in mind are the monadic ≡ depth, and the monadic ≢ tally.

```apl
       ≡TEMPERATURE_ARRAY ⍝ TEMPERATURE_ARRAY is an array of arrays, it has depth 2
2 
       ≡10 ⍝ The depth of a scalar is 0
0 
       ⍳10 ⍝ The monadic ⍳ index operator generates numbers up to its right argument
1 2 3 4 5 6 7 8 9 10 
       ≡⍳10 ⍝ The depth of a vector of scalars is 1
1 
       ≡ 10 10 ⍴ ⍳10 ⍝ The depth of a matrix of scalars is 1
1 
       nested ← 2 2 ⍴ (⍳3) ('  ') ('   ') (2 2 ⍴ ('  ') (⍳3) (2 2 ⍴ (⍳3) ('  ') ('   ') (⍳2)) ('   '))
       nested
┌─────┬───────────────────┐
│1 2 3│                   │
├─────┼───────────────────┤
│     │┌───────────┬─────┐│
│     ││           │1 2 3││
│     │├───────────┼─────┤│
│     ││┌─────┬───┐│     ││
│     │││1 2 3│   ││     ││
│     ││├─────┼───┤│     ││
│     │││     │1 2││     ││
│     ││└─────┴───┘│     ││
│     │└───────────┴─────┘│
└─────┴───────────────────┘
       ≡nested ⍝ We might expect a depth of 4 here, but for arrays with elements with differing depths, the depth is labelled as negative
¯4 
       ⍴nested ⍝ Notice that the nested elements in the matrix count as scalar elements.
2 2
```


!!! info "Boxing"
       The ]Box user command controls how array output is displayed
       
       ```apl
              nested ← 2 2 ⍴ (⍳3) ('  ') ('   ') (2 2 ⍴ ('  ') (⍳3) (2 2 ⍴ (⍳3) ('  ') ('   ') (⍳2)) ('   '))
              nested
       1 2 3                        
                       1 2 3  
          1 2 3               
                 1 2          

              ]Box on
       Was OFF
              nested
       ┌─────┬───────────────────┐
       │1 2 3│                   │
       ├─────┼───────────────────┤
       │     │┌───────────┬─────┐│
       │     ││           │1 2 3││
       │     │├───────────┼─────┤│
       │     ││┌─────┬───┐│     ││
       │     │││1 2 3│   ││     ││
       │     ││├─────┼───┤│     ││
       │     │││     │1 2││     ││
       │     ││└─────┴───┘│     ││
       │     │└───────────┴─────┘│
       └─────┴───────────────────┘
       ```


The monadic tally function ≢ returns the number of rows of an array.
```apl
       ≢10
1
       ≢⍳10
10
       ≢10 20 ⍴ ⍳30
10
       nested ← 2 2 ⍴ (⍳3) ('  ') ('   ') (2 2 ⍴ ('  ') (⍳3) (2 2 ⍴ (⍳3) ('  ') ('   ') (⍳2)) ('   '))
       ≢nested
2
```
