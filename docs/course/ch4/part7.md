# Elements of set theory

!!! abstract "This part will cover"
    
    - Set operations:
        - Union
        - Intersection
        - Unique
        - Without

---

!!!note move to chapter 5

Most of the functions introduced in the previous chapter can also be applied element-wise to vectors, as was described in Chapter 2. There are certain other functions that only make sense when dealing with vector arguments; for example, the usual set operations (Intersection, Union, and Difference) only make sense when dealing with collections of elements, such as vectors.

Take the following vectors of [emoticons](https://en.wikipedia.org/wiki/List_of_emoticons)

```apl
HAPPY_EMOTICONS ← ':)' ':-)' ':D' ':]' ':o)' '8)' ':3' 'c:' ':x'

SAD_EMOTICONS ← '):' ':c' ']:' ')-:' 'D:' '>:(' ':/' ':x' ':|'
```

The symbol ∪ acts *dyadically* as Set Union.

```apl
       HAPPY_EMOTICONS ∪ SAD_EMOTICONS
:) :-) :D :] :o) 8) :3 c: :x ): :c ]: )-: D: >:( :/ :|
```

Notice how the element ‘:x’ only appears once, where it would appear twice if we were to use the dyadic catenate , operator introduced in Chapter 2.

```apl
       HAPPY_EMOTICONS , SAD_EMOTICONS
:) :-) :D :] :o) 8) :3 c: :x ): :c ]: )-: D: :x >:( :/ :|
```

Similarly, the symbol ∩ acts dyadically as the Set Intersection operation.

```apl
       HAPPY_EMOTICONS ∩ SAD_EMOTICONS
:x
```

The symbol ~, which monadically refers to boolean NOT, is dyadically the Set Difference operation.

```apl
       HAPPY_EMOTICONS ~ SAD_EMOTICONS
:) :-) :D :] :o) 8) :3 c:
       ⍝ Notice the ':x' emoticon is gone
```

Monadically, the symbol ∪ acts as the Unique operator, removing duplicate entries in a vector (and duplicate rows or columns in a matrix, more on axis operations in Chapter 6).

```apl
       ∪ HAPPY_EMOTICONS , SAD_EMOTICONS
:) :-) :D :] :o) 8) :3 c: :x ): :c ]: )-: D: >:( :/ :|
       ⍝ Notice the ':x' emoticon only appears once
```

Comparing this result to the one obtained using the dyadic union ∪ function,

```apl
       (HAPPY_EMOTICONS ∪ SAD_EMOTICONS) = ∪ HAPPY_EMOTICONS , SAD_EMOTICONS
┌───┬─────┬───┬───┬─────┬───┬───┬───┬───┬───┬───┬───┬─────┬───┬─────┬───┬───┐
│1 1│1 1 1│1 1│1 1│1 1 1│1 1│1 1│1 1│1 1│1 1│1 1│1 1│1 1 1│1 1│1 1 1│1 1│1 1│
└───┴─────┴───┴───┴─────┴───┴───┴───┴───┴───┴───┴───┴─────┴───┴─────┴───┴───┘
```

This might seem like a strange result at first, but is actually the consequence of a very reasonable definition for equality of nested arrays.

The dyadic equals function between arrays equates all scalars found in the arrays, not just the top-level elements. Recalling that a string in APL is an array of characters, the array of emoticons is an array of arrays of characters, which when equated to another array of emoticons, compares every character individually.

The dyadic ≡ match function can be used to compare entire arrays.

```apl
       (HAPPY_EMOTICONS ∪ SAD_EMOTICONS) ≡ ∪ HAPPY_EMOTICONS , SAD_EMOTICONS
1
```
