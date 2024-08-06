# Assignment

!!! abstract "This part will cover"

    - Assignment statements
    - Variables and naming
    - Intermediate assignment

---

Allow me to introduce you to a new symbol; the assignment symbol:

```apl
←
```

!!! note "Typing the assignment symbol `←`"

    Prefix method: <kbd>PREFIX</kbd> <kbd>]</kbd>

    Tab method: <kbd><</kbd> <kbd>-</kbd> ++tab++


Here is an example of assignment:

```apl
      BANANA ← 3
```

As you can see, there is no output, because assignment does not return anything.
This is what's called a *shy operation* in APL.

It is convention to use capital letters for variable names in APL.
You can also use lowercase letters, underscores, and numbers (but a variable name cannot start with a number).
In addition, you can use the characters `∆` and `⍙`, called *delta* and *delta underbar*.
These have no special meaning, and can be used to separate parts of a variable.

For example, all of the following are valid variable names:
```apl
STATS2020       BalanceDiff       _Rate_of_change      
STATS∆2020      ∆Balance          _ROC
S20             ∆                 ⍙R
```

If you try creating a variable that starts with a number, it will cause a `SYNTAX ERROR`.

---

We can use variables in place of a number.

```apl
      BANANA ← 3
      BANANA-1
2
      BANANA÷2
1.5
      BANANA×BANANA
9
```

Note that variables keep their value even if you perform operations with them.
The only way to change a variable's value is to use assignment again:

```apl
      BANANA ← 3
      BANANA
3
      BANANA+1
4
      BANANA ← 0
      BANANA
0
      BANANA+1
1
      BANANA ← BANANA + 3
      BANANA
4
```

Notice, at the end there we did a common operation: increasing the value of a variable by some amount.
This is such a common operation, that the creators of APL introduced a shorthand:

```apl
      BANANA +← 3
```

This has the same effect as the earlier `BANANA ← BANANA + 3`, but may save you some keystrokes.
You can also use this same technique with all other APL functions, some more useful than others.
With any function `F`, the expression `VAR F← X` will expand to become `VAR ← VAR F X`.
This is often handy to conserve space.

---

# Intermediate assignment

One more thing. We saw above that assignment was a shy operation.
What if we really *wanted* to see what was assigned to a variable immediately?
This is where intermediate assignment, or chaining assignments, comes into play.

For an example, say we were trying to solve the equation "one plus the value of five times six",
and we assigned it to a variable.

```apl
      RES ← 1+5*6
(nothing is displayed)
```

Now, something seems wrong. Let's see whether we got the result we wanted...

```apl
      ⎕ ← RES ← 1+5*6
15626
```

Here, we "assigned" to a symbol called a *quad*.
All this does is print whatever is assigned to it to the screen.
The developers of APL picked this because it looks kinda like a (arguably, vertical) computer monitor.

!!! note "Typing the quad symbol `⎕`"

    Prefix method: <kbd>PREFIX</kbd> <kbd>L</kbd>

    Tab method: <kbd>[</kbd> <kbd>]</kbd> ++tab++

We also realised that we made a mistake somewhere in our calculation
(it should be fairly obvious, but let's pretend we have a very complex program here).
To debug what's going on, we can use intermediate assignment in the middle of our calculation as follows:

```apl
      RES ← 1 + DEBUG ← 5*6
(nothing is displayed)
      DEBUG
15625
```

This makes it easy to identify and debug different parts of our code.
We could have also done both the assigning and the printing in one line, using our familiar quad symbol:

```apl
      RES ← 1 + ⎕ ← 5*6
15625
```

With this, we can fix our code to work as it should.

```apl
      ⎕ ← RES ← 1+5×6
31
```

Nice!

!!! bug "Intermediate quad symbol"

    It appears as though currently, TryAPL does not support the intermediate quad symbol.
    That is, the above expression `RES ← 1 + ⎕ ← 5*6` will throw a `NOT PERMITTED` error.
    This is rather unfortunate but will not be an issue later,
    when we install the Dyalog IDE to write bigger programs.
