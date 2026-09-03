# Relational and logical functions

!!! abstract "This part will cover"

    - Functions used to compare values
    - Comparing vectors and scalars
    - Functions used to perform boolean operations
    - Boolean operations on scalars and vectors
    - Comparison tolerance and print precision

---

!!! note "Typing the symbols in this part"

    | Symbol | Prefix method | Tab method |
    |:--:|:--:|:--:|
    | `≠` | <kbd>PREFIX</kbd> <kbd>8</kbd> | <kbd>=</kbd> <kbd>/</kbd> ++tab++ |
    | `≤` | <kbd>PREFIX</kbd> <kbd>4</kbd> | <kbd>&lt;</kbd> <kbd>=</kbd> ++tab++ |
    | `≥` | <kbd>PREFIX</kbd> <kbd>6</kbd> | <kbd>&gt;</kbd> <kbd>=</kbd> ++tab++ |
    | `≡` | <kbd>PREFIX</kbd> <kbd>:</kbd> | <kbd>=</kbd> <kbd>=</kbd> ++tab++ |
    | `~` | <kbd>PREFIX</kbd> <kbd>t</kbd> | <kbd>~</kbd> |
    | `⍲` | <kbd>PREFIX</kbd> <kbd>)</kbd> | <kbd>^</kbd> <kbd>~</kbd> ++tab++ |
    | `⍱` | <kbd>PREFIX</kbd> <kbd>(</kbd> | <kbd>v</kbd> <kbd>~</kbd> ++tab++ |

APL also comes with the standard comparison functions, with the expected representative symbols.

## Comparison functions

Dyadic `=`, `≠`, `≤`, `<`, `>`, `≥` : Comparison Functions
```apl
      0 = 0
1
      0 ≠ 0
0
      3 ≤ 3
1
      3 < 3
0
      ⍝ Getting a mask for numbers divisible by 2
      0 = 2 | 1 2 3 4 5 6 7 8 9 10
0 1 0 1 0 1 0 1 0 1
```

## Match

Note that when you use these functions over two vectors, the result is a vector, denoting the function *element wise*. To compare whole arrays, use the dyadic ≡ match function, which returns 1 if both arguments have the same shape and the same elements, and 0 otherwise.

```apl
      1 2 1 4 5 2 5 2 3 2 = 1 2 3 4 5 2 3 2 4 2
1 1 0 1 1 1 0 1 0 1
      1 2 1 4 5 2 5 2 3 2 ≤ 1 2 3 4 5 2 3 2 4 2
1 1 1 1 1 1 0 1 1 1
      1 2 1 4 5 2 5 2 3 2 ≡ 1 2 3 4 5 2 3 2 4 2
0
      1 2 1 4 5 2 5 2 3 2 ≡ 1 2 1 4 5 2 5 2 3 2
1

      'Hello' ≡ 'hello'
0
      'hello' ≡ 'hello'
1
```

## Comparison tolerance

One useful feature of APL in real-world applications is the ability to change the tolerance of comparison when it comes to floating point values (except for comparison against zero!), and the displayed precision of numbers. The tolerance can be read (and set) via the `⎕CT` system variable, and the precision shown is read (and set) via `⎕PP`. The tolerance can be anything from `0` (exact comparisons) to `2*¯32`.

```apl
      ⍝ 1 + Sine of Pi
      X ← 1 + 1 ○ ○ 1
      X
1

      ⎕PP ← 20
      X
1.0000000000000002
      
      ⎕CT ← 0
      1 = X
0

      ⎕CT ← 1E¯10
      1 = X
1

```

An amusing quote from the [APL Wiki](https://aplwiki.com/wiki/Comparison_tolerance) about comparison tolerance
> In an early talk Ken was explaining the advantages of tolerant 
> comparison. A member of the audience asked incredulously, "Surely 
> you don't mean that when A=B and B=C, A may not equal C?" Without 
> skipping a beat, Ken replied, "Any carpenter knows that!" and went on
> to the next question. 
> 
> —Paul Berry


## Boolean operations

As suggested by the choice of glyphs for the Greatest Common Divisor `∨` and the Least Common Multiple `∧`, these two operations are also used for the boolean logic "or" and "and" operations. This is because 0 is divisible by everything, as the remainder is always 0. So the Greatest Common Divisor of 0 and x is just x, since x divides both 0 and x. Dually, 0 is also a multiple of everything, so the Least Common Multiple of 0 and x is just 0, since 0 is a multiple of both x and 0 (and it’s the smallest!).

```apl
      3 ∧ 0
0
      0 ∨ 3
3
      ⍝ Checking for numbers divisible by 3
      triples ← 0 = 3 | 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
      triples
0 0 1 0 0 1 0 0 1 0 0 1 0 0 1

      ⍝ Checking for numbers divisible by 5
      quintuples ← 0 = 5 | 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
      quintuples
0 0 0 0 1 0 0 0 0 1 0 0 0 0 1

      ⍝ Checking for numbers divisible by 3 and 5
      triples ∧ quintuples
0 0 0 0 0 0 0 0 0 0 0 0 0 0 1

      ⍝ Checking for numbers divisible by 3 or 5
      triples ∨ quintuples
0 0 1 0 1 1 0 0 1 1 0 1 0 0 1
```

## Not, nand and nor

Monadic `~` : Logical Not

Dyadic `⍲` & `⍱` : Logical Nand and Logical Nor
```apl
      ~ 1 1 0 1 1
0 0 1 0 0

      ⍝ However, this function is truly logical
      ⍝ You cannot take the not of a non-0 non-1 number
      ~ 3 
DOMAIN ERROR
      ~3
      ∧

      ⍝ Numbers not divisible by both 3 and 5
      triples ⍲ quintuples
1 1 1 1 1 1 1 1 1 1 1 1 1 1 0

      ⍝ Numbers divisible by neither 3 nor 5
      triples ⍱ quintuples
1 1 0 1 0 0 1 1 0 0 1 0 1 1 0
```