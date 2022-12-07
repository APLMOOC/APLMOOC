# Assignment

Allow me to introduce you to a new symbol; the assignment operator:

```apl
←
```

You can type it by inputting <kbd>PREFIX</kbd> <kbd>]</kbd> using the prefix method
or <kbd><</kbd> <kbd>-</kbd> ++tab++ using the tab method.

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
The only way to change a variable's value is to use the assignment operator again:

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
With any function `F`, the expression `VAR F← X` will expand  `VAR ← VAR F X`.
This is often handy to conserve space.
