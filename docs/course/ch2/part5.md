# Nested arrays

!!! abstract "This part will cover"

    - Basics of nested arrays
    - How to catenate vectors properly

---
<link rel="stylesheet" href="/styles/ch5part2.css">

Be warned, elements of arrays can be vectors, or matrices, or arrays of higher rank in their own right! 

We will discuss this in depth in Chapter 5, so take this section as a word of warning.

Look what happens when we try to create the new temperature matrix from the already existing temperature vectors

```apl
       TEMPERATURE_DATA1 ← 21.4 'Day 1, 07:42' 21.8 'Day 1, 08:47'
       TEMPERATURE_DATA2 ← 22.8 'Day 1, 18:23' 21.5 'Day 1, 19:30'
       TEMPERATURE_ARRAY ← 2 2 2 ⍴ TEMPERATURE_DATA1 TEMPERATURE_DATA2

       TEMPERATURE_ARRAY
 21.4  Day 1, 07:42  21.8  Day 1, 08:47   22.8  Day 1, 18:23  21.5  Day 1, 19:30  
 21.4  Day 1, 07:42  21.8  Day 1, 08:47   22.8  Day 1, 18:23  21.5  Day 1, 19:30  
                                                                                  
 21.4  Day 1, 07:42  21.8  Day 1, 08:47   22.8  Day 1, 18:23  21.5  Day 1, 19:30  
 21.4  Day 1, 07:42  21.8  Day 1, 08:47   22.8  Day 1, 18:23  21.5  Day 1, 19:30  
```

Compared to the expected result, which is

```apl
21.4 Day 1, 07:42
21.8 Day 1, 08:47

22.8 Day 1, 18:23
21.5 Day 1, 19:30
```

Replacing the vectors by strings, the situation is a little more clear

```apl
	   ARRAY ← 2 2 2 ⍴ 'TEMPERATURE_DATA1' 'TEMPERATURE_DATA2'
	   ARRAY
 TEMPERATURE_DATA1  TEMPERATURE_DATA2 
 TEMPERATURE_DATA1  TEMPERATURE_DATA2 
                                      
 TEMPERATURE_DATA1  TEMPERATURE_DATA2 
 TEMPERATURE_DATA1  TEMPERATURE_DATA2 
```

In APL, elements of arrays can be of any rank. In the above code, we've accidentally created an array of vectors rather than an array of their scalars! This is because we did not combine the vectors into a larger vector, but made a new vector whose elements are ``TEMPERATURE_DATA1`` and ``TEMPERATURE_DATA2``. 

The proper way to combine two vectors into a single longer vector is using the catenate `,` function,  generally joining two arrays along a common edge. Monadically, the ravel `,` function can be used to "unravel" a matrix into a vector of its elements in top-down left-right order, called ravel order.

```apl
       WORD ← 3 2 2 ⍴ 'BOROSILICATE'
       WORD
BO
RO
  
SI
LI
  
CA
TE

       ,WORD
BOROSILICATE

       WORD,'T'
BOT
ROT
   
SIT
LIT
   
CAT
TET

       WORD,WORD
BOBO
RORO
    
SISI
LILI
    
CACA
TETE

       TEMPERATURE_DATA1 ← 21.4 'Day 1, 07:42' 21.8 'Day 1, 08:47'
       TEMPERATURE_DATA2 ← 22.8 'Day 1, 18:23' 21.5 'Day 1, 19:30'
       TEMPERATURE_ARRAY ← 2 2 2 ⍴ TEMPERATURE_DATA1 , TEMPERATURE_DATA2
21.4 Day 1, 07:42
21.8 Day 1, 08:47

22.8 Day 1, 18:23
21.5 Day 1, 19:30
```


!!! info "Boxing"
       The ]Box user command controls how array output is displayed, with levels of nesting shown as boxes.
       
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
