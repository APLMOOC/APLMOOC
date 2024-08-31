# Anything can be a scalar

!!! abstract "This part will cover"
    
    - Nested arrays
    - Enclose
    - Disclose
    - Nest
    - Each
    - Tally

---

It is now time to continue the discussion we had in chapter 2 about nested arrays. This topic tends to be the most difficult part of learning APL; hopefully the following exposition will make it seem like a natural development of what we’ve already discussed.

Data in APL are represented using arrays. The elements of an array are called scalars, which can contain any arbitrary types of data. They could contain arrays with rank zero (simple scalars) such as the array ``(7)``, vectors ``(7 14 21 28 35 42 49 56 63)``, matrices ``3 3⍴(7 14 21 28 35 42 49 56 63)``, or any higher rank array.

Since scalars are elements of arrays, they themselves carry no rank or size. Consider the following example of a record of a forum post


```apl
      ⍝ Boxing will be on throughout this whole section, to help see the nesting
      ]Box On
Was Off

      post ← '27-08-2024' '15:38' 'How good was broadcast NTSC/PAL in practice?' 'dataMoshpit'
      post
┌──────────┬─────┬────────────────────────────────────────────┬───────────┐
│27-08-2024│15:38│How good was broadcast NTSC/PAL in practice?│dataMoshpit│
└──────────┴─────┴────────────────────────────────────────────┴───────────┘
```

The variable `post` is a vector of length 4; it contains four scalars, each of which contains a string.

```apl
      ⍴ post
4
      post[3]
┌────────────────────────────────────────────┐
│How good was broadcast NTSC/PAL in practice?│
└────────────────────────────────────────────┘
      ⍝ Empty shape!
      ⍴ post[3]

      ⍝ Just like simple scalars
      ⍴ 5
```

It is a nested vector, since these scalars contain vector data, whose depth can be measured using the monadic depth ≡ function.

```apl
      ≡ post
2
```

The data inside a nested array can be accessed using the dyadic pick ⊃ function.

```apl
      3⊃post
How good was broadcast NTSC/PAL in practice?

      ⍴ 3⊃post
44
```

The left argument to the dyadic pick function is a special nested index vector that matches the right hand nested array. Each element of this index vector must be a valid index for each layer of nesting of the right hand array. Let's see what this means concretely for the following nested array of posts

```apl
      POSTS
┌──────────────────────────────────────────────┬───────────────────┐
│30-08-2024                                    │                   │
├──────────────────────────────────────────────┼───────────────────┤
│Why does DVB-C use QAM instead of OFDM?       │frequencySniffer   │
├──────────────────────────────────────────────┼───────────────────┤
│DAC in QPSK modulation                        │radioComputer      │
├──────────────────────────────────────────────┼───────────────────┤
│                                              │                   │
├──────────────────────────────────────────────┼───────────────────┤
│                                              │                   │
└──────────────────────────────────────────────┴───────────────────┘
┌──────────────────────────────────────────────┬───────────────────┐
│29-08-2024                                    │                   │
├──────────────────────────────────────────────┼───────────────────┤
│Nordtel OC3 Express                           │corporateRaider    │
├──────────────────────────────────────────────┼───────────────────┤
│Record for longest television broadcast       │RedScanLine        │
├──────────────────────────────────────────────┼───────────────────┤
│Book on Digital Signal Processing             │vacuumTubed        │
├──────────────────────────────────────────────┼───────────────────┤
│Trying to obtain a clear QAM signal from cable│hadamardMardy      │
└──────────────────────────────────────────────┴───────────────────┘
┌──────────────────────────────────────────────┬───────────────────┐
│28-08-2024                                    │                   │
├──────────────────────────────────────────────┼───────────────────┤
│Early color TV in Finland                     │televisioniini     │
├──────────────────────────────────────────────┼───────────────────┤
│Soviet Tube Substitute for 6TGSN7             │logorrheicLogarithm│
├──────────────────────────────────────────────┼───────────────────┤
│OFDM, carriers and useful data symbol rate    │selfConstructing   │
├──────────────────────────────────────────────┼───────────────────┤
│                                              │                   │
└──────────────────────────────────────────────┴───────────────────┘
┌──────────────────────────────────────────────┬───────────────────┐
│27-08-2024                                    │                   │
├──────────────────────────────────────────────┼───────────────────┤
│How good was broadcast NTSC/PAL in practice?  │dataMoshpit        │
├──────────────────────────────────────────────┼───────────────────┤
│Looking for flyback                           │pacAttack          │
├──────────────────────────────────────────────┼───────────────────┤
│                                              │                   │
├──────────────────────────────────────────────┼───────────────────┤
│                                              │                   │
└──────────────────────────────────────────────┴───────────────────┘
```

