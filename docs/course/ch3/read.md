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
              D ← {0=15|⍵: 'FizzBuzz' ⋄ 0=3|⍵: 'Fizz' ⋄ 0=5|⍵: 'Buzz'}
              D 1
              D 2
              D 3
              D 4
              D 5
              D 6
              D 7
              D 8
              D 9
              D 10
              D 11
              D 12
              D 13
              D 14
              D 15
        ```

    === "Output"

        ```apl
              D 1
              D 2
              D 3
        Fizz
              D 4
              D 5
        Buzz
              D 6
        Fizz
              D 7
              D 8
              D 9
        Fizz
              D 10
        Buzz
              D 11
              D 12
        Fizz
              D 13
              D 14
              D 15
        FizzBuzz
        ```

        The famous FizzBuzz interview question. Note that a more concise version can be written as

        ```apl
              D ← {((0=3|⍵)⍴'Fizz'),(0=5|⍵)⍴'Buzz'}
        ```

---

!!! question "Read problem 6"

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


!!! question "Read problem 7"

    === "Input"

        ```apl
              H←{⍺=⍵:⍵ ⋄ ⍵ ∇ 2○⍵}
              0 H 0.5
        ```

    === "Output"

        ```apl
              0 H 0.5
        0.7390851332
        ```

        This function repeatedly applies cosine 2○ to ⍵ until ⍵ is the same as 2 ○ ⍵, that is, trying to find the fixed point of cosine. The left argument keeps track of the previous iteration.

---

!!! question "Read problem 8"

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

!!! question "Read problem 9"

    === "Input"

        ```apl
              L ← {
                ⍵=0: 1
                2*∇ ⍵ - 1
                }
              L 3
        ```

    === "Output"

        ```apl
              L 3
        16
              ⍝ 2*2*2
        ```

        This function calculates repeated exponentials of 2

---

!!! question "Read problem 10"

    === "Input"

        ```apl
              A
        1 2 3
        4 5 6
        7 8 9
              M ← {(⍴⍺)⍴⍵}
              A M ⎕A

        ```

    === "Output"

        ```apl
              A M ⎕A
        ABC
        DEF
        GHI
        ```

        This function resizes ⍵ to be the same shape as ⍺
---

!!! question "Read problem 11"

    === "Input"

        ```apl
              5 (+,-) 1 2 3
        ```

    === "Output"

        ```apl
              5 (+,-) 1 2 3
        6 7 8 4 3 2
        ```

        This is a fork, the corresponding dfn is 5 {(⍺+⍵),(⍺-⍵)} 1 2 3
---

!!! question "Read problem 12"

    === "Input"

        ```apl
              (1∘,⍴∘0) 10
        ```

    === "Output"

        ```apl
              (1∘,⍴∘0) 10
        1 0 0 0 0 0 0 0 0 0 0

              (1∘,⍴∘0)
         ┌─┴─┐
         ∘   ∘
        ┌┴┐ ┌┴┐
        1 , ⍴ 0
        ```

        This is an atop, the dfn equivalent is {1,⍵⍴0}

---

!!! question "Read problem 13"

    === "Input"

        ```apl
              (2∘⍴⍴(1∘,⍴∘0)) 10
        ```

    === "Output"

        ```apl
              (2∘⍴⍴(1∘,⍴∘0)) 10
        1 0 0 0 0 0 0 0 0 0
        0 1 0 0 0 0 0 0 0 0
        0 0 1 0 0 0 0 0 0 0
        0 0 0 1 0 0 0 0 0 0
        0 0 0 0 1 0 0 0 0 0
        0 0 0 0 0 1 0 0 0 0
        0 0 0 0 0 0 1 0 0 0
        0 0 0 0 0 0 0 1 0 0
        0 0 0 0 0 0 0 0 1 0
        0 0 0 0 0 0 0 0 0 1
              
              (2∘⍴⍴(1∘,⍴∘0))
        ┌─┼───┐
        ∘ ⍴ ┌─┴─┐
       ┌┴┐  ∘   ∘
       2 ⍴ ┌┴┐ ┌┴┐
           1 , ⍴ 0

        This is a fork over an atop, the dfn equivalent is {(2⍴⍵)⍴1,⍵⍴0}
        ```

---

!!! question "Read problem 14"

    === "Input"

        ```apl
              (+/÷⍴) 1 10 100
        ```

    === "Output"

        ```apl
              (+/÷⍴) 1 10 100
        37
              
        This is a fork for the average function, the dfn equivalent is {(+/⍵)÷⍴⍵}
        ```

---