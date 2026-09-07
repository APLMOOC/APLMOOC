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
    
    Write a function to record an APL expression together with its result. The right argument ⍵ is a character vector holding an expression. The result is a character vector containing the expression in quotation marks, then ` gave `, then the result of the expression.

    The expression gives a scalar or a vector. The result of ``logbook`` must be a character vector.

    ```apl
          logbook '2+3'
    '2+3' gave 5
          logbook '⍳5'
    '⍳5' gave 1 2 3 4 5
          logbook '⌽⎕A'
    '⌽⎕A' gave ZYXWVUTSRQPONMLKJIHGFEDCBA
    ```

    <div class="problem">
        <span class="problemspan">logbook←</span>
        <span class="problemfilltext" id="input_ch6_p1_b1" hidden>A←</span>
        <input aria-label="Chapter 6, write problem 1, answer field 2" class="probleminput" type="text" id="input_ch6_p1_b2" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch6_p1', 2)">Submit</button>
    </div>
    <p role="status" aria-atomic="true" id="feedback_ch6_p1" style="color: red"></p>

---

!!! write-problem "Write problem 2"
    
    Write a function to name a vector of angles. The right argument ⍵ holds angles in radians. Each angle is $\pi$ divided by a whole number greater than 1.

    The result is a character matrix with one row per angle. Each row holds the name of the angle, then the angle itself to 4 decimal places in a field 10 characters wide. The name column is as wide as the longest name, and shorter names are padded on the right.

    ```apl
          angle_names ○÷12 6 4 3 2
    Pi/12    0.2618
    Pi/6     0.5236
    Pi/4     0.7854
    Pi/3     1.0472
    Pi/2     1.5708
          angle_names ○÷2 3
    Pi/2    1.5708
    Pi/3    1.0472
    ```

    <div class="problem">
        <span class="problemspan">angle_names←</span>
        <span class="problemfilltext" id="input_ch6_p2_b1" hidden>A←</span>
        <input aria-label="Chapter 6, write problem 2, answer field 2" class="probleminput" type="text" id="input_ch6_p2_b2" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch6_p2', 2)">Submit</button>
    </div>
    <p role="status" aria-atomic="true" id="feedback_ch6_p2" style="color: red"></p>

---

!!! write-problem "Write problem 3"
    
    Write a function to build a table of shifted alphabets. The left argument ⍺ is a vector of shift amounts, the right argument ⍵ is an alphabet of any length. Row i of the result is ⍵ rotated left by ⍺[i], wrapping around the end. 

    The full 26 letter table, which you met as CIPHER in Chapter 2, is ``(¯1+⍳26) shift ⎕A``.

    ```apl
          0 3 13 shift ⎕A
    ABCDEFGHIJKLMNOPQRSTUVWXYZ
    DEFGHIJKLMNOPQRSTUVWXYZABC
    NOPQRSTUVWXYZABCDEFGHIJKLM
          ¯1 27 shift ⎕A
    ZABCDEFGHIJKLMNOPQRSTUVWXY
    BCDEFGHIJKLMNOPQRSTUVWXYZA
          0 1 2 shift 'FINSKA'
    FINSKA
    INSKAF
    NSKAFI
          (¯1+⍳5) shift 'ABCDE'
    ABCDE
    BCDEA
    CDEAB
    DEABC
    EABCD
    ```

    Hint: Build a table of positions with the outer product ∘.+, then wrap it with the residue |.

    <div class="problem">
        <span class="problemspan">shift←</span>
        <span class="problemfilltext" id="input_ch6_p3_b1" hidden>A←</span>
        <input aria-label="Chapter 6, write problem 3, answer field 2" class="probleminput" type="text" id="input_ch6_p3_b2" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch6_p3', 2)">Submit</button>
    </div>
    <p role="status" aria-atomic="true" id="feedback_ch6_p3" style="color: red"></p>

---

!!! write-problem "Write problem 4"
    
    A maze has four rooms joined by one-way corridors. The matrix ``maze`` holds a 1 in row i column j when a corridor leads from room i to room j.

    Write a function to count routes through the maze. The left argument ⍺ is such a matrix, the right argument ⍵ is a number of moves, at least 1. Element i j of the result is the number of routes of exactly ⍵ moves from room i to room j. A route may enter the same room more than once.

    ```apl
          ⍝ Corridors: 1→2 1→3 2→3 2→4 3→1 3→4 4→1
          maze ← 4 4⍴0 1 1 0 0 0 1 1 1 0 0 1 1 0 0 0
          maze
    0 1 1 0
    0 0 1 1
    1 0 0 1
    1 0 0 0
          maze routes 1
    0 1 1 0
    0 0 1 1
    1 0 0 1
    1 0 0 0
          maze routes 2
    1 0 1 2
    2 0 0 1
    1 1 1 0
    0 1 1 0
          maze routes 3
    3 1 1 1
    1 2 2 0
    1 1 2 2
    1 0 1 2
    ```

    Hint: Use matrix multiplication +.× and repeat.

    <div class="problem">
        <span class="problemspan">routes←</span>
        <span class="problemfilltext" id="input_ch6_p4_b1" hidden>A←</span>
        <input aria-label="Chapter 6, write problem 4, answer field 2" class="probleminput" type="text" id="input_ch6_p4_b2" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch6_p4', 2)">Submit</button>
    </div>
    <p role="status" aria-atomic="true" id="feedback_ch6_p4" style="color: red"></p>

