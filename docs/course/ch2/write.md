# Write exercises

Submit APL code for the following exercises.
Your submissions are graded using TMC.

Make sure to [log in](../../account.md) to be able to submit your work!

Remember, you can test out ideas and develop you solution at [TryAPL](https://tryapl.org) before submitting it here.

You can submit as many solutions as you like.
If you submit a correct solution at least once, you will receive points on the TMC server and be able to see the model solution.

If the write problem is red, it is unsolved. If it it green, you have solved it and received points for it on the server.

---

Create vector
Manipulate vector
Index vector
Index vector, multiple

Create matrix
Manipulate matrix
Index matrix (1)
Index matrix (2)
Index matrix, square

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
    Consider the following ASCII art stored in a matrix called ART
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
    Given the coefficients list C of a quadratic $P(x) = C[1] x^2 + C[2] x + C[3]$, evaluate the polynomial for a value X. For example, for C ← 1 2 3, and X ← 10, this should evaluate to $ 1 \cdot 10^2 + 2 \cdot 10 + 3 = 123 $.
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
    Consider a tape-controlled computer which operates by reading a certain section of a tape, changing its internal state based on the value of that section, writing a certain value to that section, then possibly moving the tape along to the next or previous section. For this specific machine, the value of the tape sections is either a 1 or a 2, the internal state of the machine is either 1 2 or 3, and the matrix which specifies the actions to be taken is the following
    ```apl
          INSTRUCTIONS
      ┌─────┬─────┬─────┐
      │1 R 2│1 L 1│1 L 2│
      ├─────┼─────┼─────┤
      │1 L 3│1 R 2│1 N H│
      └─────┴─────┴─────┘
    ```
    The first value in each element is what to write to the section of tape, the second whether to move right 'R' left 'L' or stay in place 'N', and the last value is the next state of the machine 1, 2, 3, or 'H' for halting the machine.
    
    The first (second) row of the matrix specifies the possible instructions when the value of the section of tape is a 1 (2). The columns similarly specify the possible instructions depending on the state of the machine.

    Using indexing, find the instruction for the tape section having value 1 when the machine is in state 3.

    <div class="problem">
        <span class="problemspan">⎕←</span>
        <span class="problemfilltext">INSTRUCTIONS[</span>
        <input class="problemfillinput" type="text" id="input_ch2_p12_b1" placeholder="fill in the blank" oninput="fillinput_resize(this)">
        <button class="problembutton" onclick="submit_problem('ch2_p12', 2)">Submit</button>
    </div>
    <p id="feedback_ch2_p12" style="color: red"></p>



---