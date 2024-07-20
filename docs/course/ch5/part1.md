# Choose your axis!

!!! abstract "This part will cover"
    
    - The axis operator
    - Operations on different axes
        - Reverse
        - Rotate
        - Catenate
        - Replicate
        - Take
        - Drop

---

So far, we’ve only covered reducing along a vector. Vectors, being one-dimensional arrays, have a clear unambiguous axis along which reduction can be done. Higher dimensional arrays do not have this same privilege, the axis along which to reduce must be specified.

Take the following example matrix

```apl
      ⍉10 10⍴⍳10
 1  1  1  1  1  1  1  1  1  1
 2  2  2  2  2  2  2  2  2  2
 3  3  3  3  3  3  3  3  3  3
 4  4  4  4  4  4  4  4  4  4
 5  5  5  5  5  5  5  5  5  5
 6  6  6  6  6  6  6  6  6  6
 7  7  7  7  7  7  7  7  7  7
 8  8  8  8  8  8  8  8  8  8
 9  9  9  9  9  9  9  9  9  9
10 10 10 10 10 10 10 10 10 10
```

The leading axis of the matrix is the first axis along which indexing is done. In this case, 

```apl
       M[1;]
 1  1  1  1  1  1  1  1  1  1
       M[1 2 3;]
 1  1  1  1  1  1  1  1  1  1
 2  2  2  2  2  2  2  2  2  2
 3  3  3  3  3  3  3  3  3  3
 ```

the leading axis is the vertical axis of this matrix. The last axis then is the horizontal axis of this matrix. To specify the axis along which to reduce, we can use one of the two reduce operators ⌿ and /, corresponding to reducing along the leading axis and last axis respectively.

```apl
       +⌿M
55 55 55 55 55 55 55 55 55 55
       +/M
10 20 30 40 50 60 70 80 90 100
```

Since the leading axis is the vertical axis, the plus reduce first +⌿ function returned the sums of the vertical columns of the matrix; similarly, the plus reduce last +/ function returned the sums of the horizontal rows of the matrix. For higher dimensional arrays, only reducing along either the leading axis or the last axis is not sufficient, as there are intermediate axes that need to be considered.

There is special syntax that allows for such general axis specification for certain built-in functions. It consists of adding a set of square brackets [ ] after the function containing an increasing integer axis number starting from 1, corresponding to the leading axis.

Consider the following random 3-dimensional array

```apl
      ?3 3 3⍴10
5 2 4
9 1 4
5 8 4

9 5 8
5 2 2
3 2 5

2 9 4
7 2 10
7 10 6
```

It is visualized in 3-dimensional space as follows. Click and drag on the 3D view to orbit the array, use the scroll wheel to zoom in and out.

<div style="aspect-ratio: 1 / 1; width: 100%;">
    <iframe  src="\js\demos\rank_intro.html" frameborder="0" allowfullscreen style="top:0;left:0;width:100%;height:100%;"></iframe>
</div>

The three axes of the array can be seen, with the red axis representing the leading axis, the green axis representing the intermediate axis, and the blue axis representing the last axis.

```apl
      M[1;;]
5 2 4
9 1 4
5 8 4
      M[;1;]
5 2 4
9 5 8
2 9 4
      M[;;1]
5 9 5
9 5 3
2 7 7
```

<div style="aspect-ratio: 1 / 1; width: 100%;">
    <iframe  src="\js\demos\rank_axes.html" frameborder="0" allowfullscreen style="top:0;left:0;width:100%;height:100%;"></iframe>
</div>

Then, using the bracket-axis notation, is it possible to obtain all 3 possible reductions.
```apl
      (+/[1])M
16 16 16
21  5 16
15 20 15
      (+/[2])M
19 11 12
17  9 15
16 21 20
      (+/[3])M
11 14 17
22  9 10
15 19 23
```

<div style="aspect-ratio: 1 / 1; width: 100%;">
    <iframe  src="\js\demos\rank_anim3.html" frameborder="0" allowfullscreen style="top:0;left:0;width:100%;height:100%;"></iframe>
</div>

<div style="aspect-ratio: 1 / 1; width: 100%;">
    <iframe  src="\js\demos\rank_anim2.html" frameborder="0" allowfullscreen style="top:0;left:0;width:100%;height:100%;"></iframe>
</div>

<div style="aspect-ratio: 1 / 1; width: 100%;">
    <iframe  src="\js\demos\rank_anim1.html" frameborder="0" allowfullscreen style="top:0;left:0;width:100%;height:100%;"></iframe>
</div>

