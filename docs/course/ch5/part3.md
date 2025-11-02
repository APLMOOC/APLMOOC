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

To specify the axis along which to reduce, we can use one of the two reduce operators `⌿` and `/`, corresponding to reducing along the leading axis and last axis respectively; equivalently, along columns or rows.


```apl
       +⌿M
55 55 55 55 55 55 55 55 55 55
       +/M
10 20 30 40 50 60 70 80 90 100
```

Since the leading axis is the vertical axis, the plus reduce first `+⌿` function returned the sums of the vertical columns of the matrix; similarly, the plus reduce last `+/` function returned the sums of the horizontal rows of the matrix. For higher dimensional arrays, only reducing along either the leading axis or the last axis is not sufficient, as there are intermediate axes that need to be considered.

There is special syntax that allows for such general axis specification for certain built-in functions. It consists of adding a set of square brackets `[ ]` after the function containing an increasing integer axis number starting from 1, corresponding to the leading axis.

Instead of an explanation using a mystifying array of random numbers that makes the calculations difficult to fully grasp, consider instead the following delicious rendered piece of cheesecake, represented as an APL array.

This cake is arranged along three axis, as is the case with most physical objects, and will serve as a suitable example for our axis-selective operations. Click and drag on the 3D view to orbit the array, use the scroll wheel to zoom in and out. Move your mouse over a section to see it highlighted.

<div style="aspect-ratio: 5 / 3; width: 100%;">
<iframe class="lazy-iframe" data-src="\js\demos\cake_intro.html" frameborder="0" allowfullscreen style="top:0;left:0;width:100%;height:100%;width:100%;height:100%;"></iframe>
</div>

Using bracket-axis notation, we can now play with our food and reduce along all three axes! Click one of the buttons below to visualize each reduction.

<div style="display: flex; justify-content: center; gap: 15px; margin: 20px 0;">
    <button onclick="document.getElementById('cake_rank').contentWindow.reductionAxis='x'" 
            style="flex: 1; padding: 8px 16px; font-size: 14px; font-family: 'APL385', 'DejaVu Sans Mono', monospace;
                   background: #f0f0f0;
                   border: 1px solid #ccc; border-top-color: #ddd; border-left-color: #ddd;
                   border-radius: 3px; color: #333; cursor: pointer;
                   box-shadow: inset 0 1px 0 rgba(255,255,255,0.5), 0 1px 2px rgba(0,0,0,0.1);"
            onmousedown="this.style.background='#e0e0e0'; this.style.boxShadow='inset 0 1px 3px rgba(0,0,0,0.2)';"
            onmouseup="this.style.background='#f0f0f0'; this.style.boxShadow='inset 0 1px 0 rgba(255,255,255,0.5), 0 1px 2px rgba(0,0,0,0.1)';"
            onmouseover="this.style.background='#f5f5f5';"
            onmouseout="this.style.background='#f0f0f0';">
        +/[1]Cake
    </button>
    
    <button onclick="document.getElementById('cake_rank').contentWindow.reductionAxis='y'" 
            style="flex: 1; padding: 8px 16px; font-size: 14px; font-family: 'APL385', 'DejaVu Sans Mono', monospace;
                   background: #f0f0f0;
                   border: 1px solid #ccc; border-top-color: #ddd; border-left-color: #ddd;
                   border-radius: 3px; color: #333; cursor: pointer;
                   box-shadow: inset 0 1px 0 rgba(255,255,255,0.5), 0 1px 2px rgba(0,0,0,0.1);"
            onmousedown="this.style.background='#e0e0e0'; this.style.boxShadow='inset 0 1px 3px rgba(0,0,0,0.2)';"
            onmouseup="this.style.background='#f0f0f0'; this.style.boxShadow='inset 0 1px 0 rgba(255,255,255,0.5), 0 1px 2px rgba(0,0,0,0.1)';"
            onmouseover="this.style.background='#f5f5f5';"
            onmouseout="this.style.background='#f0f0f0';">
        +/[2]Cake
    </button>
    
    <button onclick="document.getElementById('cake_rank').contentWindow.reductionAxis='z'" 
            style="flex: 1; padding: 8px 16px; font-size: 14px; font-family: 'APL385', 'DejaVu Sans Mono', monospace;
                   background: #f0f0f0;
                   border: 1px solid #ccc; border-top-color: #ddd; border-left-color: #ddd;
                   border-radius: 3px; color: #333; cursor: pointer;
                   box-shadow: inset 0 1px 0 rgba(255,255,255,0.5), 0 1px 2px rgba(0,0,0,0.1);"
            onmousedown="this.style.background='#e0e0e0'; this.style.boxShadow='inset 0 1px 3px rgba(0,0,0,0.2)';"
            onmouseup="this.style.background='#f0f0f0'; this.style.boxShadow='inset 0 1px 0 rgba(255,255,255,0.5), 0 1px 2px rgba(0,0,0,0.1)';"
            onmouseover="this.style.background='#f5f5f5';"
            onmouseout="this.style.background='#f0f0f0';">
        +/[3]Cake
    </button>
