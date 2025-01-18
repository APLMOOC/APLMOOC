# Matchmaking

!!! abstract "This part will cover"
    
    - Scalar matching
    - Scalar-vector matching
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

In order to instead match all pairs of scalars, we can use ``∘.f`` the outer product operator. Suppose we wanted to match every scalar in the arrays ``B`` and ``C`` together, we can first apply the ``∊`` enlist function to both arrays, the apply the outer product with the ``,`` catenate function

```apl
      ∊B
1 1 1 1 1 0
      ∊C 
2 2 2 2 2 2
      (∊B)∘.,(∊C)
┌───┬───┬───┬───┬───┬───┐
│1 2│1 2│1 2│1 2│1 2│1 2│
├───┼───┼───┼───┼───┼───┤
│1 2│1 2│1 2│1 2│1 2│1 2│
├───┼───┼───┼───┼───┼───┤
│1 2│1 2│1 2│1 2│1 2│1 2│
├───┼───┼───┼───┼───┼───┤
│1 2│1 2│1 2│1 2│1 2│1 2│
├───┼───┼───┼───┼───┼───┤
│1 2│1 2│1 2│1 2│1 2│1 2│
├───┼───┼───┼───┼───┼───┤
│0 2│0 2│0 2│0 2│0 2│0 2│
└───┴───┴───┴───┴───┴───┘
```

We already know that the outer product can also be expressed using the rank ``⍤`` operator as follows

```apl
      (∊B)(,¨⍤0 1)(∊C)
┌───┬───┬───┬───┬───┬───┐
│1 2│1 2│1 2│1 2│1 2│1 2│
├───┼───┼───┼───┼───┼───┤
│1 2│1 2│1 2│1 2│1 2│1 2│
├───┼───┼───┼───┼───┼───┤
│1 2│1 2│1 2│1 2│1 2│1 2│
├───┼───┼───┼───┼───┼───┤
│1 2│1 2│1 2│1 2│1 2│1 2│
├───┼───┼───┼───┼───┼───┤
│1 2│1 2│1 2│1 2│1 2│1 2│
├───┼───┼───┼───┼───┼───┤
│0 2│0 2│0 2│0 2│0 2│0 2│
└───┴───┴───┴───┴───┴───┘
```

The rank operator ``⍤`` here takes in a right argument array ``(0 1)`` that matches the 0-cells of the left argument (scalars) with the 1-cells of the right argument (the entire vector), with the left function argument to be applied ``,¨`` catenate each, which applies catenate with the scalars of the left argument to each element of the right argument vector. We can also use ``⍤0 99`` instead of ``⍤0 1`` to signify taking the whole right argument.

To illustrate this matching, using ``,`` catenate instead of ``,¨`` catenate each

```apl
      (∊B)
1 1 1 1 1 0
      (∊C)
2 2 2 2 2 2
      (∊B)(,⍤0 1)(∊C)
1 2 2 2 2 2 2
1 2 2 2 2 2 2
1 2 2 2 2 2 2
1 2 2 2 2 2 2
1 2 2 2 2 2 2
0 2 2 2 2 2 2
```

This is one example of a general pattern that we will see in this section, which is that the rank ``⍤`` operator is powerful enough to express most of the matchings without using nested arrays.

### Scalar extension

Some functions in APL allow a scalar to act as if it were a higher-dimensional array by implicitly expanding it out to the required shape. The simplest examples are the arithmetic operations, instead of writing

```apl
      2 2 2 2 2 2 2 2 2 2 * ⍳10
2 4 8 16 32 64 128 256 512 1024
```

We can simply write

```apl
      2 * ⍳10
2 4 8 16 32 64 128 256 512 1024
```

More importantly, this also applies to non-simple scalars such as enclosed arrays, and in the following, we will see how to exploit this to match higher dimensional data. 

## Scalar-vector matching

### One vector

#### Using depth

The ``⊂`` enclose function can be used, along with ``¨`` each, to apply a list of scalars to a vector. The way this works is that the ``⊂`` enclose function turns the vector into a scalar, which allows ``¨`` each to apply each scalar from the left argument to the single scalar on the right argument using scalar extension. Consider the following construction of the ``CIPHER`` array from previous write exercises using the rotate ``⌽`` function with ``¨⊂`` each and enclose