---

!!! write-problem "Write problem 5"
    
    Write a function to fit a straight line to a set of measurements by least squares. The left argument ⍺ is a vector of times in minutes. The right argument ⍵ is the vector of temperatures measured at those times. Return first the temperature at time zero, then the rise in temperature per minute. (The Y-intercept and the slope)

    ```apl
          times ← 2 4 6 8 10
          times
    2 4 6 8 10
          temps ← 21 30 42 49 61
          temps
    21 30 42 49 61
          times line temps
    10.9 4.95
          1 2 3 line 5 7 9
    3 2
    ```

    Hint: Use the pseudoinverse ⌹

    <div class="problem">
        <span class="problemspan">line←</span>
        <span class="problemfilltext" id="input_ch6_p5_b1" hidden>A←</span>
        <input aria-label="Chapter 6, write problem 5, answer field 2" class="probleminput" type="text" id="input_ch6_p5_b2" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch6_p5', 2)">Submit</button>
    </div>
    <p role="status" aria-atomic="true" id="feedback_ch6_p5" style="color: red"></p>

---

!!! write-problem "Write problem 6"
    
    Write a function to advance a clock. The right argument ⍵ is a time given as the vector hours minutes seconds. The left argument ⍺ is a whole number of seconds to add to it. Return the new time in the same format. 

    ```apl
          20 tick 23 59 50
    0 0 10
          90 tick 10 30 0
    10 31 30
          3600 tick 12 0 0
    13 0 0
          86400 tick 7 15 0
    7 15 0
    ```

    <div class="problem">
        <span class="problemspan">tick←</span>
        <span class="problemfilltext" id="input_ch6_p6_b1" hidden>A←</span>
        <input aria-label="Chapter 6, write problem 6, answer field 2" class="probleminput" type="text" id="input_ch6_p6_b2" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch6_p6', 2)">Submit</button>
    </div>
    <p role="status" aria-atomic="true" id="feedback_ch6_p6" style="color: red"></p>

---

!!! write-problem "Write problem 7"
    
    The digital root of a number is found by replacing the number with the sum of its digits, then repeating until the value stops changing. In base 10, ``12345`` becomes ``15``, then ``6``. A single digit is its own digit sum, so ``6`` does not change.

    Write a function to reduce a number ⍵ to its digital root in the base given as left argument ⍺. The base is 2 or more.

    ```apl
          10 digit_root 12345
    6
          10 digit_root 999999999
    9
          16 digit_root 123456789
    9
          2 digit_root 12345
    1
    ```

    Hint: the power operator with a negative right argument gives the inverse of a function, so ``⍺(⊥⍣¯1)⍵`` gives the digits of ``⍵`` in base ``⍺``.

    <div class="problem">
        <span class="problemspan">digit_root←</span>
        <span class="problemfilltext" id="input_ch6_p7_b1" hidden>A←</span>
        <input aria-label="Chapter 6, write problem 7, answer field 2" class="probleminput" type="text" id="input_ch6_p7_b2" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch6_p7', 2)">Submit</button>
    </div>
    <p role="status" aria-atomic="true" id="feedback_ch6_p7" style="color: red"></p>

---

!!! write-problem "Write problem 8"
    
    A quiz is scored in a matrix. Each row is a round and each column is a player. The first round is a practice round, so its scores are set to 0. The last round counts double. Write a function to apply both rules. You can assume there are at least two rounds.

    ```apl
          rounds ← 4 3⍴7 4 5 2 8 6 9 3 3 5 5 1
          rounds
    7 4 5
    2 8 6
    9 3 3
    5 5 1
          bonus rounds
     0  0 0
     2  8 6
     9  3 3
    10 10 2
    ```

    Hint: Copy ⍵ to a local name before assigning into it.

    <div class="problem">
        <span class="problemspan">bonus←</span>
        <span class="problemfilltext" id="input_ch6_p8_b1" hidden>A←</span>
        <input aria-label="Chapter 6, write problem 8, answer field 2" class="probleminput" type="text" id="input_ch6_p8_b2" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch6_p8', 2)">Submit</button>
    </div>
    <p role="status" aria-atomic="true" id="feedback_ch6_p8" style="color: red"></p>

---

