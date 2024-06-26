# When things go wrong

!!! abstract "This part will cover"

    - Error handling
    - Different errors in APL

---

Let's do some more arithmetic:

```apl
      5÷5
1
      5÷4
1.25
      5÷3
1.666666667
      5÷2
2.5
      5÷1
5
      5÷0
DOMAIN ERROR: Divide by zero
      5÷0
       ∧
```

Like most mathematicians, APL is deathly afraid of dividing by zero.
As such, APL doesn't allow zero as a right argument to the division function.
In other words, zero is outside the **domain** of the right argument of `÷`.

When something like this happens, APL displays that there has been an error of a certain type (in this case, a DOMAIN ERROR),
as well as a short description and an arrow pointing to the **function** that produced the error.
So much better than errors in other languages! (looking at Java and Python right now)

Here are some examples of error types you will come across in the future.

```apl
   DOMAIN ERROR
   LENGTH ERROR
   VALUE ERROR
   RANK ERROR
   SYNTAX ERROR
   INDEX ERROR
   WS FULL
```

A common fight-or-flight response when seeing an error is ignoring it, smashing your computer screen,
and trying to re-run the same line of code with a random modification you don't understand.

Don't!

Even if you think you might know how to solve the problem immediately,
try looking at the error message and figuring out exactly what it's complaining about, and where the error happens.
For example, if you see a `LENGTH ERROR`, APL is trying to tell you that your arguments are of the wrong length.
See if you can pinpoint the exact location the error is happening at!
If, on the other hand, you see a `SYNTAX ERROR`, it most likely means that you've either made a typo somewhere
or constructed an incomplete APL expression like `3+` (the `+` function is missing its right argument).

!!! warning "When faced with an error"
    
    Stop, take a breath, **read the error message**, and analyse the situation.
