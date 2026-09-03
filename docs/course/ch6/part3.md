# Encoding and decoding

!!! abstract "This part will cover"
    
    - Encode
    - Decode

---

<link rel="stylesheet" href="/styles/ch5part2.css">

A common operation in the manipulation of time data is the formatting of a period of time into a standard format in terms of days, hours, minutes, and seconds. This appears, for example, when calculating the time difference between two dates. 

A similar problem of grouping numbers is converting between decimal and binary, a very common operation when dealing with encoding or decoding numbers between human-readable data and machine data.

The same calculation even appears when dealing with measurements and converting between measurement systems, such length or weight in SI or imperial units.

The general problem is solved by the ``⊤`` encode and ``⊥`` decode functions, which convert to and from a different groupings of a number. Mathematically, this is converting between mixed-radix number systems.

## Encode

For the problems mentioned above, we implement solutions using encode and decode functions. The encode ⊤ function takes in a left argument vector of groupings and a right argument to be encoded.

Let's start by converting 10000 seconds, we specify that a day has 24 hours, an hour has 60 minutes, and a minute has 60 seconds

```apl
      ⍝ Converting 10000 seconds
      24 60 60 ⊤ 10000
2 46 40
```
The result is 2 hours, 46 minutes, and 40 seconds.

The left argument can include decimal numbers, which is needed when dealing with an average number of years (because of the existence of leap years, there are 365.25 days on average in a year)

Converting a larger period of time, like one billion seconds

```apl
       1000 365.25 24 60 60 ⊤ 1000000000
 31 251.25 1 46 40
```

The result is 31 average years, 251.25 days, 1 hour, 46 minutes, and 40 seconds. Note that an extra grouping for the leftmost value had to be added.

Converting the decimal number 10 to its byte representation. Each grouping gives one digit, so a single grouping gives only the last one

```apl
      (8/2) ⊤ 10
0 0 0 0 1 0 1 0
```

## Decode

The decode function takes in a left argument vector of groupings and a right argument to be decoded. It can also take in one simple scalar left argument in case the groupings are equal.

Converting the binary number ``101010`` to decimal

```apl
      2 ⊥ 1 0 1 0 1 0
42
      ⍝ Equivalent to
      (1×2*5)+(1×2*3)+(1×2*1)
42
```

In section 6.4, we will introduce a method to convert between bases without needing to know how many places are needed beforehand. 

## Mixed radix units

As an example of converting between SI units of distance and imperial units, we convert one million millimeters. There are 10 millimeters in a centimeter, 10 centimeters in a decimeter, 10 decimeters in a meter, and so on

```apl
      10 10 10 10 10 10 10 ⊤ 1000000
1 0 0 0 0 0 0
      ⍝ 1 kilometer
      
      ⍝ Convert from millimeters to mils (thousandths of an inch)
      1000000 ÷ 0.0254
39370078.74
```

In imperial units, 1000 mils are in an inch, 12 inches are in a foot, 3 feet are in a yard, 1760 yards are in a mile, and 3 miles are in a league

```apl
      3 1760 3 12 1000 ⊤ 1000000 ÷ 0.0254
0 1093 1 10 78.74015749
      ⍝ 1093 yards, 1 foot, 10 inches, 78.74015749 mils
      
      ⍝ Back to millimeters
      0.0254 × (3 1760 3 12 1000 ⊥ 0 1093 1 10 78.74015749)
1000000
```
