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

