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
    Write a dfn that calculates the harmonic mean of its left and right arguments, mathematically defined as $H(\alpha,\omega) = \frac{2}{\frac{1}{\alpha}+\frac{1}{\omega}}$
    <div class="problem">
        <span class="problemspan">H←</span>
        <span class="problemfilltext" id="input_ch3_p1_b1" hidden>A←</span>
        <input aria-label="Chapter 3, write problem 1, answer field 2" class="probleminput" type="text" id="input_ch3_p1_b2" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch3_p1', 2)">Submit</button>
    </div>
    <p role="status" aria-atomic="true" id="feedback_ch3_p1" style="color: red"></p>

---

!!! write-problem "Write problem 2"
    Write a dfn that calculates the Heronian mean of its left and right arguments, mathematically defined as $H(\alpha,\omega) = \frac{1}{3} \cdot (\alpha+\sqrt{\alpha\omega}+\omega)$
    <div class="problem">
        <span class="problemspan">H←</span>
        <span class="problemfilltext" id="input_ch3_p2_b1" hidden>A←</span>
        <input aria-label="Chapter 3, write problem 2, answer field 2" class="probleminput" type="text" id="input_ch3_p2_b2" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch3_p2', 2)">Submit</button>
    </div>
    <p role="status" aria-atomic="true" id="feedback_ch3_p2" style="color: red"></p>

---

!!! write-problem "Write problem 3"
    Write a dfn that calculates the geometric mean of its left and right arguments, mathematically defined as $H(\alpha,\omega) = \sqrt{\alpha\omega}$
    <div class="problem">
        <span class="problemspan">H←</span>
        <span class="problemfilltext" id="input_ch3_p3_b1" hidden>A←</span>
        <input aria-label="Chapter 3, write problem 3, answer field 2" class="probleminput" type="text" id="input_ch3_p3_b2" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch3_p3', 2)">Submit</button>
    </div>
    <p role="status" aria-atomic="true" id="feedback_ch3_p3" style="color: red"></p>

---


