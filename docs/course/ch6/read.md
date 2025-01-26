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

    Try to identify out the axes of the following outer product

    === "Input"
    
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


!!! question "Read problem 6"

    
    Recall that ``⍺!⍵`` is the binomial coefficient ``⍺ Choose ⍵``. What will the following outer product look like?

    === "Input"

        ```apl
              ∘.!⍨ 0,⍳15
        ```

    === "Output"

        ```apl
              ∘.!⍨ 0,⍳15
            1 1 1 1 1  1  1  1  1   1   1   1   1    1    1    1
            0 1 2 3 4  5  6  7  8   9  10  11  12   13   14   15
            0 0 1 3 6 10 15 21 28  36  45  55  66   78   91  105
            0 0 0 1 4 10 20 35 56  84 120 165 220  286  364  455
            0 0 0 0 1  5 15 35 70 126 210 330 495  715 1001 1365
            0 0 0 0 0  1  6 21 56 126 252 462 792 1287 2002 3003
            0 0 0 0 0  0  1  7 28  84 210 462 924 1716 3003 5005
            0 0 0 0 0  0  0  1  8  36 120 330 792 1716 3432 6435
            0 0 0 0 0  0  0  0  1   9  45 165 495 1287 3003 6435
            0 0 0 0 0  0  0  0  0   1  10  55 220  715 2002 5005
            0 0 0 0 0  0  0  0  0   0   1  11  66  286 1001 3003
            0 0 0 0 0  0  0  0  0   0   0   1  12   78  364 1365
            0 0 0 0 0  0  0  0  0   0   0   0   1   13   91  455
            0 0 0 0 0  0  0  0  0   0   0   0   0    1   14  105
            0 0 0 0 0  0  0  0  0   0   0   0   0    0    1   15
            0 0 0 0 0  0  0  0  0   0   0   0   0    0    0    1
        ```
        
        This is a matrix of binomial coefficients, the upper triangular part of this matrix is called Pascal's Triangle.

---



!!! question "Read problem 7"

    === "Input"

        ```apl
              ' █'[1+2|(∘.!⍨(0,⍳15))]
        ```

    === "Output"

        ```apl
              ' █'[1+2|(∘.!⍨(0,⍳15))]
            ████████████████
             █ █ █ █ █ █ █ █
              ██  ██  ██  ██
               █   █   █   █
                ████    ████
                 █ █     █ █
                  ██      ██
                   █       █
                    ████████
                     █ █ █ █
                      ██  ██
                       █   █
                        ████
                         █ █
                          ██
                           █
        ```
        
        This is a graphical representation of the remainder mod 2 of the matrix of binomial coefficients. Notice that the upper triangular part of this matrix is the Sierpiński fractal triangle.

---


!!! question "Read problem 8"

    === "Input"

        ```apl
              {'Sqrt(',(4 2⍕⍵*2),')'}¨ (2*0.5) (2÷⍨2*0.5) (4÷3*0.5)
        ```

    === "Output"

        ```apl
              {'Sqrt(',(4 2⍕⍵*2),')'}¨ (2*0.5) (2÷⍨2*0.5) (4÷3*0.5)
        ┌──────────┬──────────┬──────────┐
        │Sqrt(2.00)│Sqrt(0.50)│Sqrt(5.33)│
        └──────────┴──────────┴──────────┘
        ```

---

!!! question "Read problem 9"

    
    Recall the ``○`` circle function from Chapter 2

    === "Input"

        ```apl
              angles ← ○ ÷ 6 4 3 2 1
              functions ← 1 2 3
              (functions ∘.({'Sqrt(',(4 2⍕⍵*2),')'}○) angles)
        ```

    === "Output"

        ```apl
              angles ← ○ ÷ 6 4 3 2 1
              functions ← 1 2 3
              (functions ∘.({'Sqrt(',(4 2⍕⍵*2),')'}○) angles)
        ┌──────────┬──────────┬──────────┬──────────┬──────────┐
        │Sqrt(0.25)│Sqrt(0.50)│Sqrt(0.75)│Sqrt(1.00)│Sqrt(0.00)│
        ├──────────┼──────────┼──────────┼──────────┼──────────┤
        │Sqrt(0.75)│Sqrt(0.50)│Sqrt(0.25)│Sqrt(0.00)│Sqrt(1.00)│
        ├──────────┼──────────┼──────────┼──────────┼──────────┤
        │Sqrt(0.33)│Sqrt(1.00)│Sqrt(3.00)│Sqrt(****)│Sqrt(0.00)│
        └──────────┴──────────┴──────────┴──────────┴──────────┘
        ```

        This is a table of trigonometric values for the functions Sine ``1○``, Cosine ``2○``, and Tangent ``3○``. 
