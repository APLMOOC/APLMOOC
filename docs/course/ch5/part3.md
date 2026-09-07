# Choose your axis!

!!! abstract "This part will cover"
    
    - Bracket-axis notation
    - Reduce first, catenate first and table
    - The rank operator
    - Squad indexing

---

<link rel="stylesheet" href="/styles/ch5part2.css">

So far, we’ve only covered reducing along a vector. Vectors, being one-dimensional arrays, have a clear unambiguous axis along which reduction can be done. Higher dimensional arrays do not have this same privilege, the axis along which to reduce must be specified.

Take the following example matrix


```apl
      ⎕ ← M ← ⍉10 10⍴⍳10
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


## Leading and last axis

The leading axis of the matrix is the first axis along which indexing is done. In this case, 


```apl
       M[1;]
1 1 1 1 1 1 1 1 1 1
       M[1 2 3;]
1 1 1 1 1 1 1 1 1 1
2 2 2 2 2 2 2 2 2 2
3 3 3 3 3 3 3 3 3 3
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

## Reduce first and reduce last

To specify the axis along which to reduce, we can use one of the two reduce operators `⌿` and `/`, corresponding to reducing along the leading axis and last axis respectively; equivalently, along columns or rows.


```apl
       +⌿M
55 55 55 55 55 55 55 55 55 55
       +/M
10 20 30 40 50 60 70 80 90 100
```

Since the leading axis is the vertical axis, the plus reduce first `+⌿` function returned the sums of the vertical columns of the matrix; similarly, the plus reduce last `+/` function returned the sums of the horizontal rows of the matrix. For higher dimensional arrays, only reducing along either the leading axis or the last axis is not sufficient, as there are intermediate axes that need to be considered.


## Catenate first

The same pairing of a leading axis and a last axis appears in other functions. The catenate ``,`` function joins two arrays along their last axis, and the catenate first ``⍪`` function joins them along the leading axis, so that for matrices ``,`` places them side by side and ``⍪`` stacks one on top of the other.

```apl
      A←2 3⍴⍳6
      A,A
1 2 3 1 2 3
4 5 6 4 5 6
      A⍪A
1 2 3
4 5 6
1 2 3
4 5 6
```

Monadically, the table ``⍪`` function turns its argument into a matrix, giving each element of a vector its own row. A vector therefore becomes a single column matrix, which the transpose ``⍉`` function turns into a single row matrix.

```apl
      ⍴⍪2*⍳5
5 1
      ⍴⍉⍪2*⍳5
1 5
```

## Bracket-axis notation

There is special syntax that allows for such general axis specification for certain built-in functions. It consists of adding a set of square brackets `[ ]` after the function containing an increasing integer axis number starting from 1, corresponding to the leading axis.

Instead of an explanation using a mystifying array of random numbers that makes the calculations difficult to fully grasp, consider instead the following delicious rendered piece of cheesecake, represented as an APL array.

This cake is arranged along three axis, as is the case with most physical objects, and will serve as a suitable example for our axis-selective operations. Click and drag on the 3D view to orbit the array, use the scroll wheel to zoom in and out. Move your mouse over a section to see it highlighted.

Try to get familiar with the order of the axes.

<div style="aspect-ratio: 5 / 3; width: 100%;">
<iframe title="Interactive demonstration of array axes" class="lazy-iframe" data-src="\js\demos\cake_intro.html" frameborder="0" allowfullscreen style="top:0;left:0;width:100%;height:100%;width:100%;height:100%;"></iframe>
</div>

Using bracket-axis notation, we can now play with our food and reduce along all three axes! Click one of the buttons below to visualize each reduction. Use your knowledge of the axis order to guess the direction of each reduction!

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
        +/[2]Cake
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
        +/[3]Cake
    </button>
</div>

<div style="aspect-ratio: 5/3; width:100%">
<iframe title="Interactive demonstration of array rank" id="cake_rank" class="lazy-iframe" data-src="\js\demos\cake_rank.html" frameborder="0" allowfullscreen style="top:0;left:0;width:100%;height:100%"></iframe>
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

## Rank operator

Note that there is also a different method of specifying axes for functions which is more general than bracket-axis notation, since it behaves consistently and can be applied to any arbitrary function. The rank ``⍤`` operator allows for such general axis specification of a function left argument, via an integer right argument which specifies what rank cells to act on. 

An ``n``-cell of a rank ``r`` array is a rank n array formed from picking ``r-n`` indices from that array, equivalently, they're formed from the last ``n`` axes of the array. Try to use your knowledge of the order of the axes to guess what the cells of the Cake array would be, press the buttons below to verify your understanding.

