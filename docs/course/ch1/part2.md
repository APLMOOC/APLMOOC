# Basic operations and input

Okay, so we have TryAPL open. Now what?

APL is a programming language, so it would make sense if it could, at least, do some basic arithmetic.
Let's try it out!

---

How about addition?

```apl
      2+2
4
```

Okay, it seems to be able to handle that. Great start!

You'll notice that the programmer's input is indented, while the interpreter's output is not.
You can think of it as a conversation, where you are on the right and the interpreter is on the left.
Keep this in mind. It will be important for later.

---

Time to try subtraction...

```apl
      8-5
3
      5-8
¯3
```

Okay, so that seems to work as well.
But wait, why is the negative sign before the number 3 rendered weirdly?
It looks different from the minus sign we typed.

As it turns out, there are two signs for negation in APL.
One of them is a ==minus function== (`-`), that subtracts two numbers.
The other is a ==negative sign== (`¯`), which is slightly higher and tells APL that a number is negative.
The negative sign is not a function!
In the same way that a full stop (`.`) decorates a number (`3.14159`) to show that it has a decimal part,
the negative sign (`¯`) decorates a number (`¯1337`) to show that it's negative.

!!! info "Functions"

      In APL, **functions** take in **arguments** and produce **results**.

      ---

      Most APL symbols are **functions**. You will get familiar with them in the next chapters.
      
      Functions can have **arguments** to their left and right.

      - If a function has **both left and right arguments**, it is called dyadic (di = two).
      - If a function has **only one argument on the right**, it is called monadic (mono = one).
      - If a function doesn't take arguments (quite rare!), it is called niladic (nil = zero).

      Functions with only one argument on the left do not exist in APL.

      **Results** are what a function "spits out".
      You can imagine the result of the function replacing the function after its execution is done,
      just like in any other programming language.
      There are also functions that do not return any results.

---

Multiplication should work just as intuitively.

```apl
      2*2
4
      2*5
32
```

Wait, what? `2*2` evaluated to `4`, while `2*5` evaluated to `32`?!
This isn't multiplication, it's exponentiation! What's going on here?

!!! warning

    APL was created by *mathematicians* in the 1960s.
    Mathematicians love weird and funny symbols.

    This was the time before Unicode, the standard way in which we encode characters today, was invented.
    As such, the creators were free to invent any typewriter symbols they wanted (yes, APL was written on a typewriter),
    and added a lot of special symbols that look really cool but aren't found on any modern keyboards.
    There are lots of symbols implemented in Unicode even today
    just because they were invented by APL'ers before any proper standards were written.
    
    You will learn how to type them shortly!

In fact, the creators of APL added a special multiplication cross (`×`) to do multiplication.
Not to be confused with the letter `x`!
Similarly, division is done with the dedicated mathematical division symbol (`÷`).

Let's try them out:

```apl
      2×2
4
      2×5
10
      7÷2
3.5
      2÷7
0.2857142857
      123×¯456
¯56088
```

Funkar som den ska.

!!! info "Significant figures"

      APL will display results of your calculations to 10 significant figures.
      Internally, APL calculates all floating-point operations to 16 or 17 significant figures,
      which is a suitable level of accuracy for most (if not all) applications.
