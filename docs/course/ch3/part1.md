# Fun For Everyone

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

Recursive functions can be implemented using guarded expressions and the self `∇` function.

Guarded expressions consist of a boolean/logical expression followed by a colon ”:”, and another expression. For example, ⍵=0: 1. 

A guarded expression in a function specifies a condition for whether a statement is evaluated; if the boolean expression evaluates to 1, the function evaluates the statement and the value of the expression is returned. In the above example, if we create a function {⍵=0: 1}, if ⍵ (the right argument) is 0, then the function will return 1.

The self function `∇` stands for the function it is contained in, allowing calling the function from within itself, that is, allowing recursion. Alternatively, the function name can be used within the function itself.

For example, the factorial function is typically defined as f(n) = n * f(n-1), such that f(0)=1. Thinking in terms of guarded expressions, if the argument of the function is 0 the result should be 1 (in symbols, ⍵=0: 1), otherwise multiply the right argument (⍵) by the result of the function itself (∇) evaluated for the right argument minus 1 (⍵ - 1).  Putting it together,
```apl
      factorial ← {⍵=0: 1 ⋄ ⍵ × ∇ ⍵ - 1} 
```
This function consists of two statements, separated by the separator ⋄.
The first statement in this function is an example of a guarded expression, if ⍵=0 evaluates to true, that is, when ⍵ is equal to 0, the expression 1 is evaluated. Otherwise, the expression ⍵ × ∇ ⍵ - 1  is evaluated. 
For example, the evaluation of factorial 2 can be visualised as:

```apl
           {⍵=0: 1 ⋄ ⍵ × ∇ ⍵ - 1} 2
      ⍝    Since 2=0 is 0, the guarded statement is not evaluated.
      ⍝    2 × ∇ 1
      ⍝    2 × {⍵=0: 1 ⋄ ⍵ × ∇ ⍵ - 1} 1
      ⍝    Since 1=0 is 0, the guarded statement is not evaluated.
      ⍝    2 × 1 × ∇ 0
      ⍝    2 × 1 × {⍵=0: 1 ⋄ ⍵ × ∇ ⍵ - 1} 0
      ⍝    Since 0=0 is 1, the guarded statement is evaluated.
      ⍝    2 × 1 × 1
      factorial 2
2
      factorial 3
6
      factorial 4
24
```

```apl
      collatz ← {⍵=1: 1 ⋄ 0=2|⍵: ⍵ , ∇ ⍵÷2 ⋄ ⍵ , ∇ 1+3×⍵}
```
This function keeps track of the evaluation of the following procedure. If the ⍵ is even (see more examples of the dyadic modulo | function), divide it by two. If it is odd, multiply it by three and add one. Evaluate this function until ⍵ reaches 1.

```apl
      ⍝ Example:
      ⍝     collatz 3 
      ⍝     3 , ∇ 1+3×3
      ⍝     3 , collatz  1+3×3
      ⍝     3 , collatz 10
      ⍝     3 , 10 , ∇ 10÷2
      ⍝     3 10 , collatz  10÷2
      ⍝     3 10 , collatz  5
      ⍝     and so on
      collatz 3
3 10 5 16 8 4 2 1
      collatz 100
100 50 25 76 38 19 58 29 88 44 22 11 34 17 52 26 13 40 20 10 5 16 8 4 2 1
      collatz 2*10
1024 512 256 128 64 32 16 8 4 2 1
```

It is possible to have direct operators “dop”s as well, which act on functions to modify how they work. Consider the following example.
```apl
       Swap ← {⍺←⍵ ⋄ ⍵ ⍺⍺ ⍺}
       1 -Swap 2
1
       10 ÷Swap 2
0.2
       +Swap 5
10
```

This is the commute ⍨ operator written as a direct operator.

The symbols ⍺⍺ and ⍵⍵ represent the left and right function arguments to the operator, in this case ⍺⍺ is the left function argument of Swap, and ⍺ and ⍵ are the arguments of the modified function. Contrary to direct functions, direct operators always take a left function argument. In symbols, for an operator F, the arguments are labelled as ⍺ (⍺⍺F⍵⍵) ⍵. 

One useful application is modifying the arithmetic operators. Decibels are logarithmic units for which the usual arithmetic operations have to be modified, for example, 60 decibels are 1000 times larger than 30 decibels. In order to reduce these calculations to standard arithmetic, the numbers need to be converted from decibels to a power ratio, then back after the operation is applied.

