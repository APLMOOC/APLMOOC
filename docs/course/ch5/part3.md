# Choose your axis!

!!! abstract "This part will cover"
    
    - Bracket-axis notation
    - The axis operator
    - Squad indexing

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


the leading axis is the vertical axis of this matrix. The last axis then is the horizontal axis of this matrix. 

Notice that elements fill an array from the last axis first

```apl
      3 3 3⍴⍳27
 1  2  3
 4  5  6
 7  8  9
        
10 11 12
13 14 15
16 17 18
        
19 20 21
22 23 24
25 26 27

      ⍝ The last axis is filled first
      (3 3 3⍴⍳27)[1;1;]
1 2 3
      ⍝ Then we move one step along the middle axis
      (3 3 3⍴⍳27)[1;2;]
4 5 6
      ⍝ Repeating until we move on one step in the first axis
      (3 3 3⍴⍳27)[1;3;]
7 8 9
      (3 3 3⍴⍳27)[2;1;]
10 11 12
```

To specify the axis along which to reduce, we can use one of the two reduce operators ⌿ and /, corresponding to reducing along the leading axis and last axis respectively.


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

It is visualized in 3-dimensional space as follows. Click and drag on the 3D view to orbit the array, use the scroll wheel to zoom in and out. Move your mouse over a ball to see it highlighted.

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

Move your mouse over a ball to see the three axis slices.

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

Note that there is also a different method of specifying axes for functions which is more general than bracket-axis notation, since it behaves consistently and can be applied to any arbitrary function. The rank ⍤ operator allows for such general axis specification of a function left argument, via an integer right argument which specifies what rank cells to act on. 

An n-cell of a rank r array is a rank n array formed from picking (r-n) indices from that array. Some n-cells of the above array are

```apl
      ⍝ 2-cell of M
      M[1;;]
5 2 4
9 1 4
5 8 4
      ⍝ 1-cell of M
      M[1;1;]
5 2 4
      ⍝ 0-cell of M
      M[1;1;1]
5
```

As an example, we study the action of the rank operator ⍤ on the plus reduce +⌿ function, +⌿⍤n. For n=3, the modified plus reduce function +⌿⍤3 acts on the 3-cells of the array. Since the whole array is of rank 3, there is only one 3-cell which is the array itself. Then, +⌿⍤3 is equivalent to the action of the plus reduce +⌿ function on the whole array, adding up terms along its leading axis.

```apl
      (+⌿⍤3)M
16 16 16
21  5 16
15 20 15
      +⌿M
16 16 16
21  5 16
15 20 15
```

For n=2, +⌿⍤2 acts on the 2-cells of the array. The 2-cells of the array are the cells M[1;;], M[2;;], and M[3;;].

```apl
     M[1;;]
5 2 4
9 1 4
5 8 4
      M[2;;]
9 5 8
5 2 2
3 2 5
      M[3;;]
2  9  4
7  2 10
7 10  6
```

The leading axis of these 2-cells is vertical, hence the plus reduce first +⌿ function will return the sum of the columns of these arrays.

```apl
      +⌿M[1;;]
19 11 12
      +⌿M[2;;]
17 9 15
      +⌿M[3;;]
16 21 20
```

Then, the action of +⌿⍤2 on the original array is equivalent to adding up along its second axis.

```apl
      (+⌿⍤2)M
19 11 12
17  9 15
16 21 20
      +⌿[2]M
19 11 12
17  9 15
16 21 20
```

Similarly, for n=1, the action of (+⌿⍤1) on the array is adding up its 1-cells, which is equivalent to adding along its last axis.

```apl
      M[1;1;]
5 2 4
      M[1;2;]
9 1 4
      M[1;3;]
5 8 4
      +⌿M[1;1;]
11
      +⌿M[1;2;]
14
      +⌿M[1;3;]
17
      (+⌿⍤1)M
11 14 17
22  9 10
15 19 23
      +⌿[3]M
11 14 17
22  9 10
15 19 23
```

An operator form of (partially) indexing a matrix, such as M[1;3;], is given by the squad (”squish quad”) indexing ⌷ operator. 
```apl
      M[1;3;]
5 8 4
      1 3⌷M
5 8 4
```

It is equivalent to bracket indexing, but can be used like any other operator.

```apl
      N ← 3 3 3 ⍴ ⍳27
      N
 1  2  3
 4  5  6
 7  8  9
        
10 11 12
13 14 15
16 17 18
        
19 20 21
22 23 24
25 26 27

      (⊂⍤2)N
┌─────┬────────┬────────┐
│1 2 3│10 11 12│19 20 21│
│4 5 6│13 14 15│22 23 24│
│7 8 9│16 17 18│25 26 27│
└─────┴────────┴────────┘
      1(⌷⍤2)N
 1  2  3
10 11 12
19 20 21

      (⊂⍤1)N
┌────────┬────────┬────────┐
│1 2 3   │4 5 6   │7 8 9   │
├────────┼────────┼────────┤
│10 11 12│13 14 15│16 17 18│
├────────┼────────┼────────┤
│19 20 21│22 23 24│25 26 27│
└────────┴────────┴────────┘
      1(⌷⍤1)N
 1  4  7
10 13 16
19 22 25
```

//Add ,⍤0⍤1