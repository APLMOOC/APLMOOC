# Dops (dee-ops)


!!! abstract "This part will cover"
    
    - User-defined operators

---

Just as we defined custom functions using dfn notation, a slightly modified notation allows us to define custom operators. Consider the problem of scalar pervasion mentioned in the last section. In order to allow functions to match the simple scalars from nested left and right arrays, a certain amount of ``¨`` Each operators were needed, in this case four

```apl
      ⊢A ← ⊂\,\ 2/1 0
┌─┬─────┬───────────┬─────────────────┐
│1│┌─┬─┐│┌───┬─────┐│┌─────┬─────────┐│
│ ││1│1│││┌─┐│┌───┐│││┌───┐│┌───────┐││
│ │└─┴─┘│││1│││1 0│││││┌─┐│││┌─────┐│││
│ │     ││└─┘│└───┘│││││1│││││1 0 0││││
│ │     │└───┴─────┘│││└─┘│││└─────┘│││
│ │     │           ││└───┘│└───────┘││
│ │     │           │└─────┴─────────┘│
└─┴─────┴───────────┴─────────────────┘
      ⊢B ← A[1 2 3]
┌─┬─────┬───────────┐
│1│┌─┬─┐│┌───┬─────┐│
│ ││1│1│││┌─┐│┌───┐││
│ │└─┴─┘│││1│││1 0│││
│ │     ││└─┘│└───┘││
│ │     │└───┴─────┘│
└─┴─────┴───────────┘
      ⊢C ← 2 × ⊂\,\ 3/1
┌─┬─────┬───────────┐
│2│┌─┬─┐│┌───┬─────┐│
│ ││2│2│││┌─┐│┌───┐││
│ │└─┴─┘│││2│││2 2│││
│ │     ││└─┘│└───┘││
│ │     │└───┴─────┘│
└─┴─────┴───────────┘
      B ,¨¨¨¨ C
┌─────────┬─────────────────┬─────────────────────┐
│┌───────┐│┌───────┬───────┐│┌───────┬───────────┐│
││┌─────┐│││┌─────┐│┌─────┐│││┌─────┐│┌─────────┐││
│││┌───┐│││││┌───┐│││┌───┐│││││┌───┐│││┌───┬───┐│││
││││1 2│││││││1 2│││││1 2│││││││1 2│││││1 2│0 2││││
│││└───┘│││││└───┘│││└───┘│││││└───┘│││└───┴───┘│││
││└─────┘│││└─────┘│└─────┘│││└─────┘│└─────────┘││
│└───────┘│└───────┴───────┘│└───────┴───────────┘│
└─────────┴─────────────────┴─────────────────────┘
```

In general, we might not a priori know how many ``¨`` each operators are needed, and even then, their excessive repeated use can make some code hard to read or understand. It would be useful to define an general operator that repeatedly applies the required number of ``¨`` each operators to match the simple scalars of the nested arrays. Luckily, one such operator can be found on the Dyalog [General Utility dfns workspace](https://dfns.dyalog.com/) 

```apl
      saw←{                 
        ⍺←⊢                 ⍝ default left arg.
        2≥|≡⍺ ⍵ ⍵:⍺ ⍺⍺ ⍵    ⍝ Both simple: apply operand.
        1≥|≡⍵:⍺ ∇¨⊂⍵        ⍝ ⍵ simple: traverse ⍺.
        2≥|≡⍺ 1:⍺∘∇¨⍵       ⍝ ⍺ simple: traverse ⍵.
        ⍺ ∇¨⍵               ⍝ Both nested: traverse both.
      }
```

The only new syntax in this dop that does not already exist in a dfn is the ``⍺⍺`` argument. Recall that all operators (except for the outer product ``∘.f``!) take a function argument on the right, and possibly another function argument on the left, these function arguments are called "operands". These operands are denoted as ``⍺⍺`` and ``⍵⍵`` in dops, and the function resulting from applying an operator to operands is called a "derived function". Then, the second line of the dop can be read as "If the magnitude of the depth of the vector ``⍺ ⍵ ⍵`` is less than two, then apply the left operand ``⍺⍺`` to the array left argument ``⍺`` and array right argument ``⍵``". 

Dops also has two different types of recursion. Using a single del `∇` refers to the derived function, and a double del `∇∇` refers to the dop itself.

To make the new syntax clearer, let's consider some simple examples. 

The ``⍨`` swap or self operator can be written as ``{⍺←⍵⋄⍵ ⍺⍺ ⍺}`` since both ``A f{⍺←⍵⋄⍵ ⍺⍺ ⍺} B``evaluates to ``B f A`` and ``f{⍺←⍵⋄⍵ ⍺⍺ ⍺} B`` evaluates to ``B f B``.

We can write ``⊢`` right and ``⊣`` left tack operators that apply not to array arguments as the usual functions do, but rather to function arguments. A right tack operator could look like ``{⍺ ⍵⍵ ⍵}``, as ``A f{⍺ ⍵⍵ ⍵}g B`` evaluates to ``A g B``. The left tack similarly could be written as ``A f{⍺ ⍺⍺ ⍵}g B``, since ``A f{⍺ ⍺⍺ ⍵}g B`` evaluates to ``A f B``. However, note that the right tack operator only evaluates correctly when given two operands; it cannot be evaluated monadically since all dops require a left operand.