The depth of this array is the same as the depth of the above vector, since all values are boxed once.

```apl
      ≡POSTS
2
```

However this array is three dimensional

```apl
      ⍴POSTS
4 5 2
      ⍴⍴POSTS
3
```

To pick an element from this array, we must provide an index vector where each element is a valid index for each layer of the array. In this case, we can provide two elements, since the depth is 2. Let's get the first element of this array

```apl
      (1 1 1)⊃POSTS
RANK ERROR
      (1 1 1)⊃POSTS
             ∧
```

What happened here? The reason why this doesn't work is that (1 1 1) is not a single element, it is a vector of three elements. In order to turn data into a single element, a scalar, we can enclose ⊂ it in a box.

```apl
      ⊂1 1 1
┌─────┐
│1 1 1│
└─────┘
      (⊂1 1 1)⊃POSTS
30-08-2024

      (1 1 1)1
┌─────┬─┐
│1 1 1│1│
└─────┴─┘
      ((1 1 1)1)⊃POSTS
3
```


In order to create a nested array out of another array, the enclose ⊂ operator can be used.

```apl
       ⍳10
1 2 3 4 5 6 7 8 9 10
       ⊂⍳10
┌────────────────────┐
│1 2 3 4 5 6 7 8 9 10│
└────────────────────┘
```

In order to pick information out of nested arrays, the dyadic pick ⊃ operator allows indexing a nested arrays using a nested left array. Monadically, it picks the first element of the array.

```apl
       school ← 2 1 ⍴ ('MATH' ('101' 30 ('COMPETED')) ('102' 37 ('CANCELLED')))  ('CS' ('101' 53 ('COMPETED')) ('102' 28 ('COMPLETED')) ('103' 20 ('IN PROGRESS')))
       school
┌──────────────────────────────────────────────────────────────┐
│┌────┬─────────────────┬──────────────────┐                   │
││MATH│┌───┬──┬────────┐│┌───┬──┬─────────┐│                   │
││    ││101│30│COMPETED│││102│37│CANCELLED││                   │
││    │└───┴──┴────────┘│└───┴──┴─────────┘│                   │
│└────┴─────────────────┴──────────────────┘                   │
├──────────────────────────────────────────────────────────────┤
│┌──┬─────────────────┬──────────────────┬────────────────────┐│
││CS│┌───┬──┬────────┐│┌───┬──┬─────────┐│┌───┬──┬───────────┐││
││  ││101│53│COMPETED│││102│28│COMPLETED│││103│20│IN PROGRESS│││
││  │└───┴──┴────────┘│└───┴──┴─────────┘│└───┴──┴───────────┘││
│└──┴─────────────────┴──────────────────┴────────────────────┘│
└──────────────────────────────────────────────────────────────┘
       ≡school
¯4
       ≢school
2
       school[1]
RANK ERROR
      school[1]
            ∧
            
      ⊃school
┌────┬─────────────────────┬──────────────────────┐
│MATH│┌───────┬──┬────────┐│┌───────┬──┬─────────┐│
│    ││CLASS 1│30│COMPETED│││CLASS 2│37│CANCELLED││
│    │└───────┴──┴────────┘│└───────┴──┴─────────┘│
└────┴─────────────────────┴──────────────────────┘

       ⍝ Nested left arrays are required
       (1 1)⊃school
RANK ERROR
      (1 1)⊃school
           ∧
           
      (⊂(1 1))⊃school
┌────┬─────────────────────┬──────────────────────┐
│MATH│┌───────┬──┬────────┐│┌───────┬──┬─────────┐│
│    ││CLASS 1│30│COMPETED│││CLASS 2│37│CANCELLED││
│    │└───────┴──┴────────┘│└───────┴──┴─────────┘│
└────┴─────────────────────┴──────────────────────┘
       (⊂(2 1))⊃school
┌────────────────┬─────────────────────┬──────────────────────┬────────────────────────┐
│COMPUTER SCIENCE│┌───────┬──┬────────┐│┌───────┬──┬─────────┐│┌───────┬──┬───────────┐│
│                ││CLASS 1│53│COMPETED│││CLASS 2│28│COMPLETED│││CLASS 3│20│IN PROGRESS││
│                │└───────┴──┴────────┘│└───────┴──┴─────────┘│└───────┴──┴───────────┘│
└────────────────┴─────────────────────┴──────────────────────┴────────────────────────┘
       
       ((1 1) (1))⊃school
MATH
       ((2 1) (2))⊃school
┌───────┬──┬────────┐
│CLASS 1│53│COMPETED│
└───────┴──┴────────┘
       ((2 1) (2) (3))⊃school
COMPETED
```



