# File I/O

!!! abstract "This part will cover"
    
    - File reading and writing
    - Quad CSV
    - File ties
    - Component files

---

APL programs are typically used to process large amounts of external data; this part shows how to read and write data to and from an external file.

You are a plasma physicist working on your plasma physics simulation code for plasmas co-rotating with the earth at a speed of 927 m/s. Your simulation writes a summary of each timestep to a file, where the following file holds the ion mass density ``rhom`` for six steps.

```
diagnostic.csv

step,time,dt,rhom_min,rhom_max,rhom_avg
0,0.000,0.025,1.67e-21,8.35e-21,3.21e-21
1,0.025,0.025,1.66e-21,8.41e-21,3.22e-21
2,0.050,0.025,1.64e-21,8.62e-21,3.25e-21
3,0.075,0.025,1.61e-21,9.04e-21,3.31e-21
4,0.100,0.025,1.58e-21,9.77e-21,3.40e-21
5,0.125,0.020,1.54e-21,1.09e-20,3.52e-21
```

## The working directory

A file can be specified using either absolute or relative paths; if it is given the name of a file, it will look for that file in its current working directory. The ``]CD`` user command can be used to change the current working directory, and will return the previous working directory.

```apl
      ]CD 'C:\Users\you\Documents\simulations'
C:\Users\you\Documents\Dyalog
      ]CD
C:\Users\you\simulations
```

## Reading a whole file

The ``⎕NGET`` system function reads a text file and returns a vector consisting of the content, the encoding, and the unicode number for the newline character.

```apl
      ≢⊃⎕NGET 'diagnostic.csv'
286
```

The argument ``1`` as a second argument allows obtaining the content separated by newline.

```apl
      ≢⊃⎕NGET 'diagnostic.csv' 1
7
```

The file holds 286 characters, or 7 lines.

It is also possible to query whether a file exists with the ``⎕NEXISTS`` function and its properties using the ``⎕NINFO`` function.

```apl
      ⎕NEXISTS 'diagnostic.csv'
1
      ⎕NEXISTS 'missing.csv'
0
      ⎕NINFO 'diagnostic.csv'
 diagnostic.csv 
      (0 1 2) ⎕NINFO 'diagnostic.csv'
 diagnostic.csv  2 286
```

Given no left argument, ``⎕NINFO`` returns only the name of the file. The left argument selects which properties are wanted, where ``0`` is the name, ``1`` the type, and ``2`` the size in bytes. Note that a type of ``2`` denotes a regular file, whereas a directory has type ``1``.

## Writing a whole file

The ``⎕NPUT`` system function writes to a text file. The left argument is the content, which can be specified line-by-line as a vector of strings. The right argument is the name and, with ``1``, permission to overwrite. ``⎕NPUT`` then returns the number of bytes written.

```apl
      out←⊂'step,ratio'
      out,←⊂'0,5.00'
      (⊂out)⎕NPUT 'ratio.csv' 1
17
      ⊃⎕NGET 'ratio.csv'
step,ratio
0,5.00
```

A file can also be deleted using the ``⎕NDELETE`` function, which returns ``1`` when the file was removed.

```apl
      ⎕NDELETE 'ratio.csv'
1
      ⎕NEXISTS 'ratio.csv'
0
```

## Reading character separated values

Certain commonly used file types have dedicated system functions. The ``⎕CSV`` function allows straightforward processing of text files with values separated by a specified character. By default, it processes comma-separated values.

The right argument to a ``⎕CSV`` function is a vector of up to 4 values consisting of the path to the file, the character encoding, the column types, and a flag for whether the file has a header.

The column types are specified by a numerical vector where each element specifies the behavior of ``⎕CSV`` in reading that column.

| Type | Meaning |
|:----:|---------|
| `0` | Ignore the column |
| `1` | Character data |
| `2` | Numeric. A value that is not a number causes an error. |
| `3` | Numeric. A value that is not a number becomes `0`. |
| `4` | Numeric. A value that is not a number stays as text. |
| `5` | Numeric. An empty value becomes `0`, but text causes an error. |

Applying this to our `diagnostic.csv` file.

```apl
      (data hdr)←⎕CSV 'diagnostic.csv' 'UTF-8' (2 2 2 2 2 2) 1
      ⍴data
6 6
      hdr
 step  time  dt  rhom_min  rhom_max  rhom_avg 
```

The six columns are numeric, so the values arrive as numbers. APL writes them in its own exponential notation.

```apl
      data[;5]
8.35E¯21 8.41E¯21 8.62E¯21 9.04E¯21 9.77E¯21 1.09E¯20
```

As an example, we calculate the ratio of the highest density to the lowest.

```apl
      data[;5]÷data[;4]
5 5.06626506 5.256097561 5.614906832 6.183544304 7.077922078
```

Consider the following example illustrating the different column types, where the simulation had written a ``NaN`` string into its output in the last column of step 2.

```apl
      ⍝ type 2
      ⎕CSV 'diagnostic.csv' '' (2 2 2 2 2 2) 1
DOMAIN ERROR: Non-numeric data in record 4, field 6 (⎕IO=1)

      ⍝ type 3
      (⊃⎕CSV 'diagnostic.csv' '' (2 2 2 2 2 3) 1)[;6]
3.21E¯21 3.22E¯21 0 3.31E¯21 3.4E¯21 3.52E¯21

      ⍝ type 4
      (⊃⎕CSV 'diagnostic.csv' '' (2 2 2 2 2 4) 1)[;6]
3.21E¯21 3.22E¯21  NaN  3.31E¯21 3.4E¯21 3.52E¯21
```