```apl
      ⎕A
ABCDEFGHIJKLMNOPQRSTUVWXYZ
      (0 1 2)⌽¨⊂⎕A
┌──────────────────────────┬──────────────────────────┬──────────────────────────┐
│ABCDEFGHIJKLMNOPQRSTUVWXYZ│BCDEFGHIJKLMNOPQRSTUVWXYZA│CDEFGHIJKLMNOPQRSTUVWXYZAB│
└──────────────────────────┴──────────────────────────┴──────────────────────────┘
      ↑ (0 , ⍳25)⌽¨⊂⎕A
ABCDEFGHIJKLMNOPQRSTUVWXYZ
BCDEFGHIJKLMNOPQRSTUVWXYZA
CDEFGHIJKLMNOPQRSTUVWXYZAB
DEFGHIJKLMNOPQRSTUVWXYZABC
EFGHIJKLMNOPQRSTUVWXYZABCD
FGHIJKLMNOPQRSTUVWXYZABCDE
GHIJKLMNOPQRSTUVWXYZABCDEF
HIJKLMNOPQRSTUVWXYZABCDEFG
IJKLMNOPQRSTUVWXYZABCDEFGH
JKLMNOPQRSTUVWXYZABCDEFGHI
KLMNOPQRSTUVWXYZABCDEFGHIJ
LMNOPQRSTUVWXYZABCDEFGHIJK
MNOPQRSTUVWXYZABCDEFGHIJKL
NOPQRSTUVWXYZABCDEFGHIJKLM
OPQRSTUVWXYZABCDEFGHIJKLMN
PQRSTUVWXYZABCDEFGHIJKLMNO
QRSTUVWXYZABCDEFGHIJKLMNOP
RSTUVWXYZABCDEFGHIJKLMNOPQ
STUVWXYZABCDEFGHIJKLMNOPQR
TUVWXYZABCDEFGHIJKLMNOPQRS
UVWXYZABCDEFGHIJKLMNOPQRST
VWXYZABCDEFGHIJKLMNOPQRSTU
WXYZABCDEFGHIJKLMNOPQRSTUV
XYZABCDEFGHIJKLMNOPQRSTUVW
YZABCDEFGHIJKLMNOPQRSTUVWX
ZABCDEFGHIJKLMNOPQRSTUVWXY
```

The so-called "chipmunk" operator ``⊃¨⊂`` is the use of the ``⊃`` pick function with ``¨⊂`` each and enclose to index elements of a right array with left indices, which works even with nested arrays

```apl 
      ⊢X ← 10 10 ⍴ ? 100/6
2 2 4 3 1 4 5 3 3 6
5 4 3 3 4 2 1 1 6 1
5 1 3 2 4 4 4 2 3 4
2 1 2 5 5 2 5 4 1 1
1 3 5 3 6 6 6 3 3 5
4 3 6 1 6 2 4 1 2 1
1 1 5 3 4 4 4 6 3 2
5 4 5 3 2 6 6 5 3 3
1 6 1 2 5 6 5 3 6 3
2 1 3 1 3 2 3 2 4 1

      X ⊃¨⊂ '.o○0O⋄'
.○.O0○.○O○
○○.0..oO0O
o○○⋄○○.o○⋄
⋄○.⋄oOO.○O
⋄O○o⋄.0○.O
○O○○⋄.O.⋄0
⋄○⋄⋄⋄OO0○○
⋄⋄○O○⋄00○.
.0○OO⋄.oO⋄
⋄○0O○O..0⋄

      ⊢X ← 5 5 ⍴ ? 25/6

      X ⊃¨⊂ 'Welcome' 'Tervetuloa' 'Bienvenue' 'Ahlan wa Sahlan' 'Kruihcuipae' 'Huān Yíng'
┌───────────┬───────────────┬───────────────┬───────────────┬───────────┐
│Tervetuloa │Bienvenue      │Huān Yíng      │Huān Yíng      │Kruihcuipae│
├───────────┼───────────────┼───────────────┼───────────────┼───────────┤
│Huān Yíng  │Ahlan wa Sahlan│Huān Yíng      │Tervetuloa     │Bienvenue  │
├───────────┼───────────────┼───────────────┼───────────────┼───────────┤
│Kruihcuipae│Ahlan wa Sahlan│Kruihcuipae    │Huān Yíng      │Kruihcuipae│
├───────────┼───────────────┼───────────────┼───────────────┼───────────┤
│Welcome    │Welcome        │Huān Yíng      │Welcome        │Welcome    │
├───────────┼───────────────┼───────────────┼───────────────┼───────────┤
│Tervetuloa │Ahlan wa Sahlan│Ahlan wa Sahlan│Ahlan wa Sahlan│Bienvenue  │
└───────────┴───────────────┴───────────────┴───────────────┴───────────┘
```

#### Using rank

The rank operator ``⍤`` can be straightforwardly applied here with the right argument ``(0 1)`` to apply the scalars of the left argument to the vector right argument, or vice versa. 

