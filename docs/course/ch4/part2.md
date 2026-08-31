# Reductions and scans

!!! abstract "This part will cover"

    - The reduction operator
    - The scan operator

---


<link rel="stylesheet" href="/styles/ch5part2.css">
 
In this section, suppose you are (or maybe you really are!) a moviegoer. You are orbiting the Earth at an elevation of 26 meters and a speed of 1340 kilometers per hour.

After your trips to the cinema, you like to log and rate the movies you've watched. Unfortunately for you, your pretentiousness stops you from rating them on easily accessible public websites. Unfortunately for your friends, you're going to make them install APL to see your movie lists.

You start logging your first few movies as an APL array

```apl
MovieDB ← [ 'Title' 'Year' 'Rating' 'Runtime' 'Watches' 'Genre' ⋄
            'Real Genius' 1985 4 108 3 'Comedy' ⋄ 
            'Eraserhead' 1977 3.5 89 1 'Fantasy' ⋄
            'The Devil Wears Prada' 2006 4.5 109 2 'Comedy' ⋄
            '12 Angry Men' 1957 5 96 4 'Thriller'
            ]
      MovieDB
┌─────────────────────┬────┬──────┬───────┬───────┬────────┐
│Title                │Year│Rating│Runtime│Watches│Genre   │
├─────────────────────┼────┼──────┼───────┼───────┼────────┤
│Real Genius          │1985│4     │108    │3      │Comedy  │
├─────────────────────┼────┼──────┼───────┼───────┼────────┤
│Eraserhead           │1977│3.5   │89     │1      │Fantasy │
├─────────────────────┼────┼──────┼───────┼───────┼────────┤
│The Devil Wears Prada│2006│4.5   │109    │2      │Comedy  │
├─────────────────────┼────┼──────┼───────┼───────┼────────┤
│12 Angry Men         │1957│5     │96     │4      │Thriller│
└─────────────────────┴────┴──────┴───────┴───────┴────────┘
```

The first thing you want to do is calculate the total amount of time you've spent watching these movies. You first get the array of runtimes, then the array of times watched, and multiply them together. 

Note that you need to remove the first element of the arrays to get rid of the column labels, more on the drop  function ``↓`` in part 4.

```apl
      1↓MovieDB[;4]
108 89 109 96
      1↓MovieDB[;5]
3 1 2 4
      (1↓MovieDB[;4])×1↓MovieDB[;5]
324 89 218 384
```

## Reduce

To get the total, you need to sum up all the elements of this array, reducing it to a single number. This is where the reduce ``/`` operator comes in!

The reduce operator ``/`` takes a left function argument and a right array argument. On vectors, ``f/v`` applies the function ``f`` between the elements of the vector ``v``, reducing its rank by one.

```apl
      +/(1↓MovieDB[;4])×1↓MovieDB[;5]
1015
```

Note that the reduce ``/`` operator always reduces the rank of its right argument by one; for example, reducing using the catenate ``,`` function creates a scalar which contains the array. More on nested scalars in Chapter 5.

```apl
      1↓MovieDB[;1]
┌───────────┬──────────┬─────────────────────┬────────────┐
│Real Genius│Eraserhead│The Devil Wears Prada│12 Angry Men│
└───────────┴──────────┴─────────────────────┴────────────┘
      {⍺,' ',⍵}/1↓MovieDB[;1]
┌─────────────────────────────────────────────────────────┐
│Real Genius Eraserhead The Devil Wears Prada 12 Angry Men│
└─────────────────────────────────────────────────────────┘
```

As an aside, it can be seen that for-each loops in imperative programming languages are equivalent to the reduce ``/`` operator, since they both destruct a list in the most general way possible. For example, the python ``for x in range(1,11): print(x**2)`` in APL is written as, after first generating the list of values we want using the indices ``⍳`` function:

```apl
      10-0,⍳10
10 9 8 7 6 5 4 3 2 1 0

       {⎕←⍺*2}/10-0,⍳10
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

Next, you're planning on hosting a movie marathon for a couple friends who've never seen your favorites. You're not sure how long it would take, so you try and calculate how long each sequence of movies would take. The cumulative sum of the runtimes can be easily expressed using the reduce ``/`` operator.

```apl
       {⍺,⍺+⍵}/1↓MovieDB[;4]
┌───────────────┐
│108 197 306 402│
└───────────────┘
```

## Scan

More conveniently, there is a built-in operator that calculates cumulative functions even for higher dimensional arrays, without reducing the rank of its argument array. The scan ``\`` operator cumulatively applies its left argument function on its right argument array and returns a result array of the same rank.

Here, we get the cumulative runtime and the movies to watch. 

```apl
      +\1↓MovieDB[;4]
108 197 306 402

      {⍺,' ',⍵}\1↓MovieDB[;1]
┌───────────┬──────────────────────┬────────────────────────────────────────────┬─────────────────────────────────────────────────────────┐
│Real Genius│Real Genius Eraserhead│Real Genius Eraserhead The Devil Wears Prada│Real Genius Eraserhead The Devil Wears Prada 12 Angry Men│
└───────────┴──────────────────────┴────────────────────────────────────────────┴─────────────────────────────────────────────────────────┘
```

This shows you that watching the first three movies would take roughly five hours, but this list of movies doesn't prioritize your favorites. You'd rather watch your highest rated movie first! We will continue planning this event in the next section.