!!! write-problem "Write problem 9"
    
    Write a function to delay all flights on 2024-12-01 by 5 minutes. You can assume that all the times listed end with '30' or '00'.

    ```apl
              flights ← 3 5⍴'Jari N.' 'Helsinki' 'Tallinn' '2024-12-01' '08:00' 'Erik O.' 'Stockholm' 'Gothenburg' '2024-12-01' '14:00' 'Michel A.' 'London' 'Los Angeles' '2024-12-03' '11:30'
              flights
        ┌─────────┬─────────┬───────────┬──────────┬─────┐
        │Jari N.  │Helsinki │Tallinn    │2024-12-01│08:00│
        ├─────────┼─────────┼───────────┼──────────┼─────┤
        │Erik O.  │Stockholm│Gothenburg │2024-12-01│14:00│
        ├─────────┼─────────┼───────────┼──────────┼─────┤
        │Michel A.│London   │Los Angeles│2024-12-03│11:30│
        └─────────┴─────────┴───────────┴──────────┴─────┘
              delay flights
        ┌─────────┬─────────┬───────────┬──────────┬─────┐
        │Jari N.  │Helsinki │Tallinn    │2024-12-01│08:05│
        ├─────────┼─────────┼───────────┼──────────┼─────┤
        │Erik O.  │Stockholm│Gothenburg │2024-12-01│14:05│
        ├─────────┼─────────┼───────────┼──────────┼─────┤
        │Michel A.│London   │Los Angeles│2024-12-03│11:30│
        └─────────┴─────────┴───────────┴──────────┴─────┘
        
    ```

    <div class="problem">
        <span class="problemspan">delay←</span>
        <span class="problemfilltext" id="input_ch6_p9_b1" hidden>A←</span>
        <input aria-label="Chapter 6, write problem 9, answer field 2" class="probleminput" type="text" id="input_ch6_p9_b2" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch6_p9', 2)">Submit</button>
    </div>
    <p role="status" aria-atomic="true" id="feedback_ch6_p9" style="color: red"></p>

---

!!! write-problem "Write problem 10"
    
    Each line of a message has been rotated to the right by its line number minus one. The first line is unchanged, the second line is rotated by one place, and so on. Write a function to undo the rotation. The right argument ⍵ is a vector of character vectors of equal length. The result is a character matrix.

    ```apl
          lines ← 'SHALL' 'P WE ' ' ALAY' 'AME G' '    ?'
          lines
    ┌─────┬─────┬─────┬─────┬─────┐
    │SHALL│P WE │ ALAY│AME G│    ?│
    └─────┴─────┴─────┴─────┴─────┘
          unskew lines
    SHALL
     WE P
    LAY A
     GAME
    ?    
    ```

    Hint: Copy ⍵ to a local name before assigning into it.

    <div class="problem">
        <span class="problemspan">unskew←</span>
        <span class="problemfilltext" id="input_ch6_p10_b1" hidden>A←</span>
        <input aria-label="Chapter 6, write problem 10, answer field 2" class="probleminput" type="text" id="input_ch6_p10_b2" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch6_p10', 2)">Submit</button>
    </div>
    <p role="status" aria-atomic="true" id="feedback_ch6_p10" style="color: red"></p>

---

!!! write-problem "Write problem 11"
    
    A dyadic function is commutative on a set of values if ``x f y`` matches ``y f x`` for every pair of values x and y drawn from that set. Write an operator that takes a dyadic function as its left operand ⍺⍺ and a vector of values as its right argument ⍵. It returns 1 if the operand is commutative on the elements of ⍵, and 0 otherwise.

    ```apl
          +commutes 1 2 3
    1
          -commutes 1 2 3
    0
          ⌈commutes 3 1 4 1 5
    1
          ,commutes 'ABC'
    0
          *commutes 1 2 3
    0
    ```

    Hint: Use the outer product ``∘.⍺⍺``.

    <div class="problem">
        <span class="problemspan">commutes←</span>
        <span class="problemfilltext" id="input_ch6_p11_b1" hidden>A←{f←⍎⍺ ⋄ OP←</span>
        <input aria-label="Chapter 6, write problem 11, answer field 2" class="probleminput" type="text" id="input_ch6_p11_b2" placeholder="your solution here">
        <span class="problemfilltext" id="input_ch6_p11_b3" hidden>⋄ (f OP)⍵}</span>
        <button class="problembutton" onclick="submit_problem('ch6_p11', 3)">Submit</button>
    </div>
    <p role="status" aria-atomic="true" id="feedback_ch6_p11" style="color: red"></p>

---

!!! write-problem "Write problem 12"
    
    Write a function to hide the digits in a text. The right argument ⍵ is a character vector. Every digit in it is replaced with `#`, all other characters stay as they are.

    ```apl
          hide_digits 'Call 040 123 4567'
    Call ### ### ####
          hide_digits '2024-12-01'
    ####-##-##
          hide_digits 'no digits here'
    no digits here
    ```

    <div class="problem">
        <span class="problemspan">hide_digits←</span>
        <span class="problemfilltext" id="input_ch6_p12_b1" hidden>A←</span>
        <input aria-label="Chapter 6, write problem 12, answer field 2" class="probleminput" type="text" id="input_ch6_p12_b2" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch6_p12', 2)">Submit</button>
    </div>
    <p role="status" aria-atomic="true" id="feedback_ch6_p12" style="color: red"></p>

---
