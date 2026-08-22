# Function index

Here is a table of symbols we have used and how to type them in TryAPL.

It might be useful to review this page as you are doing the read and write exercises in the next sections.

## New functions

| Symbol | Name | Function (Monadic/Dyadic) | Key combination (Prefix) | Key combination (Tab)
|:--:|:--:|:--:|:--:|:--:|
| `←` | Assignment symbol | [Assign](part1.md#:~:text=Allow%20me%20to%20introduce%20you%20to%20a%20new%20symbol%3B%20the%20assignment%20symbol%3A) | <kbd>PREFIX</kbd> <kbd>[</kbd> | <kbd>&lt;</kbd> ++minus++ ++tab++ |
| `⎕` | Quad | [Output](part1.md#:~:text=All%20this%20does%20is%20print%20whatever%20is%20assigned%20to%20it%20to%20the%20screen.) | <kbd>PREFIX</kbd> ++l++ | <kbd>[</kbd> <kbd>]</kbd> ++tab++ |
| `⍴` | Rho | [Shape](part4.md#:~:text=The%20shape%20%E2%8D%B4%20function%20acts%20on%20one%20array%2C%20its%20right%20argument%2C%20by%20returning%20a%20vector%20whose%20entries%20are%20the%20lengths%20of%20the%20axes.) / [Reshape](part4.md#:~:text=The%20reshape%20function%20takes%20a%20vector%20of%20elements%20as%20its%20right%20argument%2C%20and%20reshapes%20them%20to%20fit%20the%20dimensions%20specified%20by%20the%20left%20argument.) | <kbd>PREFIX</kbd> ++r++ | <kbd>r</kbd> <kbd>r</kbd> ++tab++ |
| `,` | Comma | [Ravel](part5.md#:~:text=Monadically%2C%20the%20ravel%20%2C%20function%20can%20be%20used%20to%20%22unravel%22%20a%20matrix%20into%20a%20vector%20of%20its%20elements%20in%20top%2Ddown%20left%2Dright%20order%2C%20called%20ravel%20order.) / [Catenate](part5.md#:~:text=The%20proper%20way%20to%20combine%20two%20vectors%20into%20a%20single%20longer%20vector%20is%20using%20the%20catenate%20%2C%20function%2C%20generally%20joining%20two%20arrays%20along%20a%20common%20edge.) | ++comma++ | ++comma++ |

### System variables and constants

| Name | Meaning |
|:--:|:--:|
| [`⎕A`](part4.md#:~:text=The%20useful%20%E2%8E%95A%20constant%20stores%20the%20upper%2Dcase%20english%20alphabet%20%27ABCDEFGHIJKLMNOPQRSTUVWXYZ%27.) | The upper-case English alphabet, `'ABCDEFGHIJKLMNOPQRSTUVWXYZ'` |

## Old functions

| Symbol | Name | Function (Monadic/Dyadic) | Key combination (Prefix) | Key combination (Tab)
|:--:|:--:|:--:|:--:|:--:|
| `+` | Plus | [Plus](../ch1/part2.md#:~:text=How%20about%20addition%3F) | ++plus++ | ++plus++ |
| `-` | Minus | [Minus](../ch1/part2.md#:~:text=One%20of%20them%20is%20a%20minus%20function%20%28%2D%29%2C%20that%20subtracts%20two%20numbers.) | ++minus++ | ++minus++ |
| `×` | Times | [Times](../ch1/part2.md#:~:text=In%20fact%2C%20the%20creators%20of%20APL%20added%20a%20special%20multiplication%20cross%20%28%C3%97%29%20to%20do%20multiplication.) | <kbd>PREFIX</kbd> ++minus++ | <kbd>x</kbd> <kbd>x</kbd> ++tab++ |
| `÷` | Divide | [Divide](../ch1/part2.md#:~:text=Similarly%2C%20division%20is%20done%20with%20the%20dedicated%20mathematical%20division%20symbol%20%28%C3%B7%29.) | <kbd>PREFIX</kbd> ++equal++ | <kbd>:</kbd> <kbd>-</kbd> ++tab++ |
| `*` | Star | [Power](../ch1/part2.md#:~:text=This%20isn%27t%20multiplication%2C%20it%27s%20exponentiation%21) | <kbd>*</kbd> | <kbd>*</kbd> |
| `¯` | High minus | [Negative](../ch1/part2.md#:~:text=The%20other%20is%20a%20negative%20sign%20%28%C2%AF%29%2C%20which%20is%20slightly%20higher%20and%20tells%20APL%20that%20a%20number%20is%20negative.) | <kbd>PREFIX</kbd> ++2++ | <kbd>-</kbd> <kbd>-</kbd> ++tab++ |
| `⍝` | Lamp | [Comment](../ch1/part4.md#:~:text=One%20last%20handy%20symbol%3A%20%E2%8D%9D.) | <kbd>PREFIX</kbd> ++comma++ | <kbd>o</kbd> <kbd>n</kbd> ++tab++ |
