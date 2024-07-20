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

In many applications, it is useful to reduce over the diagonal of the outer product. That is, match each element of the vectors in order, then reduce over them. The inner product of vectors is an example of this, which APL generalizes using the inner product (f.g) operator.

```apl
      v1 ← 3 -⍨ ? 5 ⍴ 5
      v1
0 ¯1 0 2 ¯2

      v2 ← 3 -⍨ ? 5 ⍴ 5
      v2
¯1 ¯2 2 0 0

      v1∘.×v2
 0  0  0 0 0
 1  2 ¯2 0 0
 0  0  0 0 0
¯2 ¯4  4 0 0
 2  4 ¯4 0 0
 
      ⍝ Diagonal
      (1 1)∘⍉(v1∘.×v2)
0 2 0 0 0
      +/(1 1)∘⍉(v1∘.×v2)
2
      v1+.×v2
2
      
      ⍝ Absolute difference between pairs of elements
      v1 ∘.(|-) v2
1 2 2 0 0
0 1 3 1 1
1 2 2 0 0
3 4 0 2 2
1 0 4 2 2

      ⍝ Maximum absolute difference between all pairs of elements of two vectors
      ⌈/, v1 ∘.(|-) v2
4

      ⍝ Maximum absolute difference between matching elements of two vectors
      ⌈/ (1 1)∘⍉ v1∘.(|-)v2
2
      v1 ⌈.(|-) v2
2
```

The inner product function +.× applied to matrices is the matrix product function

```apl
      M ← (⍳5)∘.=⍳5
      M
1 0 0 0 0
0 1 0 0 0
0 0 1 0 0
0 0 0 1 0
0 0 0 0 1
     5 ? 5
3 4 2 1 5
      M ← M[5 ? 5;]
      M
0 0 0 1 0
0 0 0 0 1
0 0 1 0 0
1 0 0 0 0
0 1 0 0 0
      
      N ← +\ 5 5 ⍴ ⍳6
      N
1  3  6 10 15
6  7  9 12 16
5 11 12 14 17
4  9 15 16 18
3  7 12 18 19

      M +.× N
4  9 15 16 18
3  7 12 18 19
5 11 12 14 17
1  3  6 10 15
6  7  9 12 16


      M ← 0 1 0 0 0 ∘.× 0 0 1 0 0
      M
0 0 0 0 0
0 0 1 0 0
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0

      M +.× N
0  0  0  0  0
5 11 12 14 17
0  0  0  0  0
0  0  0  0  0
0  0  0  0  0
```

Using the matrix inverse ⌹ function to verify the multiplication

```apl
      M ← +\ 5 5 ⍴ ⍳7
      M
1  3  6 10 15
6 13 14 16 19
4  9 15 22 23
2  5  9 14 20
7  8 10 13 17
      
      N ← +\ 5 5 ⍴ ⍳6
      N
1  3  6 10 15
6  7  9 12 16
5 11 12 14 17
4  9 15 16 18
3  7 12 18 19
  
      L ← M +.× N
      L
134 285 435  560  630
275 540 789 1010 1185
290 599 891 1124 1292
193 406 615  790  895
208 423 633  820  960

      L+.×⌹N
1  3  6 10 15
6 13 14 16 19
4  9 15 22 23
2  5  9 14 20
7  8 10 13 17

      ⌹M+.×L
1  3  6 10 15
6  7  9 12 16
5 11 12 14 17
4  9 15 16 18
3  7 12 18 19
```

The matrix inverse ⌹ also takes the pseudoinverse of a matrix, if the inverse does not exist, which can be used to get least squares solutions of systems of linear equations when a unique solution is not possible. Take the example of a bakery, wanting to make the most out of their ingredients

```apl
⍝ Recipes
⍝		    Flour	Milk	Sugar	Butter	Eggs
Cake 	←   450	    0	    700	    500	    6
Pancake ←	200	    300	    50	    50	    1
Cupcake ←	150	    125	    150	    50	    0
Cookies ←	280	    0	    250	    200	    2

Available ←	2200 1000 2200 1600 19
```

Since there are more ingredients than recipes, there will not be a unique solution to this problem. The system of equations here is (insert latex image) n_cake(cake recipe) + … = available ingredients, which can be solved by obtaining the pseudoinverse of the matrix, and multiplying it by the target vector.

```apl
	   Goods ← ⍉ ↑ Cake Pancake Cupcake Cookies
       Goods
450 200 150 280
  0 300 125   0
700  50 150 250
500  50  50 200
  6   1   0   2
       
       (⌹Goods)+.×Available 
1.99585722 2.919959252 0.992099059 2.032347529
```

Then, the closest solution is baking roughly 2 cakes, 3 batches of pancakes, 1 batch of cupcakes, and 2 batches of cookies.