# Order of execution

!!! abstract "This part will cover"

    - Right-to-left execution
    - Using parentheses
    - Comments

---

Okay, we've tried adding and multiplying two numbers together.
What if we try adding and multiplying three numbers at the same time?

```apl
      2×2
4
      2×2+1
6
```

Oops. What happened here?
Instead of doing the arithmetic operations in the normal order, 2 times 2 and add 1 (PEMDAS, remember?)
APL seems to have done them in the reverse order, 2 plus 1 and the whole thing times 2.
Let's see why that is.

The creators of APL were faced with a dillemma.
Every new symbol they added to the language was to be considered a function.
In other languages, like Python, functions take in arguments inside parentheses.
However, in APL, functions only take in arguments from the **left** and **right**.
Because of this, all functions look and act like the multiplication and addition functions, and it isn't clear in which order
they should be executed (e.g. consider the new symbol `1⌊2+2`: would you perform the addition first or whatever this new `⌊` function does first?)
So, for every new function they added, the creators would have to decide where to put it in the hierarchy.
And this doesn't even take into account functions that programmers can create themselves!

"Screw it," the creators decided, and made one, solid, unambiguous, easy-to-remember rule.

!!! info "Order of execution"

    In APL, all operations are executed _right-to-left_.

    When APL runs a line of code, it first looks at the rightmost function symbol
    and executes it with the arguments to its left and right.
    It then looks at the function symbol to the left of the one just processed,
    and executes it, treating the result it just got as a right argument.

An equivalent formulation of this would be

!!! info "Order of execution"

    In APL, every function takes in the whole expression on its right as a right argument.

Can you see why these two formulations are equivalent?

!!! info "Example"

    Suppose you have the expression `3+5÷0.25×6*10-8`.
    
    This will get evaluated right-to-left as:
    ```apl
    3+5÷0.25×6*10-8
    3+5÷0.25×6*2
    3+5÷0.25×36
    3+5÷9
    3+0.5555555556
    3.555555556
    ```

!!! warning "About spaces"

    APL ignores extra spaces when processing statements.
    For example, all of the following statements will produce the same result:

    ```apl
            2×2+1
    6
            2×2 + 1
    6
            2×2       +           1
    6
            2         ×           2+1
    6
    ```

---

# Altering the order of execution

You can use parentheses, `(` and `)`, to alter the order of execution in APL.

This is the same as in mathematics or any other programming language:
statements within parentheses are executed before anything else.

Let's look at our previous example once again:

```apl
      2×2+1
6
      2×(2+1) ⍝ (1)!
6
      (2×2)+1 ⍝ (2)!
5
```

1. Same result as before; the parentheses changed nothing
2. Finally, the result we wanted!

As a beginner APL programmer, it's easy to want to put parentheses everywhere when your code doesn't work.
Resist the urge. Use parentheses for readability, and when needed to change the order of operations.
However, your code generally ends up cleaner if you can write it with as few parentheses as possible.

In the above case, for example, we could have simply restructured the expression to be the following:

```apl
      1+2×2
5
```

No parentheses, and we get the correct answer!

In general, when you have parentheses on the right, they are redundant.
This is easier to understand in context. Consider the following expression:

```apl
      (1+(2×(3÷(4-5))))
¯5
```

In this case, all of the parentheses are unnecessary, since it is telling the APL interpreter
to execute everything from right to left, which it would do anyway.
So, in this case, you could achieve the same result with the shorter and more readable code:

```apl
      1+2×3÷4-5
¯5
```

Pretty, isn't it?

Before we conclude, here are some tips on how to reduce parentheses in your code to avoid a parenthesis jungle:

!!! info "Reducing parentheses"

    1. No APL expression needs to end with a closing parenthesis. It's redundant.
    - For example, the expression `(2×3)+(4×5)` can be rewritten as `(2×3)+4×5`
    2. You never need two consecutive closing parentheses. It's redundant.
    - For example, the expression `(2×(3+4))÷5` is equivalent to `(2×3+4)÷5`
    3. If you can easily rewrite the expression to avoid parentheses, do so.
    - For example, the expression `((2÷3)+4)×5` can be reversed to give `5×4+2÷3`
    4. Do not shovel in extra parentheses in a panicked, desperate attempt to fix your code.
    Do shovel in parentheses if it genuinely helps the readability of your code.


This isn't to say that you should avoid using parentheses.
They often help your thought process and improve understanding of the code.
They **do not slow down execution**, so feel free to use as many as you'd like (and potentially reduce their amount afterwards)!

This funny order of execution and the rules for placing parentheses might take getting used to.
Don't worry, as you progress further, you will forget how _else_ computers can execute code!

---

# Lamp

One last handy symbol: `⍝`.
Can you figure out what it does from this example?

```apl
      ⍝ asdfada (1)
      ⍝ adsfljsakfdjlkdsajflkdsajf
      ⍝ =≠∨¯≥>≠≠=≤<¯äö'j∆⊃⊂⌈∊↑j|⊤⊂⍪AQWED⊆A⍰≤5≥>∨8∧´§Ä&⍤⍨⌿&¤⊆≡⍎^Å
      2+2  ⍝ This is addition
4
      123×456  ⍝ yay
56088
```

1. Hint: ong it kinda looks like ඞ

That's right, it's a comment.
It makes the APL interpreter ignore whatever symbols come after it on the same line.
You can use it to temporarily remove code from your programs or to add extra information to whatever code you have written.

The official name for this symbol is "lamp". Why?

Because comments ==illuminate== your code.