</div>

<div style="aspect-ratio: 5/3; width:100%">
<iframe id="cake_rank" class="lazy-iframe" data-src="\js\demos\cake_rank.html" frameborder="0" allowfullscreen style="top:0;left:0;width:100%;height:100%"></iframe>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const lazyIframes = document.querySelectorAll('.lazy-iframe');
    const loadedIframes = new Set(); // Track loaded iframes
    
    if (!('IntersectionObserver' in window)) {
        lazyIframes.forEach(iframe => {
            iframe.src = iframe.dataset.src;
            loadedIframes.add(iframe);
        });
        return;
    }
    
    const iframeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const iframe = entry.target;
            
            if (entry.isIntersecting) {
                if (!loadedIframes.has(iframe)) {
                    iframe.src = iframe.dataset.src;
                    loadedIframes.add(iframe);
                    iframe.classList.remove('lazy-iframe');
                }
            } else {
                if (loadedIframes.has(iframe)) {
                    if (iframe.src && iframe.src !== 'about:blank') {
                        iframe.dataset.src = iframe.src;
                    }
                    iframe.src = 'about:blank';
                    loadedIframes.delete(iframe);
                    iframe.classList.add('lazy-iframe');
                }
            }
        });
    }, {
        rootMargin: '200px 0px',
        threshold: 0.01
    });
    
    lazyIframes.forEach(iframe => {
        iframeObserver.observe(iframe);
    });
});
</script>

Note that there is also a different method of specifying axes for functions which is more general than bracket-axis notation, since it behaves consistently and can be applied to any arbitrary function. The rank ``⍤`` operator allows for such general axis specification of a function left argument, via an integer right argument which specifies what rank cells to act on. 

An ``n``-cell of a rank ``r`` array is a rank n array formed from picking ``r-n`` indices from that array. Click the buttons below to view the ``n``-cells of the above Cake array.

As an example, we study the action of the rank operator ``⍤`` on the plus reduce ``+⌿`` function, ``+⌿⍤n``. For n=3, the modified plus reduce function ``+⌿⍤3`` acts on the 3-cells of the array. Since the whole array is of rank 3, there is only one 3-cell which is the array itself. Then, ``+⌿⍤3`` is equivalent to the action of the plus reduce ``+⌿`` function on the whole array, adding up terms along its leading axis.

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

For n=2, ``+⌿⍤2`` acts on the 2-cells of the array. The 2-cells of the array are the cells ``M[1;;]``, ``M[2;;]``, and ``M[3;;]``.

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

The leading axis of these 2-cells is vertical, hence the plus reduce first ``+⌿`` function will return the sum of the columns of these arrays.

```apl
      +⌿M[1;;]
19 11 12
      +⌿M[2;;]
17 9 15
      +⌿M[3;;]
16 21 20

      (+⌿⍤2)M
19 11 12
17  9 15
16 21 20

      +⌿[2]M
19 11 12
17  9 15
16 21 20
```

Similarly, for n=1, the action of ``+⌿⍤1`` on the array is adding up its 1-cells, which is equivalent to adding along its last axis.

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

An operator form of (partially) indexing a matrix, such as ``M[1;3;]``, is given by the squad (”squish quad”) indexing ``⌷`` operator. 
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

It is also possible to pair up cells of different rank using the rank operator by specifying an integer array right argument.

```apl
      3 3 ⍴ ⎕A
ABC
DEF
GHI

      3 3 ⍴ ⍳9
1 2 3
4 5 6
7 8 9

      (3 3 ⍴ ⎕A) (,⍤1) (3 3 ⍴ ⍳9)
ABC 1 2 3
DEF 4 5 6
GHI 7 8 9

      (3 3 ⍴ ⎕A) (,⍤1 2) (3 3 ⍴ ⍳9)
A 1 2 3
B 4 5 6
C 7 8 9
       
D 1 2 3
E 4 5 6
F 7 8 9
       
G 1 2 3
H 4 5 6
I 7 8 9

      (3 3 ⍴ ⎕A) (,⍤2 1) (3 3 ⍴ ⍳9)
ABC 1
DEF 2
GHI 3
     
ABC 4
DEF 5
GHI 6
     
ABC 7
DEF 8
GHI 9
```