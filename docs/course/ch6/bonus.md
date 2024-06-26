# Bonus content: Minesweeper in APL and Python

!!! tip "This part is optional"

    This part is considered to be bonus content.
    It contains some more advanced topics that are not covered in the main course.
    It can also give some examples of functions and topics that are introuced later in the course.
    There are no exercises related to this content.

    Feel free to skim or skip this section for now, and return to it later!

---

One of the central advantages of APL over other programming languages is that it provides a powerful notation for reasoning about higher dimensional data. When writing code in other languages, there are times where using this notation would simplify code significantly, and luckily, APL code can be used in Python programs, and vice versa, using the Py'n'APL interface. 

In this section, we will write a simple minesweeper game in APL, using Py'n'APL to connect to a user interface written in Python.

The Py'n'APL interface can be downloaded from the Dyalog repository. To start, create a python file inside the same directory as `pynapl`, and paste the following example code.

```python
from pynapl import APL
apl = APL.APL()

print(apl.eval("3 3⍴∆", 1, 2, 3, 4, 5, 6, 7, 8, 9))

apl.eval("a ← ∆", 57)
print(apl.eval("a÷3"))
```

The output should be `[[1, 2, 3], [4, 5, 6], [7, 8, 9]]` and `[19]`.

The above code starts and connects to a Dyalog session. The session can then be sent commands using the `eval` function. Extra arguments to the eval function are substituted for `∆` in the eval expression; above, the arguments `1, 2, 3, 4, 5, 6, 7, 8, 9` are passed as an array replacing `∆` in `3 3⍴∆`.

The Dyalog session should be thought of like any other session, with its own variables.

```python
from pynapl import APL
apl = APL.APL()

apl.eval("a ← ⍳3 3")
print(apl.eval("a"))
```

The result should be `[[[1, 1], [1, 2], [1, 3]], [[2, 1], [2, 2], [2, 3]], [[3, 1], [3, 2], [3, 3]]]`.

APL functions can be defined using the `apl.fn` function which, if assigned in Python, can be used like any other Python function.

```python
from pynapl import APL
apl = APL.APL()

average = apl.fn("+/÷≢")
print(average([1,2,3,4,5]))
```

The result is 3.

To define functions in APL, `fix` is used rather than than the `eval`.

```python
from pynapl import APL
apl = APL.APL()

apl.fix("average ← +/÷≢")

print(apl.eval("average 1 2 3 4 5"))
```

The result is 3.

Minesweeper is a logic game, where the goal is to find out the location of all hidden 'mines' on a board. The size of the board and number of mines vary depending on difficulty; here we will implement a rectangular board of width 30 and height 16, with 99 mines. 

When the user left-clicks on a tile that does not contain a mine on the board, that tile is uncovered. Uncovered tiles display the total number of mines that are in adjacent tiles (including diagonals!). If the tile has no adjacent mines, then it reveals the adjacent tiles automatically. If the user left-clicks on a tile containing a mine, the game is lost and the mines are detonated.
If the user right-clicks on a tile, that tile is flagged, representing where the user believes a mine is. 

The game is won when all hidden mine tiles are flagged, and all other tiles are uncovered.

We recommend the reader to play at-least one game of minesweeper, in order to get familiar with the rules we will implement.

We first need to create the board, which will be represented with a 2D matrix of values, 1 being mine and 0 a blank tile. 

```apl
       board ← 16 30 ⍴ 0
```

Random unique positions for the mines can be obtained using deal ? dyadic function.

```apl
       99 ? 16×30
215 385 164 68 310 453 255 115 28 234 239 456 243 39 302 447 263 383 94 236 10 337 35 98 432 127 403 431 408 237 356 330 2
      30 201 351 438 130 377 434 71 258 34 13 312 55 62 95 137 382 387 154 3 66 427 12 257 30 70 113 304 283 50 180 207 22
      7 77 333 409 53 369 473 428 266 100 24 297 323 424 309 276 160 170 110 460 459 184 376 364 268 256 328 305 174 196 6
      0 359 350 396 6
```

it is possible to see which 2D positions these numbers encode using the encode `⊤` function

