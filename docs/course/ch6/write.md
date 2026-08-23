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



!!! write-problem "Write problem 4"
    
    Write a function to delay all flights on the first of december by 5 minutes. You can assume that all the times listed end with '30' or '00'.

    ```apl
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

    Hint: You can use 
    

    <div class="problem">
        <span class="problemspan">delay←</span>
        <input class="probleminput" type="text" id="input_ch5_p4" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch5_p4', 2)">Submit</button>
    </div>
    <p id="feedback_ch5_p4" style="color: red"></p>

---


{'Pi/',⍕÷⍵÷○1}○÷6 4 3 2 1 write exercise angle to name