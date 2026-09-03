# Read exercises

For each of the following exercises, try to figure out what the input will produce in the TryAPL terminal.
Check your answers by opening the "Output" tab.

If you think an error will occur, try to predict _which_ error it will be and where the arrow will point to.

The exercises are not checked or graded: use them to check your knowledge!


!!! question "Read problem 1"

    === "Input"
    
        ```apl
              'softheartedness'~'otherness'
        ```

    === "Output"

        ```apl
              'softheartedness'~'otherness'
        fad
        ```

        The set difference ~ function removes all occurrences of the right-hand array elements from the left-hand array

---

!!! question "Read problem 2"

    === "Input"
    
        ```apl
              'platform'∪'formatting'
        
              'emergency'∪'encyclopedia'

              'networking'∪'kingdom'

              'spring'∪'ringtone'

        ```

    === "Output"

        ```apl
              'platform'∪'formatting'
        platforming
              'emergency'∪'encyclopedia'
        emergencylopdia
              'networking'∪'kingdom'
        networkingdm
              'spring'∪'ringtone'
        springtoe
        ```

        The union ∪ function adds to the left array elements of the right array not already in the left array.

---


!!! question "Read problem 3"

    === "Input"

        The two arrays below list some English and Finnish words.

        ```apl
              ⎕ ← EN ← 'home' 'cat' 'tie' 'door' 'on' 'me' 'auto'

              ⎕ ← FI ← 'kissa' 'ovi' 'auto' 'on' 'tie' 'home' 'talo'
              ⍝ English words that are also Finnish words
              EN ∩ FI
              ⍝ Finnish words that are also English words
              FI ∩ EN

        ```

    === "Output"

        ```apl
              ⎕ ← EN ← 'home' 'cat' 'tie' 'door' 'on' 'me' 'auto'
        home  cat  tie  door  on  me  auto
              ⎕ ← FI ← 'kissa' 'ovi' 'auto' 'on' 'tie' 'home' 'talo'
        kissa  ovi  auto  on  tie  home  talo
              ⍝ English words that are also Finnish words
              EN ∩ FI
        home  tie  on  auto
              ⍝ Finnish words that are also English words
              FI ∩ EN
        auto  on  tie  home
        ```

        The intersection ``∩`` function keeps the elements of the left array that also occur in the right array, so the result takes its order from the left argument. That is, ``EN ∩ FI`` lists them in the order they appear in ``EN``, and ``FI ∩ EN`` in the order they appear in ``FI``. 

---

!!! question "Read problem 4"

    === "Input"
    
        ```apl
              ('re'),¨'play' 'cord' 'peat' 'serve' 'quest' 'present'

        ```

    === "Output"

        ```apl
              ('re'),¨'play' 'cord' 'peat' 'serve' 'quest' 'present'
        LENGTH ERROR
              ('re'),¨'play' 'cord' 'peat' 'serve' 'quest' 'present'
                    ∧
        ```

        What the previous code attempts to do is catenate each element of the left array, 'r' and 'e', with each element of the right array, but the lengths clearly do not match.

---

!!! question "Read problem 5"

    === "Input"
    
        ```apl
              (⊂'re'),¨'play' 'cord' 'peat' 'serve' 'quest' 'present'

        ```

    === "Output"

        ```apl
              (⊂'re'),¨'play' 'cord' 'peat' 'serve' 'quest' 'present'
        replay  record  repeat  reserve  request  represent
        ```

---

!!! question "Read problem 6"

    === "Input"
    
        ```apl
              arrow ← 5 7⍴' ▉▉     ▉▉     ▉▉    ▉▉▉▉    ▉▉    '
              arrow
         ▉▉    
         ▉▉    
         ▉▉    
        ▉▉▉▉   
         ▉▉    
              ⍉arrow
              
        ```

    === "Output"

        ```apl
              arrow ← 5 7⍴' ▉▉     ▉▉     ▉▉    ▉▉▉▉    ▉▉    '
              arrow
         ▉▉    
         ▉▉    
         ▉▉    
        ▉▉▉▉   
         ▉▉    
              ⍉arrow
           ▉ 
        ▉▉▉▉▉
        ▉▉▉▉▉
           ▉ 
      
      
      
        ```

---


