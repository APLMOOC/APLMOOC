# Fun for everyone

!!! abstract "This part will cover"

    - Defining your own functions using dfns
    - The alpha and omega parameters

---

Programming languages provide structured methods of storing and operating on data. Now that we know how data is structured in APL, it’s time to look at how operations on data are structured, more specifically, how to make your own operations from already existing ones.

One of the ways of defining a function, taking in array arguments and outputting an array result, is using direct functions, abbreviated dfn. (”dee-fun”) A dfn is a series of statements, where the special characters ⍺ and ⍵ represent the left and right arguments to the function. Functions always require a right argument. Let’s look at some simple examples.

```apl
      F_to_C ← {(5 × ⍵ - 32)÷9}
      F_to_C 451
232.7777778
      C_to_F ← {32 + (9 × ⍵) ÷ 5}
      C_to_F ¯273.15
¯459.67
      C_to_F F_to_C 100
100

      dB_to_B ← {⍵÷10} ⍝ From decibels to bels 
      dB_to_ratio ← {10*dB_to_B ⍵} ⍝ From decibels back to a power ratio
			dB_to_ratio 60
1000000
      dB_to_ratio 3
1.995262315
      
      PHI ← 0.5× 1 + 5*.5 ⍝ golden ratio
      fibonacci ← {((PHI*⍵) - (-PHI)*-⍵) ÷ (¯1 + 2×PHI)}
      fibonacci ⍳7
1 1 2 3 5 8 13
      fibonacci 10
55

      hypotenuse ← {((⍺*2)+⍵*2)*0.5} ⍝ Pythagorean theorem
      3 hypotenuse 4
5
      6 hypotenuse 8
10
      5 hypotenuse 12
13
      1 hypotenuse 3*.5
2
```

Note that for the Fibonacci function, a constant value phi for the golden ratio was used. If the value of phi is changed, the Fibonacci function will use the updated value. 

APL allows any number of assignment statements inside a function before the statement which evaluates the result, using the diamond-shaped statement separator ⋄, or placing the statements on new lines. The following two functions are equivalent.

```apl
fibonacci ← {PHI ← 0.5× 1 + 5*.5 ⋄ ((PHI*⍵) - (-PHI)*-⍵) ÷ (¯1 + 2×PHI)}
fibonacci ← {
             PHI ← 0.5× 1 + 5*.5
             ((PHI*⍵) - (-PHI)*-⍵) ÷ (¯1 + 2×PHI)
            }
```

!!! info "Multiline support in RIDE"
	In order to write multiline functions in the Dyalog RIDE, "Extended Multiline Input" needs to be enabled. It can be found in the Session tab under Options>Configure.

Any code beyond the first statement which produces a value is not evaluated
```apl
      number ← {1 ⋄ 2 ⋄ 3 ⋄ 4}
      number ⍬ ⍝ The empty vector character ⍬ is added here as filler since functions always require a right argument
1
      separator_test ← {a ← 1 ⋄ a + a ⋄ a - a}
      separator_test ⍬
2
```

