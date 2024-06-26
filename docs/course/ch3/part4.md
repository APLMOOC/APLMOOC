# Logical functions

!!! abstract "This part will cover"

    - Functions used to perform bitwise operations
    - Bitwise operations on scalars and vectors

---

```apl
      3 ∧ 0
0
      0 ∨ 3
3
      1 1 0 1 1 ∧ 1 0 1 0 1 ⍝ If the arguments are "bit mask"s, this is a bitwise and
1 0 0 0 1
      1 1 0 1 1 ∨ 1 0 1 0 1 ⍝ This is a bitwise or
1 1 1 1 1
```

Monadic `~` : Logical Not
Dyadic `⍲` & `⍱` : Logical Nand and Logical Nor
```apl
      ~ 1 1 0 1 1
0 0 1 0 0
      ~ 3 ⍝ However, this operator is truly logical, so you cannot take the not of a non-0 non-1 number
DOMAIN ERROR
      ~3
      ∧
      1 1 0 1 1 ⍲ 1 0 1 0 1 ⍝ This is just ~ 1 1 0 1 1 ∧ 1 0 1 0 1
0 1 1 1 0
      1 1 0 1 1 ⍱ 1 0 1 0 1 ⍝ Similarly this is just ~ 1 1 0 1 1 ∨ 1 0 1 0 1
1 1 1 1 1
```
