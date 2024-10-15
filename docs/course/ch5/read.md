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

        The set difference ~ function removes all occurences of the right-hand array elements from the left-hand array

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
              'emergency'∪'encyclopedia
        emergencylopdia
              'network'∪'kingdom'
        networkingdom
              'spring'∪'ringtone'
        springtoe
        ```

        The union ∪ function adds to the left array elements of the right array not already in the right array.

---


!!! question "Read problem 3"

    === "Input"
    
        ```apl
              words
        the of and to a in for is on that ...
              mots
        de la à le et les des une en un ...
              sanat
        on ei ja se hän en mitä että ole olen ...
        
              words ∩ mots
        
              words ∩ sanat
              
              mots ∩ sanat
              
        ```

    === "Output"

        ```apl
              words
        the of and to a in for is on that ...
              mots
        de la à le et les des une en un ...
              sanat
        on ei ja se hän en mitä että ole olen ...

              words ∩ mots
        est par plus son dont sans premier pays fin place millions site chef grand ensemble formation moment match public service question tour services ... 
              words ∩ sanat
        on he anna kai no asia asian auto oven ok lisa radio join uni
              mots ∩ sanat
        en plus son se ne fin loi peloton rien aura bon moi voit toi vois saisit union
        ```

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

---