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
              2¯ 7
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
              3÷12+4×¯3
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

        Very readable! Is this [LISP](data:image/jpeg;base64,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)?

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
