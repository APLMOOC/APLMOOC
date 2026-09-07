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
    Create a dfn that returns the string 'ABBCCCDDDDEEEEEFFFFFF...ZZZZZZZZZZZZZZZZZZZZZZZZZZ' (call it with any right argument, e.g. ``ABB ⍬``)
    <div class="problem">
        <span class="problemspan">ABB←</span>
        <span class="problemfilltext" id="input_ch4_p1_b1" hidden>A←</span>
        <input aria-label="Chapter 4, write problem 1, answer field 2" class="probleminput" type="text" id="input_ch4_p1_b2" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch4_p1', 2)">Submit</button>
    </div>
    <p role="status" aria-atomic="true" id="feedback_ch4_p1" style="color: red"></p>

---

!!! write-problem "Write problem 2"
    Create a dfn that returns the vector ⍺, ⍺+1, ⍺+2, ⍺+3, ..., ⍵
    <div class="problem">
        <span class="problemspan">INT←</span>
        <span class="problemfilltext" id="input_ch4_p2_b1" hidden>A←</span>
        <input aria-label="Chapter 4, write problem 2, answer field 2" class="probleminput" type="text" id="input_ch4_p2_b2" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch4_p2', 2)">Submit</button>
    </div>
    <p role="status" aria-atomic="true" id="feedback_ch4_p2" style="color: red"></p>

---

!!! write-problem "Write problem 3"
    Create a dfn that returns the vector ⍺, ⍺+⍵[1], ⍺+2×⍵[1], ⍺+3×⍵[1], ..., ⍺+⍵[2]×⍵[1]
    ```apl
          1 STEP 10 10
    1 11 21 31 41 51 61 71 81 91 101
    
          2 STEP 0.5 5
    2 2.5 3 3.5 4 4.5
    ```
    <div class="problem">
        <span class="problemspan">STEP←</span>
        <span class="problemfilltext" id="input_ch4_p3_b1" hidden>A←</span>
        <input aria-label="Chapter 4, write problem 3, answer field 2" class="probleminput" type="text" id="input_ch4_p3_b2" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch4_p3', 2)">Submit</button>
    </div>
    <p role="status" aria-atomic="true" id="feedback_ch4_p3" style="color: red"></p>

---

!!! write-problem "Write problem 4"
    Create a dfn that evaluates the following continued fraction to 100 1s (call it with any right argument, e.g. ``RATIO ⍬``)

    $$
          1+\frac{1}{1+\frac{1}{1+\frac{1}{\ldots}}}
    $$

    Hint: Use the reduce / operator with the correct function as its left operand
    <div class="problem">
        <span class="problemspan">RATIO←</span>
        <span class="problemfilltext" id="input_ch4_p4_b1" hidden>A←</span>
        <input aria-label="Chapter 4, write problem 4, answer field 2" class="probleminput" type="text" id="input_ch4_p4_b2" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch4_p4', 2)">Submit</button>
    </div>
    <p role="status" aria-atomic="true" id="feedback_ch4_p4" style="color: red"></p>

---

!!! write-problem "Write problem 5"
    Create a dfn that evaluates the following sum for a right argument ``⍵``

    $$
          \sum_{n=1}^{\omega} \frac{1}{n^2}
    $$

    Hint: Use the reduce / operator
    <div class="problem">
        <span class="problemspan">SUM←</span>
        <span class="problemfilltext" id="input_ch4_p5_b1" hidden>A←</span>
        <input aria-label="Chapter 4, write problem 5, answer field 2" class="probleminput" type="text" id="input_ch4_p5_b2" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch4_p5', 2)">Submit</button>
    </div>
    <p role="status" aria-atomic="true" id="feedback_ch4_p5" style="color: red"></p>

---

!!! write-problem "Write problem 6"
    
    Create a dfn that returns a 1 if every element of its left argument appears somewhere in its right argument, and 0 otherwise.
    ```apl
          1 1 2 3 SUBSET 1 2 3 4 5
    1
          'MEOW' SUBSET 'HOMEOWNER'
    1
          'I' SUBSET 'TEAM'
    0
    ```
    <div class="problem">
        <span class="problemspan">SUBSET←</span>
        <span class="problemfilltext" id="input_ch4_p6_b1" hidden>A←</span>
        <input aria-label="Chapter 4, write problem 6, answer field 2" class="probleminput" type="text" id="input_ch4_p6_b2" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch4_p6', 2)">Submit</button>
    </div>
    <p role="status" aria-atomic="true" id="feedback_ch4_p6" style="color: red"></p>

---

