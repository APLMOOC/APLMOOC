# Nested arrays

!!! abstract "This part will cover"

    - Basics of nested arrays
    - How to catenate vectors properly

---
<link rel="stylesheet" href="/styles/ch5part2.css">

Be warned, elements of arrays can be vectors, or matrices, or arrays of higher rank in their own right!  We will discuss this in depth in Chapter 5, so take this section as a warning.

Recall that in previous sections our temperature arrays contained both numbers and vectors of characters.

```apl
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

Because the contents of this array are mixed, if boxing is enabled, APL draws boxes to separate the entries visually.

## Accidental nesting

This also means that it's possible to accidentally create a matrix of vectors rather than a matrix of their elements. Suppose we created the full array ``TData`` immediately from T1 and T2 like so

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

      TData ← 2 6 2 ⍴ T1 T2
```

We would get a very large array of the vectors T1 and T2! (Try it!) 

In APL, elements of arrays can be of any rank. In the above code, we create an array of vectors rather than an array of their scalars because ``T1 T2`` is a vector whose elements are ``T1`` and ``T2``. 

## Catenate and ravel

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

      TData ← 2 6 2 ⍴ T1,T2
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


!!! info "Boxing"
       
       In TryAPL, boxing is enabled by default; however, to manually control boxing, the `]Box` user command can be used.
       
       ```apl
             nested ← 2 2 ⍴ (1 2 3) ('  ') ('   ') (2 2 ⍴ ('  ') (1 2 3) (2 2 ⍴ (1 2 3) ('  ') ('   ') (1 2)) ('   '))
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
