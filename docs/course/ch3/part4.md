# Infinite fun

!!! abstract "This part will cover"

    - How to define recursive dfns
    - Guard syntax in dfns

---

The engineer sits hunched over their cubicle, focused as they diligently type out

```apl
   1+(0.99)+(0.99*2)
2.9701

   1+(0.99)+(0.99*2)+(0.99*3)+(0.99*4)
4.90099501

   1+(0.99)+(0.99*2)+(0.99*3)+(0.99*4)+(0.99*5)+(0.99*6)+(0.99*7)+(0.99*8)+(0.99*9)
9.561792499
```

In the back of their mind, they know the task they are trying to achieve is impossible, approximating the sum of powers of ``0.99`` to a reasonable precision would take thousands of terms.

A coworker suggested using a function, and provided some code to evaluate the sequence. Not wanting their skills to be overshadowed, the engineer refused the help and started creating their own function 

```apl
      a ← {0.99*⍵}
      (a 0)+(a 1)+(a 2)+(a 3)+(a 4)+(a 5)+(a 6)+(a 7)+(a 8)+(a 9)+(a 10)
9.561792499
```

## Recursion

Now reaching the 50th term, the series is no closer to being evaluated. If only there were a way to define a function that repeatedly applies itself. The engineer thinks for a bit, and writes the following.

```apl
      test ← {test ⍵+1}
      test 1

```

Nothing seems to be happening, adding a `⎕` quad to look at intermediate values,

```apl
      test ← {
            ⎕ ← ⍵
            test ⍵+1
      }
      test 1

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
...
```

They quickly halt the program using ``Action > Interrupt`` in RIDE, realising a never-ending series of computations have been specified, by calling the function within itself. The special symbol `∇` can also be used in place of the function name. Trying to do this for the infinite sum, where the right argument is set to be the accumulated result, and the left argument is the index of the term to sum up, the computation succeeds.

```apl
      sum ← {
            ⎕ ← ⍵
            (⍺+1) sum ⍵+0.99*⍺
      }
      0 sum 0
0
1
1.99
2.9701
3.940399
4.90099501
5.85198506
6.793465209
7.725530557
8.648275252
9.561792499
...
```

Write out the first few evaluation steps of the function to verify it for yourself!

## Guarded expressions

However, infinite computations on their own will never be terminate on finite machines, and hence not useful for real computations. Thankfully, there is a way to stop these infinite computations when a certain condition is reached, using guarded expressions.

Guarded expressions are conditional expressions; they only execute a statement if some condition holds. The engineer rewrites the function, this time stopping the computation if the terms get smaller than ``10*¯10``,

```apl
      sum ← {
          (10*¯10)>0.99*⍺: ⎕ ← ⍵
          (⍺+1) sum ⍵+0.99*⍺
      }
      0 sum 0
99.99999999
```

The guarded expression in the above function is ``(10*¯10)>0.99*⍺: ⎕ ← ⍵``. The guarded expression consists of a logical expression ``(10*¯10)>0.99*⍺`` followed by a colon `:`, and another expression ``⎕ ← ⍵``, meaning ``⎕ ← ⍵`` will be executed only if ``0.99*⍺`` is less than ``(10*¯10)``.

This is similar to the mathematical specification of piecewise functions, in fact, the above function would be written as follows.

\\[
\text{Sum}(\alpha,\omega)=\begin{cases}
\square\leftarrow\omega & 10^{-10}>0.99\^{\alpha}\\\\
\text{Sum}(\alpha+1,\omega+0.99^{\alpha}) & \text{otherwise}
\end{cases}
\\]

Staring excitedly at your computer, you email your coworker and tell them about your solution. However, your coworker had a solution that was exact, and required only one computation.

```apl
      sum_geometric ← {1÷1-⍵}
      sum_geometric 0.99
100
```

That was embarrasing. You did learn a new programming technique to control infinite amounts of computation, so you try to make the most of it by writing a couple more useful programs.

## Examples

The factorial function is typically defined as $f(n) = n \cdot f(n-1)$ such that $f(0)=1$ Thinking in terms of guarded expressions, if the argument of the function is 0 the result should be 1 (in symbols, `⍵=0: 1`), otherwise multiply the right argument (`⍵`) by the result of the function itself (`∇`) evaluated for the right argument minus 1 (`⍵ - 1`).  

Putting it together, we obtain a recursive function that evaluates the factorial function.

```apl
      factorial ← {⍵=0: 1 ⋄ ⍵ × ∇ ⍵ - 1} 
```

This function consists of two statements, separated by the separator `⋄`.
The first statement in this function is an example of a guarded expression, if `⍵=0` is true, that is, when `⍵` is equal to 0, the expression 1 is evaluated. Otherwise, the expression `⍵ × ∇ ⍵ - 1` is evaluated. 

For example, the evaluation of factorial 2 can be visualised as:

```apl
           {⍵=0: 1 ⋄ ⍵ × ∇ ⍵ - 1} 2
      ⍝    Since 2=0 is 0, the guarded statement is not evaluated.
      ⍝    2 × ∇ 1
      ⍝    2 × {⍵=0: 1 ⋄ ⍵ × ∇ ⍵ - 1} 1
      ⍝    Since 1=0 is 0, the guarded statement is not evaluated.
      ⍝    2 × 1 × ∇ 0
      ⍝    2 × 1 × {⍵=0: 1 ⋄ ⍵ × ∇ ⍵ - 1} 0
      ⍝    Since 0=0 is 1, the guarded statement is evaluated.
      ⍝    2 × 1 × 1
      factorial 2
2
      factorial 3
6
      factorial 4
24
```

The next function we will look at calculates the Collatz sequence of a number. 

```apl
      collatz ← {
            ⍵=1: 1
            0=2|⍵: ⍵ , ∇ ⍵÷2
            ⍵ , ∇ 1+3×⍵}
```

If `⍵` is even (``0=2|⍵``) then divide it by two and add it to the list (``⍵ , ∇ ⍵÷2``). If it is not, multiply it by three, add one, and add it to the list (``⍵ , ∇ 1+3×⍵``). Repeat this process until `⍵` reaches 1.

```apl
      ⍝ Example:
      ⍝     collatz 3 
      ⍝     3 , ∇ 1+3×3
      ⍝     3 , collatz  1+3×3
      ⍝     3 , collatz 10
      ⍝     3 , 10 , ∇ 10÷2
      ⍝     3 10 , collatz  10÷2
      ⍝     3 10 , collatz  5
      ⍝     and so on
      collatz 3
3 10 5 16 8 4 2 1
      collatz 100
100 50 25 76 38 19 58 29 88 44 22 11 34 17 52 26 13 40 20 10 5 16 8 4 2 1
      collatz 2*10
1024 512 256 128 64 32 16 8 4 2 1
```
