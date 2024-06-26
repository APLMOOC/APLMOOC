# All the math

!!! abstract "This part will cover"

    - Basic mathematical operations
    - Calculating things

---

APL comes with a lot of math functions! Here we go through a bunch of them, so you can always come back to check. Remember to also check the toolbar in TryAPL and RIDE, they come with very helpful tooltips to remind you what an operator does!

Dyadic ⌈ & ⌊ : Max & Min
```apl
      4 ⌈ 5 ⍝ This simply returns the larger argument
5
      4 ⌊ 5 ⍝ This is for the smaller one
4
      4 ⌈ 1 3 5 7 9 8 6 4 2 0 ⍝ "Clips" the value of elements to a minimum
4 4 5 7 9 8 6 4 4 4
      4 ⌊ 1 3 5 7 9 8 6 4 2 0 ⍝ Similarly "clips" down
1 3 4 4 4 4 4 4 2 0
```

Monadic ⌈ & ⌊ : Ceil & Floor
```apl
      ⌈ 2.5 2.6 ¯2.5 ¯2.6 ⍝ Rounds up to the closest integer
3 3 ¯2 ¯2
      ⌊ 2.5 2.6 ¯2.5 ¯2.6 ⍝ Rounds down to the closest integer
2 2 ¯3 ¯3
```

Monadic | : Absolute value
```
      | ¯1 ⍝ Absolute value of ¯1 is ...
1
      | 0j1 3j4 ⍝ Applying to complex numbers
1 5
```

Dyadic | : Residue
```apl
      13 | 100 ⍝ 13 × 7 = 91, note this is in reverse order as `%` operator in C
9
      13 | ¯100 ⍝ 13 × ¯8 = ¯104
4
      ¯13 | 100 ⍝ The result has the same sign as the divisor. Here, ¯13 × ¯8 = 104
¯4
      ¯13 | ¯100 ⍝ ¯13 × 7 = ¯91
¯9
      3.3 | 10 ⍝ Also works for non-integer!
0.1
      0 | 3 ⍝ 0 as a divisor is treated as 1 here
3
```

This residue operation respects “floored” division. The defining equation is
```apl
X|Y ← Y-X×⌊Y÷X+0=X
⍝ where, X+0=X means if X is 0 then 1, else X.
⍝ if X is not 0, this is simply (Y - X * floor(Y / X)).
```

If you want to get “euclidean” remainder, simply subtract divisor back if the result is negative.
```apl
      mod←{(⍵|⍺)<0:(⍵|⍺)-⍵ ⋄ ⍵|⍺}
      ¯13 mod ¯3
2
      ¯14 mod ¯3
1
      ¯15 mod ¯3
0
```

Dyadic ∨ & ∧ : GCD and LCM
```apl
      12 ∨ 10 ⍝ Greatest Common Divisor...
2
      12 ∧ 10 ⍝ Least Common Mutiple...
60
      ¯2 ∨ ¯15 ⍝ The result is non-negative for GCD
1
      ¯4 ∧ 10 ⍝ But the LCM is defined as product of two numbers divided by their GCD, so it could be negative
¯20
```

Curiously, as suggested by the choice of glyphs for these two operations, these two operations are also used for the boolean logic “or” and “and” operations. This is because 0 is divisible by everything, as the remainder is always 0. So the Greatest Common Divisor of 0 and x is just x, since x divides both 0 and x. Dually, 0 is also a multiple of everything, so the Least Common Multiple of 0 and x is just 0, since 0 is a multiple of both x and 0 (and it’s the smallest!).

Monadic + : Complex Conjugate
```apl
      + 0j1 1j¯1 3j4
0J¯1 1J1 3J¯4
```

Monadic - : Negate
```apl
      - 4 ¯5 6
¯4 5 ¯6
      -4 -5 -6 ⍝ Remember this is different from ¯, since it could be monadic and also applies to the whole array
¯5
```

Monadic × : Signum/Direction
```apl
      × 0 3 ¯3
0 1 ¯1
      × 3J4 ¯6J8 7J24
0.6J0.8 ¯0.6J0.8 0.28J0.96
```

Monadic ○ : Pi Times
```apl
      ○ 1
3.141592654
      ○ 2
6.283185307
      ○ 0.5
1.570796327
      ○ 0J1
0J3.141592654
```

Dyadic `○` : Trigonometric Functions

The dyadic circle `○` function applies a trigonometric function to its right argument depending on its left argument.

```apl
       ⍝ Sine of an approximation to PI
       1 ○ ○ 1
1.224646799E¯16
       
       ⍝ Cosine of zero
       2 ○ 0
1
       
       ⍝ Tangent of 0.5
       3 ○ 0
0.5463024898

       ⍝ Cosine of I
       2 ○ 0J1
1.543080635
```
