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
    Write a dfn that calculates the harmonic mean of its left and right arguments, mathematically defined as $$H(\alpha,\omega) = \frac{1}{\frac{1}{\alpha}+\frac{1}{\omega}}$$
    <div class="problem">
        <span class="problemspan">H←</span>
        <input class="probleminput" type="text" id="input_ch3_p1" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch3_p1', 2)">Submit</button>
    </div>
    <p id="feedback_ch3_p1" style="color: red"></p>

---

!!! write-problem "Write problem 2"
    Write a dfn that calculates the Heronian mean of its left and right arguments, mathematically defined as $$H(\alpha,\omega) = \frac{1}{3} \cdot (A+\sqrt{AB}+B)$$
    <div class="problem">
        <span class="problemspan">H←</span>
        <input class="probleminput" type="text" id="input_ch3_p2" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch3_p2', 2)">Submit</button>
    </div>
    <p id="feedback_ch3_p2" style="color: red"></p>

---

!!! write-problem "Write problem 3"
    Write a dfn that calculates the geometric mean of its left and right arguments, mathematically defined as $$H(\alpha,\omega) = \sqrt{AB}$$
    <div class="problem">
        <span class="problemspan">H←</span>
        <input class="probleminput" type="text" id="input_ch3_p2" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch3_p3', 2)">Submit</button>
    </div>
    <p id="feedback_ch3_p3" style="color: red"></p>

---


!!! write-problem "Write problem 4"
    Write a dfn that calculates the arithmetic geometric mean of its left and right arguments, which is defined recursively. The left argument calculating the arithmetic mean of ``⍺`` and ``⍵``, the right argument calculating the geometric mean of ``⍺`` and ``⍵``, until both means converge. Mathematically,
    $$   H(\alpha, \omega) = \\left\\{
    \\begin{array}{ll}
        \omega & \\alpha=\\omega \\\\
        H(\frac{\alpha + \omega}{2}, \sqrt{\alpha \omega}) & \\alpha≠\\omega \\\\
    \\end{array} 
    \\right. $$
    <div class="problem">
        <span class="problemspan">H←</span>
        <input class="probleminput" type="text" id="input_ch3_p4" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch3_p4', 2)">Submit</button>
    </div>
    <p id="feedback_ch3_p4" style="color: red"></p>

---

!!! write-problem "Write problem 5"
    Write a dfn that allows the user to choose from some of the means above. The function should take in a right argument array, where the first element is an integer representing which mean to use (see table below), and that particular mean is calculated for the next two elements.
    \\[
    \\begin{array}{cc}
        1 & \text{Arithmetic mean} \\\\
        2 & \text{Geometric mean} \\\\
        3 & \text{Arithmetic-Geometric mean} \\\\
    \\end{array}
    \\]
    <div class="problem">
        <span class="problemspan">H←</span>
        <input class="probleminput" type="text" id="input_ch3_p5" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch3_p5', 2)">Submit</button>
    </div>
    <p id="feedback_ch3_p5" style="color: red"></p>

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
        <input class="probleminput" type="text" id="input_ch3_p6" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch3_p6', 2)">Submit</button>
    </div>
    <p id="feedback_ch3_p6" style="color: red"></p>

---

!!! write-problem "Write problem 7"
    
    Recall the tape-based machine given in the Chapter 2 Write problem 12. 

    ```apl
          INSTRUCTIONS
      ┌─────┬─────┬─────┐
      │1 R 2│1 L 1│1 L 2│
      ├─────┼─────┼─────┤
      │1 L 3│1 R 2│1 N H│
      └─────┴─────┴─────┘
    ```

    The first (second) row of the matrix specifies the possible instructions when the value of the section of tape is a 1 (2). The columns similarly specify the possible instructions depending on the state of the machine.

    Create a dfn FETCH that takes in a two element right argument vector ``⍵``, specifying in the first element the value of the section of tape and the second the state of the machine, and returns the corresponding instruction.

    <div class="problem">
        <span class="problemspan">FETCH←</span>
        <input class="probleminput" type="text" id="input_ch3_p7" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch3_p7', 2)">Submit</button>
    </div>
    <p id="feedback_ch3_p7" style="color: red"></p>

---

!!! write-problem "Write problem 8"
    
    The Caesar cipher encrypts a piece of text by shifting all its letters a fixed amount of places along the alphabet. For example, 'BUNNY' (with indices 2 21 14 14 25) under a shift of 17 places (26 | 2 21 14 14 25 + 17 -> 11 4 23 23 8) becomes 'SLEEP'. 

    Create a dfn that does the intermediate operation of this cipher by shifting an integer right argument vector by an integer left argument, modulo 26.

    <div class="problem">
        <span class="problemspan">SHIFT26←</span>
        <input class="probleminput" type="text" id="input_ch3_p8" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch3_p8', 2)">Submit</button>
    </div>
    <p id="feedback_ch3_p8" style="color: red"></p>

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
        <input class="probleminput" type="text" id="input_ch3_p9" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch3_p9', 2)">Submit</button>
    </div>
    <p id="feedback_ch3_p9" style="color: red"></p>
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

    Hint: Index the vector ``'_*'``

    <div class="problem">
        <span class="problemspan">PLOT</span>
        <input class="probleminput" type="text" id="input_ch3_p10" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch3_p10', 2)">Submit</button>
    </div>
    <p id="feedback_ch3_p10" style="color: red"></p>
---