The elements of the above 2x2 array are scalars with data the vectors ‘nums’ and ‘letters’, exactly what would be expected if nums and letters were switched for simple scalars.

```apl
      2 2 ⍴ 5 6
5 6
5 6
```

The element at (1,1) in both cases is a scalar, which can be verified by computing their rank.

```apl
      letters_numbers ← 2 2 ⍴ nums letters
      simple_matrix ← 2 2 ⍴ 5 6
      simple_matrix[1;1]
5
      ⍴⍴ simple_matrix[1;1]
0

      letters_numbers[1;1]
┌───┐
│1 3│
└───┘
      ⍴⍴(2 2 ⍴ nums letters)[1;1]
0
```

Consider a more complex, nested example.

```apl
      nested ← 2 2 ⍴ (⍳3) (' ') (' ') (2 2 ⍴ (' ') (⍳3) (2 2 ⍴ (⍳3) (' ') (' ') (⍳2)) (' '))
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
      nested[2;2]
┌───────────────────┐
│┌───────────┬─────┐│
││           │1 2 3││
│├───────────┼─────┤│
││┌─────┬───┐│     ││
│││1 2 3│   ││     ││
││├─────┼───┤│     ││
│││     │1 2││     ││
││└─────┴───┘│     ││
│└───────────┴─────┘│
└───────────────────┘
      ⍴⍴nested[2;2]
0
```

Since scalars have no rank, it is not possible to access their data using array indexing. Instead, deep indexing can be done with the dyadic ⊃ pick function. The left argument of the ⊃ pick function is a vector of indices, which successively index the right argument.

```apl
      multiplication_line ← (1×⍳10) (2×⍳10) (3×⍳10) (4×⍳10) (5×⍳10) (6×⍳10) (7×⍳10) (8×⍳10) (9×⍳10) (10×⍳10)
┌────────────────────┬─────────────────────────┬──────────────────────────┬───────────────────────────┬────────────────────────────┬────────────────────────────┬────────────────────────────┬────────────────────────────┬────────────────────────────┬──────────────────────────────┐
│1 2 3 4 5 6 7 8 9 10│2 4 6 8 10 12 14 16 18 20│3 6 9 12 15 18 21 24 27 30│4 8 12 16 20 24 28 32 36 40│5 10 15 20 25 30 35 40 45 50│6 12 18 24 30 36 42 48 54 60│7 14 21 28 35 42 49 56 63 70│8 16 24 32 40 48 56 64 72 80│9 18 27 36 45 54 63 72 81 90│10 20 30 40 50 60 70 80 90 100│
└────────────────────┴─────────────────────────┴──────────────────────────┴───────────────────────────┴────────────────────────────┴────────────────────────────┴────────────────────────────┴────────────────────────────┴────────────────────────────┴──────────────────────────────┘

      5 ⊃ multiplication_line
5 10 15 20 25 30 35 40 45 50
      5 3 ⊃ multiplication_line
15

      multiplication_line[5]
┌────────────────────────────┐
│5 10 15 20 25 30 35 40 45 50│
└────────────────────────────┘
      multiplication_line[5;3]
RANK ERROR
      multiplication_line[5;3]
                         ∧
```

For the nested example,

```apl
      (2 2)(2 1)⊃nested
┌─────┬───┐
│1 2 3│   │
├─────┼───┤
│     │1 2│
└─────┴───┘
      (2 2)(2 1)(2 2)⊃nested
1 2
      (2 2)(2 1)(2 2)2⊃nested
2
```

If ⊃ pick does not have a left argument, it acts as the monadic disclose function and picks the first element.

```apl
      ⊃nested
1 2 3
      ⊃nested[2;2]
┌───────────┬─────┐
│           │1 2 3│
├───────────┼─────┤
│┌─────┬───┐│     │
││1 2 3│   ││     │
│├─────┼───┤│     │
││     │1 2││     │
│└─────┴───┘│     │
└───────────┴─────┘
      ⊃multiplication_line
1 2 3 4 5 6 7 8 9 10
```

There is also a nested variant of the , ravel function called the ∊ enlist function.

