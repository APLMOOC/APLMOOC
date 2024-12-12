# Read exercises

For each of the following exercises, try to figure out what the input will produce in the TryAPL terminal.
Check your answers by opening the "Output" tab.

If you think an error will occur, try to predict _which_ error it will be and where the arrow will point to.

The exercises are not checked or graded: use them to check your knowledge!


      

      ⍝ Multiplication table
      (⍳10)(∘.×)⍳10
 1  2  3  4  5  6  7  8  9  10
 2  4  6  8 10 12 14 16 18  20
 3  6  9 12 15 18 21 24 27  30
 4  8 12 16 20 24 28 32 36  40
 5 10 15 20 25 30 35 40 45  50
 6 12 18 24 30 36 42 48 54  60
 7 14 21 28 35 42 49 56 63  70
 8 16 24 32 40 48 56 64 72  80
 9 18 27 36 45 54 63 72 81  90
10 20 30 40 50 60 70 80 90 100

      ⍝ Composite numbers
      (1+⍳9)(∘.×)1+⍳9
 4  6  8 10 12 14 16 18  20
 6  9 12 15 18 21 24 27  30
 8 12 16 20 24 28 32 36  40
10 15 20 25 30 35 40 45  50
12 18 24 30 36 42 48 54  60
14 21 28 35 42 49 56 63  70
16 24 32 40 48 56 64 72  80
18 27 36 45 54 63 72 81  90
20 30 40 50 60 70 80 90 100

      ⍝ Prime numbers up to N as numbers minus composite numbers up to N/2
      (⍳100) ~ (1+⍳49)(∘.×)1+⍳49
1 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97