```apl
       dB_to_ratio ← {10*⍵÷10}
       ratio_to_dB ← {10×10⍟⍵}
       DB ← {ratio_to_dB (dB_to_ratio ⍺) ⍺⍺ (dB_to_ratio ⍵)}
       1 +DB 1
4
       60 ÷DB 30
30
       dB_to_ratio 60 ÷DB 30
1000
       5 ×DB 16
21
       21 ÷DB 5
16
```

From this example, we see that multiplication and division of logarithmic units are equivalent to adding and subtracting, as would be expected. Recursion can also be used in a dop (”dee-op”) using the ∇∇ symbol.

Another way of defining functions is using traditional functions, abbreviated tradfn. (”trad-fun”) These functions look a lot more similar to functions in imperative programming languages.

```apl
       ∇ (R1 R2) ← solve_quadratic A B C;root;vertex 
          root ← ((B*2)-4×A×C)*1÷2
          vertex ← -B÷2×A
          R1 ← vertex + root÷2×A
          R2 ← vertex - root÷2×A
       ∇
       solve_quadratic 1 ¯1 ¯1
1.618033989 ¯0.6180339887

       ⍝ ∇ results ← name arguments;local_variable1;local_variable2
       ⍝   ...
       ⍝   Instructions
       ⍝   ...
       ⍝   results ← values
       ⍝ ∇
```

Tradfns are delimited by dels ∇ and consist of a header and body. The header defines the (left or right) arguments, the variables which are local to that function (variables which do not affect the rest of the workspace), and the values that are returned. If we try to access any of the local variables of the function outside the function, we will encounter an error.

```apl
       R1
VALUE ERROR: Undefined name: R1
       vertex
VALUE ERROR: Undefined name: vertex
```

Instead of guarded expressions, there are control flow structures like :If and :For, we will see these structures in Chapter 7.

!!! warn "Variable Scope"
	In tradfns, variables outside the function can be accessed and modified unless specified to be local. In dfns however, while it is possible to access variables outside the function, it is not possible to assign to them.
	```apl
	       i ← 10
	       d_increment ← {i←i+1 ⋄ i}
	
	       i
	10
	       increment ⍬
	11	
	       i
	10

	       ∇ res ← t_increment
      	      i ← i+1
	           res ← i
	       ∇

	       i
    10
           t_increment
	11
	       i
    11
	```

The follwing code gets the final velocities of a one-dimensional perfectly elastic collision of two objects with initial velocities u1 and u2 and masses m1 and m2.
```apl
   ∇ (v1 v2) ← collision (u1 u2 m1 m2);rsumM;diffM
      rsumM ← ÷m1+m2
      diffM ← m1-m2
      v1 ← (diffM × rsumM × u1) + 2 × m2 × rsumM × u2
      v2 ← (2 × m1 × rsumM × u1) - diffM × rsumM × u2
   ∇
   ⍝ Collision of two object moving with opposite velocities towards each other
   ⍝ where one object is twice as massive
   ⍝ ∘→  ←○
   collision 1 ¯1 1 2
¯1.666666667 0.3333333333
```

As with dops, there are also tradops. Here is the commute ⍨ operator and the decibel operator written as tradops.

```apl
       ∇ result ← {left} (F Swap) right
          :If 0=⎕NC'left'
           result ← right F right
          :Else
           result ← right F left
          :EndIf
       ∇
       
       dB_to_ratio ← {10*⍵÷10}
       ratio_to_dB ← {10×10⍟⍵}
       ∇ result ← left (F DB) right;dB_left;dB_right
          dB_left ← dB_to_ratio left
          dB_right ← dB_to_ratio right
          result ← ratio_to_dB dB_left F dB_right
       ∇
```

:If operates similarly to the guarded expressions defined above, if the statement provided to the right of :If evaluates to a 1, then the expressions after :If but before :Else and :EndIf are evaluated. Otherwise, the expressions after :Else and before :EndIf are evaluated.

Notice that optional left arguments are written in braces. The function ⎕NC returns the “name class” for a particular name, that is, whether the name refers to a function, variable, operator, etc. For an undefined name, the value 0 is returned. Some useful commands to keep in mind are )ERASE and )CLEAR, the former undefines a specific value given as right argument, and the latter clears the entire workspace.

In the next section, most built-in mathematical operations are introduced, along with plenty of examples to clarify their use.