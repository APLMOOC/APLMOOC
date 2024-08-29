# Write exercises

Submit APL code for the following exercises.
Your submissions are graded using TMC.

Make sure to [log in](../../account.md) to be able to submit your work!

Remember, you can test out ideas and develop you solution at [TryAPL](https://tryapl.org) before submitting it here.

You can submit as many solutions as you like.
If you submit a correct solution at least once, you will receive points on the TMC server and be able to see the model solution.

If the write problem is red, it is unsolved. If it it green, you have solved it and received points for it on the server.

---

!!! write-problem "Write problem 1"
    Create a dfn that returns the string 'ABBCCCDDDDEEEEFFFFF...ZZZZZZZZZZZZZZZZZZZZZZZZZZ'
    <div class="problem">
        <span class="problemspan">ABB←</span>
        <input class="probleminput" type="text" id="input_ch4_p1" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch4_p1', 2)">Submit</button>
    </div>
    <p id="feedback_ch4_p1" style="color: red"></p>

---

!!! write-problem "Write problem 2"
    Create a dfn that returns the vector ⍺, ⍺+1, ⍺+2, ⍺+3, ..., ⍵
    <div class="problem">
        <span class="problemspan">INT←</span>
        <input class="probleminput" type="text" id="input_ch4_p2" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch4_p2', 2)">Submit</button>
    </div>
    <p id="feedback_ch4_p2" style="color: red"></p>

---

!!! write-problem "Write problem 3"
    Create a dfn that returns the vector ⍺, ⍺+⍵[1], ⍺+2×⍵[1], ⍺+3×⍵[1], ..., ⍺+⍵[2]×⍵[1]
    ```apl
          1 step 10 10
    1 11 21 31 41 51 61 71 81 91 101
    
          2 step 0.5 5
    2 2.5 3 3.5 4 4.5
    ```
    <div class="problem">
        <span class="problemspan">STEP←</span>
        <input class="probleminput" type="text" id="input_ch4_p3" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch4_p3', 2)">Submit</button>
    </div>
    <p id="feedback_ch4_p3" style="color: red"></p>

---

!!! write-problem "Write problem 4"
    Create a dfn that evaluates the following continued fraction to 100 1s
    $$
          1+\frac{1}{1+\frac{1}{1+\frac{1}{\ldots}}}
    $$

    Hint: Use the reduce / operator with the right function left argument
    <div class="problem">
        <span class="problemspan">RATIO←</span>
        <input class="probleminput" type="text" id="input_ch4_p4" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch4_p4', 2)">Submit</button>
    </div>
    <p id="feedback_ch4_p4" style="color: red"></p>

---

!!! write-problem "Write problem 5"
    Create a dfn that evaluates the following sum
    $$
          \sum_{n=0}^{100} \frac{1}{n^2}
    $$

    Hint: Use the reduce / operator
    <div class="problem">
        <span class="problemspan">SUM←</span>
        <input class="probleminput" type="text" id="input_ch4_p5" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch4_p5', 2)">Submit</button>
    </div>
    <p id="feedback_ch4_p5" style="color: red"></p>

---

!!! write-problem "Write problem 7"
    
    Create a dfn that returns a 1 if its left argument is totally contained in its right argument, and 0 otherwise.
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
        <input class="probleminput" type="text" id="input_ch4_p7" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch4_p7', 2)">Submit</button>
    </div>
    <p id="feedback_ch4_p7" style="color: red"></p>

---

!!! write-problem "Write problem 8"
    
    Create a dfn that returns 1 if ``⍵`` is prime, and 0 otherwise. A prime number is one that does not divide any number other than itself and 1, that is, the remainder of division is 0 only for 1 and ``⍵``.

    <div class="problem">
        <span class="problemspan">PRIME←</span>
        <input class="probleminput" type="text" id="input_ch4_p8" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch4_p8', 2)">Submit</button>
    </div>
    <p id="feedback_ch4_p8" style="color: red"></p>

---

!!! write-problem "Write problem 9"
    
    Create a dfn that takes in a string right argument and returns the most common letter.

    <div class="problem">
        <span class="problemspan">MODE←</span>
        <input class="probleminput" type="text" id="input_ch4_p9" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch4_p9', 2)">Submit</button>
    </div>
    <p id="feedback_ch4_p9" style="color: red"></p>

---

!!! write-problem "Write problem 10"
    
    The most common letter in the english language is the letter 'E'. A simple method of obtaining the shift (and thus deciphering) Caesar ciphered text is to look at the most common letter, and shift it back to 'E'. For example, 'GURBJYFNERABGJUNGGURLFRRZ' has most common letter 'R', shifting back 13 spaces gives us 'THEOWLSARENOTWHATTHEYSEEM'.

    Create a dfn that applies this algorithm to a string right argument.

    <div class="problem">
        <span class="problemspan">DECIPHER←</span>
        <input class="probleminput" type="text" id="input_ch4_p10" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch4_p10', 2)">Submit</button>
    </div>
    <p id="feedback_ch4_p10" style="color: red"></p>

---