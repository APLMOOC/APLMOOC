# Anything can be a scalar

!!! abstract "This part will cover"
    
    - Nested arrays
    - Enclose
    - Disclose
    - Nest
    - Each
    - Tally

---

<link rel="stylesheet" href="/styles/ch5part2.css">

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
│                                              |                   │
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
│Varicap-tuned filters                         │thomasedison96     │
└──────────────────────────────────────────────┴───────────────────┘
┌──────────────────────────────────────────────┬───────────────────┐
│27-08-2024                                    │                   │
├──────────────────────────────────────────────┼───────────────────┤
│How good was broadcast NTSC/PAL in practice?  │dataMoshpit        │
├──────────────────────────────────────────────┼───────────────────┤
│Looking for flyback                           │pacAttack          │
├──────────────────────────────────────────────┼───────────────────┤
│ CTCSS in NBFM                                │Radiovangelist     │
├──────────────────────────────────────────────┼───────────────────┤
│ 455 kHz and 10.7 MHz as intermediate freqs   |Decibels_per_Kg    │
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
      ∊POSTS
30-08-202418:52Why does DVB-C use QAM instead of OFDM?frequencySniffer30-08-202419:22OFDM is more reliable and easily equalized over difficult channels like a radio link.RedSyncLine29-08-202411:28Trying to obtain a clear QAM signal from cablehadamardMardy29-08-202415:38You need a better tunerdataMoshpit
```

The power of nested arrays lies in the way in which they allow applying operations on many arrays at once. Recall how arithmetic operations act each element of an array

```apl
      5 5⍴⍳25
 1  2  3  4  5
 6  7  8  9 10
11 12 13 14 15
16 17 18 19 20
21 22 23 24 25

      2*5 5⍴⍳25
      2       4       8       16       32
     64     128     256      512     1024
   2048    4096    8192    16384    32768
  65536  131072  262144   524288  1048576
2097152 4194304 8388608 16777216 33554432
```

For more complex functions, the each ¨ operator allows applying a function to each element of the right argument array, potentially returning a nested array. 

```apl
      {2*⍵}¨5 5⍴⍳25
      2       4       8       16       32
     64     128     256      512     1024
   2048    4096    8192    16384    32768
  65536  131072  262144   524288  1048576
2097152 4194304 8388608 16777216 33554432

      {⍵,2*⍵}¨5 5⍴⍳25
┌──────────┬──────────┬──────────┬───────────┬───────────┐
│1 2       │2 4       │3 8       │4 16       │5 32       │
├──────────┼──────────┼──────────┼───────────┼───────────┤
│6 64      │7 128     │8 256     │9 512      │10 1024    │
├──────────┼──────────┼──────────┼───────────┼───────────┤
│11 2048   │12 4096   │13 8192   │14 16384   │15 32768   │
├──────────┼──────────┼──────────┼───────────┼───────────┤
│16 65536  │17 131072 │18 262144 │19 524288  │20 1048576 │
├──────────┼──────────┼──────────┼───────────┼───────────┤
│21 2097152│22 4194304│23 8388608│24 16777216│25 33554432│
└──────────┴──────────┴──────────┴───────────┴───────────┘
```
It matches the left argument array scalars with the right argument array scalars and applies the function with the scalars as left or right arguments respectively

```
      2|5 5⍴⍳25
1 0 1 0 1
0 1 0 1 0
1 0 1 0 1
0 1 0 1 0
1 0 1 0 1

      (2|5 5⍴⍳25) {⍺,⍵} (5 5⍴⍳25)
1 0 1 0 1  1  2  3  4  5
0 1 0 1 0  6  7  8  9 10
1 0 1 0 1 11 12 13 14 15
0 1 0 1 0 16 17 18 19 20
1 0 1 0 1 21 22 23 24 25

      (2|5 5⍴⍳25) {⍺,⍵}¨ (5 5⍴⍳25)