```apl
       (16 30 ⊤ (99 ? 16×30))
 8 10  8 13 8  4 11 14 0 10  4  1 11  9  5  6 9 12 10  6 11 3 14 14 2 12  5 1 10  5 15 14 5 11  5 2  0 14  0  2  9 12 11 1
17 20 12 15 7 27  6  0 8 24 19 22 27 12 29 23 7 18 11 11 12 2 29 18 3  3 12 9  5 20 17  8 1 16 27 0 15  3 24 19 19 26  0  
       4 13  7  7  4  1 6 10 5  3 10 12  9 14 14  3 15  7 2 13 0  3 3 6 10 8  4 15  2 10 5 5 4 13 11  8 15 15 13 6 11 1  4 
       2 13 10 20 15 14 7 13 3 23 29  4 25  7 24 28 22 17 8  4 7 20 1 6 17 3 20  1 12  7 9 7 1 21  8 13 11 12 27 1  1 5 14 
       2  7 4  0  9 7  6  6 9  3  9 15 11
       9 27 6 23 20 6 21 12 1 10 10  8 28
       (16 30 ⊤ (99 ? 16×30))[;1]
7 27
```

Assigning these positions to 1 on the board by (un)raveling the board into a vector, then using the `@` at operator

```apl
      positions ← 99 ? 16×30
      board ← ,board
      board
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 
      0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 
      0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 
      0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 
      0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 
      0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 
      0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 
      0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 
      0 0 0 0 0 0 0 0 0 0 0 0 0
      (1 @ positions) board
0 0 0 0 0 1 0 0 0 0 0 1 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 1 0 0 0 1 0 0 0 0 1 0 1 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 
      0 0 0 1 0 0 0 0 0 1 1 0 0 0 0 0 1 0 1 0 0 0 0 0 0 0 1 0 1 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 
      1 0 0 0 0 1 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 0 0 0 0 0 1 1 0 1 0 0 0 1 0 0 1 0 0 0 0 0 0 1 0 0 0 0 0 0 1 0 0 0 
      0 0 0 1 0 0 0 0 1 1 1 1 0 0 0 1 0 0 0 0 1 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 1 0 1 0 0 1 0 0 0 0 0 0 1 0 0 
      0 1 1 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0 0 1 0 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 
      0 0 0 0 1 0 1 0 0 0 0 0 0 0 0 0 1 0 1 1 0 0 0 0 0 1 0 0 1 0 0 0 0 0 1 0 1 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 
      0 1 0 1 1 0 1 0 0 0 0 0 1 0 0 0 1 0 1 0 0 0 1 0 0 0 0 1 0 1 0 0 0 1 0 1 0 0 0 0 0 0 0 0 1 0 0 0 1 1 0 1 0 0 0 1 0 0 
      0 0 0 0 0 0 0 0 1 0 1 0 0 1 1 0 0 1 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1 0 1 1 0 0 0 1 
      1 0 1 0 0 0 1 0 1 1 0 0 1
      board ← 16 30 ⍴ board
```

Putting this operation in a single Python function

```python
from pynapl import APL
apl = APL.APL()

def new_board():
	apl.eval("board ←  (16×30) ⍴ 0")
	apl.eval("board ← (1 @ (99 ? 16×30)) board")
	apl.eval("board ← 16 30 ⍴ board")

new_board();
print(apl.eval("board"));
# The output is 
#[[0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], 
#[1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1], 
#[0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
#[0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0], 
#[0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
#[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], 
#[0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
#[0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0], 
#[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1], 
#[0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0], 
#[1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], 
#[0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0], 
#[0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0], 
#[0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0], 
#[0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0], 
#[0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0]]
```

Next, we need to obtain the number of adjacent mines for every tile on the board. Consider a 1-dimensional board first, for simplicity.

```apl
       board ← 1 -⍨ ? 7 ⍴ 2
0 1 1 1 0 1 1
```

What is needed is a function that takes length 3 sections of the above board, and sums them up to give a new board of values.

```apl
       adjacency ← (0+1) (0+1+1) (1+1+1) (1+1+0) (1+0+1) (0+1+1) (1+1)
```

