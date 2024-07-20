# Repeat, Masking

!!! abstract "This part will cover"
    
    - Repeat
    - Masking

---

Just as the reduce / operator destructs a list by iterating through it from the right, the power ⍣ operator can be thought of as destructing a number n by repeating n times. The power operator repeats its left function argument the amount of times specified by its right argument.

```apl
      2(+⍣3)5
11
      (2+(2+(2+5)))
11

      2(×⍣3)5
40
      (2×(2×(2×5)))
40

      0.5(*⍣3)0.5
0.65404086

			0.5(0.5*(0.5*0.5))
0.65404086

      1(,⍣10)2
1 1 1 1 1 1 1 1 1 1 2

      1({⍵,⍺,⍵}⍣2)2
2 1 2 1 2 1 2

      (⊂⍣5)'Welcome'
┌───────────────┐
│┌─────────────┐│
││┌───────────┐││
│││┌─────────┐│││
││││┌───────┐││││
│││││Welcome│││││
││││└───────┘││││
│││└─────────┘│││
││└───────────┘││
│└─────────────┘│
└───────────────┘
```

Note that X (f⍣g) Y is equivalent to binding the left argument as the left argument to f, (X∘f⍣g) Y.

```apl
      2(×⍣3)5
40
      (2∘×⍣3)5
40
```

The right argument to the power ⍣ operator can be a function, f⍣g, where the f is applied until g, applied to the current and previous value of f, returns 1. For example, the following code multiplies 5 by 2 until the current value is greater than 100.

```apl
      2 (×⍣{⍺>100})5
160
      2 (×⍣{⎕←⍺,⍵ ⋄ ⍺>100})5
10 5
20 10
40 20
80 40
160 80
160
```

This is equivalent to 
```apl
      ⍬ {⍺>100: ⍺ ⋄ (2×⍵) ∇ ⍺} 5
160
```

For a more complicated example, the power operator can also be used to find fixed points of functions.

```apl
      ⍝ Fixed point of 0.5∘*
      0.5 (*⍣=) 0.5
0.6411857445

      0.5 * 0.6411857445
0.6411857445
```

The code applies 0.5∘* until the current and previous values are equal.

When the power operator is applied to a negative right argument, it acts as the repeated inverse operator for its function left argument, for certain functions.

```apl
      3(+⍣2)5
11
      3(+⍣¯2)5
¯1

			2 ⊥ 1 0 1 0 1 0
42
      2 (⊥⍣¯1) 42
1 0 1 0 1 0
```

---

Recall how we modified elements of arrays in Chapter 2; the elements were specified on the left-hand side of the assignment, and the replacement values were specified on the right.

```apl
      M ← 5 5⍴⍳25
      M
 1  2  3  4  5
 6  7  8  9 10
11 12 13 14 15
16 17 18 19 20
21 22 23 24 25

      M[1;]
1 2 3 4 5
      M[1;] ← 0
      
      M
 0  0  0  0  0
 6  7  8  9 10
11 12 13 14 15
16 17 18 19 20
21 22 23 24 25
```

It was also possible to replace specified arrays with other arrays as long as their shape matched.

```apl
      M[1 2;1 2]
1 2
6 7
      M[1 2;1 2] ← 2 2⍴0 1 1 0
      M
 0  1  1  4  5
 1  0  0  9 10
11 12 13 14 15
16 17 18 19 20
21 22 23 24 25
```

The story does not end there, for any expression that selects from an array can be used on the left-hand side of the assignment.

```apl
      M ← 5 5 ⍴ ⍳25
      2↑M
1 2 3 4  5 
6 7 8 9 10
      (2↑M) ← 5
      M
 5  5  5  5  5
 5  5  5  5  5
11 12 13 14 15
16 17 18 19 20
21 22 23 24 25

      M ← 5 5 ⍴ ⍳25
      (2↓M)←5 
      M
1 2 3 4  5
6 7 8 9 10
5 5 5 5  5
5 5 5 5  5
5 5 5 5  5
```

With replicate each, the right-hand side can also be an array of the same shape as the original array to then selectively copy values depending on the left-hand side.

```apl
      M ← 5 5⍴⍳25
      ⍝ Random logical array
      B ← 1 -⍨ ? 5 5⍴2
      B
0 1 0 1 1
0 1 0 1 1
1 1 0 0 0
0 1 0 0 0
0 1 1 1 1
      
      (B/¨M)
┌──┬──┬──┬──┬──┐
│  │2 │  │4 │5 │
├──┼──┼──┼──┼──┤
│  │7 │  │9 │10│
├──┼──┼──┼──┼──┤
│11│12│  │  │  │
├──┼──┼──┼──┼──┤
│  │17│  │  │  │
├──┼──┼──┼──┼──┤
│  │22│23│24│25│
└──┴──┴──┴──┴──┘

      (B/¨M) ← 5 5⍴⎕A
      M
 1 B  3  D  E
 6 G  8  I  J
 K L 13 14 15
16 Q 18 19 20
21 V  W  X  Y
```

For other types of replacements, the At @ operator comes in handy. For array left and right arguments, the At @ operator returns a function which replaces the elements at the indices specified by the right argument, using the values of the left argument. Note that the arrays have to match shape. Then, replacing each element masked by B using successive letters of the alphabet,

```apl
      M ← 5 5 ⍴ ⍳25
      ⍸B
┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┐
│1 2│1 4│1 5│2 2│2 4│2 5│3 1│3 2│4 2│5 2│5 3│5 4│5 5│
└───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┘
      ⍴⍸B
13
      (⍴⍸B)↑⎕A
ABCDEFGHIJKLM
      (((⍴⍸B)↑⎕A)@(⍸B)) M
 1 A  3  B  C
 6 D  8  E  F
 G H 13 14 15
16 I 18 19 20
21 J  K  L  M
```

The arguments to @ can be functions instead, where the left argument function is the function to apply to the selected elements, and the right argument is a logical function that selects the elements out of the right argument array.

```apl
      M ← 5 5 ⍴ ⍳25
      ⍝ Negate elements which are multiples of 3
      (-@{0=3|⍵})M
  1   2  ¯3   4   5
 ¯6   7   8  ¯9  10
 11 ¯12  13  14 ¯15
 16  17 ¯18  19  20
¯21  22  23 ¯24  25
      
      M ← 5 5 ⍴ ⍳25
	    ⍝ Reverse list of elements which are multiples of 3
      (⊖@{0=3|⍵})M
 1  2 24  4  5
21  7  8 18 10
11 15 13 14 12
16 17  9 19 20
 6 22 23  3 25
```