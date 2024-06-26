# I'm in Spain without the "a"
---

This part will cover:

- Reflections
- Rotations
- Transpose

The dyadic `⌽` `⊖` rotate functions rotate an array by an amount specific by the left argument, around a specific axis.

```apl
       3⌽¨'hotbloods' 'mentally' 'outbreak' 'clean' 'kyoto'
bloodshot  tallymen  breakout  ancle  tokyo
```

Another example:

```apl
SAD_EMOTICONS ← '):' ':c' ']:' ')-:' 'D:' '>:(' ':/' ':x' ':|'
```

Notice that some of the sad emoticons can be turned into happy emoticons by reflecting the emoticon vertically, turning the frown upside down! The monadic ⌽ ⊖ reverse functions reflect a vector along the horizontal or vertical directions.

```apl
       ⌽ '):'
:)
       ⌽ SAD_EMOTICONS
:|  :x  :/  >:(  D:  )-:  ]:  :c  ):

```

Notice that reversing the array of sad emoticons did not reverse the emoticons themselves; to apply the reverse function to each element of the sad emoticons array, the each `¨` operator can be used. The each `¨` operator applies a function to every scalar element of its right argument.

```apl
       ⌽¨SAD_EMOTICONS
 :)  c:  :]  :-)  :D  (:>  /:  x:  |:

```
