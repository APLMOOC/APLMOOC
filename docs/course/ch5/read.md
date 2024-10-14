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