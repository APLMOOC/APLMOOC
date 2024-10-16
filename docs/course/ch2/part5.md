# Nested arrays

!!! abstract "This part will cover"

    - Basics of nested arrays
    - How to catenate vectors properly

---
<link rel="stylesheet" href="/styles/ch5part2.css">

Be warned, elements of arrays can be vectors, or matrices, or arrays of higher rank as well! We will discuss this in depth in Chapter 5, so take this section as a word of warning.

Look what happens when we try to create the new temperature matrix from the already existing temperature vectors

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


If we replace TEMPERATURE_DATA1 and TEMPERATURE_DATA2 with scalars, the situation is a bit more clear.
```apl
	   ARRAY ← 2 2 2 ⍴ 'AB'
	   ARRAY
A B
A B
   
A B
A B
```

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

       TEMPERATURE_DATA1 ← 21.4 00010101.074200 21.8 00010101.084700
       TEMPERATURE_DATA2 ← 22.8 00010101.182300 21.5 00010101.193000 
       TEMPERATURE_ARRAY ← 2 2 2 ⍴ TEMPERATURE_DATA1 , TEMPERATURE_DATA2
21.4 10101.0742
21.8 10101.0847
               
22.8 10101.1823
21.5 10101.193
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
