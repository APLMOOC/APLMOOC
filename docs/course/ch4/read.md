# Read exercises

For each of the following exercises, try to figure out what the input will produce in the TryAPL terminal.
Check your answers by opening the "Output" tab.

If you think an error will occur, try to predict _which_ error it will be and where the arrow will point to.

The exercises are not checked or graded: use them to check your knowledge!


!!! question "Read problem 1"

    === "Input"

        ```apl
              5 ? 52
        ```

    === "Output"

        ```apl
              5 ? 52
        38 47 28 43 41

              ⍝ Dealing 5 random numbers without repetition from 1 and 52
        ```

---

!!! question "Read problem 2"

    === "Input"

        ```apl
              CARDS
        ┌──┬──┬──┬──┬──┬──┬──┬──┬───┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬───┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬───┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬───┬──┬──┬──┬──┐
        │♠2│♠3│♠4│♠5│♠6│♠7│♠8│♠9│♠10│♠J│♠Q│♠K│♠A│♥2│♥3│♥4│♥5│♥6│♥7│♥8│♥9│♥10│♥J│♥Q│♥K│♥A│♦2│♦3│♦4│♦5│♦6│♦7│♦8│♦9│♦10│♦J│♦Q│♦K│♦A│♣2│♣3│♣4│♣5│♣6│♣7│♣8│♣9│♣10│♣J│♣Q│♣K│♣A│
        └──┴──┴──┴──┴──┴──┴──┴──┴───┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴───┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴───┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴───┴──┴──┴──┴──┘


              CARDS[5 ? 52]
        ```

    === "Output"

        ```apl
              CARDS
        ┌──┬──┬──┬──┬──┬──┬──┬──┬───┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬───┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬───┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬───┬──┬──┬──┬──┐
        │♠2│♠3│♠4│♠5│♠6│♠7│♠8│♠9│♠10│♠J│♠Q│♠K│♠A│♥2│♥3│♥4│♥5│♥6│♥7│♥8│♥9│♥10│♥J│♥Q│♥K│♥A│♦2│♦3│♦4│♦5│♦6│♦7│♦8│♦9│♦10│♦J│♦Q│♦K│♦A│♣2│♣3│♣4│♣5│♣6│♣7│♣8│♣9│♣10│♣J│♣Q│♣K│♣A│
        └──┴──┴──┴──┴──┴──┴──┴──┴───┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴───┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴───┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴───┴──┴──┴──┴──┘

              CARDS[5 ? 52]
        ┌──┬──┬───┬───┬──┐
        │♥K│♦3│♠10│♥10│♠7│
        └──┴──┴───┴───┴──┘
              ⍝ Dealing a hand of five cards
        ```

---

!!! question "Read problem 3"

    === "Input"

    ```apl
          APL
         ._________________.    
         |.---------------.|    
         ||  __  ____ __  ||    
         || / _\(  _ (  ) ||    
         ||/    \) __/ (_/||    
         ||\_/\_(__) \____||    
         ||_______________||    
         /.-.-.-.-.-.-.-.-.\    
        /.-.-.-.-.-.-.-.-.-.\   
       /.-.-.-.-.-.-.-.-.-.-.\  
      /______/__________\_____\ 
      \_______________________/ 
          2/APL
    ```

    === "Output"

        ```apl  
              2/APL
              ..__________________________________..        
              ||..------------------------------..||        
              ||||    ____    ________  ____    ||||        
              ||||  //  __\\((    __  ((    ))  ||||        
              ||||//        \\))  ____//  ((__//||||        
              ||||\\__//\\__((____))  \\________||||        
              ||||______________________________||||        
              //..--..--..--..--..--..--..--..--..\\        
            //..--..--..--..--..--..--..--..--..--..\\      
          //..--..--..--..--..--..--..--..--..--..--..\\    
        //____________//____________________\\__________\\  
        \\______________________________________________//  
        ```

---

!!! question "Read problem 4"

    === "Input"

        ```apl
              DICTIONARY
        AA  
        AAHED  
        AAHING  
        AAHS  
        AALII  
        AALIIS  
        AALS  
        AARDVARK 
        . . .
              DICTIONARY[1;]
        AA
              DICTIONARY[;1]
        A
        A
        A
        A
        . . .
              DICTIONARY[⍸DICTIONARY[;1]='X';]
        ```

    === "Output"

        ```apl
              DICTIONARY[⍸DICTIONARY[;1]='X']
        XANTHAM        
        XANTHAMS       
        XANTHAN        
        XANTHANS       
        XANTHATE       
        XANTHATES      
        . . .
        ```
        All words starting with 'X'

---

!!! question "Read problem 5"

    === "Input"

        ```apl
              'TELE' ⍷ DICTIONARY
        0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
        0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
        . . .
              ⍸ 'TELE' ⍷ DICTIONARY
        ┌───────┬───────┬───────┬───────┬───────┬───────┬───────┬───────┬───────┬───────┬───────┬───────┬───────┬───────┬───────┬─
        │14061 2│14062 2│14063 2│14064 2│14065 2│18946 3│18947 3│18948 3│19107 4│19108 4│19109 4│23447 4│23448 4│23449 4│35280 4│4
        └───────┴───────┴───────┴───────┴───────┴───────┴───────┴───────┴───────┴───────┴───────┴───────┴───────┴───────┴───────┴─
              1 1⊃(⍸ 'TELE' ⍷ DICTIONARY)
        ```

    === "Output"

        ```apl
              1 1⊃(⍸ 'TELE' ⍷ DICTIONARY)
        14061
        ```

---

!!! question "Read problem 6"

    === "Input"

        ```apl
              DICTIONARY[1 1⊃(⍸ 'TELE' ⍷ DICTIONARY);]
        ```

    === "Output"

        ```apl
              DICTIONARY[1 1⊃(⍸ 'TELE' ⍷ DICTIONARY)]
        ATELECTASES
        ```
        
        First word with 'TELE'
---

!!! question "Read problem 7"

    === "Input"

        $$
        \sum_{n=1}^{100} \frac{1}{n^2}
        $$

        can be written in APL using reduce / as...

    === "Output"

        ```apl
              +/ 1÷2*⍨⍳100
        ```
---

!!! question "Read problem 8"

    === "Input"

        $$
        \frac{1}{\frac{2}{\frac{3}{\frac{\dots}{10}}}}
        $$

        can be written in APL using reduce / as

    === "Output"

        ```apl
              ÷/⍳10
        ```
---

!!! question "Read problem 9"

    === "Input"

        $$
        \frac{F_1}{F_2},\frac{F_2}{F_3},\ldots,\frac{F_9}{F_{10}}
        $$

        where $F_n$ is the nth Fibonacci number, can be written in APL (given an array FIBB of the first 10 Fibonacci numbers) as

    === "Output"

        ```apl
              2÷/FIBB
        ```

        This is a sequence of approximations to the golden ratio
---