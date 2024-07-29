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
    Calculate the area of a room which is 130.7 long and 206.55 wide.
    <div class="problem">
        <span class="problemspan">⎕←</span>
        <span class="problemfilltext">130.7</span>
        <input class="problemfillinput" type="text" id="input_ch1_p1" placeholder="fill in the blank" oninput="fillinput_resize(this)">
        <span class="problemfilltext">206.55</span>
        <button class="problembutton" onclick="submit_problem('ch1_p1')">Submit</button>
    </div>
    <p id="feedback_ch1_p1" style="color: red"></p>

---

!!! write-problem "Write problem 2"
    A grandpa decreases in height by 2.5cm every year.
    If he is 150cm tall now, how tall will he be in 15 years?
    <div class="problem">
        <span class="problemspan">⎕←</span>
        <span class="problemfilltext">150</span>
        <input class="problemfillinput" type="text" id="input_ch1_p2_b1" placeholder="fill in the blank" oninput="fillinput_resize(this)">
        <span class="problemfilltext">2.5</span>
        <input class="problemfillinput" type="text" id="input_ch1_p2_b2" placeholder="fill in the blank" oninput="fillinput_resize(this)">
        <span class="problemfilltext">15</span>
        <button class="problembutton" onclick="submit_problem('ch1_p2', 2)">Submit</button>
    </div>
    <p id="feedback_ch1_p2" style="color: red"></p>

---

!!! write-problem "Write problem 3"
    If 12 chairs cost you 200000, what is the price per chair?
    <div class="problem">
        <span class="problemspan">⎕←</span>
        <span class="problemfilltext">12</span>
        <input class="problemfillinput" type="text" id="input_ch1_p3" placeholder="fill in the blank" oninput="fillinput_resize(this)">
        <span class="problemfilltext">200000</span>
        <button class="problembutton" onclick="submit_problem('ch1_p3')">Submit</button>
    </div>
    <p id="feedback_ch1_p3" style="color: red"></p>

---

!!! write-problem "Write problem 4"
    Your current bank balance is ¯420€. You are in big trouble.
    What will be your balance if you take just another quick loan of 100€?
    <div class="problem">
        <span class="problemspan">⎕←</span>
        <span class="problemfilltext">¯420</span>
        <input class="problemfillinput" type="text" id="input_ch1_p4" placeholder="fill in the blank" oninput="fillinput_resize(this)">
        <span class="problemfilltext">100</span>
        <button class="problembutton" onclick="submit_problem('ch1_p4')">Submit</button>
    </div>
    <p id="feedback_ch1_p4" style="color: red"></p>

---

!!! write-problem "Write problem 5"
    Cause a `SYNTAX ERROR` using as few symbols as possible.
    <div class="problem">
        <span class="problemspan">⎕←</span>
        <input class="probleminput" type="text" id="input_ch1_p5" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch1_p5')">Submit</button>
    </div>
    <p id="feedback_ch1_p5" style="color: red"></p>

---

!!! write-problem "Write problem 6"
    Cause a `DOMAIN ERROR`.
    <div class="problem">
        <span class="problemspan">⎕←</span>
        <input class="probleminput" type="text" id="input_ch1_p6" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch1_p6')">Submit</button>
    </div>
    <p id="feedback_ch1_p6" style="color: red"></p>

---

!!! write-problem "Write problem 7"
    Rewrite the following expression with as few parentheses as possible.
    ```apl
    (((x*2)+(y*2))*.5)
    ```
    <div class="problem">
        <span class="problemspan">⎕←</span>
        <input class="probleminput" type="text" id="input_ch1_p7" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch1_p7')">Submit</button>
    </div>
    <p id="feedback_ch1_p7" style="color: red"></p>

---

!!! write-problem "Write problem 8"
    Compute the mean of the numbers 1, 57, 237, ¯5, 42.
    <div class="problem">
        <span class="problemspan">⎕←</span>
        <input class="problemfillinput" type="text" id="input_ch1_p8_b1" placeholder="fill in the blank" oninput="fillinput_resize(this)">
        <span class="problemfilltext">1</span>
        <input class="problemfillinput" type="text" id="input_ch1_p8_b2" placeholder="fill in the blank" oninput="fillinput_resize(this)">
        <span class="problemfilltext">57</span>
        <input class="problemfillinput" type="text" id="input_ch1_p8_b3" placeholder="fill in the blank" oninput="fillinput_resize(this)">
        <span class="problemfilltext">237</span>
        <input class="problemfillinput" type="text" id="input_ch1_p8_b4" placeholder="fill in the blank" oninput="fillinput_resize(this)">
        <span class="problemfilltext">¯5</span>
        <input class="problemfillinput" type="text" id="input_ch1_p8_b5" placeholder="fill in the blank" oninput="fillinput_resize(this)">
        <span class="problemfilltext">42</span>
        <input class="problemfillinput" type="text" id="input_ch1_p8_b6" placeholder="fill in the blank" oninput="fillinput_resize(this)">
        <button class="problembutton" onclick="submit_problem('ch1_p8', 6)">Submit</button>
    </div>
    <p id="feedback_ch1_p8" style="color: red"></p>

---

!!! write-problem "Write problem 9"
    You've got a 5 megawatt laser due in 15 days. If you've already got a 2.5 megawatt laser, how many megawatts a day do you have to add?
    <div class="problem">
        <span class="problemspan">⎕←</span>
        <input class="problemfillinput" type="text" id="input_ch1_p9_b1" placeholder="fill in the blank" oninput="fillinput_resize(this)">
        <span class="problemfilltext">5</span>
        <input class="problemfillinput" type="text" id="input_ch1_p9_b2" placeholder="fill in the blank" oninput="fillinput_resize(this)">
        <span class="problemfilltext">15</span>
        <button class="problembutton" onclick="submit_problem('ch1_p9', 2)">Submit</button>
    </div>
    <p id="feedback_ch1_p9" style="color: red"></p>

---

!!! write-problem "Write problem 10"
    Subtract 7 from 16, divide the result by 3, add 8, multiply by 2.5, and square the result.
    Use as few parentheses as possible.
    <div class="problem">
        <span class="problemspan">⎕←</span>
        <input class="probleminput" type="text" id="input_ch1_p10" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch1_p10')">Submit</button>
    </div>
    <p id="feedback_ch1_p10" style="color: red"></p>

---

!!! write-problem "Write problem 11"
    Write a nonempty line of code that does nothing (doesn't display anything on the screen).
    <div class="problem">
        <span class="problemspan">⎕←</span>
        <input class="probleminput" type="text" id="input_ch1_p11" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch1_p11')">Submit</button>
    </div>
    <p id="feedback_ch1_p11" style="color: red"></p>

---

!!! write-problem "Write problem 12"
    Rewrite the following line of code using less than 7 parentheses.
    ```apl
    ((((x+3.5)×(x+6))-(((2+y)×(z×8.5))÷¯20)⍝((()())))()()((()()))()()()()))())))()(((
    ```
    <div class="problem">
        <span class="problemspan">⎕←</span>
        <input class="probleminput" type="text" id="input_ch1_p12" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch1_p12')">Submit</button>
    </div>
    <p id="feedback_ch1_p12" style="color: red"></p>
