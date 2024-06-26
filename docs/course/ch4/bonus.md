# Bonus content: Rotating an image

!!! tip "This part is optional"

    This part is considered to be bonus content.
    It contains some more advanced topics that are not covered in the main course.
    It can also give some examples of functions and topics that are introuced later in the course.
    There are no exercises related to this content.

    Feel free to skim or skip this section for now, and return to it later!

---

Let’s try rotating the image `'illusion.ppm'` in the PPM P3 image format.

<img src="../../assets/4_b_original.png" style="width:50%; margin-left: auto; margin-right: auto; display: block;" />

The PPM P3 format consists of three lines of header: the first specifying the format the string `'P3'`, the second specifying the resolution of the image `455 498`, and the third specifying the maximum value for each color value, usually `255`. After these three lines, the color data is provided in plain-text as RGB values. Here is an example PPM file a scaled version of the image it encodes

```apl
P3
5 5
255
255 255 255 255 0 255 255 255 255 0 255 0 255 255 255
255 255 255 255 255 255 255 255 0 0 255 0 255 255 255
0 255 255 255 255 0 255 255 0 0 255 0 255 255 255
0 255 255 0 255 255 255 255 255 255 255 255 255 0 0
0 0 255 255 255 255 0 0 255 255 0 0 255 0 0
```

<img src="../../assets/4_b_matrix.png" style="width:50%; margin-left: auto; margin-right: auto; display: block;" />

The `⎕NGET` command can be used to open the above image, and many different types of files. It takes as right argument a path to a file, and returns an array of the file data, the encoding, and the unicode number for the newline character.

```apl
       ⎕NGET 'test.ppm'
┌──────────────────────────────────────────────────────┬───────────┬──┐
│P3                                                    │UTF-8-NOBOM│10│
│5 5                                                   │           │  │
│255                                                   │           │  │
│255 255 255 255 0 255 255 255 255 0 255 0 255 255 255 │           │  │
│255 255 255 255 255 255 255 255 0 0 255 0 255 255 255 │           │  │
│0 255 255 255 255 0 255 255 0 0 255 0 255 255 255     │           │  │
│0 255 255 0 255 255 255 255 255 255 255 255 255 0 0   │           │  │
│0 0 255 255 255 255 0 0 255 255 0 0 255 0 0           │           │  │
│                                                      │           │  │
└──────────────────────────────────────────────────────┴───────────┴──┘
```

The first element of the result is the character array consisting of the image. To get each row of the image separately in an array, the argument `1` can be used.

```apl
       ⊃⎕NGET 'test.ppm'1
┌───┬───┬───┬──────────────────────────────────────────────────────┬───────
│P3 │5 5│255│255 255 255 255 0 255 255 255 255 0 255 0 255 255 255 │255 255
└───┴───┴───┴──────────────────────────────────────────────────────┴───────
      ───────────────────────────────────────────────┬──────────────────────────────────────────────────┬─────────────────
       255 255 255 255 255 255 0 0 255 0 255 255 255 │0 255 255 255 255 0 255 255 0 0 255 0 255 255 255 │0 255 255 0 255 2
      ───────────────────────────────────────────────┴──────────────────────────────────────────────────┴─────────────────
      ───────────────────────────────────┬────────────────────────────────────────────┐
      55 255 255 255 255 255 255 255 0 0 │0 0 255 255 255 255 0 0 255 255 0 0 255 0 0 │
      ───────────────────────────────────┴────────────────────────────────────────────┘
```

We start by reading the illusion image and its metadata.

```apl
       file ← ⊃⎕NGET 'illusion.ppm'1
       header ← file[1 2 3]
       resolution ← 2⊃header
       image ← file~header
	     resolution
455 498
       resolution[1]
4
       ⍴resolution
7
```

The resolution vector is not a vector of numbers, which would be useful here, but a vector of characters in the string `'455 497'`. The execute `⍎` function evaluates strings as APL expressions, hence can turn the string `'455 497'` into the vector `455 497`.

```apl
       resolution ← ⍎2⊃header
	     resolution
455 497
       resolution[1]
455
       ⍴resolution
2
```

The image data is then rotated by half its width, and written using the `⎕NPUT` command with the append `2` argument.

```apl
       new_image ← (3 × resolution[2]÷2)⌽¨image
       'P3'⎕NPUT'illusion_rotated.ppm'2
       resolution⎕NPUT'illusion_rotated.ppm'2
DOMAIN ERROR
```

Since the resolution data is a vector of numbers, it cannot be written directly into a file as text. The format `⍕` function converts between the two, sometimes acting as an inverse to the `⍎` execute function. The image data is written element by element, hence row by row (since the elements of `image` are rows of the original image).

```apl
       (⍕resolution)⎕NPUT'illusion_rotated.ppm'2
       '255'⎕NPUT'illusion_rotated.ppm'2
       (('illusion_rotated.ppm'2)∘(⎕NPUT⍨))¨new_image
```

<img src="../../assets/4_b_rotated.png" style="width:50%; margin-left: auto; margin-right: auto; display: block;" />