```apl
      (2×⍳10) (⍴⍤0 1) 'Ha'
Ha                  
HaHa                
HaHaHa              
HaHaHaHa            
HaHaHaHaHa          
HaHaHaHaHaHa        
HaHaHaHaHaHaHa      
HaHaHaHaHaHaHaHa    
HaHaHaHaHaHaHaHaHa  
HaHaHaHaHaHaHaHaHaHa

      (⌽⍳99) (∊,¨⍤0 1) 'Bottles of beer on the wall' 'Bottles of beer. Take one down pass it around,'
99 Bottles of beer on the wall 99 Bottles of beer. Take one down pass it around, 98 Bottles of beer on the wall 98 Bottles of beer ...
```


Note that the rank operator does not remove layers of depth, see the following example

```apl
      'Who' 'What' 'When' 'Why' 'How' (,⍤0 1) ' is it?'
┌────┬─┬─┬─┬─┬─┬─┬─┐
│Who │ │i│s│ │i│t│?│
├────┼─┼─┼─┼─┼─┼─┼─┤
│What│ │i│s│ │i│t│?│
├────┼─┼─┼─┼─┼─┼─┼─┤
│When│ │i│s│ │i│t│?│
├────┼─┼─┼─┼─┼─┼─┼─┤
│Why │ │i│s│ │i│t│?│
├────┼─┼─┼─┼─┼─┼─┼─┤
│How │ │i│s│ │i│t│?│
└────┴─┴─┴─┴─┴─┴─┴─┘
```

Here, the string ``'Who'``, taken as a scalar, is catenated to ``' is it?'``, taken as a vector, hence the result is the same as ``(⊂'Who') , ' is it?'``. To combine these strings properly, we need to match the vector ``'Who'`` with the vector ``' is it?'``, which will be covered in the Vector matching subsection.

### Many vectors

#### Using depth

In order to match scalars with vectors in a single operation, the vectors must be compiled in an array, either using a nested array or a matrix. If a nested array is used, the vectors can be treated as scalars, and the same methods mentioned above can be used. Note that using enclose ``⊂`` is not necessary if the vectors are already in a nested array.

```apl
      ⊢LHS ← (⍕¨ ⍳10) ,¨⊂ '! = '
┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬──────┐
│1! = │2! = │3! = │4! = │5! = │6! = │7! = │8! = │9! = │10! = │
└─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴──────┘

      ⊢RHS ← ⍕¨ !⍳10
1 2 6 24 120 720 5040 40320 362880 3628800

      LHS,¨RHS
┌──────┬──────┬──────┬───────┬────────┬────────┬─────────┬──────────┬───────────┬─────────────┐
│1! = 1│2! = 2│3! = 6│4! = 24│5! = 120│6! = 720│7! = 5040│8! = 40320│9! = 362880│10! = 3628800│
└──────┴──────┴──────┴───────┴────────┴────────┴─────────┴──────────┴───────────┴─────────────┘
```

#### Using rank

The same argument to the rank operator mentioned above ``⍤0 1`` can be used to match the scalars (0-cells) of the left array argument to the vectors (1-cells) of the right array argument, thus the vectors have to be assembled in a matrix

```apl
      'Ha' 'Hi' 'Hu' 'He' 'Ho'
┌──┬──┬──┬──┬──┐
│Ha│Hi│Hu│He│Ho│
└──┴──┴──┴──┴──┘
      ↑'Ha' 'Hi' 'Hu' 'He' 'Ho'
Ha
Hi
Hu
He
Ho
      (2×⍳5) (⍴⍤0 1) ↑'Ha' 'Hi' 'Hu' 'He' 'Ho'
Ha        
HiHi      
HuHuHu    
HeHeHeHe  
HoHoHoHoHo
```

## Higher dimensional matching

### Using depth

As above, nesting turns arrays into scalars, which allows operators like ``¨`` each to match arbitrary rank arrays together as if they were scalars.

For example, we can create the conjugation table of the finnish verb 'haluta' in the present by matching vectors of strings together

```apl
      ⊢pronouns ← 'Minä' 'Sinä' 'Hän' 'Me' 'Te' 'He'
┌────┬────┬───┬──┬──┬──┐
│Minä│Sinä│Hän│Me│Te│He│
└────┴────┴───┴──┴──┴──┘

      ⊢present ← 'n' 't' 'a' 'mme' 'tte' 'vat'
┌─┬─┬─┬───┬───┬───┐
│n│t│a│mme│tte│vat│
└─┴─┴─┴───┴───┴───┘

      ↑ pronouns ,¨ (⊂' halua') ,¨ present
Minä haluan
Sinä haluat
Hän haluaa 
Me haluamme
Te haluatte
He haluavat
```

Matching matrices together is also straightforward

