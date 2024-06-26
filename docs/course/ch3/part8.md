# Fun(Fun(Fun(Fun(Fun(...)))))

!!! abstract "This part will cover"

    - How to define recursive dfns and tradfns
    - Guard syntax in dfns

---

Recursive functions can be implemented using guarded expressions and the self `∇` function.

Guarded expressions consist of a boolean/logical expression followed by a colon ”:”, and another expression. For example, ⍵=0: 1. 

A guarded expression in a function specifies a condition for whether a statement is evaluated; if the boolean expression evaluates to 1, the function evaluates the statement and the value of the expression is returned. In the above example, if we create a function {⍵=0: 1}, if ⍵ (the right argument) is 0, then the function will return 1.

The self function `∇` stands for the function it is contained in, allowing calling the function from within itself, that is, allowing recursion. Alternatively, the function name can be used within the function itself.

For example, the factorial function is typically defined as f(n) = n * f(n-1), such that f(0)=1. Thinking in terms of guarded expressions, if the argument of the function is 0 the result should be 1 (in symbols, ⍵=0: 1), otherwise multiply the right argument (⍵) by the result of the function itself (∇) evaluated for the right argument minus 1 (⍵ - 1).  Putting it together,
```apl
      factorial ← {⍵=0: 1 ⋄ ⍵ × ∇ ⍵ - 1} 
```
This function consists of two statements, separated by the separator ⋄.
The first statement in this function is an example of a guarded expression, if ⍵=0 evaluates to true, that is, when ⍵ is equal to 0, the expression 1 is evaluated. Otherwise, the expression ⍵ × ∇ ⍵ - 1  is evaluated. 
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

```apl
      collatz ← {⍵=1: 1 ⋄ 0=2|⍵: ⍵ , ∇ ⍵÷2 ⋄ ⍵ , ∇ 1+3×⍵}
```
This function keeps track of the evaluation of the following procedure. If the ⍵ is even (see more examples of the dyadic modulo | function), divide it by two. If it is odd, multiply it by three and add one. Evaluate this function until ⍵ reaches 1.

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
