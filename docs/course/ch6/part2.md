# Inner and outer products

!!! abstract "This part will cover"
    
    - Inner products
    - Outer products
    - Matrix inverse

---

Recall the Rank ⍤ operator which specified what rank cells a function acts on,
```apl
      M ← ? 5 5 ⍴ 10
3 2  2 9 5
9 2 10 8 2
3 4  6 5 2
9 3  5 3 2
8 8  6 8 8
      (⊂⍤2)M
┌──────────┐
│3 2  2 9 5│
│9 2 10 8 2│
│3 4  6 5 2│
│9 3  5 3 2│
│8 8  6 8 8│
└──────────┘
      (⊂⍤1)M
┌─────────┬──────────┬─────────┬─────────┬─────────┐
│3 2 2 9 5│9 2 10 8 2│3 4 6 5 2│9 3 5 3 2│8 8 6 8 8│
└─────────┴──────────┴─────────┴─────────┴─────────┘      
      (⊂⍤0)M
3 2  2 9 5
9 2 10 8 2
3 4  6 5 2
9 3  5 3 2
8 8  6 8 8
```

As can be seen above, a rank-n cell of a rank-r array obtained by specifying the first (r-n) indices of the array.

```apl
      M[;]
3 2  2 9 5
9 2 10 8 2
3 4  6 5 2
9 3  5 3 2
8 8  6 8 8
      M[1;]
3 2 2 9 5
      M[1;1]
3
```

This specifies the cells to act on monadically; for dyadic functions, two ranks must be specified, to be interpreted as matching up cells of a certain rank from the left argument with certain cells of the right argument.

```apl
      v ← ? 5 ⍴ 5
      v
3 4 4 3 2
      M ← 5 5 ⍴ ⍳25
      M
 1  2  3  4  5
 6  7  8  9 10
11 12 13 14 15
16 17 18 19 20
21 22 23 24 25

      ⍝ See pairing of 0-cells of v and 1-cells of M
      v({⍺,'-',⍵}⍤(0 1))M
3 -  1  2  3  4  5
4 -  6  7  8  9 10
4 - 11 12 13 14 15
3 - 16 17 18 19 20
2 - 21 22 23 24 25

      ⍝ Pairing of 1-cells of v and 1-cells of M
      v({⍺,'-',⍵}⍤(1 1))M
3 4 4 3 2 -  1  2  3  4  5
3 4 4 3 2 -  6  7  8  9 10
3 4 4 3 2 - 11 12 13 14 15
3 4 4 3 2 - 16 17 18 19 20
3 4 4 3 2 - 21 22 23 24 25
      
      N ← 5 5 ⍴ +\⍳25
      N
  1   3   6  10  15
 21  28  36  45  55
 66  78  91 105 120
136 153 171 190 210
231 253 276 300 325
      
      ⍝ Pairing of 1-cells of v and 1-cells of M
      N({⍺,'-',⍵}⍤(1 1))M
  1   3   6  10  15 -  1  2  3  4  5
 21  28  36  45  55 -  6  7  8  9 10
 66  78  91 105 120 - 11 12 13 14 15
136 153 171 190 210 - 16 17 18 19 20
231 253 276 300 325 - 21 22 23 24 25
```

One commonly used operation is matching every pair of elements from two vectors, one way to write this is using each and rank ⍤

```apl
      v1 ← ? 5 ⍴ 5
5 5 3 4 1
      v2 ← ⎕A[? 5 ⍴ 26]
HTOKY
      v1(,⍤(0 1))v2
5 HTOKY
5 HTOKY
3 HTOKY
4 HTOKY
1 HTOKY
      v1(,¨⍤(0 1))v2
┌───┬───┬───┬───┬───┐
│5 H│5 T│5 O│5 K│5 Y│
├───┼───┼───┼───┼───┤
│5 H│5 T│5 O│5 K│5 Y│
├───┼───┼───┼───┼───┤
│3 H│3 T│3 O│3 K│3 Y│
├───┼───┼───┼───┼───┤
│4 H│4 T│4 O│4 K│4 Y│
├───┼───┼───┼───┼───┤
│1 H│1 T│1 O│1 K│1 Y│
└───┴───┴───┴───┴───┘
```

There is a specific operator for this operation called the outer product (∘.f), this operator is special in that it takes a right function argument.

```apl
      v1(∘.,)v2
┌───┬───┬───┬───┬───┐
│5 H│5 T│5 O│5 K│5 Y│
├───┼───┼───┼───┼───┤
│5 H│5 T│5 O│5 K│5 Y│
├───┼───┼───┼───┼───┤
│3 H│3 T│3 O│3 K│3 Y│
├───┼───┼───┼───┼───┤
│4 H│4 T│4 O│4 K│4 Y│
├───┼───┼───┼───┼───┤
│1 H│1 T│1 O│1 K│1 Y│
└───┴───┴───┴───┴───┘

      'POP' 'HEAVY' 'ALT' 'SYNTH' ∘., 'ROCK' 'METAL' 'PUNK' 'WAVE'
┌─────────┬──────────┬─────────┬─────────┐
│POPROCK  │POPMETAL  │POPPUNK  │POPWAVE  │
├─────────┼──────────┼─────────┼─────────┤
│HEAVYROCK│HEAVYMETAL│HEAVYPUNK│HEAVYWAVE│
├─────────┼──────────┼─────────┼─────────┤
│ALTROCK  │ALTMETAL  │ALTPUNK  │ALTWAVE  │
├─────────┼──────────┼─────────┼─────────┤
│SYNTHROCK│SYNTHMETAL│SYNTHPUNK│SYNTHWAVE│
└─────────┴──────────┴─────────┴─────────┘
      

      ⍝ Multiplication table
      (⍳10)(∘.×)⍳10
 1  2  3  4  5  6  7  8  9  10
 2  4  6  8 10 12 14 16 18  20
 3  6  9 12 15 18 21 24 27  30
 4  8 12 16 20 24 28 32 36  40
 5 10 15 20 25 30 35 40 45  50
 6 12 18 24 30 36 42 48 54  60
 7 14 21 28 35 42 49 56 63  70
 8 16 24 32 40 48 56 64 72  80
 9 18 27 36 45 54 63 72 81  90
10 20 30 40 50 60 70 80 90 100

      ⍝ Composite numbers
      (1+⍳9)(∘.×)1+⍳9
 4  6  8 10 12 14 16 18  20
 6  9 12 15 18 21 24 27  30
 8 12 16 20 24 28 32 36  40
10 15 20 25 30 35 40 45  50
12 18 24 30 36 42 48 54  60
14 21 28 35 42 49 56 63  70
16 24 32 40 48 56 64 72  80
18 27 36 45 54 63 72 81  90
20 30 40 50 60 70 80 90 100

      ⍝ Prime numbers up to N as numbers minus composite numbers up to N/2
      (⍳100) ~ (1+⍳49)(∘.×)1+⍳49
1 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97
```