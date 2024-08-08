# Fun for everyone

!!! abstract "This part will cover"

    - Defining your own functions using dfns
    - The alpha and omega parameters

---

Now that we know how data is structured in APL, it’s time to look at how to use this data, more specifically, how to make your own functions from already existing ones.

You are an engineer sitting at your [cubicle](https://en.wikipedia.org/wiki/Cubicle). You are currently orbiting the Earth at an altitude of 160m at a speed of 1,600km/h.

In brief intervals of time spent waiting between tasks, you have to organise project data in your data management system. Unfortunately for you, your clients all use different units of measurement, and none of your colleagues seem to share your enthusiasm for avoiding misunderstanding. Fortunately for your company, you’ve decided to use your APL skills to avoid a [Mars Climate Orbiter](https://en.wikipedia.org/wiki/Mars_Climate_Orbiter)-like situation.

One of the ways of defining a function, taking in array arguments and outputting an array result, is using direct functions abbreviated dfn. ("dee-fun") A dfn is a series of statements, where the special characters ⍺ and ⍵ represent the left and right arguments to the function. Functions always require a right argument. You start with the basic conversions your current project requires, and a couple fun ones just for yourself.

```apl
      FtoC ← {(5 × ⍵ - 32)÷9}
      FtoC 451
232.7777778
      CtoF ← {32 + (9 × ⍵) ÷ 5}
      CtoF ¯273.15
¯459.67
      CtoF FtoC 100
100

      ⍝ Centimeters to feet and inches
      CmtoIn ← {⌊⍵÷2.54}
      CmtoFtIn ← {
            (⌊(CmtoIn ⍵) ÷ 12),(12 | (CmtoIn ⍵))
      }

      CmtoFtIn 30
0 11
      CmtoFtIn 180
5 10
      CmtoFtIn 300
9 10

      ⍝ From decibels to bels 
      dBtoB ← {⍵÷10} 
      ⍝ From decibels back to a power ratio
      dBtoratio ← {10*dBtoB ⍵} 
	dBtoRatio 60
1000000
      dBtoRatio 3
1.995262315


      ⍝ Pythagorean theorem
      hypotenuse ← {((⍺*2)+⍵*2)*0.5} 
      3 hypotenuse 4
5
      6 hypotenuse 8
10
      5 hypotenuse 12
13
      1 hypotenuse 3*.5
2
      
      ⍝ golden ratio
      PHI ← 0.5× 1 + 5*.5 
      fibonacci ← {((PHI*⍵) - (-PHI)*-⍵) ÷ (¯1 + 2×PHI)}
      fibonacci ⍳7
1 1 2 3 5 8 13
      fibonacci 10
55

```

Note that for the Fibonacci function, a constant value phi for the golden ratio was used. If the value of phi is changed, the Fibonacci function will use the updated value. 

In order to let the Fibonacci function define its own phi, we have to define it inside the function itself. APL allows any number of assignment statements inside a function before the statement which evaluates the result, using the diamond-shaped statement separator ⋄, or placing the statements on new lines. The following two functions are equivalent.

```apl
      fibonacci ← {PHI ← 0.5× 1 + 5*.5 ⋄ ((PHI*⍵) - (-PHI)*-⍵) ÷ (¯1 + 2×PHI)}
      fibonacci ← {
            PHI ← 0.5× 1 + 5*.5
            ((PHI*⍵) - (-PHI)*-⍵) ÷ (¯1 + 2×PHI)
      }

      separator_test ← {a ← 1 ⋄ a + a ⋄ a - a}
      ⍝ The empty vector character ⍬ is added here as filler since functions always require a right argument
      separator_test ⍬
2
```

As seen with the last function, any code beyond the first statement which produces a value is not evaluated.

!!! info "Multiline support in RIDE"
	In order to write multiline functions in the Dyalog RIDE, "Extended Multiline Input" needs to be enabled. It can be found in the Session tab under Options>Configure.

