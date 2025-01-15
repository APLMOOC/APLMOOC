# Matchmaking

!!! abstract "This part will cover"
    
    - Scalar matching
    - Scalar-vector matching
    - Vector matching
    - Higher dimensional matching

---

In chapters 5 and 6, we've encountered many different ways to match arbitrary rank cells of arrays along different functions. We've seen that the arithmetic operators always match scalars of the arrays it is applied to, which can be done generally using the ``¨`` each operator; that the ``⊂`` enclose function can be used in combination with ``¨`` each to match arrays with scalars and, in combination with the ``↓`` split function, matching arbitrary rank cells together. We've also discussed the ``∘.f`` outer product operator which matches every pair of scalars from its array arguments, and the ``f.g`` inner product which reduces along the matching of the rows of its left argument and columns of its right argument, ``f[N]`` bracket axis notation which specified what axis functions are to act and, of course, the ``⍤`` rank operator which generalises many of the rank operations discussed.

In this section, we review all these different methods and provide some more practical details which have been omitted for brevity in previous sections.

## Scalar matching

### In depth

As mentioned previously, arithmetic functions in APL are *pervasive*; this means that they match scalars from their argument arrays, no matter the rank or depth. Take, for example, the following highly nested array ``A``

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
```

When multiplying by a simple scalar array, each element of ``A`` is matched to an element of the simple scalar array, and each scalar within the elements of ``A``, no matter how deep, is multiplied by that element

```apl
      1 2 3 4 × A
┌─┬─────┬───────────┬─────────────────┐
│1│┌─┬─┐│┌───┬─────┐│┌─────┬─────────┐│
│ ││2│2│││┌─┐│┌───┐│││┌───┐│┌───────┐││
│ │└─┴─┘│││3│││3 0│││││┌─┐│││┌─────┐│││
│ │     ││└─┘│└───┘│││││4│││││4 0 0││││
│ │     │└───┴─────┘│││└─┘│││└─────┘│││
│ │     │           ││└───┘│└───────┘││
│ │     │           │└─────┴─────────┘│
└─┴─────┴───────────┴─────────────────┘
```

This also applies to arithmetic functions between nested arrays, consider the sum of the following arrays ``B`` and ``C`` of the same type

```apl
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
       B + C
┌─┬─────┬───────────┐
│3│┌─┬─┐│┌───┬─────┐│
│ ││3│3│││┌─┐│┌───┐││
│ │└─┴─┘│││3│││3 2│││
│ │     ││└─┘│└───┘││
│ │     │└───┴─────┘│
└─┴─────┴───────────┘
```

However, this is not true for arbitrary functions, consider the function ``{'NZP'[2+×⍵]}`` which marks whether a number is negative, zero, or positive

```apl
      {'NZP'[2+×⍵]} 4 ¯5 0 0 0 ¯3 3
PNZZZNP

      {'NZP'[2+×⍵]} A[1]
P

      {'NZP'[2+×⍵]} A[2]
RANK ERROR

      A[2]
┌─────┐
│┌─┬─┐│
││1│1││
│└─┴─┘│
└─────┘

      {'NZP'[2+×⍵]}¨ A[2]
┌──┐
│PP│
└──┘
```

Notice how the function applied to ``A[1]`` and also to ``A[2]`` as long as we used the ``¨`` each operator to "peel off" a layer of the depth. We can continue in this fashion to apply the function to any depth by adding enough ``¨`` each operators

```apl
      {'NZP'[2+×⍵]}¨¨¨ A[3]
┌──────────┐
│┌───┬────┐│
││┌─┐│┌──┐││
│││P│││PZ│││
││└─┘│└──┘││
│└───┴────┘│
└──────────┘
      {'NZP'[2+×⍵]}¨¨¨¨ A[4]
