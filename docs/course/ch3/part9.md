# ALL ABOARD!

Some other important functions are the dyadic right and left identity/“tack” functions which return their right or left arguments.

```apl
       "True"⊣"False"
True
       "True"⊢"False"
False
```
When applied monadically, they return their only argument.

Consider the following pairs of functions, implemented using dfns first, and trains second.

```apl
       range_average ← {((⌈/⍵)-⌊/⍵),(+/⍵)÷≢⍵}
       range_average 5.48 6 5.63 6.02 5.37
0.65 5.7
	     range_average ← (⌈/-⌊/),+/÷≢
       range_average 5.48 6 5.63 6.02 5.37
0.65 5.7

       plusminus ← {(⍺-⍵),⍺,⍺+⍵}
       5.7 plusminus 0.65
5.05 5.7 6.35
       plusminus ← -,⊣,+
       5.7 plusminus 0.2
5.5 5.7 5.9
```

Notice that the arguments of the function were not referred to in the function trains, this style of programming is called tacit or “point-free” programming, borrowed from mathematics where it means taking data that can be described using points to be more fundamental than the points themselves, avoiding the need to refer to points explicitly. In this case, taking functions to be more fundamental than their description in terms of explicit arguments, w

The most basic train is the 2-train (fg), in operator form f⍤g, called an atop. The atop evaluates the function f monadically on the result of g applied to the arguments of the train.

The following image is composed of three parts, the first being the APL syntax for the atop, the second being a tree-like representation of the atop where the evaluation happens from bottom to top, and the third is the atop in traditional mathematical notation.

<img src="../../assets/3_9_atop.png" style="width:50%; margin-left: auto; margin-right: auto; display: block;" />

!!! info “Trains in RIDE”
	It is possible to make sense of trains by rendering them in various forms in the RIDE editor using the -trains option to the Box user command. For example, it is possible to render trains as trees using the following command.
	```apl
	]Box on -trains=tree
	```
	You can use the help ]? command to get help for any user command in RIDE.

Floored division can be conveniently expressed as an atop.
```apl
       12÷5
2.4
       ⌊2.4
2
       12(⌊÷)5
2
```
A very similar composition is achieved using the Beside operator, f∘g. 

<img src="../../assets/3_9_beside.png" style="width:50%; margin-left: auto; margin-right: auto; display: block;" />

More simply, the expression ⍺(f∘g)⍵ evaluates to ⍺fg⍵, and recalling that APL is right associative, is ⍺f(g⍵).
```apl
       matrix ← 3 3 ⍴ (3|⍳9)
       matrix
1 2 0
1 2 0
1 2 0
       ⍉ matrix ⍝ Transpose
1 1 1
2 2 2
0 0 0
       ⍝ Beside of matrix multiplication (+.×) and transpose (⍉)
       matrix (+.×)∘⍉ matrix
5 5 5
5 5 5
5 5 5
       matrix (+.×)⍉ matrix
5 5 5
5 5 5
5 5 5
       
       1 2 (-/×)∘⊖ 3 1 ⍝ Cross product
¯5
       ⍝ A beside of an atop and a function
       1 2 (-/×)⊖ 3 1
¯5
```

Notice that in the last statement, the atop -/× and function ⊖ were composed into an atop. Since the atop -/× is a functions in its own right, it can be used as part of larger trains.

The Over ⍥ operator, f⍥g, applies f to the value of g applied to each of its arguments.


<img src="../../assets/3_9_over.png" style="width:50%; margin-left: auto; margin-right: auto; display: block;" />

The decibel conversion from the start of this chapter can be easily written in this form.

```apl
       dB_to_ratio ← {10*⍵÷10}
       ratio_to_dB ← {10×10⍟⍵}
       ⍝Over of an atop and a function
       60 (ratio_to_dB÷)⍥dB_to_ratio 30
30
       ratio_to_dB ((dB_to_ratio 60) ÷ dB_to_ratio 30)
13.01029996

       reciprocal_sum ← {÷(÷⍺)+÷⍵}
       1 reciprocal_sum 2
0.6666666667
       reciprocal_sum ← (÷+)⍥÷
       1 reciprocal_sum 2
0.6666666667

       hypotenuse ← {((⍺*2)+⍵*2)*0.5}
       3 hypotenuse 4
5
       hypotenuse ← (*0.5+)⍥(*2)
SYNTAX ERROR
      hypotenuse←(*0.5+)⍥(*2)
                      ∧
```

When trying to adapt the hypotenuse function to point-free programming, a seemingly strange error appears complaining about syntax of our train. However, this error should not seem so bizzare after some thought, because the expression (* 0.5 +) is not a function, in fact, (* 0.5 +) evaluates to (1.648721271+) since the * function here is interpreted to act monadically on 0.5. In order to attach the value 0.5 to * and turn the dyadic * into a monadic {⍵*0.5}, the bind ∘ operator can be used.

```apl
       hypotenuse ← (*∘0.5+)⍥(*∘2)
       3 hypotenuse 4
5
```

Another form of the hypotenuse function is obtained by taking the magnitude of a complex number, with real and imaginary parts the arguments of the function.

```apl
	       complex ← +/(1 0J1)∘×
	       complex 3 4
3J4
	       hypotenuse ← |complex
	       hypotenuse 3 4
5
         hypotenuse ← |(+/(1 0J1)∘×)
         hypotenuse 3 4
5
         hypotenuse ← |⍤+/(1 0J1)∘×
         hypotenuse 3 4
5
```

Another form of the hypotenuse function is obtained by taking the magnitude of a complex number, with real and imaginary parts the arguments of the function.

Let’s take a closer look at the trains at the beginning of this section, applied to vector values.

```apl
       range_average ← (⌈/-⌊/),+/÷≢
       plusminus ← -,⊣,+
```

Starting with range_average, we start reading from right to left identifying forks and atops. We first identify the 3-train +/÷≢, which takes the sum +/ of the elements of a vector and divides ÷ by the length ≢ of the vector, {(+/⍵)÷(≢⍵)} as a function which takes an average.

<img src="../../assets/4_3_fork.png" style="width:50%; margin-left: auto; margin-right: auto; display: block;" />

```apl
       avg←+/÷≢
       range_average ← (⌈/-⌊/),avg
```

Then, the 3-train (⌈/-⌊/) takes the maximum ⌈/ and subtracts - by the minimum ⌊/, {(⌈/⍵)-(⌊/⍵)}, which gives the range of a series of values.
```apl
       avg←+/÷≢
       range←⌈/-⌊/
       range_average ← range,avg
```

Then it’s clear in this form that the function range_average takes the range and average of a series of values and returns both values in the form of a vector.

The plus_minus function can be analysed similarly.

```apl
       plusminus ← -,⊣,+
       plusminus ← -,(⊣,+)
       plusminus ← -,{⍵,⍺+⍵}
       plusminus ← {(⍺-⍵),(⍵,⍺+⍵)}
```

More generally, for an n-train of functions (f g h k l m … w x y z), 

- (f g h k l m … t u v w x y z) is interpreted as (f g h k l m … t u v w (x y z)), which can be interpreted again as (f g h k l m … t u (v w (x y z))), and further recursively.
- If the number of functions is odd, then the result is of the form of forks over forks
    - (f g (h k (l m … (t u (v w (x y z))))…)
- If the number of functions is even, then the result is an atop over forks
    - (f (g h (k l (m … (t u (v w (x y z))))…)
