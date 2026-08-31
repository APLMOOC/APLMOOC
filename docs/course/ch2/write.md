# Write exercises

<!--
Submit APL code for the following exercises.
Your submissions are graded using TMC.

Make sure to [log in](../../account.md) to be able to submit your work!

Remember, you can test out ideas and develop you solution at [TryAPL](https://tryapl.org) before submitting it here.

You can submit as many solutions as you like.
If you submit a correct solution at least once, you will receive points on the TMC server and be able to see the model solution.

If the write problem is red, it is unsolved. If it it green, you have solved it and received points for it on the server.
-->

Remember, you can test your code out on TryAPL before submitting it here! You can submit as many solutions as you like.

Since this course is still a work-in-progress, solving the write exercises will currently not lead to any credits.

---

!!! write-problem "Write problem 1"
    Create a vector consisting of the first ten prime numbers called PRIMES
    <div class="problem">
        <span class="problemspan">⎕←</span>
        <input class="probleminput" type="text" id="input_ch2_p1" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch2_p1', 2)">Submit</button>
    </div>
    <p id="feedback_ch2_p1" style="color: red"></p>

---

!!! write-problem "Write problem 2"
    Create a vector called POWER of value 2 to the power of PRIMES, minus two
    <div class="problem">
        <span class="problemspan">⎕←</span>
        <input class="probleminput" type="text" id="input_ch2_p2" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch2_p2', 2)">Submit</button>
    </div>
    <p id="feedback_ch2_p2" style="color: red"></p>

---

!!! write-problem "Write problem 3"
    Divide the vector POWER by PRIMES
    <div class="problem">
        <span class="problemspan">⎕←</span>
        <input class="probleminput" type="text" id="input_ch2_p3" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch2_p3', 2)">Submit</button>
    </div>
    <p id="feedback_ch2_p3" style="color: red"></p>

---

!!! write-problem "Write problem 4"
    Create the word "BUNNY" by indexing the alphabet vector ⎕A
    <div class="problem">
        <span class="problemspan">⎕←</span>
        <span class="problemfilltext">⎕A[</span>
        <input class="problemfillinput" type="text" id="input_ch2_p1_b1" placeholder="fill in the blank" oninput="fillinput_resize(this)">
        <button class="problembutton" onclick="submit_problem('ch2_p4', 2)">Submit</button>
    </div>
    <p id="feedback_ch2_p4" style="color: red"></p>

---

!!! write-problem "Write problem 5"
    The following matrix CIPHER consists of shifted versions of the alphabet for every row.
    ```apl
          CIPHER
      ABCDEFGHIJKLMNOPQRSTUVWXYZ
      BCDEFGHIJKLMNOPQRSTUVWXYZA
      CDEFGHIJKLMNOPQRSTUVWXYZAB
      DEFGHIJKLMNOPQRSTUVWXYZABC
      EFGHIJKLMNOPQRSTUVWXYZABCD
      FGHIJKLMNOPQRSTUVWXYZABCDE
      GHIJKLMNOPQRSTUVWXYZABCDEF
      HIJKLMNOPQRSTUVWXYZABCDEFG
      IJKLMNOPQRSTUVWXYZABCDEFGH
      JKLMNOPQRSTUVWXYZABCDEFGHI
      KLMNOPQRSTUVWXYZABCDEFGHIJ
      LMNOPQRSTUVWXYZABCDEFGHIJK
      MNOPQRSTUVWXYZABCDEFGHIJKL
      NOPQRSTUVWXYZABCDEFGHIJKLM
      OPQRSTUVWXYZABCDEFGHIJKLMN
      PQRSTUVWXYZABCDEFGHIJKLMNO
      QRSTUVWXYZABCDEFGHIJKLMNOP
      RSTUVWXYZABCDEFGHIJKLMNOPQ
      STUVWXYZABCDEFGHIJKLMNOPQR
      TUVWXYZABCDEFGHIJKLMNOPQRS
      UVWXYZABCDEFGHIJKLMNOPQRST
      VWXYZABCDEFGHIJKLMNOPQRSTU
      WXYZABCDEFGHIJKLMNOPQRSTUV
      XYZABCDEFGHIJKLMNOPQRSTUVW
      YZABCDEFGHIJKLMNOPQRSTUVWX
      ZABCDEFGHIJKLMNOPQRSTUVWXY
    ```
    The Caesar cipher encrypts a phrase by shifting all its letters by a specific amount along the alphabet. For example, "ARENA" becomes "RIVER" under a shift of 9 places. Use indexing of the above matrix to encipher the word "BUNNY" by shifting its letters 17 places.
    <div class="problem">
        <span class="problemspan">⎕←</span>
        <span class="problemfilltext">CIPHER[</span>
        <input class="problemfillinput" type="text" id="input_ch2_p5_b1" placeholder="fill in the blank" oninput="fillinput_resize(this)">
        <button class="problembutton" onclick="submit_problem('ch2_p5', 2)">Submit</button>
    </div>
    <p id="feedback_ch2_p5" style="color: red"></p>

---

!!! write-problem "Write problem 6"
    Consider the following ASCII art stored in a matrix called ART, shown here with its row and column numbers.
    ```apl
       123456789111111111122222222
                012345678901234567
     1      ._________________.
     2      |.---------------.|
     3      ||  __  ____ __  ||
     4      || / _\(  _ (  ) ||
     5      ||/    \) __/ (_/||
     6      ||\_/\_(__) \____||
     7      ||_______________||
     8      /.-.-.-.-.-.-.-.-.\
     9     /.-.-.-.-.-.-.-.-.-.\
    10    /.-.-.-.-.-.-.-.-.-.-.\
    11   /______/__________\_____\
    12   \_______________________/
    ```
    Create a matrix called APL which consists of the following subarray obtained by indexing ART
    ```apl
      __  ____ __  
     / _\(  _ (  ) 
    /    \) __/ (_/
    \_/\_(__) \____
    ```
    <div class="problem">
        <span class="problemspan">⎕←</span>
        <span class="problemfilltext">ART[</span>
        <input class="problemfillinput" type="text" id="input_ch2_p6_b1" placeholder="fill in the blank" oninput="fillinput_resize(this)">
        <button class="problembutton" onclick="submit_problem('ch2_p6', 2)">Submit</button>
    </div>
    <p id="feedback_ch2_p6" style="color: red"></p>

---

!!! write-problem "Write problem 7"
    Create a 3 by 3 grid of 'X's and 'O's called BOARD 
    <div class="problem">
        <span class="problemspan">⎕←</span>
        <input class="problemfillinput" type="text" id="input_ch2_p7_b1" placeholder="fill in the blank" oninput="fillinput_resize(this)">
        <span class="problemfilltext">'XO'</span>
        <button class="problembutton" onclick="submit_problem('ch2_p7', 2)">Submit</button>
    </div>
    <p id="feedback_ch2_p7" style="color: red"></p>

---

!!! write-problem "Write problem 8"
    Considering the above array as a game of noughts and crosses, change a single element to make the O player win.
    <div class="problem">
        <span class="problemspan">⎕←</span>
        <span class="problemfilltext">BOARD[</span>
        <input class="problemfillinput" type="text" id="input_ch2_p8_b1" placeholder="fill in the blank" oninput="fillinput_resize(this)">
        <button class="problembutton" onclick="submit_problem('ch2_p8', 2)">Submit</button>
    </div>
    <p id="feedback_ch2_p8" style="color: red"></p>

---

!!! write-problem "Write problem 9"
    Given the coefficients list C of a quadratic $P(x) = C[1] x^2 + C[2] x + C[3]$, evaluate the polynomial for a value X. For example, for ``C ← 1 2 3``, and ``X ← 10``, this should evaluate to $ 1 \cdot 10^2 + 2 \cdot 10 + 3 = 123 $.
    <div class="problem">
        <span class="problemspan">⎕←</span>
        <input class="probleminput" type="text" id="input_ch2_p9" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch2_p9', 2)">Submit</button>
    </div>
    <p id="feedback_ch2_p9" style="color: red"></p>

---

!!! write-problem "Write problem 10"
    Consider the following list of GAMES
    ```apl
          GAMES
    CHESS                   
    CHECKERS                
    BACKGAMMON              
    POKER                   
    GLOBAL THERMONUCLEAR WAR
    ```
    Get the first letter of each of the games listed using indexing
    <div class="problem">
        <span class="problemspan">⎕←</span>
        <span class="problemfilltext">GAMES[</span>
        <input class="problemfillinput" type="text" id="input_ch2_p10_b1" placeholder="fill in the blank" oninput="fillinput_resize(this)">
        <button class="problembutton" onclick="submit_problem('ch2_p10', 2)">Submit</button>
    </div>
    <p id="feedback_ch2_p10" style="color: red"></p>

---

!!! write-problem "Write problem 11"
    Get the first three letters of the second and fifth game listed above using indexing
    <div class="problem">
        <span class="problemspan">⎕←</span>
        <span class="problemfilltext">GAMES[</span>
        <input class="problemfillinput" type="text" id="input_ch2_p11_b1" placeholder="fill in the blank" oninput="fillinput_resize(this)">
        <button class="problembutton" onclick="submit_problem('ch2_p11', 2)">Submit</button>
    </div>
    <p id="feedback_ch2_p11" style="color: red"></p>

---

!!! write-problem "Write problem 12"
    Consider the following matrix ROUND of the outcomes of a game of rock, paper, scissors.
    ```apl
          ROUND
    ┌─────────┬─────────┬─────────┐
    │DRAW     │P2 COVERS│P1 BLUNTS│
    ├─────────┼─────────┼─────────┤
    │P1 COVERS│DRAW     │P2 CUTS  │
    ├─────────┼─────────┼─────────┤
    │P2 BLUNTS│P1 CUTS  │DRAW     │
    └─────────┴─────────┴─────────┘
    ```
    The rows specify the move made by player 1, and the columns the move made by player 2, both in the order ROCK, PAPER, SCISSORS.

    Using indexing, find the outcome of the round in which player 1 plays scissors and player 2 plays paper.

    <div class="problem">
        <span class="problemspan">⎕←</span>
        <span class="problemfilltext">ROUND[</span>
        <input class="problemfillinput" type="text" id="input_ch2_p12_b1" placeholder="fill in the blank" oninput="fillinput_resize(this)">
        <button class="problembutton" onclick="submit_problem('ch2_p12', 2)">Submit</button>
    </div>
    <p id="feedback_ch2_p12" style="color: red"></p>



---