!!! write-problem "Write problem 4"
    Write a dfn that calculates the arithmetic geometric mean of its left and right arguments, which is defined recursively. Recurse with the arithmetic mean of ``⍺`` and ``⍵`` as the new left argument and their geometric mean as the new right argument, until the two are equal. Mathematically,
    $$   H(\alpha, \omega) = \\left\\{
    \\begin{array}{ll}
        \omega & \\alpha=\\omega \\\\
        H(\frac{\alpha + \omega}{2}, \sqrt{\alpha \omega}) & \\alpha≠\\omega \\\\
    \\end{array} 
    \\right. $$
    <div class="problem">
        <span class="problemspan">H←</span>
        <span class="problemfilltext" id="input_ch3_p4_b1" hidden>A←</span>
        <input aria-label="Chapter 3, write problem 4, answer field 2" class="probleminput" type="text" id="input_ch3_p4_b2" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch3_p4', 2)">Submit</button>
    </div>
    <p role="status" aria-atomic="true" id="feedback_ch3_p4" style="color: red"></p>

---

!!! write-problem "Write problem 5"
    Write a dfn that allows the user to choose between three means. The function should take in a right argument array, where the first element is an integer representing which mean to use (see table below), and that particular mean is calculated for the next two elements.
    \\[
    \\begin{array}{cc}
        1 & \text{Arithmetic mean} \\\\
        2 & \text{Geometric mean} \\\\
        3 & \text{Arithmetic-Geometric mean} \\\\
    \\end{array}
    \\]
    <div class="problem">
        <span class="problemspan">H←</span>
        <span class="problemfilltext" id="input_ch3_p5_b1" hidden>A←</span>
        <input aria-label="Chapter 3, write problem 5, answer field 2" class="probleminput" type="text" id="input_ch3_p5_b2" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch3_p5', 2)">Submit</button>
    </div>
    <p role="status" aria-atomic="true" id="feedback_ch3_p5" style="color: red"></p>

---

!!! write-problem "Write problem 6"
    Write a dfn called My that displays personal information. The My function should take a string right argument and return the following
    ```apl
          My 'Name'
    DASH
          My 'Age'
    20
          My 'Profession'
    Engineer
          My 'Company'
    Future Gadget Lab LLC
    ```

    Hint: Use the match ≡ function.

    <div class="problem">
        <span class="problemspan">My←</span>
        <span class="problemfilltext" id="input_ch3_p6_b1" hidden>A←</span>
        <input aria-label="Chapter 3, write problem 6, answer field 2" class="probleminput" type="text" id="input_ch3_p6_b2" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch3_p6', 2)">Submit</button>
    </div>
    <p role="status" aria-atomic="true" id="feedback_ch3_p6" style="color: red"></p>

---

!!! write-problem "Write problem 7"
    
    Recall the table of rock, paper, scissors outcomes given in the Chapter 2 Write problem 12.

    ```apl
          ROUND ← 3 3 ⍴ 'DRAW' 'P2 COVERS' 'P1 BLUNTS' 'P1 COVERS' 'DRAW' 'P2 CUTS' 'P2 BLUNTS' 'P1 CUTS' 'DRAW'
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

    Create a dfn PLAY that takes the move made by player 1 as its left argument ``⍺`` and the move made by player 2 as its right argument ``⍵``, each a number from 1 to 3, and returns the outcome of the round.

    <div class="problem">
        <span class="problemspan">PLAY←</span>
        <span class="problemfilltext" id="input_ch3_p7_b1" hidden>A←{ROUND←3 3⍴'DRAW' 'P2 COVERS' 'P1 BLUNTS' 'P1 COVERS' 'DRAW' 'P2 CUTS' 'P2 BLUNTS' 'P1 CUTS' 'DRAW' ⋄ ⍺ </span>
        <input aria-label="Chapter 3, write problem 7, answer field 2" class="probleminput" type="text" id="input_ch3_p7_b2" placeholder="your solution here">
        <span class="problemfilltext" id="input_ch3_p7_b3" hidden>⍵}</span>
        <button class="problembutton" onclick="submit_problem('ch3_p7', 3)">Submit</button>
    </div>
    <p role="status" aria-atomic="true" id="feedback_ch3_p7" style="color: red"></p>

---

!!! write-problem "Write problem 8"
    
    The Caesar cipher encrypts a piece of text by shifting all its letters a fixed amount of places along the alphabet. For example, 'BUNNY' (with indices 2 21 14 14 25) under a shift of 17 places (26 | 2 21 14 14 25 + 17 -> 19 12 5 5 16) becomes 'SLEEP'. 

    Create a dfn that does the intermediate operation of this cipher by shifting an integer right argument vector by an integer left argument, modulo 26.

    <div class="problem">
        <span class="problemspan">SHIFT26←</span>
        <span class="problemfilltext" id="input_ch3_p8_b1" hidden>A←</span>
        <input aria-label="Chapter 3, write problem 8, answer field 2" class="probleminput" type="text" id="input_ch3_p8_b2" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch3_p8', 2)">Submit</button>
    </div>
    <p role="status" aria-atomic="true" id="feedback_ch3_p8" style="color: red"></p>

---

!!! write-problem "Write problem 9"
    
    Create a dfn that returns a matrix of zeroes of size ``⍺`` by ``⍺``, with a 1 in a position specified by the vector right argument ``⍵``. 
    ```apl
          2 SPARSE 2 1
    0 0
    1 0
          10 SPARSE 5 4
    0 0 0 0 0 0 0 0 0 0
    0 0 0 0 0 0 0 0 0 0
    0 0 0 0 0 0 0 0 0 0
    0 0 0 0 0 0 0 0 0 0
    0 0 0 1 0 0 0 0 0 0
    0 0 0 0 0 0 0 0 0 0
    0 0 0 0 0 0 0 0 0 0
    0 0 0 0 0 0 0 0 0 0
    0 0 0 0 0 0 0 0 0 0
    0 0 0 0 0 0 0 0 0 0
    ```
    <div class="problem">
        <span class="problemspan">SPARSE←</span>
        <span class="problemfilltext" id="input_ch3_p9_b1" hidden>A←</span>
        <input aria-label="Chapter 3, write problem 9, answer field 2" class="probleminput" type="text" id="input_ch3_p9_b2" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch3_p9', 2)">Submit</button>
    </div>
    <p role="status" aria-atomic="true" id="feedback_ch3_p9" style="color: red"></p>
---

!!! write-problem "Write problem 10"
    
    Create a dfn that plots a heatmap of a matrix, that is, a ``*`` where the matrix ``⍵`` is above a certain value ``⍺`` and an underscore ``_`` otherwise. For example,
    
    ```apl
          M ← 10 10⍴⍳9
          M
    1 2 3 4 5 6 7 8 9 1
    2 3 4 5 6 7 8 9 1 2
    3 4 5 6 7 8 9 1 2 3
    4 5 6 7 8 9 1 2 3 4
    5 6 7 8 9 1 2 3 4 5
    6 7 8 9 1 2 3 4 5 6
    7 8 9 1 2 3 4 5 6 7
    8 9 1 2 3 4 5 6 7 8
    9 1 2 3 4 5 6 7 8 9
    1 2 3 4 5 6 7 8 9 1

          7 PLOT M
    _______**_
    ______**__
    _____**___
    ____**____
    ___**_____
    __**______
    _**_______
    **_______*
    *_______**
    _______**_
      
    ```

    Hint: Index the vector ``'_*'`` by a matrix

    <div class="problem">
        <span class="problemspan">PLOT←</span>
        <span class="problemfilltext" id="input_ch3_p10_b1" hidden>A←</span>
        <input aria-label="Chapter 3, write problem 10, answer field 2" class="probleminput" type="text" id="input_ch3_p10_b2" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch3_p10', 2)">Submit</button>
    </div>
    <p role="status" aria-atomic="true" id="feedback_ch3_p10" style="color: red"></p>
---

!!! write-problem "Write problem 11"
    
    Create a dfn that returns the singular form of a noun given as a vector right argument ``⍵``, returning 'AN' with the noun when the noun begins with a vowel, and 'A' with the noun otherwise. In this case, 'Y' is not considered a vowel. The nouns will be given in UPPERCASE.

    ```apl
          SINGULAR 'DREAM'
    A DREAM
          SINGULAR 'SNOOZE'
    A SNOOZE
          SINGULAR 'AERODROME'
    AN AERODROME
    ```

    <div class="problem">
        <span class="problemspan">SINGULAR←</span>
        <span class="problemfilltext" id="input_ch3_p11_b1" hidden>A←</span>
        <input aria-label="Chapter 3, write problem 11, answer field 2" class="probleminput" type="text" id="input_ch3_p11_b2" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch3_p11', 2)">Submit</button>
    </div>
    <p role="status" aria-atomic="true" id="feedback_ch3_p11" style="color: red"></p>
---

!!! write-problem "Write problem 12"
    
    Create a dfn that determines an APL MOOC student's final grade. The right argument ``⍵`` is the number of exercises completed. For the sake of this problem, you can assume that the APL MOOC has 72 exercises. The grade boundaries and expected results are given below

    ```apl
          ⍝ Less than 60%
          GRADE 42
    0
          ⍝ Between 60% and 70%
          GRADE 44
    1
          GRADE 50
    1

          ⍝ Between 70% and 80%
          GRADE 51
    2
          GRADE 57
    2

          ⍝ Between 80% and 90%
          GRADE 58
    3
          GRADE 64
    3

          ⍝ Between 90% and 99%
          GRADE 65
    4
          GRADE 71
    4

          ⍝ Between 99% and 100%
          GRADE 72
    5

          ⍝ Any higher returns nothing
          GRADE 73
    ```

    <div class="problem">
        <span class="problemspan">GRADE←</span>
        <span class="problemfilltext" id="input_ch3_p12_b1" hidden>A←</span>
        <input aria-label="Chapter 3, write problem 12, answer field 2" class="probleminput" type="text" id="input_ch3_p12_b2" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch3_p12', 2)">Submit</button>
    </div>
    <p role="status" aria-atomic="true" id="feedback_ch3_p12" style="color: red"></p>
---
