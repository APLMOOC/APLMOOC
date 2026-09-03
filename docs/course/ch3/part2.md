# All the math

!!! abstract "This part will cover"

    - Basic mathematical operations
    - Complex numbers and circle functions

---

!!! note "Typing the symbols in this part"

    | Symbol | Prefix method | Tab method |
    |:--:|:--:|:--:|
    | `⌈` | <kbd>PREFIX</kbd> <kbd>s</kbd> | <kbd>7</kbd> <kbd>7</kbd> ++tab++ |
    | `⌊` | <kbd>PREFIX</kbd> <kbd>d</kbd> | <kbd>l</kbd> <kbd>l</kbd> ++tab++ |
    | <code>&#124;</code> | <kbd>PREFIX</kbd> <kbd>m</kbd> | <kbd>&#124;</kbd> |
    | `∨` | <kbd>PREFIX</kbd> <kbd>9</kbd> | <kbd>v</kbd> <kbd>v</kbd> ++tab++ |
    | `∧` | <kbd>PREFIX</kbd> <kbd>0</kbd> | <kbd>^</kbd> <kbd>^</kbd> ++tab++ |
    | `○` | <kbd>PREFIX</kbd> <kbd>o</kbd> | <kbd>O</kbd> <kbd>O</kbd> ++tab++ |
    | `!` | <kbd>PREFIX</kbd> <kbd>_</kbd> | <kbd>!</kbd> |

Being an engineer, you have a lot of varied computational needs which require a large range of mathematical functions. 

Thankfully, APL comes with a lot of math functions! Here we go through a bunch of them, so you can always come back to check. 

Feel free to skip this section for now, and come back when you see a mathematical operation you don't recognize! Remember to also check the toolbar in TryAPL and RIDE, they come with very helpful tooltips to remind you what a function does!

## Ceiling and floor

The notation of ceiling ``⌈x⌉`` and ``⌊x⌋`` floor in mathematics matches with the corresponding APL functions, in fact, the notation of ceiling and floor (and the use of those words to describe rounding up and down) comes from APL! Before APL, there was no consistent standard to represent the ceiling and floor functions. Ceiling rounds up to the nearest integer, and floor rounds down to the nearest integer.

Monadic `⌈` and `⌊` : Ceil & Floor
```apl
      ⌈ 2.5 2.6 ¯2.5 ¯2.6 
3 3 ¯2 ¯2

      ⌊ 2.5 2.6 ¯2.5 ¯2.6 
2 2 ¯3 ¯3
```


## Maximum and minimum

Dyadic `⌈` and `⌊` : Max & Min
```apl
      ⍝ This simply returns the larger argument
      4 ⌈ 5 
5
      ⍝ This is for the smaller one
      4 ⌊ 5 
4
      ⍝ "Clips" the value of elements to a minimum
      4 ⌈ 1 3 5 7 9 8 6 4 2 0 
4 4 5 7 9 8 6 4 4 4

      ⍝ Similarly "clips" down
      4 ⌊ 1 3 5 7 9 8 6 4 2 0 
1 3 4 4 4 4 4 4 2 0
```

## Residue

The "modulo" operator in other languages is called the residue in APL, and the order of the arguments is reversed. The residue function calculates the residue of the division of the right argument by the left.

Dyadic `|` : Residue
```apl
      ⍝ 100 - 13 × 7 = 9
      ⍝ This is in reverse order as `%` operator in C
      13 | 100 
9

      ⍝ ¯100 - 13 × ¯8 = 4
      13 | ¯100 
4

      ⍝ 100 - ¯13 × ¯8 = ¯4
      ¯13 | 100 
¯4

      ⍝ ¯100 - ¯13 × 7 = ¯9
      ¯13 | ¯100 
¯9

      ⍝ Also works for non-integers!
      ⍝ 10 - 3.3 × 3 = 0.1
      3.3 | 10 
0.1

      ⍝ 3 - 0 = 3
      0 | 3 
3
```