<div style="display: flex; justify-content: center; gap: 15px; margin: 20px 0;">
    <button onclick="document.getElementById('cake_cell').contentWindow.nCell=0" 
            style="flex: 1; padding: 8px 16px; font-size: 14px; font-family: 'APL385', 'DejaVu Sans Mono', monospace;
                   background: #f0f0f0;
                   border: 1px solid #ccc; border-top-color: #ddd; border-left-color: #ddd;
                   border-radius: 3px; color: #333; cursor: pointer;
                   box-shadow: inset 0 1px 0 rgba(255,255,255,0.5), 0 1px 2px rgba(0,0,0,0.1);"
            onmousedown="this.style.background='#e0e0e0'; this.style.boxShadow='inset 0 1px 3px rgba(0,0,0,0.2)';"
            onmouseup="this.style.background='#f0f0f0'; this.style.boxShadow='inset 0 1px 0 rgba(255,255,255,0.5), 0 1px 2px rgba(0,0,0,0.1)';"
            onmouseover="this.style.background='#f5f5f5';"
            onmouseout="this.style.background='#f0f0f0';">
        0-cells
    </button>
    
    <button onclick="document.getElementById('cake_cell').contentWindow.nCell=1" 
            style="flex: 1; padding: 8px 16px; font-size: 14px; font-family: 'APL385', 'DejaVu Sans Mono', monospace;
                   background: #f0f0f0;
                   border: 1px solid #ccc; border-top-color: #ddd; border-left-color: #ddd;
                   border-radius: 3px; color: #333; cursor: pointer;
                   box-shadow: inset 0 1px 0 rgba(255,255,255,0.5), 0 1px 2px rgba(0,0,0,0.1);"
            onmousedown="this.style.background='#e0e0e0'; this.style.boxShadow='inset 0 1px 3px rgba(0,0,0,0.2)';"
            onmouseup="this.style.background='#f0f0f0'; this.style.boxShadow='inset 0 1px 0 rgba(255,255,255,0.5), 0 1px 2px rgba(0,0,0,0.1)';"
            onmouseover="this.style.background='#f5f5f5';"
            onmouseout="this.style.background='#f0f0f0';">
        1-cells
    </button>
    
    <button onclick="document.getElementById('cake_cell').contentWindow.nCell=2" 
            style="flex: 1; padding: 8px 16px; font-size: 14px; font-family: 'APL385', 'DejaVu Sans Mono', monospace;
                   background: #f0f0f0;
                   border: 1px solid #ccc; border-top-color: #ddd; border-left-color: #ddd;
                   border-radius: 3px; color: #333; cursor: pointer;
                   box-shadow: inset 0 1px 0 rgba(255,255,255,0.5), 0 1px 2px rgba(0,0,0,0.1);"
            onmousedown="this.style.background='#e0e0e0'; this.style.boxShadow='inset 0 1px 3px rgba(0,0,0,0.2)';"
            onmouseup="this.style.background='#f0f0f0'; this.style.boxShadow='inset 0 1px 0 rgba(255,255,255,0.5), 0 1px 2px rgba(0,0,0,0.1)';"
            onmouseover="this.style.background='#f5f5f5';"
            onmouseout="this.style.background='#f0f0f0';">
        2-cells
    </button>
    
    <button onclick="document.getElementById('cake_cell').contentWindow.nCell=3" 
            style="flex: 1; padding: 8px 16px; font-size: 14px; font-family: 'APL385', 'DejaVu Sans Mono', monospace;
                   background: #f0f0f0;
                   border: 1px solid #ccc; border-top-color: #ddd; border-left-color: #ddd;
                   border-radius: 3px; color: #333; cursor: pointer;
                   box-shadow: inset 0 1px 0 rgba(255,255,255,0.5), 0 1px 2px rgba(0,0,0,0.1);"
            onmousedown="this.style.background='#e0e0e0'; this.style.boxShadow='inset 0 1px 3px rgba(0,0,0,0.2)';"
            onmouseup="this.style.background='#f0f0f0'; this.style.boxShadow='inset 0 1px 0 rgba(255,255,255,0.5), 0 1px 2px rgba(0,0,0,0.1)';"
            onmouseover="this.style.background='#f5f5f5';"
            onmouseout="this.style.background='#f0f0f0';">
        3-cells
    </button>
</div>

<div style="aspect-ratio: 5/3; width:100%">
<iframe title="Interactive demonstration of array cells" id="cake_cell" class="lazy-iframe" data-src="\js\demos\cake_cell.html" frameborder="0" allowfullscreen style="top:0;left:0;width:100%;height:100%"></iframe>
</div>



As an example, we study the action of the rank operator ``⍤`` on the plus reduce ``+⌿`` function, ``+⌿⍤n``. 

For ``n=3``, the modified plus reduce function ``+⌿⍤3`` acts on the 3-cells of the array. Since the whole array is of rank 3, there is only one 3-cell which is the array itself. Then, ``+⌿⍤3`` is equivalent to the action of the plus reduce ``+⌿`` function on the whole array, adding up terms along its leading axis. 

For ``n=2``, ``+⌿⍤2`` acts on the 2-cells of the array. The 2-cells of the array are the cells ``N[1;;]``, ``N[2;;]``, and ``N[3;;]``. The leading axis of these 2-cells is vertical, hence the plus reduce first ``+⌿`` function will return the sum of the columns of these arrays.

Similarly, for n=1, the action of ``+⌿⍤1`` on the array is adding up its 1-cells, which is equivalent to adding along its last axis.

## Squad indexing

An operator form of (partially) indexing a matrix, such as ``N[1;3;]``, is given by the squad (“squish quad”) indexing ``⌷`` function. It is equivalent to bracket indexing, but can be used like any other function.

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
      1⌷N
1 2 3
4 5 6
7 8 9

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

## Dyadic rank

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