```apl
      (3 3⍴⎕A) (3 3⍴⍳9)
┌───┬─────┐
│ABC│1 2 3│
│DEF│4 5 6│
│GHI│7 8 9│
└───┴─────┘
      (3 3⍴1 0) (3 3⍴0 1)
┌─────┬─────┐
│1 0 1│0 1 0│
│0 1 0│1 0 1│
│1 0 1│0 1 0│
└─────┴─────┘
      (3 3⍴1 0) (3 3⍴0 1) /¨¨ (3 3⍴⎕A) (3 3⍴⍳9)
┌───────┬───────┐
│┌─┬─┬─┐│┌─┬─┬─┐│
││A│ │C│││ │2│ ││
│├─┼─┼─┤│├─┼─┼─┤│
││ │E│ │││4│ │6││
│├─┼─┼─┤│├─┼─┼─┤│
││G│ │I│││ │8│ ││
│└─┴─┴─┘│└─┴─┴─┘│
└───────┴───────┘
      ,/[1] ↑ (3 3⍴1 0) (3 3⍴0 1) /¨¨ (3 3⍴⎕A) (3 3⍴⍳9)
┌─┬─┬─┐
│A│2│C│
├─┼─┼─┤
│4│E│6│
├─┼─┼─┤
│G│8│I│
└─┴─┴─┘
```

### Using rank

For higher dimensional data, the rank ``⍤`` operator is the simplest way to match arbitrary rank cells from its right and left array arguments. The rank ``⍤`` operator can also be applied multiple times for more complex matching operations. For example, taking the example from the Scalar-vector subsection

```apl
      'Who' 'What' 'When' 'Why' 'How' (,⍤0 1) ' is it?'
┌────┬─┬─┬─┬─┬─┬─┬─┐
│Who │ │i│s│ │i│t│?│
├────┼─┼─┼─┼─┼─┼─┼─┤
│What│ │i│s│ │i│t│?│
├────┼─┼─┼─┼─┼─┼─┼─┤
│When│ │i│s│ │i│t│?│
├────┼─┼─┼─┼─┼─┼─┼─┤
│Why │ │i│s│ │i│t│?│
├────┼─┼─┼─┼─┼─┼─┼─┤
│How │ │i│s│ │i│t│?│
└────┴─┴─┴─┴─┴─┴─┴─┘
```

Instead, we match the 1-cells of the left array argument with the right array argument
```
      ↑('Who' 'What' 'When' 'Why' 'How')
Who 
What
When
Why 
How
      (↑'Who' 'What' 'When' 'Why' 'How') (,⍤1 99) ' is it?'
Who  is it?
What is it?
When is it?
Why  is it?
How  is it?
```

We can also expand this example to more tenses by repeated application of the rank ``⍤`` operator. Separating out the perfect tenses into a different dimension 

```apl
      ↑(↑' is it?' ' was it?') (↑' has it been?' ' had it been?')
 is it?      
 was it?     
             
 has it been?
 had it been?
      (↑'Who' 'What' 'When' 'Why' 'How') ({⍺ ⍵}⍤1 99) ↑(↑' is it?' ' was it?') (↑' has it been?' ' had it been?')
┌────┬─────────────┐
│Who │ is it?      │
│    │ was it?     │
│    │             │
│    │ has it been?│
│    │ had it been?│
├────┼─────────────┤
│What│ is it?      │
│    │ was it?     │
│    │             │
│    │ has it been?│
│    │ had it been?│
├────┼─────────────┤
│When│ is it?      │
│    │ was it?     │
│    │             │
│    │ has it been?│
│    │ had it been?│
├────┼─────────────┤
│Why │ is it?      │
│    │ was it?     │
│    │             │
│    │ has it been?│
│    │ had it been?│
├────┼─────────────┤
│How │ is it?      │
│    │ was it?     │
│    │             │
│    │ has it been?│
│    │ had it been?│
└────┴─────────────┘
```

We can see that each matching has one string from the left array argument and the whole right argument array. Applying ``,⍤1 1`` catenate with the rank operator here will match the aforementioned string with the vectors of the right argument array

```apl
      (↑'Who' 'What' 'When' 'Why' 'How') (,⍤1 1⍤1 99) (↑' is it?' ' was it?' ' will it be?' ' would it be?')
Who  is it?      
Who  was it?     
                 
Who  has it been?
Who  had it been?
                 
                 
What is it?      
What was it?     
                 
What has it been?
What had it been?
                 
                 
When is it?      
When was it?     
                 
When has it been?
When had it been?
                 
                 
Why  is it?      
Why  was it?     
                 
Why  has it been?
Why  had it been?
                 
                 
How  is it?      
How  was it?     
                 
How  has it been?
How  had it been?
```