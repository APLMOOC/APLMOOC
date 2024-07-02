# Read exercises

For each of the following exercises, try to figure out what the input will produce in the TryAPL terminal.
Check your answers by opening the "Output" tab.

If you think an error will occur, try to predict _which_ error it will be and where the arrow will point to.

The exercises are not checked or graded: use them to check your knowledge!

## Dfns

!!! question "Read problem 1"

    === "Input"

        ```apl
        40 {⍵-⍺} 60
        ```

    === "Output"

        ```apl
        20
        ```

---

!!! question "Read problem 2"

    === "Input"

        ```apl
        40 {⍵} 60
        ```

    === "Output"

        ```apl
        60
        ```

---

!!! question "Read problem 3"

    === "Input"

        ```apl
        40 {50} 60
        ```

    === "Output"

        ```apl
        50
        ```

---

!!! question "Read problem 4"

    === "Input"

        ```apl
        40 {⍵ ⍺} 60
        ```

    === "Output"

        ```apl
        60 40
        ```

---

!!! question "Read problem 5"

    === "Input"

        ```apl
        40 {⍵ ⍺} 60 70 80
        ```

    === "Output"

        ```apl
        ┌────────┬──┐
        │60 70 80│40│
        └────────┴──┘
        ```

---

!!! question "Read problem 6"

    === "Input"

        ```apl
        40 {⍵-} 60
        ```

    === "Output"

        ```apl
        SYNTAX ERROR: Missing right argument
              40{⍵-}60
        ```

## Math