The residue function X|Y in APL can be written in terms of previously discussed functions. In fact, from the definition as the remainder of division, we might think it's defined as ``Y-X×(⌊Y÷X)``; however, ``Y÷X`` is not defined when ``X`` is zero. We'd want a function that is equal to ``1`` when ``X`` is ``0``, and ``X`` when ``X`` is not zero, ``X+(X=0)`` is one solution.

```apl
      ⍝ X|Y is
      Y-X×(⌊Y÷(X+(X=0)))
      ⍝ Without the unnecessary parentheses
      Y-X×⌊Y÷X+X=0
```

The residue takes the sign of its left argument, the divisor, so for a negative divisor it differs from the euclidean remainder (the least non-negative remainder). To obtain that instead, subtract the divisor back if the result is negative; the ``mod`` function below does this, taking the dividend on the left, the opposite order to ``|``.
```apl
      mod←{(⍵|⍺)<0:(⍵|⍺)-⍵ ⋄ ⍵|⍺}
      ¯13 mod ¯3
2
      ¯14 mod ¯3
1
      ¯15 mod ¯3
0
```

## Complex numbers

APL also natively supports complex numbers, which makes it attractive for uses in, for example, [quantum computing](https://github.com/nunezco2/quAPL). A complex number is represented as XJY, where X is the real part and Y is the imaginary part. In mathematical notation, $ XJY = X + i Y $.

Monadic `|` : Absolute value, Magnitude
```apl
      ⍝ Absolute value of ¯1 is ...
      | ¯1 
1
      ⍝ Applying to complex numbers
      | 0J1 3J4 
1 5
```


## GCD and LCM

Dyadic `∨` & `∧` : GCD and LCM
```apl
      ⍝ Greatest Common Divisor
      12 ∨ 10
2
      ⍝ Least Common Mutiple
      12 ∧ 10
60
      ⍝ The result is non-negative for GCD
      ¯2 ∨ ¯15 
1

      ¯4 ∧ 10 
¯20
```

Note that the LCM is defined as product of two numbers divided by their GCD, so it could be negative as in the last example.

As suggested by the choice of glyphs for these two operations, these two operations are also used for the boolean logic "or" and "and" operations. More on this in the next section.


## Conjugate, negate and sign

Monadic `+` : Complex Conjugate
```apl
      + 0j1 1j¯1 3j4
0J¯1 1J1 3J¯4
```

Monadic `-` : Negate
```apl
      - 4 ¯5 6
¯4 5 ¯6

      ⍝ Remember this is different from ¯
      ⍝ Here, -4 -5 -6 is -(4-(5-6)) = ¯5
      -4 -5 -6 
¯5
```

Monadic `×` : Sign/Direction
```apl
      × 0 3 ¯3
0 1 ¯1
      × 3J4 ¯6J8 7J24
0.6J0.8 ¯0.6J0.8 0.28J0.96
```

## Circle functions

Monadic `○` : Pi Times
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
       3 ○ 0.5
0.5463024898

       ⍝ Cosine of I
       2 ○ 0J1
1.543080635
```

## Factorial and binomial

Monadic `!` : Factorial

The factorial ``!`` function multiplies together the whole numbers from 1 up to its argument. By convention ``!0`` is 1. For arguments that are not whole numbers it returns the gamma function, so it is defined for any number except the negative whole numbers.

```apl
      !0 1 5 10
1 1 120 3628800
      !0.5
0.8862269255
```

Dyadic `!` : Binomial coefficient

The dyadic form counts the ways of choosing ``⍺`` items out of ``⍵`` of them, without regard to order. Note which argument is which: ``2!5`` chooses 2 items out of 5, not 5 out of 2.

```apl
      2!5
10
      3!5
10
      5!2
0
```

Choosing 2 out of 5 and choosing 3 out of 5 come to the same number, since choosing the 2 you keep is the same as choosing the 3 you discard. There is no way to choose 5 items out of 2, so that count is 0.