```apl
      ∊multiplication_line
1 2 3 4 5 6 7 8 9 10 2 4 6 8 10 12 14 16 18 20 3 6 9 12 15 18 21 24 27 30 4 8 12 16 20 24 28 32 36 40 5 10 15 20 25 30 35 40 45 50 6 12 18 24 30 36 42 48 54 60 7 14 21 28 35 42 49 56 63 70 8 16 24 32 40 48 56 64 72 80 9 18 27 36 45 54 63 72 81 90 10 20 30 40 50 60 70 80 90 100
      ∊nested
1 2 3     1 2 3 1 2 3    1 2  
```

Creating nested arrays from already existing data can be done using the ⊂ enclose functions. The monadic enclose ⊂ function wraps its right argument as a scalar.

```apl
      ⊂⍳10
┌────────────────────┐
│1 2 3 4 5 6 7 8 9 10│
└────────────────────┘
      ⍴⍴⊂⍳10
0

      3 3 3⍴⍳9
1 2 3
4 5 6
7 8 9
     
1 2 3
4 5 6
7 8 9
     
1 2 3
4 5 6
7 8 9
      ⊂3 3 3⍴⍳9
┌─────┐
│1 2 3│
│4 5 6│
│7 8 9│
│     │
│1 2 3│
│4 5 6│
│7 8 9│
│     │
│1 2 3│
│4 5 6│
│7 8 9│
└─────┘
      ⍴⍴⊂3 3 3⍴⍳9
0
```

To see why creating a nested array might be useful, we take a closer look at the windowed reduce function. Applying the , ravel function to the windowed reduce operator to take a peek at its internal operation

```apl
      3,/1 2 3 4 5 6
┌─────┬─────┬─────┬─────┐
│1 2 3│2 3 4│3 4 5│4 5 6│
└─────┴─────┴─────┴─────┘
```

We can see here that the windowed reduce operator applies the , ravel function to three element sections of the vector to produce scalars which then form the final result. Compare this to the case of the + plus function applied to the windowed reduce operator

```apl
      3+/1 2 3 4 5 6
6 9 12 15
      ⍝ Equivalent to (1+2+3) (2+3+4) (3+4+5) (4+5+6)
```

Since the array constructed above has scalars containing vectors, we can apply the +/ plus reduce function to each vector using the ¨ each operator.

```apl
      3,/1 2 3 4 5 6
┌─────┬─────┬─────┬─────┐
│1 2 3│2 3 4│3 4 5│4 5 6│
└─────┴─────┴─────┴─────┘
      +/¨3,/1 2 3 4 5 6
6 9 12 15
```

Without the each operator, the plus reduce function will add up the scalars

```apl
      +/3,/1 2 3 4 5 6
┌────────┐
│10 14 18│
└────────┘
```

In order to easily create and destroy such nested arrays,  we can use the enclose ⊂ function with a rank specification to denote what axis to group cells along.

```apl
      2 2 2⍴⍳8
1 2
3 4
   
5 6
7 8
      ⊂[3]2 2 2⍴⍳8
┌───┬───┐
│1 2│3 4│
├───┼───┤
│5 6│7 8│
└───┴───┘
      ⊂[2]2 2 2⍴⍳8
┌───┬───┐
│1 3│2 4│
├───┼───┤
│5 7│6 8│
└───┴───┘
      ⊂[1]2 2 2⍴⍳8
┌───┬───┐
│1 5│2 6│
├───┼───┤
│3 7│4 8│
└───┴───┘
```

The split ↓ function is the dedicated function for this task

```apl
      ↓2 2 2⍴⍳8
┌───┬───┐
│1 2│3 4│
├───┼───┤
│5 6│7 8│
└───┴───┘      
      ↓[1]2 2 2⍴⍳8
┌───┬───┐
│1 5│2 6│
├───┼───┤
│3 7│4 8│
└───┴───┘
```

With the rank operator on the enclose function, cells or arbitrary rank can be split

```apl

      (⊂⍤3)2 2 2⍴⍳8
┌───┐
│1 2│
│3 4│
│   │
│5 6│
│7 8│
└───┘
      (⊂⍤2)2 2 2⍴⍳8
┌───┬───┐
│1 2│5 6│
│3 4│7 8│
└───┴───┘
      (⊂⍤1)2 2 2⍴⍳8
┌───┬───┐
│1 2│3 4│
├───┼───┤
│5 6│7 8│
└───┴───┘
```

The inverse to splitting is the Mix ↑ function. If the nested array is of irregular shape, the Mix function will pad the resulting array, or try to fill in missing elements with an empty array of expected shape

