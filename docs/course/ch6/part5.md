# Matchmaking

talk about types in mix chapter, talk about how rank does the same here

apl literature search

!!! abstract "This part will cover"
    
    - Scalar matching
    - Scalar-vector matching
    - Vector matching
    - Higher dimensional matching

---

In chapters 5 and 6, we've encountered many different ways to match arbitrary rank cells of arrays along different functions. We've seen that the arithmetic operators always match scalars of the arrays it is applied to, which can be done generally using the ``¨`` each operator; that the ``⊂`` enclose function can be used in combination with ``¨`` each to match arrays with scalars and, in combination with the ``↓`` split function, matching arbitrary rank cells together. We've also discussed the ``∘.f`` outer product operator which matches every pair of scalars from its array arguments, and the ``f.g`` inner product which reduces along the matching of the rows of its left argument and columns of its right argument. And of course, the ``⍤`` rank operator and ``f[N]`` bracket axis notation.

In this section, we review all these different methods and provide some more practical details which have been omitted for brevity in previous sections.

## Scalar matching

- Talk about pervasion, dfns.perv. Show how you can keep using each to peel off a layer of depth
https://aplwiki.com/wiki/Pervasion
https://dfns.dyalog.com/n_perv.htm
- Outer product, each
- what does rank 0 mean, justify rank of scalar, rank operator 0
