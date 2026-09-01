# Read exercises

For each of the following exercises, try to figure out what the input will produce in the TryAPL terminal.
Check your answers by opening the "Output" tab.

If you think an error will occur, try to predict _which_ error it will be and where the arrow will point to.

The exercises are not checked or graded: use them to check your knowledge!

## Number manipulation

!!! question "Read problem 1"

    === "Input"

        ```apl
        2 + 3
        ```

    === "Output"

        ```apl
        5
        ```

---

!!! question "Read problem 2"
    === "Input"

        ```apl
        2-3
        ```    

    === "Output"

        ```apl
        ¯1
        ```

        The negative sign (`¯`) is different from the minus function (`-`)

---

!!! question "Read problem 3"
    === "Input"

        ```apl
        3*3
        ```    

    === "Output"

        ```apl
        27
        ```

        `*` is used for exponentiation, not multiplication

---

!!! question "Read problem 4"
    === "Input"

        ```apl
        3×3
        ```    

    === "Output"

        ```apl
        9
        ```

---

!!! question "Read problem 5"
    === "Input"

        ```apl
        3÷2
        ```    

    === "Output"

        ```apl
        1.5
        ```

---

!!! question "Read problem 6"
    === "Input"

        ```apl
        2¯7
        ```    

    === "Output"

        ```apl
        SYNTAX ERROR
              2¯7
              ∧
        ```

        The negative sign (`¯`) is not a function. Use the `-` function instead.

---

!!! question "Read problem 7"
    === "Input"

        ```apl
        1+2÷
        ```    

    === "Output"

        ```apl
        SYNTAX ERROR
              1+2÷
                 ∧
        ```

        The divide function is missing its right argument.

---

!!! question "Read problem 8"
    === "Input"

        ```apl
        100÷0
        ```    

    === "Output"

        ```apl
        DOMAIN ERROR: Divide by zero
              100÷0
                 ∧
        ```

        Can't divide by zero!

---

!!! question "Read problem 9"
    === "Input"

        ```apl
        0÷100
        ```    

    === "Output"

        ```apl
        0
        ```

---

!!! question "Read problem 10"
    === "Input"

        ```apl
        0÷0
        ```    

    === "Output"

        ```apl
        1
        ```

        Ah, the age-old dilemma!
        Were you expecting a `DOMAIN ERROR`?
        The APL developers decided to add this feature since it is useful in some contexts.
        There is the option to change this if it really upsets you.

---

!!! question "Read problem 11"
    === "Input"

        ```apl
        ¯2×¯3
        ```    

    === "Output"

        ```apl
        6
        ```

---

## Order of execution

!!! question "Read problem 12"
    === "Input"

        ```apl
        4×2+3
        ```    

    === "Output"

        ```apl
        20
        ```

        Right-to-left.

---

!!! question "Read problem 13"
    === "Input"

        ```apl
        5×2   +   3×2
        ```    

    === "Output"

        ```apl
        40
        ```
        
        Still right-to-left, regardless of spaces.

---

!!! question "Read problem 14"
    === "Input"

        ```apl
        24÷8÷2
        ```    

    === "Output"

        ```apl
        6
        ```

---

!!! question "Read problem 15"
    === "Input"

        ```apl
        3÷12 + 4×¯3
        ```    

    === "Output"

        ```apl
        DOMAIN ERROR: Divide by zero
              3÷12 + 4×¯3
               ∧
        ```

        The `12 + ¯12` results in zero, which is outside of the domain of the divide function's right argument.

---

!!! question "Read problem 16"
    === "Input"

        ```apl
        (((2+3)))
        ```    

    === "Output"

        ```apl
        5
        ```

        Extra parentheses never hurt anyone.

---

!!! question "Read problem 17"
    === "Input"

        ```apl
        (((5))+((((3)))×(2)))
        ```    

    === "Output"

        ```apl
        11
        ```

        Very aesthetic!

---

!!! question "Read problem 18"
    === "Input"

        ```apl
        4×24÷3
        ```    

    === "Output"

        ```apl
        32
        ```

---

!!! question "Read problem 19"
    === "Input"

        ```apl
        24÷4×3
        ```    

    === "Output"

        ```apl
        2
        ```

---

!!! question "Read problem 20"
    === "Input"

        ```apl
        6×3-
        ```    

    === "Output"

        ```apl
        SYNTAX ERROR
              6×3-
                 ∧
        ```

        Typo.
