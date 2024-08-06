# Vectors

!!! abstract "This part will cover"

    - Creating vectors
    - Spaces Separate Scalars

---

In the following section, you will play the role of an astronaut aboard the [International Space Station](https://archive.org/details/MeetMeAtTheStationiss). You are currently orbiting the Earth at an altitude of 413km at a speed of 28,013km/h.

In brief intervals of time spent waiting between tasks, you enjoy logging temperatures from sensors all around the ship into a small notebook. Unfortunately for you, your notebook’s completely filled, and none of your colleagues seem to share your enthusiasm for data collection. Unfortunately for mission control, you’ve decided to use critical APL machines on board to store your data.

Typing as fast as possible without the aid of gravity, you manage to write some data without being caught.

```apl
       TEMPERATURE_PAGE1_YEAR1_DAY2_HOUR7_MINUTE42 ← 21.4
       TEMPERATURE_PAGE1_YEAR1_DAY2_HOUR8_MINUTE47 ← 21.8
       TEMPERATURE_PAGE1_YEAR1_DAY2_HOUR10_MINUTE10 ← 22.0
       TEMPERATURE_PAGE1_YEAR1_DAY2_HOUR12_MINUTE01 ← 21.5
       TEMPERATURE_PAGE1_YEAR1_DAY2_HOUR14_MINUTE36 ← 21.3
       TEMPERATURE_PAGE1_YEAR1_DAY2_HOUR16_MINUTE50 ← 22.3
       TEMPERATURE_PAGE2_YEAR1_DAY2_HOUR18_MINUTE23 ← 22.8
       TEMPERATURE_PAGE2_YEAR1_DAY2_HOUR19_MINUTE30 ← 21.5
       TEMPERATURE_PAGE2_YEAR1_DAY2_HOUR21_MINUTE12 ← 22.1
       TEMPERATURE_PAGE2_YEAR1_DAY3_HOUR7_MINUTE15 ← 22.0
       TEMPERATURE_PAGE2_YEAR1_DAY3_HOUR8_MINUTE30 ← 21.9
       TEMPERATURE_PAGE2_YEAR1_DAY3_HOUR9_MINUTE45 ← 22.4
```

This is not the most efficient, or readable, method to input data into your system, and while flicking through your APL notes now crowded with temperatures, you refresh your workspace and instead decide to store your data using vectors.

---

*Vectors* are lines of values. They are defined by writing values separated by one or more spaces. 
	
Vectors are also ordered, it is possible to talk about the element at a specific position, called an index. For example, the first (1) element, the second (2) element, and so on. In code, they can be accessed by adding square brackets to the vector with an index (or multiple indices) in between.

```apl
      ⍝ This is a vector
      FIBB ← 1 1 2 3 5 8 13 21 34 55 

      ⍝ This is also a vector
      KEYA ← 9 249  17 2 157   116 227 91 216    65 86 197 99 86 136 192 

      ⍝ The following are all scalars
      PRIME ← 57
      NUMERALS ← 413
      MCBRT7 ← -7*÷3
      EPSILON ← 2*¯53
      MAGIC ← 1597463007

      ⍝ Note that the decimal separator in APL is the dot
      PI ← 11.001001 ⍝ This is a scalar

      ⍝ This is a vector
      LIST ← PRIME 100 NUMERALS MCBRT7 0.6 EPSILON MAGIC 31.5 

      ⍝ Selecting a single element using an index
      LIST[2] 
100
      ⍝ Selecting multiple values using indices
      LIST[2 1 3]
100 57 413

      ⍝ Selecting multiple values using a vector of indices
      INDICES ← 2 1 3
      LIST[INDICES] 
100 57 413
```

---

```apl
      ⍝ The above temperature lists as vectors
      TEMPERATURE_PAGE1 ← 21.4 21.8 22.0 21.5 21.3 22.3
      TEMPERATURE_PAGE2 ← 22.8 21.5 22.1 22.0 21.9 22.4
      
      TEMPERATURE_PAGE1[1 2 3]
      21.4 21.8 22.0
```