┌───────────────┐
│┌─────┬───────┐│
││┌───┐│┌─────┐││
│││┌─┐│││┌───┐│││
││││P│││││PZZ││││
│││└─┘│││└───┘│││
││└───┘│└─────┘││
│└─────┴───────┘│
└───────────────┘
```

Then, by noticing that applying redundant ``¨`` each operators to functions acting on a simple scalar does not affect the result, we can apply the function on the whole array using five ``¨`` each operators

```apl
      {'NZP'[2+×⍵]}¨¨¨¨¨ A
┌─┬─────┬──────────┬───────────────┐
│P│┌─┬─┐│┌───┬────┐│┌─────┬───────┐│
│ ││P│P│││┌─┐│┌──┐│││┌───┐│┌─────┐││
│ │└─┴─┘│││P│││PZ│││││┌─┐│││┌───┐│││
│ │     ││└─┘│└──┘│││││P│││││PZZ││││
│ │     │└───┴────┘│││└─┘│││└───┘│││
│ │     │          ││└───┘│└─────┘││
│ │     │          │└─────┴───────┘│
└─┴─────┴──────────┴───────────────┘
```

This also applies to arbitrary functions at any level of depth, consider the ``,`` catenate function between the above arrays ``B`` and ``C``

```apl
      B
┌─┬─────┬───────────┐
│1│┌─┬─┐│┌───┬─────┐│
│ ││1│1│││┌─┐│┌───┐││
│ │└─┴─┘│││1│││1 0│││
│ │     ││└─┘│└───┘││
│ │     │└───┴─────┘│
└─┴─────┴───────────┘
      C
┌─┬─────┬───────────┐
│2│┌─┬─┐│┌───┬─────┐│
│ ││2│2│││┌─┐│┌───┐││
│ │└─┴─┘│││2│││2 2│││
│ │     ││└─┘│└───┘││
│ │     │└───┴─────┘│
└─┴─────┴───────────┘
      B , C
┌─┬─────┬───────────┬─┬─────┬───────────┐
│1│┌─┬─┐│┌───┬─────┐│2│┌─┬─┐│┌───┬─────┐│
│ ││1│1│││┌─┐│┌───┐││ ││2│2│││┌─┐│┌───┐││
│ │└─┴─┘│││1│││1 0│││ │└─┴─┘│││2│││2 2│││
│ │     ││└─┘│└───┘││ │     ││└─┘│└───┘││
│ │     │└───┴─────┘│ │     │└───┴─────┘│
└─┴─────┴───────────┴─┴─────┴───────────┘
      B ,¨ C
┌───┬─────────┬─────────────────────┐
│1 2│┌─┬─┬─┬─┐│┌───┬─────┬───┬─────┐│
│   ││1│1│2│2│││┌─┐│┌───┐│┌─┐│┌───┐││
│   │└─┴─┴─┴─┘│││1│││1 0│││2│││2 2│││
│   │         ││└─┘│└───┘│└─┘│└───┘││
│   │         │└───┴─────┴───┴─────┘│
└───┴─────────┴─────────────────────┘
      B ,¨¨ C
┌─────┬─────────┬─────────────────┐
│┌───┐│┌───┬───┐│┌─────┬─────────┐│
││1 2│││1 2│1 2│││┌─┬─┐│┌───┬───┐││
│└───┘│└───┴───┘│││1│2│││1 0│2 2│││
│     │         ││└─┴─┘│└───┴───┘││
│     │         │└─────┴─────────┘│
└─────┴─────────┴─────────────────┘
      B ,¨¨¨ C
┌───────┬─────────────┬─────────────────┐
│┌─────┐│┌─────┬─────┐│┌─────┬─────────┐│
││┌───┐│││┌───┐│┌───┐│││┌───┐│┌───────┐││
│││1 2│││││1 2│││1 2│││││1 2│││1 0 2 2│││
││└───┘│││└───┘│└───┘│││└───┘│└───────┘││
│└─────┘│└─────┴─────┘│└─────┴─────────┘│
└───────┴─────────────┴─────────────────┘
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

In the next section, we will introduce recursively-defined operators which make this task easier.

### All pairs

In order to instead match all pairs of scalars, we can use ``∘.f`` the outer product operator.