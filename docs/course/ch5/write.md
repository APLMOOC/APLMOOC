# Write exercises

Submit APL code for the following exercises.
Your submissions are graded using TMC.

Make sure to [log in](../../account.md) to be able to submit your work!

Remember, you can test out ideas and develop you solution at [TryAPL](https://tryapl.org) before submitting it here.

You can submit as many solutions as you like.
If you submit a correct solution at least once, you will receive points on the TMC server and be able to see the model solution.

If the write problem is red, it is unsolved. If it it green, you have solved it and received points for it on the server.

---


!!! write-problem "Write problem 2"
    
    Write a function to add a new entry at the top of the following leaderboard array as right argument ⍵ with a score of 1000000 with the name "PhotonFury".

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
          cheat leaderboard
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
        <span class="problemspan">cheat←</span>
        <input class="probleminput" type="text" id="input_ch5_p2" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch5_p2', 2)">Submit</button>
    </div>
    <p id="feedback_ch5_p2" style="color: red"></p>

---


!!! write-problem "Write problem 4"
    
    Write a function to filter for all flights on the first of december

    ```apl
          flights
    ┌─────────┬─────────┬───────────┬──────────┬─────┐
    │Jari N.  │Helsinki │Tallinn    │2024-12-01│08:00│
    ├─────────┼─────────┼───────────┼──────────┼─────┤
    │Erik O.  │Stockholm│Gothenburg │2024-12-01│14:00│
    ├─────────┼─────────┼───────────┼──────────┼─────┤
    │Michel A.│London   │Los Angeles│2024-12-03│11:30│
    └─────────┴─────────┴───────────┴──────────┴─────┘
          filter flights
    ┌─────────┬─────────┬───────────┬──────────┬─────┐
    │Jari N.  │Helsinki │Tallinn    │2024-12-01│08:00│
    ├─────────┼─────────┼───────────┼──────────┼─────┤
    │Erik O.  │Stockholm│Gothenburg │2024-12-01│14:00│
    └─────────┴─────────┴───────────┴──────────┴─────┘
    ```
    

    <div class="problem">
        <span class="problemspan">filter←</span>
        <input class="probleminput" type="text" id="input_ch5_p4" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch5_p4', 2)">Submit</button>
    </div>
    <p id="feedback_ch5_p4" style="color: red"></p>

---