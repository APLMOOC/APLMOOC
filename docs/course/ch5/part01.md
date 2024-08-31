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

Let's create a more nested example, posts with replies

```apl
      reply1 ← '30-08-2024' '19:22' 'OFDM is more reliable and easily equalized over difficult channels like a radio link.' 'RedScanLine'
      post1 ← '30-08-2024' '18:52' 'Why does DVB-C use QAM instead of OFDM?' 'frequencySniffer' reply1
      post1
┌──────────┬─────┬───────────────────────────────────────┬────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│30-08-2024│18:52│Why does DVB-C use QAM instead of OFDM?│frequencySniffer│┌──────────┬─────┬─────────────────────────────────────────────────────────────────────────────────────┬───────────┐│
│          │     │                                       │                ││30-08-2024│19:22│OFDM is more reliable and easily equalized over difficult channels like a radio link.│RedScamLine││
│          │     │                                       │                │└──────────┴─────┴─────────────────────────────────────────────────────────────────────────────────────┴───────────┘│
└──────────┴─────┴───────────────────────────────────────┴────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘

      reply2 ← '29-08-2024' '15:38' 'You need a better tuner' 'dataMoshpit'
      post2 ← '29-08-2024' '11:28' 'Trying to obtain a clear QAM signal from cable' 'hadamardMardy' reply2
      post2
┌──────────┬─────┬──────────────────────────────────────────────┬─────────────┬──────────────────────────────────────────────────────┐
│29-08-2024│11:28│Trying to obtain a clear QAM signal from cable│hadamardMardy│┌──────────┬─────┬───────────────────────┬───────────┐│
│          │     │                                              │             ││29-08-2024│15:38│You need a better tuner│dataMoshpit││
│          │     │                                              │             │└──────────┴─────┴───────────────────────┴───────────┘│
└──────────┴─────┴──────────────────────────────────────────────┴─────────────┴──────────────────────────────────────────────────────┘
```

There are several ways to combine these vectors into a matrix, the first is to use reshape

```apl
      post1 , post2
┌──────────┬─────┬───────────────────────────────────────┬────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┬──────────┬─────┬──────────────────────────────────────────────┬─────────────┬──────────────────────────────────────────────────────┐
│30-08-2024│18:52│Why does DVB-C use QAM instead of OFDM?│frequencySniffer│┌──────────┬─────┬─────────────────────────────────────────────────────────────────────────────────────┬───────────┐│29-08-2024│11:28│Trying to obtain a clear QAM signal from cable│hadamardMardy│┌──────────┬─────┬───────────────────────┬───────────┐│
│          │     │                                       │                ││30-08-2024│19:22│OFDM is more reliable and easily equalized over difficult channels like a radio link.│RedScanLine││          │     │                                              │             ││29-08-2024│15:38│You need a better tuner│dataMoshpit││
│          │     │                                       │                │└──────────┴─────┴─────────────────────────────────────────────────────────────────────────────────────┴───────────┘│          │     │                                              │             │└──────────┴─────┴───────────────────────┴───────────┘│
└──────────┴─────┴───────────────────────────────────────┴────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┴──────────┴─────┴──────────────────────────────────────────────┴─────────────┴──────────────────────────────────────────────────────┘
      ⍴ post1 , post2
10
      2 5 ⍴ post1 , post2
┌──────────┬─────┬──────────────────────────────────────────────┬────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│30-08-2024│18:52│Why does DVB-C use QAM instead of OFDM?       │frequencySniffer│┌──────────┬─────┬─────────────────────────────────────────────────────────────────────────────────────┬───────────┐│
│          │     │                                              │                ││30-08-2024│19:22│OFDM is more reliable and easily equalized over difficult channels like a radio link.│RedScanLine││
│          │     │                                              │                │└──────────┴─────┴─────────────────────────────────────────────────────────────────────────────────────┴───────────┘│
├──────────┼─────┼──────────────────────────────────────────────┼────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│29-08-2024│11:28│Trying to obtain a clear QAM signal from cable│hadamardMardy   │┌──────────┬─────┬───────────────────────┬───────────┐                                                              │
│          │     │                                              │                ││29-08-2024│15:38│You need a better tuner│dataMoshpit│                                                              │
│          │     │                                              │                │└──────────┴─────┴───────────────────────┴───────────┘                                                              │
└──────────┴─────┴──────────────────────────────────────────────┴────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

This method requires us to know what the size is, and resize correctly. For more complex nested arrays, it might be too bothersome. Thankfully, there is a very useful function to mix ↑ nested vectors together by reducing the level of nesting.

```apl
      post1 post2
┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┬──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│┌──────────┬─────┬───────────────────────────────────────┬────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐│┌──────────┬─────┬──────────────────────────────────────────────┬─────────────┬──────────────────────────────────────────────────────┐│
││30-08-2024│18:52│Why does DVB-C use QAM instead of OFDM?│frequencySniffer│┌──────────┬─────┬─────────────────────────────────────────────────────────────────────────────────────┬───────────┐│││29-08-2024│11:28│Trying to obtain a clear QAM signal from cable│hadamardMardy│┌──────────┬─────┬───────────────────────┬───────────┐││
││          │     │                                       │                ││30-08-2024│19:22│OFDM is more reliable and easily equalized over difficult channels like a radio link.│RedScanLine││││          │     │                                              │             ││29-08-2024│15:38│You need a better tuner│dataMoshpit│││
││          │     │                                       │                │└──────────┴─────┴─────────────────────────────────────────────────────────────────────────────────────┴───────────┘│││          │     │                                              │             │└──────────┴─────┴───────────────────────┴───────────┘││
│└──────────┴─────┴───────────────────────────────────────┴────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘│└──────────┴─────┴──────────────────────────────────────────────┴─────────────┴──────────────────────────────────────────────────────┘│
└────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┴──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘

      ↑ post1 post2
┌──────────┬─────┬──────────────────────────────────────────────┬────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│30-08-2024│18:52│Why does DVB-C use QAM instead of OFDM?       │frequencySniffer│┌──────────┬─────┬─────────────────────────────────────────────────────────────────────────────────────┬───────────┐│
│          │     │                                              │                ││30-08-2024│19:22│OFDM is more reliable and easily equalized over difficult channels like a radio link.│RedScanLine││
│          │     │                                              │                │└──────────┴─────┴─────────────────────────────────────────────────────────────────────────────────────┴───────────┘│
├──────────┼─────┼──────────────────────────────────────────────┼────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│29-08-2024│11:28│Trying to obtain a clear QAM signal from cable│hadamardMardy   │┌──────────┬─────┬───────────────────────┬───────────┐                                                              │
│          │     │                                              │                ││29-08-2024│15:38│You need a better tuner│dataMoshpit│                                                              │
│          │     │                                              │                │└──────────┴─────┴───────────────────────┴───────────┘                                                              │
└──────────┴─────┴──────────────────────────────────────────────┴────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

Another example of mix ↑

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

To access elements in the POSTS array,

```apl
     POSTS ← ↑ post1 post2
┌──────────┬─────┬──────────────────────────────────────────────┬────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│30-08-2024│18:52│Why does DVB-C use QAM instead of OFDM?       │frequencySniffer│┌──────────┬─────┬─────────────────────────────────────────────────────────────────────────────────────┬───────────┐│
│          │     │                                              │                ││30-08-2024│19:22│OFDM is more reliable and easily equalized over difficult channels like a radio link.│RedScanLine││
│          │     │                                              │                │└──────────┴─────┴─────────────────────────────────────────────────────────────────────────────────────┴───────────┘│
├──────────┼─────┼──────────────────────────────────────────────┼────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│29-08-2024│11:28│Trying to obtain a clear QAM signal from cable│hadamardMardy   │┌──────────┬─────┬───────────────────────┬───────────┐                                                              │
│          │     │                                              │                ││29-08-2024│15:38│You need a better tuner│dataMoshpit│                                                              │
│          │     │                                              │                │└──────────┴─────┴───────────────────────┴───────────┘                                                              │
└──────────┴─────┴──────────────────────────────────────────────┴────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
      ≡POSTS
¯3
```

We can specify three indices, note that negative depth means an array of mixed depth; the reply is nested one more than all the other data.

```apl
      (⊂1 5)⊃POSTS
┌──────────┬─────┬─────────────────────────────────────────────────────────────────────────────────────┬───────────┐
│30-08-2024│19:22│OFDM is more reliable and easily equalized over difficult channels like a radio link.│RedScanLine│
└──────────┴─────┴─────────────────────────────────────────────────────────────────────────────────────┴───────────┘
      ((1 5)3)⊃POSTS
OFDM is more reliable and easily equalized over difficult channels like a radio link.
      ((1 5)3 1)⊃POSTS
O
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