# Relational functions

!!! abstract "This part will cover"

    - Functions used to compare values
    - Comparing vectors and scalars

---

Dyadic =, ≠, ≤, <, >, ≥ : Comparison Functions
```apl
      0 = 0
1
      0 ≠ 0
0
      3 ≤ 3
1
      3 < 3
0
      2 = 1 2 3 4 5 2 3 2 4 2 ⍝ Getting a "bit mask" for elements equal to 2
0 1 0 0 0 1 0 1 0 1
```

Note that when you use these functions over two vectors, the result is a vector, denoting the function *element wise*.

```apl
      1 2 1 4 5 2 5 2 3 2 = 1 2 3 4 5 2 3 2 4 2
1 1 0 1 1 1 0 1 0 1
      1 2 1 4 5 2 5 2 3 2 ≤ 1 2 3 4 5 2 3 2 4 2
1 1 1 1 1 1 0 1 1 1
```

We will learn about how to collect these result into one scalar in the next section.
