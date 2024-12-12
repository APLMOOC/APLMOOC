# Execute and Format

!!! abstract "This part will cover"
    
    - Execute
    - User Input
    - Format

---

Quotation is an important part of language, being able to directly refer to a statement as an object allows reasoning about language itself. For example, we can refer to the statement "Quotation is an important part of language". In programming languages, we should expect not only to be able to create and store quotations, but also to be able to use stored quotations like any other object.

In APL, this functionality is provided by the Execute ``⍎`` and Format ``⍕`` functions.

As its name suggests, the Execute ``⍎`` function evaluates expressions stored in a string.

```apl
      ⍎'10/1'
1 1 1 1 1 1 1 1 1 1

      ⍎'X ← ⍳10'
      ⍎'X'
1 2 3 4 5 6 7 8 9 10

      (⎕A,¨('←'),¨(''''),¨(,\⎕A),¨(''''))
┌─────┬──────┬───────┬────────┬─────────┬──────────┬───────────┬────────────┬─────────────┬──────────────┬───────────────┬────────────────┬─────────────────┬──────────────────┬───────────────────┬────────────────────┬─────────────────────┬──────────────────────┬───────────────────────┬────────────────────────┬─────────────────────────┬──────────────────────────┬───────────────────────────┬────────────────────────────┬─────────────────────────────┬──────────────────────────────┐
│A←'A'│B←'AB'│C←'ABC'│D←'ABCD'│E←'ABCDE'│F←'ABCDEF'│G←'ABCDEFG'│H←'ABCDEFGH'│I←'ABCDEFGHI'│J←'ABCDEFGHIJ'│K←'ABCDEFGHIJK'│L←'ABCDEFGHIJKL'│M←'ABCDEFGHIJKLM'│N←'ABCDEFGHIJKLMN'│O←'ABCDEFGHIJKLMNO'│P←'ABCDEFGHIJKLMNOP'│Q←'ABCDEFGHIJKLMNOPQ'│R←'ABCDEFGHIJKLMNOPQR'│S←'ABCDEFGHIJKLMNOPQRS'│T←'ABCDEFGHIJKLMNOPQRST'│U←'ABCDEFGHIJKLMNOPQRSTU'│V←'ABCDEFGHIJKLMNOPQRSTUV'│W←'ABCDEFGHIJKLMNOPQRSTUVW'│X←'ABCDEFGHIJKLMNOPQRSTUVWX'│Y←'ABCDEFGHIJKLMNOPQRSTUVWXY'│Z←'ABCDEFGHIJKLMNOPQRSTUVWXYZ'│
└─────┴──────┴───────┴────────┴─────────┴──────────┴───────────┴────────────┴─────────────┴──────────────┴───────────────┴────────────────┴─────────────────┴──────────────────┴───────────────────┴────────────────────┴─────────────────────┴──────────────────────┴───────────────────────┴────────────────────────┴─────────────────────────┴──────────────────────────┴───────────────────────────┴────────────────────────────┴─────────────────────────────┴──────────────────────────────┘
      ⍎¨(⎕A,¨('←'),¨(''''),¨(,\⎕A),¨(''''))
      P
ABCDEFGHIJKLMNOP
```

Execute ``⍎`` is a powerful function, and is considered unsafe when used together with arbitrary user input since it allows for arbitrary code execution.  

Write about user input ['] and []VFI and []FI

Write about Format

[]DM function in error messages in chapter 1

Talk briefly about operators in chapter 2