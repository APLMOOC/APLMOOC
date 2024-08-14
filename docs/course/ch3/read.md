# Read exercises

For each of the following exercises, try to figure out what the input will produce in the TryAPL terminal.
Check your answers by opening the "Output" tab.

If you think an error will occur, try to predict _which_ error it will be and where the arrow will point to.

The exercises are not checked or graded: use them to check your knowledge!

!!! question "Read problem 1"

    === "Input"

        ```apl
              6{⍵}5
        ```

    === "Output"

        ```apl
        5
        ```

---

!!! question "Read problem 2"

    === "Input"

        ```apl
              6{⍺}5
        ```

    === "Output"

        ```apl
        6
        ```

---

!!! question "Read problem 3"

    === "Input"

        ```apl
              6{⍵-⍺}5
        ```

    === "Output"

        ```apl
        ¯1
        ```

---

!!! question "Read problem 4"

    === "Input"

        ```apl
              F ← {⍵<0: 0 ⋄ 1}
              F ¯1
              F ¯0.5
              F 0
              F 0.5
              F 1
        ```

    === "Output"

        ```apl
              F ¯1
        0
              F ¯0.5
        0
              F 0
        1
              F 0.5
        1
              F 1
        1
        ```

---

!!! question "Read problem 5"

    === "Input"

        ```apl
              G ← {
                ⍺<0: 0
                ⍺>1: ⍵
                ⍺×⍵
                }
              ¯0.5 G 10
              ¯0.25 G 10
              0 G 10
              0.25 G 10
              0.5 G 10
              0.75 G 10
              1 G 10
              1.25 G 10
        ```

    === "Output"

        ```apl
              ¯0.5 G 10
        0
              ¯0.25 G 10
        0
              0 G 10
        0
              0.25 G 10
        2.5
              0.5 G 10
        5
              0.75 G 10
        7.5
              1 G 10
        10
              1.25 G 10
        10
        ```

---


!!! question "Read problem 5"

    === "Input"

        ```apl
              H ← {
                ⍵=0: 1
                2×∇ ⍵ - 1
                }
              H 10
        ```

    === "Output"

        ```apl
              H 10
        1024
        ```

        This function calculates powers of 2

---

!!! question "Read problem 6"

    === "Input"

        ```apl
              K ← {
                ⍵≤2: 1
                (∇ ⍵ - 2) + ∇ ⍵ - 1
                }
              K 6
        ```

    === "Output"

        ```apl
              K 6
        8
        ```

        This function calculates the ⍵th fibonacci number

---

!!! question "Read problem 7"

    === "Input"

        ```apl
              K ← {
                ⍵≤2: 1
                (∇ ⍵ - 2) + ∇ ⍵ - 1
                }
              K 6
        ```

    === "Output"

        ```apl
              K 6
        8
        ```

        This function calculates the ⍵th fibonacci number

---
