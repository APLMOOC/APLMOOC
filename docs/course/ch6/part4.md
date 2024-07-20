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