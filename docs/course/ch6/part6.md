# Dops (dee-ops)


!!! abstract "This part will cover"
    
    - User-defined operators

---

Just as we defined custom functions using dfn notation, a slightly modified notation allows us to define custom operators. Consider the problem of scalar pervasion mentioned in the last section. In order to allow functions to match the simple scalars from nested left and right arrays, a certain amount of ``¨`` Each operators were needed, in this case four,

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

In general, we might a priori not know how many ``¨`` each operators are needed, and even then, their excessive repeated use can make some code hard to read or understand. It would be useful to define an general operator that repeatedly applies the required number of ``¨`` each operators to match the simple scalars of the nested arrays. Luckily, one such operator can be found on the Dyalog [General Utility dfns workspace](https://dfns.dyalog.com/) 

```apl
      saw←{                 ⍝ Function operand applied Simple-Array-Wise.
        ⍺←⊢                 ⍝ default left arg.
        2≥|≡⍺ ⍵ ⍵:⍺ ⍺⍺ ⍵    ⍝ Both simple: apply operand.
        1≥|≡⍵:⍺ ∇¨⊂⍵        ⍝ ⍵ simple: traverse ⍺.
        2≥|≡⍺ 1:⍺∘∇¨⍵       ⍝ ⍺ simple: traverse ⍵.
        ⍺ ∇¨⍵               ⍝ Both nested: traverse both.
      }
```

The only new syntax in this dop that does not already exist in a dfn is the ``⍺⍺`` argument. Recall that all operators (except for the outer product ``∘.f``!) take a function argument on the right, and possibly another function argument on the left. These function arguments are denoted as ``⍺⍺`` and ``⍵⍵`` in dops. 