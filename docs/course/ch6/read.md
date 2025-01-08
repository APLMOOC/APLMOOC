# Read exercises

For each of the following exercises, try to figure out what the input will produce in the TryAPL terminal.
Check your answers by opening the "Output" tab.

If you think an error will occur, try to predict _which_ error it will be and where the arrow will point to.

The exercises are not checked or graded: use them to check your knowledge!



!!! question "Read problem 1"

    === "Input"
    
        ```apl
              (⍳10)(∘.×)⍳10
        ```

    === "Output"

        ```apl
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
        ```

        The multiplication table up to multiples of 10

---

!!! question "Read problem 2"

    === "Input"
    
        ```apl
              (1+⍳9)(∘.×)1+⍳9
        ```

    === "Output"

        ```apl
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
        ```

        The multiplication table up to multiples of 10, starting from multiples of 2

---

!!! question "Read problem 3"

    === "Input"
    
        ```apl
              (⍳100) ~ (1+⍳49)(∘.×)1+⍳49
        ```

    === "Output"

        ```apl
              (⍳100) ~ (1+⍳49)(∘.×)1+⍳49
          1 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97
        ```

        The integers up to 100 excluding multiples of 2 to 49, which are the prime numbers up to 100

---

!!! question "Read problem 4"

    === "Input"
    
        ```apl
              1+∘÷⍣=1
        ```

    === "Output"

        ```apl
              1+∘÷⍣=1
          1.618033989
        ```

        This formula computes the golden ratio, it applies the dyadic function ``(+∘÷⍣=)`` with left and right arguments ``1``. The function ``(+∘÷⍣=)`` repeats ``+∘÷`` until the previous and current iteration are equal ``=``. The formula ``1(+∘÷)1(+∘÷)1(+∘÷)1...`` is equivalent to ``1+÷1+÷1+÷1...``, which is the continued fraction formula for the golden ratio

        
        $$\phi=1+\frac{1}{1+\frac{1}{1+\frac{1}{1+\frac{1}{\ldots}}}}$$ 
        

---

!!! question "Read problem 5"

    === "Input"

        Try to identify out the axes of the following outer product
    
        ```apl
              ((⊂'Chapter'),¨⍳2) ∘., ('Read' 'Write',¨⊂' Exercise') ∘., ⍳2
        ```

    === "Output"

        ```apl
              ((⊂'Chapter'),¨⍳2) ∘., ('Read' 'Write',¨⊂' Exercise') ∘., ⍳2
          ┌──────────────────────────┬──────────────────────────┐
          │Chapter 1 Read Exercise 1 │Chapter 1 Read Exercise 2 │
          ├──────────────────────────┼──────────────────────────┤
          │Chapter 1 Write Exercise 1│Chapter 1 Write Exercise 2│
          └──────────────────────────┴──────────────────────────┘
          ┌──────────────────────────┬──────────────────────────┐
          │Chapter 2 Read Exercise 1 │Chapter 2 Read Exercise 2 │
          ├──────────────────────────┼──────────────────────────┤
          │Chapter 2 Write Exercise 1│Chapter 2 Write Exercise 2│
          └──────────────────────────┴──────────────────────────┘
        ```

        The last axis is along ``⍳2``, the intermediate axis is along ``('Read' 'Write',¨⊂' Exercise')``, and the leading axis is along ``((⊂'Chapter'),¨⍳2)``.


---