This can be partly obtained using the / windowed reduction operator applied to + plus and a left argument of 3.

```apl
       3,/board
 0 1 1  1 1 1  1 1 0  1 0 1  0 1 1
       3+/board
 2 3 2 2 2
```

Notice that the windowed reduction operator did not include the values at the left and right, `(0+1)` and `(1+1)`, edges of the board. This can be remedied by padding the board with zeroes on either side, the @ function can be used to do this.

```apl
      board
0 1 1 1 0 1 1
      ⍴ board
7
      ⍳ ⍴ board
1 2 3 4 5 6 7
      1 + ⍳ ⍴ board
2 3 4 5 6 7 8

      ((⍴ board)+2)⍴0
0 0 0 0 0 0 0 0 0

      (board@(1 + ⍳ ⍴ board))((⍴ board)+2)⍴0
0 0 1 1 1 0 1 1 0

      3+/(board@(1 + ⍳ ⍴ board))((⍴ board)+2)⍴0
1 2 3 2 2 2 2
```

The advantage of using the @ function is that it can be generalised to matrices, too.

```apl
      board ← 5 5 ⍴ 1
1 1 1 1 1
1 1 1 1 1
1 1 1 1 1
1 1 1 1 1
1 1 1 1 1
      1 + ⍳ ⍴ board
 2 2  2 3  2 4  2 5  2 6 
 3 2  3 3  3 4  3 5  3 6 
 4 2  4 3  4 4  4 5  4 6 
 5 2  5 3  5 4  5 5  5 6 
 6 2  6 3  6 4  6 5  6 6
      ((⍴ board)+2)⍴0
0 0 0 0 0 0 0
0 0 0 0 0 0 0
0 0 0 0 0 0 0
0 0 0 0 0 0 0
0 0 0 0 0 0 0
0 0 0 0 0 0 0
0 0 0 0 0 0 0
      (board@(1 + ⍳ ⍴ board))((⍴ board)+2)⍴0
0 0 0 0 0 0 0
0 1 1 1 1 1 0
0 1 1 1 1 1 0
0 1 1 1 1 1 0
0 1 1 1 1 1 0
0 1 1 1 1 1 0
0 0 0 0 0 0 0
```

The 2-dimensional generalisation of the +/ windowed reduce function is the stencil `⌺` operator. The stencil operator takes in a right argument vector which specifies the size of the window, similarly to the left argument to the windowed reduce function, and a left argument which specifies the function to be applied to the window.

```apl
       board ← 7 ⍴ 1
       ({⊂⍵}⌺3)board
┌─────┬─────┬─────┬─────┬─────┬─────┬─────┐
│0 1 1│1 1 1│1 1 1│1 1 1│1 1 1│1 1 1│1 1 0│
└─────┴─────┴─────┴─────┴─────┴─────┴─────┘
```

Notice that it includes the edges, unlike the windowed reduce function.

```apl
      board ← 5 5 ⍴ 1
      ({⊂⍵}⌺3 3)board
┌─────┬─────┬─────┬─────┬─────┐
│0 0 0│0 0 0│0 0 0│0 0 0│0 0 0│
│0 1 1│1 1 1│1 1 1│1 1 1│1 1 0│
│0 1 1│1 1 1│1 1 1│1 1 1│1 1 0│
├─────┼─────┼─────┼─────┼─────┤
│0 1 1│1 1 1│1 1 1│1 1 1│1 1 0│
│0 1 1│1 1 1│1 1 1│1 1 1│1 1 0│
│0 1 1│1 1 1│1 1 1│1 1 1│1 1 0│
├─────┼─────┼─────┼─────┼─────┤
│0 1 1│1 1 1│1 1 1│1 1 1│1 1 0│
│0 1 1│1 1 1│1 1 1│1 1 1│1 1 0│
│0 1 1│1 1 1│1 1 1│1 1 1│1 1 0│
├─────┼─────┼─────┼─────┼─────┤
│0 1 1│1 1 1│1 1 1│1 1 1│1 1 0│
│0 1 1│1 1 1│1 1 1│1 1 1│1 1 0│
│0 1 1│1 1 1│1 1 1│1 1 1│1 1 0│
├─────┼─────┼─────┼─────┼─────┤
│0 1 1│1 1 1│1 1 1│1 1 1│1 1 0│
│0 1 1│1 1 1│1 1 1│1 1 1│1 1 0│
│0 0 0│0 0 0│0 0 0│0 0 0│0 0 0│
└─────┴─────┴─────┴─────┴─────┘
      board ← 1 -⍨ ? 5 5 ⍴ 2
      board
0 0 0 0 0
1 1 1 1 1
0 0 1 1 0
1 0 0 1 0
0 1 0 1 0
      ({+/,⍵}⌺3 3)board
2 3 3 3 2
2 4 5 5 3
3 5 6 6 4
2 3 5 4 3
2 2 3 2 2
```

