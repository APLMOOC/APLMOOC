# Arithmetic operations on vectors

!!! abstract "This part will cover"

    - Operations work on vectors all at once
    - Length error

---

<link rel="stylesheet" href="/styles/ch5part2.css">

You might wonder, is there any additional benefit to putting data in vectors beyond just organisation? 

After you've made all your measurements, you suddenly realise that all the American temperature sensors have been giving values in Fahrenheit! Terrible news! After about 2000 milliseconds of googling, you find the formula to convert them to better units:

$$Celsius = (Fahrenheit - 32) \cdot \frac{5}{9}$$

To test it out, you try to convert the current room temperature reading of 72.1

```apl
      (5 × 72.1 - 32) ÷ 9
22.27777778
```

Great! What’s not so great is that the temperature sensor has been left generating data for the whole week, and there are a bunch of readings to convert to Celsius

```apl
      TEMP_F ← 71.2 71.4 73.3 73.0 73.1 72.8 72.5
```

It would take you much longer than your legally mandated lunch break to convert the data from this sensor, and there are 200 of them lying around! Fortunately, APL is designed to process vector data. You can write the following

```apl
      ⎕ ← TEMP_CELSIUS ← (5 × TEMP_F - 32) ÷ 9
21.77777778 21.88888889 22.94444444 22.77777778 22.83333333 22.66666667 22.5
```

That's all in Celsius! What’s going on here?

In APL, all the basic arithmetic functions apply to all the elements of a vector. If you are familiar with functional programming, you might know the `map` function, which applies a function to each element of a vector. In APL, this is done automatically for all the basic arithmetic functions, if one of the parameters is a scalar:

```apl
      TEMP_F - 32
39.2 39.4 41.3 41 41.1 40.8 40.5
      TEMP_F + 32
103.2 103.4 105.3 105 105.1 104.8 104.5
      32 - TEMP_F
¯39.2 ¯39.4 ¯41.3 ¯41 ¯41.1 ¯40.8 ¯40.5
      100+1 2 3      
101 102 103
      1 2 3+100      
101 102 103  
```

Pay close attention to the last two examples; constructing a vector using spaces always takes precedence over other operations, otherwise ``1 2 3+100`` would be ``1 2 103``. If that is what we want, we can add extra parentheses

```apl
      1 2 (3+100)
1 2 103
```

Now you can do arithmetic to a list of numbers however you like! After figuring this out, you decided to also check the temperature reading of a sensor outside the ISS:

```apl
      TEMP_OUTSIDE ← 118.5 97.1 59.5 30.0 ¯9.7 ¯62.3 ¯113.2
```

That’s some extreme temperature right there! And it makes you start to wonder, what temperature difference is the hull bearing? Turns out it’s also very simple in APL:

```apl
      ⎕ ← TEMP_DIFF ← TEMP_OUTSIDE - TEMP_CELSIUS
96.72222222 75.21111111 36.55555556 7.222222222 ¯32.53333333 ¯84.96666667 ¯135.7
```

Applying a basic arithmetic function to two vectors applies it to their components! It applies this function for the first element on the left with the first element on the right, noting the result, then the second element on the left with the second element on the right, and so on. This is analogous to `map` with a binary operation and two iterators in Python, and `zipWith` in Haskell. 

```apl
      ⍝ Approximations to pi
      3 256 25 339 22 3927 ÷ 1 81 8 108 7 1250
      3 3.160493827 3.125 3.138888889 3.142857143 3.1416
```

There is one serious caveat though:

```apl
      1 2 3 - 4 5
LENGTH ERROR: Mismatched left and right argument shapes
      1 2 3-4 5
           ∧
```

The length of the vectors must match, APL will not silently truncate the longer one or fill in the difference.

```apl
      1 2 3 ÷ 2 2 0
DOMAIN ERROR: Divide by zero
      1 2 3÷2 2 0
           ∧
```

Unfortunately, APL doesn’t point out on which element the error occurred. If you get this kind of error in a complex expression, you can use the intermediate assignment and printout to help debug the situation.