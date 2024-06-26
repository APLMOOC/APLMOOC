# Vectors

!!! abstract "This part will cover"

    - Creating vectors
    - Spaces Separate Scalars

---

In the following section, you will play the role of an astronaut aboard the [International Space Station](https://archive.org/details/MeetMeAtTheStationiss). You are currently orbiting the Earth at an altitude of 413km at a speed of 28,013km/h. As part of the maintenance and repair team, you are tasked with guaranteeing the proper functioning of scientific instruments, environmental control and life support systems, power management and distribution systems, and radio communication modules to gather, log, process, and transmit information through the ISS, or back to mission control centers.

In brief intervals of time spent waiting between tasks, you enjoy logging temperatures from sensors all around the ship into a small notebook. Unfortunately for you, your notebook’s completely filled, and none of your colleagues seem to share your enthusiasm for data collection. Unfortunately for mission control, you’ve decided to use critical APL machines on board to store your data.

Typing as fast as possible without the aid of gravity, you manage to write some data without being caught.

```apl
       TEMPERATURE_PAGE1_HOUR7 ← 21.4
       TEMPERATURE_PAGE1_HOUR8 ← 21.8
       TEMPERATURE_PAGE1_HOUR10 ← 22.0
       TEMPERATURE_PAGE1_HOUR12 ← 21.5
       TEMPERATURE_PAGE1_HOUR14 ← 21.3
       TEMPERATURE_PAGE1_HOUR16 ← 22.3
       TEMPERATURE_PAGE2_HOUR18 ← 22.8
       TEMPERATURE_PAGE2_HOUR19 ← 21.5
       TEMPERATURE_PAGE2_HOUR21 ← 22.1
       TEMPERATURE_PAGE2_HOUR7 ← 22.0
       TEMPERATURE_PAGE2_HOUR8 ← 21.9
       TEMPERATURE_PAGE2_HOUR9 ← 22.4
```

This is not the most efficient, or readable, method to input data into your system, and while flicking through your APL notes now crowded with temperatures, you refresh your workspace and instead decide to store your data using vectors.

---

*Vectors* are one-dimensional ordered collections of elements, straight lines of elements. They are defined by writing values separated by one or more spaces in a line. 
	
Since vectors are ordered, it is possible to talk about the element at a specific position, called an index. For example, the first (1) element, the second (2) element, and so on. In notation, elements are obtained by specifying their index in square brackets after the name of the vector.

```apl
      FIBB ← 1 1 2 3 5 8 13 21 34 55 ⍝ This is a vector
      KEYA ← 9 249  17 2 157   116 227 91 216    65 86 197 99 86 136 192 ⍝ This is also a vector

      ⍝ The following are all scalars
      PRIME ← 57
      NUMERALS ← 413
      MCBRT7 ← -7*÷3
      EPSILON ← 2*¯53
      MAGIC ← 1597463007

      ⍝ Note that the decimal separator in APL is the dot
      PI ← 11.001001 ⍝ This is a scalar
      PI ← 11,001001 ⍝ This is a vector

      LIST ← PRIME 100 NUMERALS MCBRT7 0.6 EPSILON MAGIC 31.5 ⍝ this is a vector
      LIST[2] 
100
      LIST[2 1 3]
100 57 413
      INDICES ← 2 1 3
      LIST[INDICES] 
100 57 413
```
