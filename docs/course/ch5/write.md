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


!!! write-problem "Write problem 2"
    
    Write a function to add a new entry at the top of the following leaderboard array as right argument ⍵ with a score of 1000000 with a name given by a left argument ⍺.

    ```apl
          leaderboard
    ┌────────────┬──────┐
    │SpaceTornado│999905│
    ├────────────┼──────┤
    │StarSpangler│999875│
    ├────────────┼──────┤
    │MoonJuice   │999870│
    ├────────────┼──────┤
    │RocketRanger│894900│
    ├────────────┼──────┤
    │AlienNation │545990│
    └────────────┴──────┘
          'PhotonFury' cheat leaderboard
    ┌────────────┬───────┐
    │PhotonFury  │1000000│
    ├────────────┼───────┤
    │SpaceTornado│999905 │
    ├────────────┼───────┤
    │StarSpangler│999875 │
    ├────────────┼───────┤
    │MoonJuice   │999870 │
    ├────────────┼───────┤
    │RocketRanger│894900 │
    ├────────────┼───────┤
    │AlienNation │545990 │
    └────────────┴───────┘
    ```
    

    <div class="problem">
        <span class="problemspan">cheat←</span>
        <input class="probleminput" type="text" id="input_ch5_p2" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch5_p2', 2)">Submit</button>
    </div>
    <p id="feedback_ch5_p2" style="color: red"></p>

---


!!! write-problem "Write problem 3"
    
    Write a function to filter for all flights on the date given as a right function argument ⍵

    ```apl
          flights
    ┌─────────┬─────────┬───────────┬──────────┬─────┐
    │Jari N.  │Helsinki │Tallinn    │2024-12-01│08:00│
    ├─────────┼─────────┼───────────┼──────────┼─────┤
    │Erik O.  │Stockholm│Gothenburg │2024-12-01│14:00│
    ├─────────┼─────────┼───────────┼──────────┼─────┤
    │Michel A.│London   │Los Angeles│2024-12-03│11:30│
    └─────────┴─────────┴───────────┴──────────┴─────┘
          flights on_date '2024-12-01'
    ┌───────┬─────────┬──────────┬──────────┬─────┐
    │Jari N.│Helsinki │Tallinn   │2024-12-01│08:00│
    ├───────┼─────────┼──────────┼──────────┼─────┤
    │Erik O.│Stockholm│Gothenburg│2024-12-01│14:00│
    └───────┴─────────┴──────────┴──────────┴─────┘
    ```
    

    <div class="problem">
        <span class="problemspan">on_date←</span>
        <input class="probleminput" type="text" id="input_ch5_p3" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch5_p3', 2)">Submit</button>
    </div>
    <p id="feedback_ch5_p3" style="color: red"></p>

---

!!! write-problem "Write problem 4"
    
    Given an array of cities with their latitudes and longitudes as right argument ⍵, create a function to return a matrix of absolute differences in their latitude and longitudes in the following format

    ```apl
          cities
    ┌────────┬───────┬─────────┐
    │Helsinki│60.1695│24.9354  │
    ├────────┼───────┼─────────┤
    │Juneau  │58.3019│¯134.4197│
    ├────────┼───────┼─────────┤
    │Beirut  │33.8886│35.4955  │
    ├────────┼───────┼─────────┤
    │Havana  │23.1136│¯82.3666 │
    └────────┴───────┴─────────┘
          distance cities
    ┌────────┬───────────────┬────────────────┬────────────────┬───────────────┐
    │X       │Helsinki       │Juneau          │Beirut          │Havana         │
    ├────────┼───────────────┼────────────────┼────────────────┼───────────────┤
    │Helsinki│0 0            │1.8676 159.3551 │26.2809 10.5601 │37.0559 107.302│
    ├────────┼───────────────┼────────────────┼────────────────┼───────────────┤
    │Juneau  │1.8676 159.3551│0 0             │24.4133 169.9152│35.1883 52.0531│
    ├────────┼───────────────┼────────────────┼────────────────┼───────────────┤
    │Beirut  │26.2809 10.5601│24.4133 169.9152│0 0             │10.775 117.8621│
    ├────────┼───────────────┼────────────────┼────────────────┼───────────────┤
    │Havana  │37.0559 107.302│35.1883 52.0531 │10.775 117.8621 │0 0            │
    └────────┴───────────────┴────────────────┴────────────────┴───────────────┘
    ```

    Hint: Remove the labels from the matrix before computing the distances, then add them afterwards. Use the rank operator ⍤1 2.
    

    <div class="problem">
        <span class="problemspan">distance←</span>
        <input class="probleminput" type="text" id="input_ch5_p4" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch5_p4', 2)">Submit</button>
    </div>
    <p id="feedback_ch5_p4" style="color: red"></p>

