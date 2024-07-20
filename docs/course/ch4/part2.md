# Reductions and scans

!!! abstract "This part will cover"

    - The reduction operator
    - The scan operator

---

Vectors in APL are represented, and can be created, by a collection of scalars separated by spaces. The reduce / operator can be naively thought of as replacing these spaces with a function specified by its left argument, and returning the result as a scalar.

```apl
      ⍳10
1 2 3 4 5 6 7 8 9 10

      +/⍳10
55
      1+2+3+4+5+6+7+8+9+10
55
      
      -/⍳10
¯5
       1-2-3-4-5-6-7-8-9-10
¯5

       ∧/⍳20 ⍝ LCM of numbers from 1 to 20
2520
```

Note that the reduce / operator always reduces the rank of its right argument by one; for example, reducing using the catenate , function creates a scalar which contains the array.

```apl
      ,/⍳10
┌────────────────────┐
│1 2 3 4 5 6 7 8 9 10│
└────────────────────┘

      1,2,3,4,5,6,7,8,9,10
1 2 3 4 5 6 7 8 9 10
```

Since functions act from right to left, it is possible to construct a vector by catenating its elements from the right, and destruct the vector by iterating on it from the right using reduce. In type theory, these can be thought of as the general introduction and elimination rules of lists.

```apl

      1,(2,(3,(4,(5,(6,(7,(8,(9,10))))))))
1 2 3 4 5 6 7 8 9 10

      {⎕←⍵ ⍺}/1,(2,(3,(4,(5,(6,(7,(8,(9,10))))))))
10 9
10 9  8
10 9  8  7
10 9  8  7  6
10 9  8  7  6  5
10 9  8  7  6  5  4
10 9  8  7  6  5  4  3
10 9  8  7  6  5  4  3  2
10 9  8  7  6  5  4  3  2  1
```

It can be seen that for-each loops in imperative programming languages are equivalent to the reduce / operator, since they both destruct a list in the most general way possible. For example, the python ``for x in range(1,11): print(x**2)`` in APL is written as

```apl
       ⌽0,⍳10
10 9 8 7 6 5 4 3 2 1 0
       {⎕←⍺*2}/⌽0,⍳10
1
4
9
16
25
36
49
64
81
100
```

# Reduction and Scan

Vectors in APL are represented, and can be created, by a collection of scalars separated by spaces. The reduce / operator can be naively thought of as replacing these spaces with a function specified by its left argument, and returning the result as a scalar.

```python
      ⍳10
1 2 3 4 5 6 7 8 9 10

      +/⍳10
55
      1+2+3+4+5+6+7+8+9+10
55
      
      -/⍳10
¯5
       1-2-3-4-5-6-7-8-9-10
¯5

       ∧/⍳20 ⍝ LCM of numbers from 1 to 20
2520
```

Note that the reduce / operator always reduces the rank of its right argument by one; for example, reducing using the catenate , function creates a scalar which contains the array.

```python
      ,/⍳10
┌────────────────────┐
│1 2 3 4 5 6 7 8 9 10│
└────────────────────┘

      1,2,3,4,5,6,7,8,9,10
1 2 3 4 5 6 7 8 9 10

      1,(2,(3,(4,(5,(6,(7,(8,(9,10))))))))
1 2 3 4 5 6 7 8 9 10
```

Since functions act from right to left, it is possible to construct a vector by catenating its elements from the right, and destruct the vector by iterating on it from the right using reduce. In type theory, these can be thought of as the general introduction and elimination rules of lists.

It can be seen that `for-each` loops in imperative programming languages are equivalent to the reduce / operator, since they both destruct a list in the most general way possible. For example, the python ``for x in range(1,11): print(x**2)`` in APL is written as

```python
       ⌽0,⍳10
10 9 8 7 6 5 4 3 2 1 0
       {⎕←⍺*2}/⌽0,⍳10
1
4
9
16
25
36
49
64
81
100
```

The cumulative sum of a list can also be easily expressed using the reduce / operator.

```apl
       {⍺,⍺+⍵}/⍳10
┌──────────────────────────┐
│1 3 6 10 15 21 28 36 45 55│
└──────────────────────────┘
       ⊃{⍺,⍺+⍵}/⍳10
1 3 6 10 15 21 28 36 45 55
```

Note that we had to disclose ⊃ the resulting scalar which contained the resulting vector. 
