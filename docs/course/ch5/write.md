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
    
    Write a function to add a new entry to the following leaderboard array with a score of 1000000 with the name "PhotonFury".

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
    
    Given an array of cities with their latitudes and longitudes, create a function to return a matrix of pairwise absolute differences in their latitude and longitudes in the following format

    ```apl
          cities
    ┌──────────┬───────┬────────┐
    │Helsinki  │60.1695│24.9354 │
    ├──────────┼───────┼────────┤
    │Juneau    │58.3019│134.4197│
    ├──────────┼───────┼────────┤
    │Beirut    │33.8886│35.4955 │
    ├──────────┼───────┼────────┤
    │Copenhagen│55.6761│12.5683 │
    └──────────┴───────┴────────┘
          distance cities
    ┌──────────┬───────────────┬───────────────┬───────────────┬───────────────┐
    │X         │Helsinki       │Juneau         │Beirut         │Copenhagen     │
    ├──────────┼───────────────┼───────────────┼───────────────┼───────────────┤
    │Helsinki  │0 0            │1.8676 109.4843│26.2809 10.5601│4.4934 12.3671 │
    ├──────────┼───────────────┼───────────────┼───────────────┼───────────────┤
    │Juneau    │1.8676 109.4843│0 0            │24.4133 98.9242│2.6258 121.8514│
    ├──────────┼───────────────┼───────────────┼───────────────┼───────────────┤
    │Beirut    │26.2809 10.5601│24.4133 98.9242│0 0            │21.7875 22.9272│
    ├──────────┼───────────────┼───────────────┼───────────────┼───────────────┤
    │Copenhagen│4.4934 12.3671 │2.6258 121.8514│21.7875 22.9272│0 0            │
    └──────────┴───────────────┴───────────────┴───────────────┴───────────────┘
    ```

    Hint: Remove the labels from the matrix before computing the distances, then add them afterwards. Use the rank operator ⍤1 2.
    

    <div class="problem">
        <span class="problemspan">cheat←</span>
        <input class="probleminput" type="text" id="input_ch5_p2" placeholder="your solution here">
        <button class="problembutton" onclick="submit_problem('ch5_p2', 2)">Submit</button>
    </div>
    <p id="feedback_ch5_p2" style="color: red"></p>

---