---



!!! write-problem "Write problem 5"
    
    Write a function to add an extra floor number column to a hotel reservation array. The floor number is always the first digit of the room number, which is stored as a character vector.

    ```apl
          bookings
    ┌─────────┬──────────┬───┐
    │Jari N.  │2024-12-01│427│
    ├─────────┼──────────┼───┤
    │Erik O.  │2024-12-01│506│
    ├─────────┼──────────┼───┤
    │Michel A.│2024-12-03│415│
    └─────────┴──────────┴───┘
          floor bookings
    ┌─────────┬──────────┬───┬─┐
    │Jari N.  │2024-12-01│427│4│
    ├─────────┼──────────┼───┼─┤
    │Erik O.  │2024-12-01│506│5│
    ├─────────┼──────────┼───┼─┤
    │Michel A.│2024-12-03│415│4│
    └─────────┴──────────┴───┴─┘
    ```
    

    <div class="problem">
        <span class="problemspan">floor←</span>
        <input class="probleminput" type="text" id="input_ch5_p5" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch5_p5', 2)">Submit</button>
    </div>
    <p id="feedback_ch5_p5" style="color: red"></p>

---

!!! write-problem "Write problem 6"
    
    Write a function to group an array of hotel bookings by floor.

    ```apl
          bookings
    ┌─────────┬──────────┬───┬─┐
    │Jari N.  │2024-12-01│427│4│
    ├─────────┼──────────┼───┼─┤
    │Erik O.  │2024-12-01│506│5│
    ├─────────┼──────────┼───┼─┤
    │Michel A.│2024-12-03│415│4│
    └─────────┴──────────┴───┴─┘
          group bookings
    ┌────────────────────────────┬──────────────────────────┐
    │┌─────────┬──────────┬───┬─┐│┌───────┬──────────┬───┬─┐│
    ││Jari N.  │2024-12-01│427│4│││Erik O.│2024-12-01│506│5││
    │├─────────┼──────────┼───┼─┤│└───────┴──────────┴───┴─┘│
    ││Michel A.│2024-12-03│415│4││                          │
    │└─────────┴──────────┴───┴─┘│                          │
    └────────────────────────────┴──────────────────────────┘
    
    ```
    

    <div class="problem">
        <span class="problemspan">group←</span>
        <input class="probleminput" type="text" id="input_ch5_p6" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch5_p6', 2)">Submit</button>
    </div>
    <p id="feedback_ch5_p6" style="color: red"></p>

---

!!! write-problem "Write problem 7"
    
    Write a function to turn the elements of a matrix into proportions of the sum of their row.

    ```apl
          matrix
    0 0 0 0 1
    0 0 0 1 1
    1 1 1 1 1
    0 0 0 3 1
    0 1 1 1 1
          proportion matrix
    0   0    0    0    1   
    0   0    0    0.5  0.5 
    0.2 0.2  0.2  0.2  0.2 
    0   0    0    0.75 0.25
    0   0.25 0.25 0.25 0.25
    
    ```
    

    <div class="problem">
        <span class="problemspan">proportion←</span>
        <input class="probleminput" type="text" id="input_ch5_p7" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch5_p7', 2)">Submit</button>
    </div>
    <p id="feedback_ch5_p7" style="color: red"></p>

---

!!! write-problem "Write problem 8"
    
    Write a function to group runs of elements which are equal.

    ```apl
          runs 1 1 9 9 9 2 2 3 4 4
    ┌───┬─────┬───┬─┬───┐
    │1 1│9 9 9│2 2│3│4 4│
    └───┴─────┴───┴─┴───┘
    ```

    <div class="problem">
        <span class="problemspan">runs←</span>
        <input class="probleminput" type="text" id="input_ch5_p8" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch5_p8', 2)">Submit</button>
    </div>
    <p id="feedback_ch5_p8" style="color: red"></p>

---