---

!!! question "Read problem 10"

    Consider the vector ``G`` of matrices representing permutations of three elements, where the notation ``(1 2 3)`` means 1 goes to 2, 2 goes to 3, and 3 goes to 1.

    === "Input"

        ```apl
              ⊢G ← (3 3⍴1 0 0 0 1 0 0 0 1) (3 3⍴0 1 0 1 0 0 0 0 1) (3 3⍴1 0 0 0 0 1 0 1 0)

              ⊢G ,← (3 3⍴0 0 1 0 1 0 1 0 0) (3 3⍴0 1 0 0 0 1 1 0 0) (3 3⍴0 0 1 1 0 0 0 1 0)

              G

              ⊢Gl ← '()' '(1 2)' '(2 3)' '(1 3)' '(1 2 3)' '(1 3 2)'

              Gl[G⍳⊂(3 3⍴0 0 1 0 1 0 1 0 0)]
        ```

    === "Output"

        ```apl
              ⊢G ← (3 3⍴1 0 0 0 1 0 0 0 1) (3 3⍴0 1 0 1 0 0 0 0 1) (3 3⍴1 0 0 0 0 1 0 1 0)
        ┌─────┬─────┬─────┐
        │1 0 0│0 1 0│1 0 0│
        │0 1 0│1 0 0│0 0 1│
        │0 0 1│0 0 1│0 1 0│
        └─────┴─────┴─────┘
              ⊢G ,← (3 3⍴0 0 1 0 1 0 1 0 0) (3 3⍴0 1 0 0 0 1 1 0 0) (3 3⍴0 0 1 1 0 0 0 1 0)
        ┌─────┬─────┬─────┐
        │0 0 1│0 1 0│0 0 1│
        │0 1 0│0 0 1│1 0 0│
        │1 0 0│1 0 0│0 1 0│
        └─────┴─────┴─────┘
              G
        ┌─────┬─────┬─────┬─────┬─────┬─────┐
        │1 0 0│0 1 0│1 0 0│0 0 1│0 1 0│0 0 1│
        │0 1 0│1 0 0│0 0 1│0 1 0│0 0 1│1 0 0│
        │0 0 1│0 0 1│0 1 0│1 0 0│1 0 0│0 1 0│
        └─────┴─────┴─────┴─────┴─────┴─────┘
              ⊢Gl ← '()' '(1 2)' '(2 3)' '(1 3)' '(1 2 3)' '(1 3 2)'
        ┌──┬─────┬─────┬─────┬───────┬───────┐
        │()│(1 2)│(2 3)│(1 3)│(1 2 3)│(1 3 2)│
        └──┴─────┴─────┴─────┴───────┴───────┘
              Gl[G⍳⊂(3 3⍴0 0 1 0 1 0 1 0 0)]
        ┌─────┐
        │(1 3)│
        └─────┘
        ```
---

!!! question "Read problem 11"

    Using the vector ``G`` from before

    === "Input"

        ```apl
              ⍕{Gl[G⍳⊂⍵]}¨(G∘.(+.×)G)
        ```

    === "Output"

        ```apl
              ⍕{Gl[G⍳⊂⍵]}¨(G∘.(+.×)G)
        ()         (1 2)      (2 3)      (1 3)      (1 2 3)    (1 3 2)  
        (1 2)      ()         (1 3 2)    (1 2 3)    (1 3)      (2 3)    
        (2 3)      (1 2 3)    ()         (1 3 2)    (1 2)      (1 3)    
        (1 3)      (1 3 2)    (1 2 3)    ()         (2 3)      (1 2)    
        (1 2 3)    (2 3)      (1 3)      (1 2)      (1 3 2)    ()       
        (1 3 2)    (1 3)      (1 2)      (2 3)      ()         (1 2 3) 
        ```

        This is the multiplication table (Cayley table) for the group of permutations of 3 elements, S3.
---

!!! question "Read problem 12"

    === "Input"

        ```apl
              {⎕A[26|13+⎕A⍳⍵]}@(∊∘⎕A) 'the #1 top secret PNG SYNC project'
        ```

    === "Output"

        ```apl
              {⎕A[26|13+⎕A⍳⍵]}@(∊∘⎕A) 'the #1 top secret PNG SYNC project'
        the #1 top secret CAT FLAP project
        ```

        This is the rot13 cipher applied to uppercase letters in the right array


---