## File ties

For files that are too large to load at once into the APL workspace, such as long-running simulation outputs, **ties** can be used to read chunks of data at a time. 

The ``⎕NTIE`` system function creates a tie to a file, with left argument the file path and right argument the desired numerical representative. If ``0`` is given as right argument, the next available tie number is allocated. 

```apl
      tn←'diagnostic.csv' ⎕NTIE 0
      tn
¯1
      ⎕NSIZE tn
286
```

The ``⎕NREAD`` function allows reading from a tied file, with right argument vector tie number, the data type, the number of items, and the position to read from.

```apl
      ⎕NREAD tn 80 9 0
step,time
```

``⎕CSV`` also accepts a tie number in place of a name.

```apl
      ⍴⊃⎕CSV tn '' (2 2 2 2 2 2) 1
6 6
```

!!! warning
      A tie keeps track of its position in a file, which advances as the file is read. A read with no starting position given continues reading from that position.

      ```apl
            ⎕NREAD tn 80 9 0
      step,time
            ⎕NREAD tn 80 5
      ,dt,r
            ⎕NREAD tn 80 8
      hom_min,
      ```

      ``⎕CSV`` advances the position in the same way, which means reading the same tie twice therefore returns the data and then nothing afterwards, since it has read the whole file.

      ```apl
            tn←'diagnostic.csv' ⎕NTIE 0
            ⍴⊃⎕CSV tn '' (2 2 2 2 2 2) 1
      6 6
            ⍴⊃⎕CSV tn '' (2 2 2 2 2 2) 1
      0 6
      ```

The ``⎕NNUMS`` constant lists the open tie numbers and ``⎕NUNTIE`` closes them.

```apl
      ⎕NNUMS
¯1
      ⎕NUNTIE ⎕NNUMS
      ⎕NNUMS

```

## Component files

For storing APL arrays, Dyalog provides its own file format called component files.

Consider the following rank 3 array, which represents the phase space density of ions in our simulation at three different times.

```apl
      X←¯3+⍳5
      V←¯4+⍳7
      f←{*-((X*2)∘.+(V*2))÷2×⍵*2}
      F←↑f¨0.8 1.4 2.2
      ⍴F
3 5 7
```

The three time slices show the distribution spreading.

```apl
      F[1;;]
0.000039 0.0019 0.02 0.044 0.02 0.0019 0.000039
0.0004   0.02   0.21 0.46  0.21 0.02   0.0004  
0.00088  0.044  0.46 1     0.46 0.044  0.00088 
0.0004   0.02   0.21 0.46  0.21 0.02   0.0004  
0.000039 0.0019 0.02 0.044 0.02 0.0019 0.000039

      F[2;;]
0.036 0.13 0.28 0.36 0.28 0.13 0.036
0.078 0.28 0.6  0.77 0.6  0.28 0.078
0.1   0.36 0.77 1    0.77 0.36 0.1  
0.078 0.28 0.6  0.77 0.6  0.28 0.078
0.036 0.13 0.28 0.36 0.28 0.13 0.036

      F[3;;]
0.26 0.44 0.6  0.66 0.6  0.44 0.26
0.36 0.6  0.81 0.9  0.81 0.6  0.36
0.39 0.66 0.9  1    0.9  0.66 0.39
0.36 0.6  0.81 0.9  0.81 0.6  0.36
0.26 0.44 0.6  0.66 0.6  0.44 0.26
```

To store this phase space density, use ``⎕FCREATE`` to create a component file and tie it, then use ``⎕FAPPEND`` to add an array to receive a component number that corresponds to that array. 

``⎕FREAD`` reads a component back given this component number.

```apl
      cf←'phasespace' ⎕FCREATE 0
      F ⎕FAPPEND cf
1
      ⍴⎕FREAD cf 1
3 5 7
      F≡⎕FREAD cf 1
1
```

An existing component can be replaced with ``⎕FREPLACE``. In the following example, we double the resolution of our phase space and overwrite the old density array, measuring the file size with ``⎕FSIZE``. 

The ``⎕FSIZE`` function, given a tie number for a component file, returns a numerical vector consisting of the component number of the first array stored, the number that the next ``⎕FAPPEND`` will use, the space occupied in bytes, and the size limit.

```apl
      ⎕FSIZE cf
1 2 1952 1.844674407E19
      X←0.5×¯5+⍳9
      V←0.5×¯7+⍳13
      F←↑f¨0.8 1.4 2.2
      ⍴F
3 9 13
      F ⎕FREPLACE cf 1
1
      ⍴⎕FREAD cf 1
3 9 13
      ⎕FSIZE cf
1 2 4976 1.844674407E19
```

``⎕FUNTIE`` closes the file, and ``⎕FTIE`` opens it again for later processing.

```apl
      ⎕FUNTIE cf
      g←'phasespace' ⎕FTIE 0
      ⍴⎕FREAD g 1
3 9 13
```
