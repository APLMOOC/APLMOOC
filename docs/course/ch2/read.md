# Read exercises

For each of the following exercises, try to figure out what the input will produce in the TryAPL terminal.
Check your answers by opening the "Output" tab.

If you think an error will occur, try to predict _which_ error it will be and where the arrow will point to.

The exercises are not checked or graded: use them to check your knowledge!

!!! question "Read problem 1"

    === "Input"

        ```apl
        1 4 9 16 25[4]
        ```

    === "Output"

        ```apl
        16
        ```

---

!!! question "Read problem 2"

    === "Input"

        ```apl
        1 4 9 16 25[3 4 5]
        ```

    === "Output"

        ```apl
        9 16 25
        ```

---

!!! question "Read problem 3"

    === "Input"

        ```apl
        (2×1 4 9 16 25)[4]
        ```

    === "Output"

        ```apl
        32
        ```
        Remember, creating a vector takes precedence over any other operations.

---

!!! question "Read problem 4"

    === "Input"

        ```apl
        (2×1) 4 9 16 25[4]
        ```

    === "Output"

        ```apl
        16
        ```

---

!!! question "Read problem 5"

    === "Input"

        ```apl
        ¯1 4 9 16 25[2]
        ```

    === "Output"

        ```apl
        4
        ```

---

!!! question "Read problem 6"

    === "Input"

        ```apl
        -1 4 9 16 25[2]
        ```

    === "Output"

        ```apl
        ¯4
        ```
        - is a function, which is applied to the whole vector, ¯ is the correct way to write negative numbers

---

!!! question "Read problem 7"

    === "Input"

        ```apl
        1 2 3 4 ÷ 2 3 4 5
        ```

    === "Output"

        ```apl
        0.5 0.6666666667 0.75 0.8
        ```

---

!!! question "Read problem 8"

    === "Input"

        ```apl
        1 2 ÷ 2 3 4 5
        ```

    === "Output"

        ```apl
        LENGTH ERROR: Mismatched left and right argument shapes
        1 2÷3 4 5
           ∧
        ```

---


!!! question "Read problem 9"

    === "Input"

        ```apl
        5 5 ⍴ 0
        ```

    === "Output"

        ```apl
        0 0 0 0 0
        0 0 0 0 0
        0 0 0 0 0
        0 0 0 0 0
        0 0 0 0 0
        ```

---

!!! question "Read problem 10"

    === "Input"

        ```apl
        5 5 ⍴ ⎕A
        ```

    === "Output"

        ```apl
        ABCDE
        FGHIJ
        KLMNO
        PQRST
        UVWXY
        ```

---

!!! question "Read problem 11"

    === "Input"

        ```apl
        (5 5 ⍴ ⎕A)[2 3 4;2 3 4]
        ```

    === "Output"

        ```apl
        GHI
        LMN
        QRS
        ```

---


!!! question "Read problem 12"

    === "Input"

        ```apl
        10 11 ⍴ '╚╗░'
        ```

    === "Output"

        ```apl
        ╚╗░╚╗░╚╗░╚╗
        ░╚╗░╚╗░╚╗░╚
        ╗░╚╗░╚╗░╚╗░
        ╚╗░╚╗░╚╗░╚╗
        ░╚╗░╚╗░╚╗░╚
        ╗░╚╗░╚╗░╚╗░
        ╚╗░╚╗░╚╗░╚╗
        ░╚╗░╚╗░╚╗░╚
        ╗░╚╗░╚╗░╚╗░
        ╚╗░╚╗░╚╗░╚╗
        ```

---