!!! question "Read problem 7"

    === "Input"
    
    
        ```apl
              'm'{(⍺≠⍵)⊆⍵}'nonemployments'



              'i'(≠⊆⊢)'pestilentially'



        ```

    === "Output"

        ```apl
              'm'{(⍺≠⍵)⊆⍵}'nonemployments'
        ┌────┬────┬────┐
        │none│ploy│ents│
        └────┴────┴────┘
              'i'(≠⊆⊢)'pestilentially'
        ┌────┬────┬────┐
        │pest│lent│ally│
        └────┴────┴────┘
        ```

        The second function is a tacit form of the first function.

---


!!! question "Read problem 8"

    === "Input"
    
        The following code makes heavy use of the ⍨ commute operator, try rewriting it using parentheses to figure out what it does.
    
        ```apl
              ↓↑1,⍨¨0/⍨¨1-⍨⍳5
        ```

    === "Output"

        ```apl
              ↓↑1,⍨¨0/⍨¨1-⍨⍳5
        ┌─────────┬─────────┬─────────┬─────────┬─────────┐
        │1 0 0 0 0│0 1 0 0 0│0 0 1 0 0│0 0 0 1 0│0 0 0 0 1│
        └─────────┴─────────┴─────────┴─────────┴─────────┘
        ```

        Without the commute operator, this would be ↓↑((((⍳5)-1)/¨0),¨1)

---


!!! question "Read problem 9"

    === "Input"
    
    
        ```apl
              |5-⍨⍳9

              (|5-⍨⍳9)(/⍤0)'█'
        ```

    === "Output"

        ```apl
              |5-⍨⍳9
        4 3 2 1 0 1 2 3 4
              (|5-⍨⍳9)(/⍤0)'█'
        ████
        ███ 
        ██  
        █   
        
        █   
        ██  
        ███ 
        ████
        ```

---

!!! question "Read problem 10"

    === "Input"
    
        
        ```apl
              {⍉↑(|⍵) (10-|2×⍵) (|⍵)}5-⍨⍳9

              ({⍉↑(|⍵) (10-|2×⍵) (|⍵)}5-⍨⍳9)(/⍤1 2)'█ █'
        ```

    === "Output"

        ```apl
              {⍉↑(|⍵) (10-|2×⍵) (|⍵)}5-⍨⍳9
        4  2 4
        3  4 3
        2  6 2
        1  8 1
        0 10 0
        1  8 1
        2  6 2
        3  4 3
        4  2 4
              ({⍉↑(|⍵) (10-|2×⍵) (|⍵)}5-⍨⍳9)(/⍤1 2)'█ █'
        ████  ████
        ███    ███
        ██      ██
        █        █
              
        █        █
        ██      ██
        ███    ███
        ████  ████
        ```

        (/⍤1 2) matches the 1-cells of the left-hand argument with the 2-cells of the right-hand argument. Since the right-hand array is only 1-dimensional, a 2-cell is interpreted as the whole array instead of returning an error. That is, the rows of the left-hand array are matched with the whole of the right-hand array.

---

!!! question "Read problem 11"

    === "Input"
    
    
        ```apl
              ⎕ ← v ← 2*⍳10
              
              ⍴v

              ⍉⍪v

              ⍴⍉⍪v
        ```

    === "Output"

        ```apl
              ⎕ ← v ← 2*⍳10
        2 4 8 16 32 64 128 256 512 1024
              ⍴v
        10
              ⍉⍪v
        2 4 8 16 32 64 128 256 512 1024
              ⍴⍉⍪v
        1 10
        ```

        The phrase ⍉⍪ can be used to turn a vector into a one-row matrix.

---

!!! question "Read problem 12"

    === "Input"
    
    
        ```apl
              ⎕ ← M ← ⍉⍪2*⍳10
              
              ⎕ ← M ⍪← 3*⍳10
              
              M,⍪'XY'
        ```

    === "Output"

        ```apl
              ⎕ ← M ← ⍉⍪2*⍳10
        2 4 8 16 32 64 128 256 512 1024
              ⎕ ← M ⍪← 3*⍳10
        3 9 27 81 243 729 2187 6561 19683 59049
              M,⍪'XY'
        2 4  8 16  32  64  128  256   512  1024 X
        3 9 27 81 243 729 2187 6561 19683 59049 Y
        ```

---