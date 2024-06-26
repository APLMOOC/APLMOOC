# Creating vectors

!!! abstract "This part will cover"

    - Vector generating functions
        - Iota
        - Rho
        - Replicate
        - Catenate
        - Roll/deal
    - Index origin / Quad IO

---

The dyadic replicate `/` function repeats elements of its right hand argument array by a specified left hand argument array. This allows the use of boolean masks, which makes it commonly used to filter arrays.

```apl
       (2|⍳9)/'ballooned'
blond
       (~2|⍳9)/'ballooned'
aloe
       2 1 1 1 1 1/'elfish'
eelfish
       (5=8|⍳26)/⎕A
EMU
       0 0 0 1 1 0 0 0 1 1 0 0/'flamethrower'
meow
```