# Vectors

!!! abstract "This part will cover"

    - Creating vectors
    - Spaces Separate Scalars

---

<link rel="stylesheet" href="/styles/ch5part2.css">

APL really is a practical general-purpose programming language, with a wide variety of users including both [NASA](https://ntrs.nasa.gov/api/citations/19690020561/downloads/19690020561.pdf) and [Roscosmos](https://dl.acm.org/doi/10.1145/130647.130656); although we won't be looking at the physics of antenna design nor at the thermodynamics of heat shielding that these agencies have used APL for, we can nevertheless show how useful it can be even for everyday trivialities.  

Suppose you are an astronaut aboard the [International Space Station](https://archive.org/details/MeetMeAtTheStationiss), orbiting the Earth at an altitude of 413km at a speed of 28,013km/h. 

While doing your daily maintenance tasks, you enjoy logging temperatures from sensors all around the ship into your small notebook. Unfortunately for you, your notebook’s completely filled, and none of your colleagues seem to share your enthusiasm for data collection. Unfortunately for mission control, you’ve decided to use mission-critical APL machines on board to store your data.

Typing as fast as possible without the aid of gravity, you manage to write some data without being caught.

```apl
      T1 ← 21.4
      T2 ← 21.8
      T3 ← 22.0
      T4 ← 21.5
      T5 ← 21.3
      T6 ← 22.3
      T7 ← 22.8
      T8 ← 21.5
      T9 ← 22.1
      T10 ← 22.0
      T11 ← 21.9
      T12 ← 22.4
```

This is not the most efficient or readable method to input data into your system, and your hand is starting to cramp. Flicking through your APL notes now crowded with temperatures, you realize that you should store the temperatures as vectors!

## Creating vectors

**Vectors** are lines of values. They are defined by writing values separated by one or more spaces. 
	
The order of elements in a vector matters! Each element is given a number called an **index** according to the order in which they were written. Indices can be used to access the elements of a vector, they start at ``1`` and increase by one for each new element.

You write out the temperatures as vectors, seperating them by page number. Note that the decimal separator in APL is a period!

```apl
      T1 ← 21.4 21.8 22.0 21.5 21.3 22.3
      T2 ← 22.8 21.5 22.1 22.0 21.9 22.4
      
      T1[1 2 3]
      21.4 21.8 22.0
```

Much better. 

Since you're already at the new machines, you may as well snoop around to see what everyone else has been up to. You use the ``)VARS`` [system command](https://dyalog.github.io/documentation/20.0/language-reference-guide/system-commands/introduction/) to list all variables in the current workspace.

```apl
      )VARS
budget_left     CAPACITY        crew_count     crew_salary
INSPECTION_DATE INSTALLATION_DATE MAINTENANCE   MANUFACTURER
SERIAL          supplies_needed  T1             T2
USER            VERSION          yearly_budget
```

## Indexed assignment

You feel like you and your best friend deserve a raise, you change the crew salary variable for the lowest two salaries.

To replace a value in a vector, write out the elements as you would access them, then assign a list of new values.

```apl
      crew_salary
87500 113200 95800 148700 132400
      crew_salary[1 3]
87500 95800
      crew_salary[1 3] ← 130200 120000
      crew_salary
130200 113200 120000 148700 132400
```

## Character vectors

You also feel like a new notebook for your very mission-critical logging hobby would be nice.

```apl
      supplies_needed
4 O2TANK (IMMEDIATELY)
```

This variable is a vector of individual text characters, in order to create a vector of characters use ``'single quotes'`` around the characters you want to add. You can even create a vector of individual characters in the same way you would a vector of numbers.

```apl
      'abcdef'
abcdef
      'a' 'b' 'c' 'd' 'e' 'f'
abcdef
```

You change the ``supplies_needed`` vector to contain a new vector of characters.

```apl
      supplies_needed ← '1 NOTEBOOK (IMMEDIATELY)'
      supplies_needed
1 NOTEBOOK (IMMEDIATELY)
```