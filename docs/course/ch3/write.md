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
    Write a dfn that allows the user to choose one of the means above. The function should take in a right argument array, where the first element is an integer representing which mean to use (see table below), and that particular mean is calculated for the next two elements.
    \\[
    \\begin{array}{cc}
        1 & \text{Arithmetic mean} \\\\
        2 & \text{Harmonic mean} \\\\
        3 & \text{Geometric mean} \\\\
        4 & \text{Heronian mean} \\\\
        5 & \text{Arithmetic-Geometric mean} \\\\
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

    <div class="problem">
        <span class="problemspan">My←</span>
        <input class="probleminput" type="text" id="input_ch3_p6" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch3_p6', 2)">Submit</button>
    </div>
    <p id="feedback_ch3_p6" style="color: red"></p>

---