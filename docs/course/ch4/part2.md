# Reductions and scans

!!! abstract "This part will cover"

    - The reduction operator
    - The scan operator

---

You are a climate scientist at a remote reserach station in Antarctica. You are orbiting the Earth at an elevation of 2500 meters and a speed of 0.00008 kilometers per hour.

In long intervals of time between antarctic expeditions, you have to process sea ice data from all over tha island. Unfortunately for you, the madness of being alone is degrading your ability to do manual calculation. Unfortunately for the scientific community, you’ve decided to let the computer handle it without double checking.

Vectors in APL are represented, and can be created, by a collection of scalars separated by spaces. The reduce / operator can be naively thought of as replacing these spaces with a function specified by its left argument, and returning the result as a scalar.

```apl
      SURFACE_ICE_TEMPERATURE
¯11.15 ¯7.15 ¯7.55 ¯6.15 ¯12.15 ¯9.55

      ⍝ Sum of temperatures
      +/SURFACE_ICE_TEMPERATURE
¯53.7

      ⍝ Sum written explicitly
      ¯11.15+¯7.15+¯7.55+¯6.15+¯12.15+¯9.55
¯53.7

      ⍝ Average of temperatures
      (+/SURFACE_ICE_TEMPERATURE)÷⍴SURFACE_ICE_TEMPERATURE
¯8.95
      
      SURFACE_ICE_PERCENT_CHANGE
¯6.9 ¯5.6 ¯7.2 ¯4.3 ¯2.5 ¯8.6

      ⍝ Convert from percent
      SURFACE_ICE_CHANGE ← 1 + SURFACE_ICE_PERCENT_CHANGE ÷ 100
0.931 0.944 0.928 0.957 0.975 0.914

      ⍝ Product of all changes to get total change
      SURFACE_ICE_TOTAL_CHANGE ← ×/0.931 0.944 0.928 0.957 0.975 0.914
      SURFACE_ICE_TOTAL_CHANGE
0.6955564796

      ⍝ Product written explicitly
      0.931×0.944×0.928×0.957×0.975×0.914
0.6955564796

      ⍝ LCM of numbers from 1 to 20
      ∧/⍳20 
2520

      ⍝ LCM explicitly
      1∧2∧3∧4∧5∧6∧7∧8∧9∧10∧11∧12∧13∧14∧15∧16∧17∧18∧19∧20
2520
```

Note that the reduce / operator always reduces the rank of its right argument by one; for example, reducing using the catenate , function creates a scalar which contains the array. More on nested scalars in Chapter 5.

```apl
      ,/⍳10
┌────────────────────┐
│1 2 3 4 5 6 7 8 9 10│
└────────────────────┘

      1,2,3,4,5,6,7,8,9,10
1 2 3 4 5 6 7 8 9 10
```

Since functions act from right to left, it is possible to construct a vector by catenating its elements from the right, and destruct the vector by iterating on it from the right using reduce. In type theory, these can be thought of as the general introduction and elimination rules of lists.

```apl

      1,(2,(3,(4,(5,(6,(7,(8,(9,10))))))))
1 2 3 4 5 6 7 8 9 10

      {⎕←⍵ ⍺}/1,(2,(3,(4,(5,(6,(7,(8,(9,10))))))))
10 9
10 9  8
10 9  8  7
10 9  8  7  6
10 9  8  7  6  5
10 9  8  7  6  5  4
10 9  8  7  6  5  4  3
10 9  8  7  6  5  4  3  2
10 9  8  7  6  5  4  3  2  1
```

It can be seen that for-each loops in imperative programming languages are equivalent to the reduce / operator, since they both destruct a list in the most general way possible. For example, the python ``for x in range(1,11): print(x**2)`` in APL is written as

```apl
      0,⍳10
0 1 2 3 4 5 6 7 8 9 10

      ⍝ Rotate ⌽ function
      ⌽0,⍳10
10 9 8 7 6 5 4 3 2 1 0

       {⎕←⍺*2}/⌽0,⍳10
1
4
9
16
25
36
49
64
81
100
```

The cumulative sum of a list can also be easily expressed using the reduce / operator.

```apl
       {⍺,⍺+⍵}/⍳10
┌──────────────────────────┐
│1 3 6 10 15 21 28 36 45 55│
└──────────────────────────┘
       ⊃{⍺,⍺+⍵}/⍳10
1 3 6 10 15 21 28 36 45 55
```

Note that we had to disclose ⊃ the resulting scalar which contained the resulting vector. More on this in Chapter 5.

There is a dedicated built-in operator that does not have the same limitations, and calculates cumulative functions even for higher dimensional arrays. The scan \ operator cumulatively applies its left argument function on its right argument array and returns a result array of the same rank.

```apl
      ,\⍳5
┌─┬───┬─────┬───────┬─────────┐
│1│1 2│1 2 3│1 2 3 4│1 2 3 4 5│
└─┴───┴─────┴───────┴─────────┘

      +\⍳10
1 3 6 10 15 21 28 36 45 55

      ⍝ Cumulative alternating sum
      -\⍳10
1 ¯1 2 ¯2 3 ¯3 4 ¯4 5 ¯5
      

      ⍳5 5
┌───┬───┬───┬───┬───┐
│1 1│1 2│1 3│1 4│1 5│
├───┼───┼───┼───┼───┤
│2 1│2 2│2 3│2 4│2 5│
├───┼───┼───┼───┼───┤
│3 1│3 2│3 3│3 4│3 5│
├───┼───┼───┼───┼───┤
│4 1│4 2│4 3│4 4│4 5│
├───┼───┼───┼───┼───┤
│5 1│5 2│5 3│5 4│5 5│
└───┴───┴───┴───┴───┘

      +\⍳5 5
┌───┬────┬────┬─────┬─────┐
│1 1│2 3 │3 6 │4 10 │5 15 │
├───┼────┼────┼─────┼─────┤
│2 1│4 3 │6 6 │8 10 │10 15│
├───┼────┼────┼─────┼─────┤
│3 1│6 3 │9 6 │12 10│15 15│
├───┼────┼────┼─────┼─────┤
│4 1│8 3 │12 6│16 10│20 15│
├───┼────┼────┼─────┼─────┤
│5 1│10 3│15 6│20 10│25 15│
└───┴────┴────┴─────┴─────┘

	⍝ Cumulative maximum
      ⌈\ 1 0 1 2 3 2 ¯1 4 2 1
1 1 1 2 3 3 3 4 4 4

      ⍝ Cumulative minimum
      ⌊\ 1 0 1 2 3 2 ¯1 4 2 1
1 0 0 0 0 0 ¯1 ¯1 ¯1 ¯1
      
      M ← ? 5 5 ⍴ 10
      M
9 10 2 1  4
8  2 9 3  2
6  4 3 2  8
8  5 5 2  1
2 10 2 2 10

      ⌈\M
9 10 10 10 10
8  8  9  9  9
6  6  6  6  8
8  8  8  8  8
2 10 10 10 10

      ⌊\M
9 9 2 1 1
8 2 2 2 2
6 4 3 2 2
8 5 5 2 1
2 2 2 2 2
```