┌────┬────┬────┬────┬────┐
│1 1 │0 2 │1 3 │0 4 │1 5 │
├────┼────┼────┼────┼────┤
│0 6 │1 7 │0 8 │1 9 │0 10│
├────┼────┼────┼────┼────┤
│1 11│0 12│1 13│0 14│1 15│
├────┼────┼────┼────┼────┤
│0 16│1 17│0 18│1 19│0 20│
├────┼────┼────┼────┼────┤
│1 21│0 22│1 23│0 24│1 25│
└────┴────┴────┴────┴────┘
```

Since scalars can contain array data, array operations can be applied on many arrays at once. Suppose we wanted to add an 'X' at the start of each deleted post, and replace the username with [deleted]

```apl
      POSTS
┌──────────┬───────────────────────────────────────┬────────────────┐
│30-08-2024│Why does DVB-C use QAM instead of OFDM?│frequencySniffer│
├──────────┼───────────────────────────────────────┼────────────────┤
│30-08-2024│DAC in QPSK modulation                 │radioComputer   │
├──────────┼───────────────────────────────────────┼────────────────┤
│29-08-2024│Nordtel OC3 Express                    │corporateRaider │
└──────────┴───────────────────────────────────────┴────────────────┘
     DELETED
0 1 0
```

The first thing to do is enclose the three rows separately, which can be done using the inverse to mix, the split ↓ function

```apl
      ↓POSTS
┌─────────────────────────────────────────────────────────────────────┬─────────────────────────────────────────────────┬────────────────────────────────────────────────┐
│┌──────────┬───────────────────────────────────────┬────────────────┐│┌──────────┬──────────────────────┬─────────────┐│┌──────────┬───────────────────┬───────────────┐│
││30-08-2024│Why does DVB-C use QAM instead of OFDM?│frequencySniffer│││30-08-2024│DAC in QPSK modulation│radioComputer│││29-08-2024│Nordtel OC3 Express│corporateRaider││
│└──────────┴───────────────────────────────────────┴────────────────┘│└──────────┴──────────────────────┴─────────────┘│└──────────┴───────────────────┴───────────────┘│
└─────────────────────────────────────────────────────────────────────┴─────────────────────────────────────────────────┴────────────────────────────────────────────────┘
```

Then, using each

```apl
      DELETED{⍺: 'X',⍵[1 2],⊂'[deleted]' ⋄ ' ',⍵}¨↓POSTS
┌───────────────────────────────────────────────────────────────────────┬───────────────────────────────────────────────┬──────────────────────────────────────────────────┐
│┌─┬──────────┬───────────────────────────────────────┬────────────────┐│┌─┬──────────┬──────────────────────┬─────────┐│┌─┬──────────┬───────────────────┬───────────────┐│
││ │30-08-2024│Why does DVB-C use QAM instead of OFDM?│frequencySniffer│││X│30-08-2024│DAC in QPSK modulation│[deleted]│││ │29-08-2024│Nordtel OC3 Express│corporateRaider││
│└─┴──────────┴───────────────────────────────────────┴────────────────┘│└─┴──────────┴──────────────────────┴─────────┘│└─┴──────────┴───────────────────┴───────────────┘│
└───────────────────────────────────────────────────────────────────────┴───────────────────────────────────────────────┴──────────────────────────────────────────────────┘
      ↑DELETED{⍺: 'X',⍵[1 2],⊂'[deleted]' ⋄ ' ',⍵}¨↓POSTS
┌─┬──────────┬───────────────────────────────────────┬────────────────┐
│ │30-08-2024│Why does DVB-C use QAM instead of OFDM?│frequencySniffer│
├─┼──────────┼───────────────────────────────────────┼────────────────┤
│X│30-08-2024│DAC in QPSK modulation                 │[deleted]       │
├─┼──────────┼───────────────────────────────────────┼────────────────┤
│ │29-08-2024│Nordtel OC3 Express                    │corporateRaider │
└─┴──────────┴───────────────────────────────────────┴────────────────┘
```