!!! write-problem "Write problem 7"
    
    Create a dfn that returns 1 if ``⍵`` is prime, and 0 otherwise. A prime number is one greater than 1 that is not divisible by any number other than itself and 1, that is, the remainder of division is 0 only for 1 and ``⍵``.

    <div class="problem">
        <span class="problemspan">PRIME←</span>
        <span class="problemfilltext" id="input_ch4_p7_b1" hidden>A←</span>
        <input aria-label="Chapter 4, write problem 7, answer field 2" class="probleminput" type="text" id="input_ch4_p7_b2" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch4_p7', 2)">Submit</button>
    </div>
    <p role="status" aria-atomic="true" id="feedback_ch4_p7" style="color: red"></p>

---

!!! write-problem "Write problem 8"
    
    Create a dfn that takes in a string right argument and returns the most common letter. If several letters occur equally often, return the one that occurs first.

    <div class="problem">
        <span class="problemspan">MODE←</span>
        <span class="problemfilltext" id="input_ch4_p8_b1" hidden>A←</span>
        <input aria-label="Chapter 4, write problem 8, answer field 2" class="probleminput" type="text" id="input_ch4_p8_b2" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch4_p8', 2)">Submit</button>
    </div>
    <p role="status" aria-atomic="true" id="feedback_ch4_p8" style="color: red"></p>

---

!!! write-problem "Write problem 9"
    
    The most common letter in the english language is the letter 'E'. A simple method of obtaining the shift (and thus deciphering) Caesar ciphered text is to look at the most common letter, and shift it back to 'E'. For example, 'GURBJYFNERABGJUNGGURLFRRZ' has most common letter 'R', shifting back 13 spaces gives us 'THEOWLSARENOTWHATTHEYSEEM'.

    Create a dfn that applies this algorithm to a string right argument.

    <div class="problem">
        <span class="problemspan">DECIPHER←</span>
        <span class="problemfilltext" id="input_ch4_p9_b1" hidden>A←{MODE←{({⍺}⌸⍵)[⊃⍒{⍴⍵}⌸⍵]} ⋄ </span>
        <input aria-label="Chapter 4, write problem 9, answer field 2" class="probleminput" type="text" id="input_ch4_p9_b2" placeholder="your solution here">
        <span class="problemfilltext" id="input_ch4_p9_b3" hidden>⍵}</span>
        <button class="problembutton" onclick="submit_problem('ch4_p9', 3)">Submit</button>
    </div>
    <p role="status" aria-atomic="true" id="feedback_ch4_p9" style="color: red"></p>

---

!!! write-problem "Write problem 10"
    
    Create a dfn that generates a random word of length ``⍵``.

    ```apl
          WORD 10
    OJCCKXBSVA
          WORD 5
    SBURB 
    ```


    <div class="problem">
        <span class="problemspan">WORD←</span>
        <span class="problemfilltext" id="input_ch4_p10_b1" hidden>A←</span>
        <input aria-label="Chapter 4, write problem 10, answer field 2" class="probleminput" type="text" id="input_ch4_p10_b2" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch4_p10', 2)">Submit</button>
    </div>
    <p role="status" aria-atomic="true" id="feedback_ch4_p10" style="color: red"></p>

---

!!! write-problem "Write problem 11"
    
    Create a dfn that generates an array of 0s and 1s: for each element of the vector right argument ``⍵``, that many 0s followed by a single 1.

    ```apl
          RUN 2 3 4
    0 0 1 0 0 0 1 0 0 0 0 1
          RUN 10
    0 0 0 0 0 0 0 0 0 0 1
    ```
    
    Hint: One way is to use ∊ member of and +\ plus scan

    <div class="problem">
        <span class="problemspan">RUN←</span>
        <span class="problemfilltext" id="input_ch4_p11_b1" hidden>A←</span>
        <input aria-label="Chapter 4, write problem 11, answer field 2" class="probleminput" type="text" id="input_ch4_p11_b2" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch4_p11', 2)">Submit</button>
    </div>
    <p role="status" aria-atomic="true" id="feedback_ch4_p11" style="color: red"></p>

---


!!! write-problem "Write problem 12"
    
    Create a dfn that generates random words with lengths specified by its right vector argument ``⍵``.
    ```apl
          PHRASE 2 3 4
    OG CPD HXQO 
    ```
    
    Hint: One way is to create a random string of the right length including spaces, then use the function of the previous exercise to place the spaces

    <div class="problem">
        <span class="problemspan">PHRASE←</span>
        <span class="problemfilltext" id="input_ch4_p12_b1" hidden>A←{RUN←{(⍳+/1+⍵)∊+&#92;1+⍵} ⋄ </span>
        <input aria-label="Chapter 4, write problem 12, answer field 2" class="probleminput" type="text" id="input_ch4_p12_b2" placeholder="your solution here">
        <span class="problemfilltext" id="input_ch4_p12_b3" hidden>⍵}</span>
        <button class="problembutton" onclick="submit_problem('ch4_p12', 3)">Submit</button>
    </div>
    <p role="status" aria-atomic="true" id="feedback_ch4_p12" style="color: red"></p>

---