Putting this in a python function

```python
def calculate_adjacency():
  apl.eval("adjacency ← ({+/,⍵}⌺3 3)board")
```

The last thing that is needed is a function to decide what happens when a tile is clicked. The first thing to implement is the uncovering of tiles. Whenever a tile that does not contain a mine is left-clicked, it is uncovered, and any tiles with no adjacent mines automatically uncover the adjacent tiles. We will use `¯1` to denote uncovered tiles on the board. For checking if the tile is a mine, we write a simple `is_mine` function that can be called from the Python code

```apl
      is_mine ← {(⍵⌷board)=1}
      board ← 1 -⍨ ? 5 5 ⍴ 2
      board
0 1 1 1 0
1 0 0 1 0
0 1 0 0 1
1 1 1 0 1
0 1 0 0 0
      is_mine ⊂(1 2)
1
```

We will write the tile uncovering algorithm recursively. If the tile clicked does not have any adjacent mines, then the tiles adjacent to that tile are uncovered too, forming a list of tile positions to be uncovered in the process. This is the usual flood-fill algorithm. 

The following function makes sure the indices we are checking are not beyond the bounds of the board matrix. 

```apl
      in_bounds ← {∧/∊(⍵<⍴board)(⍵>(0 0))}
```

For example, using the clearly invalid index `¯1 3`, it is less than the maximum index `⍴board`, but not greater than `(0 0)`.

```apl
       ⍴board
5 5

       ¯1 3 < ⍴board
1 1
       0 0 < ¯1 3
0 1

       ∊ (¯1 3 < ⍴board)(0 0 < ¯1 3)
1 1 0 1

       ∧/∊ (¯1 3 < ⍴board)(0 0 < ¯1 3)
0
       in_bounds ¯1 3
0
```

```apl
      directions ← (1 0)(0 1)(¯1 0)(0 ¯1)(1 1)(¯1 ¯1)(1 ¯1)(¯1 1)
      uncover ← {(in_bounds ⍵)=0: ⍬ ⋄ ⍵⌷adjacency=0: (⊂⍵), uncover¨((⊂⍵)+¨directions) ⋄ ⍵}
      
      board ← (0@(1 + ⍳ 3 3))(5 5)⍴1
      board
1 1 1 1 1
1 0 0 0 1
1 0 0 0 1
1 0 0 0 1
1 1 1 1 1
      adjacency ← ({+/,⍵}⌺3 3)board 
      adjacency
3 4 3 4 3
4 5 3 5 4
3 3 0 3 3
4 5 3 5 4
3 4 3 4 3
      uncover 3 3
┌───┬───┬───┬───┬───┬───┬───┬───┬───┐
│3 3│4 3│3 4│2 3│3 2│4 4│2 2│4 2│2 4│
└───┴───┴───┴───┴───┴───┴───┴───┴───┘
```

The uncover function constructs a list of indices to mark as uncovered. The function first checks if the index is within the right bounds, if not it returns an empty array. If it is in the right bounds and it has no adjacent mines, then it returns the index catenated to the result of uncovering the tiles in all directions (since a tile with no adjacent mines needs to uncover all adjacent tiles), otherwise it just returns the index of the tile. Notice how the enclose functions is used here to apply `+` between `⍵` and every direction.

