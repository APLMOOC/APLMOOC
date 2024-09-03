# Traditional fun

!!! abstract "This part will cover"
    
    - Tradfns
    - Defining bigger functions in APL
    - Global and local parameters

---

# Traditional fun

!!! tip "Move this section to Chapter 7"

       This section should be introduced in Chapter 7

---

!!! abstract "This part will cover"

    - Traditional functions
    - Variable Scope

---

Another way of defining functions is using traditional functions, abbreviated tradfn. ("trad-fun") These functions look a lot more similar to functions in imperative programming languages.

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

Tradfns are delimited by dels ∇ and consist of a header and body. The header defines the (left or right) arguments, the variables which are local to that function (variables which do not affect the rest of the workspace), and the values that are returned. Above, the arguments are A B and C, with local variables root and vertex, returning the vector (R1 R2).

If we try to access any of the local variables of the function outside the function, we will encounter an error. 

```apl
       R1
VALUE ERROR: Undefined name: R1
       vertex
VALUE ERROR: Undefined name: vertex
```

Instead of guarded expressions, there are control flow structures like :If and :For. We will see these structures in detail in Chapter 7.

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

