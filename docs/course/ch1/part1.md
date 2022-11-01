# Immediate execution mode

Let's get started with some basic APL!

For the first few chapters, we will be working with the REPL available at <a href="https://tryapl.org" target="_blank">TryAPL</a>.
If you've ever tried running `python3` (`py` for W*ndows users) or the IDLE editor on your computer, this is the same thing.
The REPL will wait for you to enter a command, then evaluate and print the result (if your command resulted in a result),
after which it will return control back to you.
This will repeat for as long as your heart desires.

!!! tip "Try it yourself"
    
    You can run APL code at

    <a class="md-button" href="https://tryapl.org" target="_blank">tryapl.org</a>

    Try running the commands in this chapter yourself.

    You can also use the REPL for playing around, testing out ideas,
    and working on the write exercises at the end of the chapter.


The mode you land in by default is called ==Immediate Execution mode== (because it immediately executes whatever you give it).
Other modes include Execution mode, Function Editing mode, Character Input mode, Evaluated Input mode, and GUI Input Form mode.
We will get back to these modes in future chapters.

Surprisingly enough, this style of prompt is how APL code has been written for the longest time!
By using the different modes outlined above, alongside APL workspaces and an APL IDE, you can write any programs you like.
Thankfully, since we live in the year 2022, some APL developers have realised that it might be smart to finally get with the times
and let programmers write their code in text files that are executed by an APL interpreter.
This is fairly straightforward to do but requires some configuration, so we will get back to this in a later chapter.
For now, the TryAPL interpreter will suffice.
