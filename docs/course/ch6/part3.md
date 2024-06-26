# Encoding and decoding
---

This part will cover:

- Encode
- Decode
- Numbers in different bases

A common operation in the manipulation of time data is the formatting of a period of time into a standard format in terms of days, hours, minutes, and seconds. This appears, for example, when calculating the time difference between two dates. 

A similar problem of grouping numbers is converting between decimal and binary, a very common operation when dealing with encoding or decoding numbers numbers between human-readable data and machine data.

The same calculation even appears when dealing with measurements and converting between measurement systems, such length or weight in SI or imperial units.

The general problem is solved by the ⊤ encode and ⊥ decode functions, which convert to and from a different groupings of a number. Mathematically, this is converting between mixed-radix number systems.

For the problems mentioned above, we implement solutions using encode and decode functions. The encode ⊤ function takes in a left argument vector of groupings and a right argument to be encoded.

```apl
       ⍝ Converting 10000 seconds
	     ⍝ 24 hours in a day, 60 minutes in an hour, 60 seconds in a minute
	     24 60 60 ⊤ 10000 
2 46 40
       ⍝ Two hours, 46 minutes, 40 seconds
```

The left argument can even be decimal numbers, for example in the case of getting the average number of years (since leap years have 366 days, as opposed to 365).

```apl

       ⍝ Converting 1000000000 (one billion) seconds to average years, days
       ⍝ Up to 1000 years, ~365.25 days in a year, 24 hours in a day, ...
       1000 365.25 24 60 60 ⊤ 1000000000
 31 251.25 1 46 40
			 ⍝ 31 average years, 251.25 days, 1 hour, 46 minutes, 40 seconds
```

Note that an extra grouping for the leftmost value had to be added (measuring 1000 years), otherwise it would not be returned.

The decode function takes in a left argument vector of groupings and a right argument to be encoded. It can also take in one simple scalar left argument in case the groupings are equal.

```apl
      ⍝ Convert 10 to 8-bit binary
	    (8/2) ⊤ 10
0 0 0 0 1 0 1 0

      2 ⊥ 1 0 1 0 1 0
42
      ⍝ Equivalent to
	    (1×2*5)+(1×2*3)+(1×2*1)
42
```

For converting between SI units of distance and imperial units

```apl
      ⍝ One million millimeters 
      ⍝ to millimeters, centimeters, meters, kilometers, up to 10000km
      10000 1000 10 10 ⊤ 1000000
1 0 0 0
      ⍝ 1 kilometer
      
      ⍝ Convert from millimeters to mils (thousands of an inch)
      1000000 × (1÷0.0254)
39370078.7402

      ⍝ One million millimeters
      ⍝ to mils, inches, feet, yards, miles, leagues
      ⍝ (1÷0.0254) mm to mils
      ⍝ 1000 mils to inches
      ⍝ 12 inches to a foot
      ⍝ 3 feet to a yard
      ⍝ 1760 yards to a mile
      ⍝ Measuring up to 1000 miles
      1000 1760 3 12 1000 ⊤ 1000000
0 1093 1 10 78.7402
      ⍝ 1093 yards, 1 foot, 10 inches, 78.7402 mils
      
      ⍝ Back to millimeters
	    0.0254 × 1000 1760 3 12 1000 ⊥ 0 1093 1 10 78.7402
1000000
```