```apl
      (⊂⍤2)2 2 2⍴⍳8
┌───┬───┐
│1 2│5 6│
│3 4│7 8│
└───┴───┘
      ↑(⊂⍤2)2 2 2⍴⍳8
1 2
3 4
   
5 6
7 8
      (1 2 3(4 5)6)
┌─┬─┬─┬───┬─┐
│1│2│3│4 5│6│
└─┴─┴─┴───┴─┘
      ↑(1 2 3(4 5)6)
1 0
2 0
3 0
4 5
6 0
      (1 2 3(4 (5 6) 7)8)
┌─┬─┬─┬─────────┬─┐
│1│2│3│┌─┬───┬─┐│8│
│ │ │ ││4│5 6│7││ │
│ │ │ │└─┴───┴─┘│ │
└─┴─┴─┴─────────┴─┘
      ↑(1 2 3(4 (5 6) 7)8)
┌─┬───┬─┐
│1│0  │0│
├─┼───┼─┤
│2│0  │0│
├─┼───┼─┤
│3│0  │0│
├─┼───┼─┤
│4│5 6│7│
├─┼───┼─┤
│8│0  │0│
└─┴───┴─┘
```

For a more involved example, consider the following grade book
```apl
      school ← ('MATH' ('101' 30 ('COMPETED')) ('102' 37 ('CANCELLED')))  ('CS' ('101' 53 ('COMPETED')) ('102' 28 ('COMPLETED')) ('103' 20 ('IN PROGRESS')))
      school
┌─────────────────────────────────────────────┬────────────────────────────────────────────────────────────────┐
│┌──────┬─────────────────┬──────────────────┐│┌────┬─────────────────┬──────────────────┬────────────────────┐│
││┌────┐│┌───┬──┬────────┐│┌───┬──┬─────────┐│││┌──┐│┌───┬──┬────────┐│┌───┬──┬─────────┐│┌───┬──┬───────────┐││
│││MATH│││101│30│COMPETED│││102│37│CANCELLED│││││CS│││101│53│COMPETED│││102│28│COMPLETED│││103│20│IN PROGRESS│││
││└────┘│└───┴──┴────────┘│└───┴──┴─────────┘│││└──┘│└───┴──┴────────┘│└───┴──┴─────────┘│└───┴──┴───────────┘││
│└──────┴─────────────────┴──────────────────┘│└────┴─────────────────┴──────────────────┴────────────────────┘│
└─────────────────────────────────────────────┴────────────────────────────────────────────────────────────────┘
      ↑school
┌──────┬─────────────────┬──────────────────┬────────────────────┐
│┌────┐│┌───┬──┬────────┐│┌───┬──┬─────────┐│┌────┐              │
││MATH│││101│30│COMPETED│││102│37│CANCELLED│││    │              │
│└────┘│└───┴──┴────────┘│└───┴──┴─────────┘│└────┘              │
├──────┼─────────────────┼──────────────────┼────────────────────┤
│┌──┐  │┌───┬──┬────────┐│┌───┬──┬─────────┐│┌───┬──┬───────────┐│
││CS│  ││101│53│COMPETED│││102│28│COMPLETED│││103│20│IN PROGRESS││
│└──┘  │└───┴──┴────────┘│└───┴──┴─────────┘│└───┴──┴───────────┘│
└──────┴─────────────────┴──────────────────┴────────────────────┘
```

Notice that the Math row was given an extra element with an empty nested array by the Mix function in order to match with the shape of CS row

```
      ↑↑school
┌────┬────┬───────────┐
│MATH│    │           │
├────┼────┼───────────┤
│101 │30  │COMPETED   │
├────┼────┼───────────┤
│102 │37  │CANCELLED  │
├────┼────┼───────────┤
│    │    │           │
└────┴────┴───────────┘
┌────┬────┬───────────┐
│CS  │    │           │
├────┼────┼───────────┤
│101 │53  │COMPETED   │
├────┼────┼───────────┤
│102 │28  │COMPLETED  │
├────┼────┼───────────┤
│103 │20  │IN PROGRESS│
└────┴────┴───────────┘
```

The depth of an array can be obtained explicitly using the monadic ≡ depth function.

```apl
       ≡10 ⍝ The depth of a scalar is 0
0 
       ⍳10
1 2 3 4 5 6 7 8 9 10 
       ≡⍳10
1 
       ≡ 10 10 ⍴ ⍳10
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
       ≡nested
¯4 
```

We might expect a depth of 4 for the last array, but for arrays with elements with differing depths, the depth function returns the negative of the maximum depth of the array.