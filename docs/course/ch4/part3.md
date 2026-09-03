# Order from chaos

!!! abstract "This part will cover"

    - Sorting / grade up / grade down
    - Windowed reduce

---

<link rel="stylesheet" href="/styles/ch5part2.css">

As a moviegoer, you love to share the movies you've watched with friends and family. It would be ideal if they could watch all of them, but since your friends have busy schedules you'd like to prioritize your most favorite ones. In order to do this, you need to first sort your movies by rating.

## Grade up and grade down

Luckily, APL implements functions that help sort a list, but they're a little different from other languages. Instead of returning a sorted list, grade up ``⍋`` and grade down ``⍒`` return the indices of the elements of the final sorted array in the initial unsorted array.

Given your array of movies, you get the array of ratings and use the grade down function.

!!! note "Typing the grade functions `⍋` and `⍒`"

    Prefix method: <kbd>PREFIX</kbd> <kbd>$</kbd> for `⍋`, <kbd>PREFIX</kbd> <kbd>#</kbd> for `⍒`

    Tab method: <kbd>A</kbd> <kbd>|</kbd> ++tab++ for `⍋`, <kbd>V</kbd> <kbd>|</kbd> ++tab++ for `⍒`

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
      1↓MovieDB[;3]
4 3.5 4.5 5
      ⍒1↓MovieDB[;3]
4 3 1 2
```

This result tells us that the first element of the sorted array is the ``4``th element of the ratings array, the second is the ``3``rd, and so on. We can obtain the sorted array by accessing these indices.

```apl
       (1↓MovieDB[;3])[⍒1↓MovieDB[;3]]
5 4.5 4 3.5
```

## Sorting by another array

The result is as expected. Since the array obtained from grade down is in terms of indices, then we can also use it to access the movie title and movie runtime arrays.

```apl
       (1↓MovieDB[;1])
┌───────────┬──────────┬─────────────────────┬────────────┐
│Real Genius│Eraserhead│The Devil Wears Prada│12 Angry Men│
└───────────┴──────────┴─────────────────────┴────────────┘
       (1↓MovieDB[;1])[⍒1↓MovieDB[;3]]
┌────────────┬─────────────────────┬───────────┬──────────┐
│12 Angry Men│The Devil Wears Prada│Real Genius│Eraserhead│
└────────────┴─────────────────────┴───────────┴──────────┘
```

As expected! Then, you find the cumulative watch time of the sorted array.

```apl
       +\(1↓MovieDB[;4])[⍒1↓MovieDB[;3]]
96 205 313 402
```

You think roughly three hours is a reasonable amount of time to get people together for, but then you realise the tone of the movies would be all over the place! You realise you'd like movies of the same genre instead.

First, you sort by genre.

```apl
       (1↓MovieDB[;6])[⍒1↓MovieDB[;6]]
┌────────┬───────┬──────┬──────┐
│Thriller│Fantasy│Comedy│Comedy│
└────────┴───────┴──────┴──────┘
       (1↓MovieDB[;1])[⍒1↓MovieDB[;6]]
┌────────────┬──────────┬───────────┬─────────────────────┐
│12 Angry Men│Eraserhead│Real Genius│The Devil Wears Prada│
└────────────┴──────────┴───────────┴─────────────────────┘
```

## Windowed reduction

Then, you'd like to compare the genre of each successive pair of movies, this is where a special kind of reduction called windowed reduction can be used. In addition to reducing a whole vector, you can also reduce successive chunks of a vector by specifying an integer left argument.

For a simple array ``⎕A`` of the alphabet, the result of reducing along catenate with chunks of length 2, ``2,/``, is pairs of successive letters.

```apl
       2,/⎕A
┌──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┐
│AB│BC│CD│DE│EF│FG│GH│HI│IJ│JK│KL│LM│MN│NO│OP│PQ│QR│RS│ST│TU│UV│VW│WX│XY│YZ│
└──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┘
```

For our list of genres, we'd like to check for equality, then access the first index with a matching genre. We will use the where ``⍸`` function, which returns the indices of ``1``s, more on searching in Part 5.

```apl
       ⎕←sorted_genres←(1↓MovieDB[;6])[⍒1↓MovieDB[;6]]
┌────────┬───────┬──────┬──────┐
│Thriller│Fantasy│Comedy│Comedy│
└────────┴───────┴──────┴──────┘
       2≡/sorted_genres
0 0 1
       ⍸2≡/sorted_genres
3
       (sorted_genres)[⍸2≡/sorted_genres]
┌──────┐
│Comedy│
└──────┘
```

Comedy it is!