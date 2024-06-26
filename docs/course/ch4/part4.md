# Order from chaos
---

This part will cover:

- Sorting / grade up / grade down
- Generating vectors

Measurement of data in real-world systems is often accompanied by noise, which makes the extraction of useful information difficult. In order to introduce techniques which help analyse noisy data, we will first generate artificial noisy data.

The monadic `?` roll function generates a random number for every scalar in its right argument, from 1 to the value of that scalar. 

```apl
       ⍝ Roll a 6-sided die
       ? 6
2
       ? 6 6 6
6 5 3
       ? ⍳10
1 1 3 4 4 6 6 5 8 4
       ? 10*⍳10
8 84 545 5254 99210 693088 7548981 55682236 454935262 2471243355
```

When the argument contains zero (0), a random floating point number between 0 and 1 is returned.

```apl
       ? 0 0 0 0
0.5073955156 0.1942971103 0.3645209613 0.8563507943
       ? 0,⍳4
0.1770380776 1 1 2 4
```

The replicate function can be used to generate a large number of random number in a certain range, by creating a vector of the same number of arbitrary length.

```apl
       6 / 10
10 10 10 10 10 10 10
       ? 6 / 10
9 9 2 9 4 6
```

The dyadic `?` deal function works similarly, but generates a list of random numbers without repeats.

```apl
      5 ? 5
2 5 4 1 3
      5 ? 10
5 7 1 6 8
      10 ? 10
7 5 6 10 1 9 4 2 8 3
      11 ? 10
DOMAIN ERROR: Deal right argument must be greater than or equal to the left argument
      11 ? 10
         ∧
```

Simulating measuring a temperature of 21 degrees with some noise

```apl
       DATA ← 21 + (? 20 / 0) - 0.5
20.51270976 20.84443059 21.20961766 20.85869017 21.05525209 20.8088396 21.00197974 20.88101536 20.70209893 21.28923291
      20.62552888 20.95059287 20.78032757 20.52831086 21.29706401 21.45739671 20.94876038 20.84444697 20.66278673
      20.76248039
```

It is possible to recover the original data by taking an average, using the reduce `/` operator on `+` plus then dividing by the `≢ ` tally of the `DATA` vector.

```apl
       (+/DATA)÷(≢DATA)
20.90107811
       (+/÷≢) DATA
20.90107811
```

For measurements of time-varying data, it would be useful instead to do a moving average. Take, for example, a temperature reading that goes from 20 to 30 over the course of 100 measurements.

```apl
       DATA ← 20+(1÷10)×⍳100
20.1 20.2 20.3 20.4 20.5 20.6 20.7 20.8 20.9 21 21.1 21.2 21.3 21.4 21.5 21.6 21.7 21.8 21.9 22 22.1 22.2 22.3 22.4 22.5
      22.6 22.7 22.8 22.9 23 23.1 23.2 23.3 23.4 23.5 23.6 23.7 23.8 23.9 24 24.1 24.2 24.3 24.4 24.5 24.6 24.7 24.8 24.9
      25 25.1 25.2 25.3 25.4 25.5 25.6 25.7 25.8 25.9 26 26.1 26.2 26.3 26.4 26.5 26.6 26.7 26.8 26.9 27 27.1 27.2 27.3
      27.4 27.5 27.6 27.7 27.8 27.9 28 28.1 28.2 28.3 28.4 28.5 28.6 28.7 28.8 28.9 29 29.1 29.2 29.3 29.4 29.5 29.6 29.7
      29.8 29.9 30      
      ⍝ Add noise
      DATA +← (? 100 / 0) - 0.5
```

The windowed reduce `/` operator applies the reduce function on moving segments of its right argument specific by its left argument.

```apl
       3 +/ 1 2 3 4 5 6
6 9 12 15
       (1+2+3) (2+3+4) (3+4+5) (4+5+6)
6 9 12 15
       2 ×/ ⍳4
2 6 12
       (1×2) (2×3) (3×4)
2 6 12
       3 3 ⍴ ⍳9
1 2 3
4 5 6
7 8 9
       3+/(3 3 ⍴ ⍳9)
6 15 24
```

To get a moving average, the windowed reduce function can be applied to the + plus function and then divided by the size of the window, in this case 5. The result is then rounded to 1 decimal place.

```apl
      RESULT ← (5+/DATA)÷5
      10÷⍨⌈RESULT×10
20.4 20.5 20.7 20.7 20.8 20.8 20.9 20.9 21.1 21.1 21.2 21.4 21.5 21.6 21.8 21.9 21.9 22.1 22.2 22.3 22.5 22.7 22.7 22.8
      22.8 22.8 22.8 22.9 23 23.1 23.2 23.5 23.7 23.6 23.8 23.9 24 24.1 24.4 24.5 24.6 24.5 24.5 24.5 24.5 24.5 24.7 24.9
      24.9 25.2 25.4 25.6 25.7 25.8 25.8 25.9 25.9 26.1 26.2 26.3 26.4 26.6 26.7 26.7 26.9 27 27.1 27.2 27.3 27.3 27.4
      27.4 27.4 27.6 27.8 27.9 28 28.2 28.3 28.3 28.3 28.4 28.6 28.6 28.8 29 29.1 29.2 29.3 29.4 29.3 29.3 29.4 29.6 29.7
      29.8
```

Given a number of temperature readings, it is also possible to sort ascending and descending using the grade up `⍋` and grade down `⍒` functions.

The grade up `⍋` and grade down `⍒` functions return indices of elements of  its right argument in ascending or descending order.

```apl
       DATA ← 20 19 21 22
       ⍋DATA
2 1 3 4
       DATA[⍋DATA]
19 20 21 22
       ⍒DATA
4 3 1 2
       DATA[⍒DATA]
22 21 20 19
```