!!! write-problem "Write problem 9"
    
    Write a function that generates a table of values for sin and cos from 0 to 2pi. The right argument ⍵ is the number of interior points, that is, the number of points strictly between 0 and 2pi. The step between consecutive points is 2pi÷⍵+1. The table has ⍵+2 rows of values.

    ```apl
          trig_table 4
    ┌───────────┬────────────────┬─────────────┐
    │x          │sin x           │cos x        │
    ├───────────┼────────────────┼─────────────┤
    │0          │0               │1            │
    ├───────────┼────────────────┼─────────────┤
    │1.256637061│0.9510565163    │0.3090169944 │
    ├───────────┼────────────────┼─────────────┤
    │2.513274123│0.5877852523    │¯0.8090169944│
    ├───────────┼────────────────┼─────────────┤
    │3.769911184│¯0.5877852523   │¯0.8090169944│
    ├───────────┼────────────────┼─────────────┤
    │5.026548246│¯0.9510565163   │0.3090169944 │
    ├───────────┼────────────────┼─────────────┤
    │6.283185307│¯2.449293598E¯16│1            │
    └───────────┴────────────────┴─────────────┘
          trig_table 1
    ┌───────────┬────────────────┬─────┐
    │x          │sin x           │cos x│
    ├───────────┼────────────────┼─────┤
    │0          │0               │1    │
    ├───────────┼────────────────┼─────┤
    │3.141592654│1.224646799E¯16 │¯1   │
    ├───────────┼────────────────┼─────┤
    │6.283185307│¯2.449293598E¯16│1    │
    └───────────┴────────────────┴─────┘
          trig_table 0
    ┌───────────┬────────────────┬─────┐
    │x          │sin x           │cos x│
    ├───────────┼────────────────┼─────┤
    │0          │0               │1    │
    ├───────────┼────────────────┼─────┤
    │6.283185307│¯2.449293598E¯16│1    │
    └───────────┴────────────────┴─────┘
    ```

    <div class="problem">
        <span class="problemspan">trig_table←</span>
        <input class="probleminput" type="text" id="input_ch5_p9" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch5_p9', 2)">Submit</button>
    </div>
    <p id="feedback_ch5_p9" style="color: red"></p>

---


!!! write-problem "Write problem 10"
    
    Write a function to remove all zero columns from a matrix. 

    ```apl
          M
    0 1 0 2
    0 3 0 0
    0 4 0 5
          nonzero M
    1 2
    3 0
    4 5
    ```

    <div class="problem">
        <span class="problemspan">nonzero←</span>
        <input class="probleminput" type="text" id="input_ch5_p10" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch5_p10', 2)">Submit</button>
    </div>
    <p id="feedback_ch5_p10" style="color: red"></p>

---

!!! write-problem "Write problem 11"
    
    Write a function to remove all 2-cells of a rank-3 array with sum less than 10.

    ```apl
          M
     1  1  1
     1  1  1
     1  1  1
            
     1  2  3
     4  5  6
     7  8  9
            
    10 11 12
    13 14 15
    16 17 18

          significant M
     1  2  3
     4  5  6
     7  8  9
            
    10 11 12
    13 14 15
    16 17 18
    ```

    <div class="problem">
        <span class="problemspan">significant←</span>
        <input class="probleminput" type="text" id="input_ch5_p11" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch5_p11', 2)">Submit</button>
    </div>
    <p id="feedback_ch5_p11" style="color: red"></p>

---


!!! write-problem "Write problem 12"
    
    Write a function that takes in a right argument character vector and returns the matrix that the character vector represents.

    The character vector will have elements separated by commas, 1-cells separated by semicolons, and 2-cells separated by colons.

    ```apl
          a
    a,b,c,d;e,f,g,h:1,2,3,4;5,6,7,8
    
          array a
    ┌─┬─┬─┬─┐
    │a│b│c│d│
    ├─┼─┼─┼─┤
    │e│f│g│h│
    └─┴─┴─┴─┘
    ┌─┬─┬─┬─┐
    │1│2│3│4│
    ├─┼─┼─┼─┤
    │5│6│7│8│
    └─┴─┴─┴─┘
    ```

    Hint: Use the partition ⊆ function

    <div class="problem">
        <span class="problemspan">array←</span>
        <input class="probleminput" type="text" id="input_ch5_p12" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch5_p12', 2)">Submit</button>
    </div>
    <p id="feedback_ch5_p12" style="color: red"></p>

---