Finally, the `@` at operator can be used to replace the board indices to be uncovered with `¯1`.

```apl
      (¯1@(uncover 3 3))board
1  1  1  1 1
1 ¯1 ¯1 ¯1 1
1 ¯1 ¯1 ¯1 1
1 ¯1 ¯1 ¯1 1
1  1  1  1 1
```

Putting these functions in the Python code

```python
from pynapl import APL
apl = APL.APL()

def new_board():
	apl.eval("board ←  (16×30) ⍴ 0")
	apl.eval("board ← (1 @ (99 ? 16×30)) board")
	apl.eval("board ← 16 30 ⍴ board")

def calculate_adjacency():
  apl.eval("adjacency ← ({+/,⍵}⌺3 3)board")

apl.fix("in_bounds ← {(+/⍵<⍴board)∧(∧/⍵>(0 0))>0}")
apl.eval("directions ← (1 0)(0 1)(¯1 0)(0 ¯1)(1 1)(¯1 ¯1)(1 ¯1)(¯1 1)")
apl.fix("uncover ← {(in_bounds ⍵)=0: ⍬ ⋄ ⍵⌷adjacency=0: (⊂⍵), uncover¨((⊂⍵)+¨directions) ⋄ ⍵}")
is_mine = apl.fn("{(⍵⌷board)=1}")

def uncover(x, y):
  if(is_mine([x,y])):
      # Lose
      return
  apl.eval("board ← (¯1@(uncover ∆))board", x, y)
  
apl.eval("board ← (0@(1 + ⍳ 3 3))(5 5)⍴1")
calculate_adjacency();
uncover(3,3);
print(apl.eval("board"))

```

The result is `[[1, 1, 1, 1, 1], [1, -1, -1, -1, 1], [1, -1, -1, -1, 1], [1, -1, -1, -1, 1], [1, 1, 1, 1, 1]]`, as is expected.

The last piece of logic needed is flagging, and win/loss states. We will create a separate board to keep track of tile icons, '⚑' for flags, '⛯' for mines, and numbers for adjacency numbers of uncovered tiles. We write a function that takes in a tile index to be flagged, and flags it if it is not already uncovered.

```python
apl.eval("labels ← (⍴ board) ⍴ ' '")
def flag(x, y):
	if(apl.eval("∆⌷board", x, y)!=-1): #Not uncovered
	  apl.eval("∆⌷labels ← \'⚑\'", x, y)
```

We also need to update the adjacency numbers shown to the player when more tiles are uncovered. The labels matrix should have the values in the adjacency matrix where the board matrix has a `¯1` value (where a tile is uncovered). First find where board is `¯1`, then selectively assign the adjacency values to the labels.

```python
      labels ← (⍴ board) ⍴ ' '
      board ← 1 -⍨ ? 5 5 ⍴ 2
      adjacency ← ({+/,⍵}⌺3 3)board
      board
1 1 0 0 1
1 0 0 1 0
0 1 1 1 1
0 1 0 1 0
1 1 0 1 0
      adjacency
3 3 2 2 2
4 5 5 5 4
3 4 6 5 4
4 5 7 5 4
3 3 4 2 2

      board[1;3] ← ¯1
      board[1;4] ← ¯1
      board
1 1 ¯1 ¯1 1
1 0  0  1 0
0 1  1  1 1
0 1  0  1 0
1 1  0  1 0
      board=¯1
0 0 1 1 0
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0

      ((board=¯1)/¨labels) ← adjacency
      labels
   2 2  
```

Putting this in our uncover function

```python
def uncover(x, y):
  if(is_mine([x,y])):
      # Lose
      return
  apl.eval("board ← (¯1@(uncover ∆))board", x, y)
  apl.eval("((board=¯1)/¨labels) ← adjacency")
```

Revealing mines when the game is lost

```python
def uncover(x, y):
  if(is_mine([x,y])):
      apl.eval("((board=1)/¨labels) ← \'⛯\'")
      # Lose
      return
  apl.eval("board ← (¯1@(uncover ∆))board", x, y)
  apl.eval("((board=¯1)/¨labels) ← adjacency")
```
