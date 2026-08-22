# Function index

Here is a table of symbols we have used and how to type them in TryAPL.

It might be useful to review this page as you are doing the read and write exercises in the next sections.

## New functions

### Creating vectors

| Symbol | Name | Function (Monadic/Dyadic) | Key combination (Prefix) | Key combination (Tab)
|:--:|:--:|:--:|:--:|:--:|
| `⍳` | Iota | [Index generator](part1.md#index-generator:~:text=The%20monadic%20index%20generator%20%E2%8D%B3%20%28iota%29%20is%20probably%20one%20of%20the%20most%20common%20and%20simple%20vector%20functions%20in%20APL.) | <kbd>PREFIX</kbd> ++i++ | <kbd>i</kbd> <kbd>i</kbd> ++tab++ |
| `?` | Question mark | [Roll](part1.md#roll-and-deal:~:text=Take%20a%20gamble%3A%20what%20does%20the%20dyadic%20%3F%20function%20do%3F) / [Deal](part1.md#roll-and-deal:~:text=Take%20a%20gamble%3A%20what%20does%20the%20dyadic%20%3F%20function%20do%3F) | <kbd>PREFIX</kbd> ++q++ | <kbd>?</kbd> |
| `/` | Slash | [Replicate](part1.md#replicate:~:text=This%20is%20the%20dyadic%20replicate%20function%2C%20%2F.) | <kbd>/</kbd> | <kbd>/</kbd> |

### Reductions and scans

| Symbol | Name | Function (Monadic/Dyadic) | Key combination (Prefix) | Key combination (Tab)
|:--:|:--:|:--:|:--:|:--:|
| `\` | Backslash | [Scan](part2.md#:~:text=The%20scan%20%5C%20operator%20cumulatively%20applies%20its%20left%20argument%20function%20on%20its%20right%20argument%20array%20and%20returns%20a%20result%20array%20of%20the%20same%20rank.) | <kbd>\</kbd> | <kbd>\</kbd> |

### Sorting

| Symbol | Name | Function (Monadic/Dyadic) | Key combination (Prefix) | Key combination (Tab)
|:--:|:--:|:--:|:--:|:--:|
| `⍋` | Grade up | [Grade up](part3.md#:~:text=Instead%20of%20returning%20a%20sorted%20list%2C%20grade%20up%20%E2%8D%8B%20and%20grade%20down%20%E2%8D%92%20return%20the%20indices%20of%20the%20elements%20of%20the%20final%20sorted%20array%20in%20the%20initial%20unsorted%20array.) | <kbd>PREFIX</kbd> <kbd>$</kbd> | <kbd>A</kbd> <kbd>&#124;</kbd> ++tab++ |
| `⍒` | Grade down | [Grade down](part3.md#:~:text=Instead%20of%20returning%20a%20sorted%20list%2C%20grade%20up%20%E2%8D%8B%20and%20grade%20down%20%E2%8D%92%20return%20the%20indices%20of%20the%20elements%20of%20the%20final%20sorted%20array%20in%20the%20initial%20unsorted%20array.) | <kbd>PREFIX</kbd> <kbd>#</kbd> | <kbd>V</kbd> <kbd>&#124;</kbd> ++tab++ |

### Selecting from a vector

| Symbol | Name | Function (Monadic/Dyadic) | Key combination (Prefix) | Key combination (Tab)
|:--:|:--:|:--:|:--:|:--:|
| `↑` | Up arrow | [Take](part4.md#take:~:text=This%20one%20is%20very%20simple%3A%20we%20use%20the%20dyadic%20%E2%86%91%20function%20%28called%20take%29%20to%20choose%20the%20first%20or%20last%20N%20numbers%20of%20an%20array.) | <kbd>PREFIX</kbd> ++y++ | <kbd>^</kbd> <kbd>&#124;</kbd> ++tab++ |
| `↓` | Down arrow | [Drop](part4.md#drop:~:text=The%20dyadic%20drop%20function%20%E2%86%93%20works%20very%20similarly%20to%20take.) | <kbd>PREFIX</kbd> ++u++ | <kbd>v</kbd> <kbd>&#124;</kbd> ++tab++ |
| `[]` | Brackets | [Index](part4.md#index:~:text=Indexing%20is%20used%20to%20pick%20out%20values%20based%20on%20an%20index%20from%20an%20array.) | <kbd>[</kbd> <kbd>]</kbd> | <kbd>[</kbd> <kbd>]</kbd> |
| `/` | Slash | [Compress](part4.md#compress:~:text=The%20dyadic%20compress%20function%20%2F%20will%20let%20you%20use%20a%20mask%20to%20pick%20elements%20from%20an%20array.) | <kbd>/</kbd> | <kbd>/</kbd> |
| `⊃` | Right shoe | [Pick](part4.md#pick:~:text=You%20can%20use%20the%20dyadic%20pick%20%E2%8A%83%20function%20to%20pick%20just%20one%20element%20from%20a%20vector%3A) | <kbd>PREFIX</kbd> ++x++ | <kbd>)</kbd> <kbd>)</kbd> ++tab++ |

### Searching

| Symbol | Name | Function (Monadic/Dyadic) | Key combination (Prefix) | Key combination (Tab)
|:--:|:--:|:--:|:--:|:--:|
| `⍳` | Iota | [Index of](part5.md#indices-of:~:text=The%20most%20used%20searching%20function%20is%20the%20dyadic%20indices%20of%2C%20which%20shares%20its%20symbol%20with%20the%20index%20function%20%E2%8D%B3.) | <kbd>PREFIX</kbd> ++i++ | <kbd>i</kbd> <kbd>i</kbd> ++tab++ |
| `∊` | Epsilon | [Member of](part5.md#member-of:~:text=Dyadic%20iota%20%E2%8D%B3%20answers%20the%20question%20%22where%20is%20it%3F%22%3B%20dyadic%20epsilon%20%E2%88%8A%20answers%20the%20question%20%22is%20it%3F%22) | <kbd>PREFIX</kbd> ++e++ | <kbd>e</kbd> <kbd>e</kbd> ++tab++ |
| `⍸` | Iota underbar | [Where](part5.md#where:~:text=This%20is%20a%20monadic%20function%2C%20which%20takes%20in%20a%20list%20of%20ones%20and%20zeros%20on%20the%20right%20and%20returns%20the%20location%20of%20all%20the%20ones.) / [Interval index](part5.md#interval-index:~:text=This%20problem%20can%20be%20solved%20with%20the%20dyadic%20%E2%8D%B8%20interval%20index%20function.) | <kbd>PREFIX</kbd> ++shift+i++ | <kbd>i</kbd> <kbd>_</kbd> ++tab++ |
| `⍷` | Epsilon underbar | [Find](part5.md#find:~:text=APL%20also%20has%20a%20function%20to%20find%20subarrays%3A%20the%20dyadic%20find%20function%2C%20which%20is%20written%20using%20the%20epsilon%2Dunderbar%20symbol%20%E2%8D%B7.) | <kbd>PREFIX</kbd> ++shift+e++ | <kbd>e</kbd> <kbd>_</kbd> ++tab++ |
| `⌸` | Quad equal | [Key](part5.md#key:~:text=The%20key%20%E2%8C%B8%20operator%20provides%20a%20way%20of%20grouping%20together%20elements%20of%20an%20array%2C%20and%20apply%20an%20arbitrary%20function%20to%20each%20group) | <kbd>PREFIX</kbd> ++shift+k++ | <kbd>[</kbd> <kbd>=</kbd> ++tab++ |

### System variables and constants

| Name | Meaning |
|:--:|:--:|
| [`⎕A`](../ch2/part4.md#:~:text=The%20useful%20%E2%8E%95A%20constant%20stores%20the%20upper%2Dcase%20english%20alphabet%20%27ABCDEFGHIJKLMNOPQRSTUVWXYZ%27.) | The upper-case English alphabet, `'ABCDEFGHIJKLMNOPQRSTUVWXYZ'` |
| [`⎕CT`](../ch3/part3.md#:~:text=The%20tolerance%20can%20be%20read%20%28and%20set%29%20via%20the%20%E2%8E%95CT%20system%20variable%2C%20and%20the%20precision%20shown%20is%20read%20%28and%20set%29%20via%20%E2%8E%95PP.) | Comparison tolerance, from `0` (exact comparison) up to `10*¯10` |
| [`⎕PP`](../ch3/part3.md#:~:text=The%20tolerance%20can%20be%20read%20%28and%20set%29%20via%20the%20%E2%8E%95CT%20system%20variable%2C%20and%20the%20precision%20shown%20is%20read%20%28and%20set%29%20via%20%E2%8E%95PP.) | Print precision, the number of digits displayed |
| [`⎕IO`](part1.md#index-origin:~:text=A%20handy%20tool%20to%20get%20around%20this%20is%20to%20use%20the%20index%20origin%20variable%2C%20%E2%8E%95IO.) | Index origin, either `1` (the default) or `0` |

## Old functions

| Symbol | Name | Function (Monadic/Dyadic) | Key combination (Prefix) | Key combination (Tab)
|:--:|:--:|:--:|:--:|:--:|
| `+` | Plus | [Conjugate](../ch3/part2.md#:~:text=Monadic%20%2B%20%3A%20Complex%20Conjugate) / [Plus](../ch1/part2.md#:~:text=How%20about%20addition%3F) | ++plus++ | ++plus++ |
| `-` | Minus | [Negate](../ch3/part2.md#:~:text=Monadic%20%2D%20%3A%20Negate) / [Minus](../ch1/part2.md#:~:text=One%20of%20them%20is%20a%20minus%20function%20%28%2D%29%2C%20that%20subtracts%20two%20numbers.) | ++minus++ | ++minus++ |
| `×` | Times | [Direction](../ch3/part2.md#:~:text=Monadic%20%C3%97%20%3A%20Sign%2FDirection) / [Times](../ch1/part2.md#:~:text=In%20fact%2C%20the%20creators%20of%20APL%20added%20a%20special%20multiplication%20cross%20%28%C3%97%29%20to%20do%20multiplication.) | <kbd>PREFIX</kbd> ++minus++ | <kbd>x</kbd> <kbd>x</kbd> ++tab++ |
| `÷` | Divide | [Divide](../ch1/part2.md#:~:text=Similarly%2C%20division%20is%20done%20with%20the%20dedicated%20mathematical%20division%20symbol%20%28%C3%B7%29.) | <kbd>PREFIX</kbd> ++equal++ | <kbd>:</kbd> <kbd>-</kbd> ++tab++ |
| `*` | Star | [Power](../ch1/part2.md#:~:text=This%20isn%27t%20multiplication%2C%20it%27s%20exponentiation%21) | <kbd>*</kbd> | <kbd>*</kbd> |
| `¯` | High minus | [Negative](../ch1/part2.md#:~:text=The%20other%20is%20a%20negative%20sign%20%28%C2%AF%29%2C%20which%20is%20slightly%20higher%20and%20tells%20APL%20that%20a%20number%20is%20negative.) | <kbd>PREFIX</kbd> ++2++ | <kbd>-</kbd> <kbd>-</kbd> ++tab++ |
| `⍝` | Lamp | [Comment](../ch1/part4.md#:~:text=One%20last%20handy%20symbol%3A%20%E2%8D%9D.) | <kbd>PREFIX</kbd> ++comma++ | <kbd>o</kbd> <kbd>n</kbd> ++tab++ |
| `←` | Assignment symbol | [Assign](../ch2/part1.md#:~:text=Allow%20me%20to%20introduce%20you%20to%20a%20new%20symbol%3B%20the%20assignment%20symbol%3A) | <kbd>PREFIX</kbd> <kbd>[</kbd> | <kbd>&lt;</kbd> ++minus++ ++tab++ |
| `⎕` | Quad | [Output](../ch2/part1.md#:~:text=All%20this%20does%20is%20print%20whatever%20is%20assigned%20to%20it%20to%20the%20screen.) | <kbd>PREFIX</kbd> ++l++ | <kbd>[</kbd> <kbd>]</kbd> ++tab++ |
| `⍴` | Rho | [Shape](../ch2/part4.md#:~:text=The%20shape%20%E2%8D%B4%20function%20acts%20on%20one%20array%2C%20its%20right%20argument%2C%20by%20returning%20a%20vector%20whose%20entries%20are%20the%20lengths%20of%20the%20axes.) / [Reshape](../ch2/part4.md#:~:text=The%20reshape%20function%20takes%20a%20vector%20of%20elements%20as%20its%20right%20argument%2C%20and%20reshapes%20them%20to%20fit%20the%20dimensions%20specified%20by%20the%20left%20argument.) | <kbd>PREFIX</kbd> ++r++ | <kbd>r</kbd> <kbd>r</kbd> ++tab++ |
| `,` | Comma | [Ravel](../ch2/part5.md#:~:text=Monadically%2C%20the%20ravel%20%2C%20function%20can%20be%20used%20to%20%22unravel%22%20a%20matrix%20into%20a%20vector%20of%20its%20elements%20in%20top%2Ddown%20left%2Dright%20order%2C%20called%20ravel%20order.) / [Catenate](../ch2/part5.md#:~:text=The%20proper%20way%20to%20combine%20two%20vectors%20into%20a%20single%20longer%20vector%20is%20using%20the%20catenate%20%2C%20function%2C%20generally%20joining%20two%20arrays%20along%20a%20common%20edge.) | ++comma++ | ++comma++ |
| `{}` | Braces | [Dfn](../ch3/part1.md#:~:text=A%20dfn%20is%20a%20series%20of%20statements%20in%20curly%20braces%20%7B%7D%2C%20where%20the%20special%20characters%20%E2%8D%BA%20and%20%E2%8D%B5%20represent%20the%20left%20and%20right%20arguments%20to%20the%20function.) | <kbd>{</kbd> <kbd>}</kbd> | <kbd>{</kbd> <kbd>}</kbd> |
| `⍺` | Alpha | [Left argument](../ch3/part1.md#:~:text=A%20dfn%20is%20a%20series%20of%20statements%20in%20curly%20braces%20%7B%7D%2C%20where%20the%20special%20characters%20%E2%8D%BA%20and%20%E2%8D%B5%20represent%20the%20left%20and%20right%20arguments%20to%20the%20function.) | <kbd>PREFIX</kbd> ++a++ | <kbd>a</kbd> <kbd>a</kbd> ++tab++ |
| `⍵` | Omega | [Right argument](../ch3/part1.md#:~:text=A%20dfn%20is%20a%20series%20of%20statements%20in%20curly%20braces%20%7B%7D%2C%20where%20the%20special%20characters%20%E2%8D%BA%20and%20%E2%8D%B5%20represent%20the%20left%20and%20right%20arguments%20to%20the%20function.) | <kbd>PREFIX</kbd> ++w++ | <kbd>w</kbd> <kbd>w</kbd> ++tab++ |
| `⋄` | Diamond | [Statement separator](../ch3/part1.md#:~:text=APL%20allows%20any%20number%20of%20assignment%20statements%20inside%20a%20function%20before%20the%20statement%20which%20evaluates%20the%20result%2C%20using%20the%20diamond%2Dshaped%20statement%20separator%20%E2%8B%84%2C%20or%20placing%20the%20statements%20on%20new%20lines.) | <kbd>PREFIX</kbd> <kbd>`</kbd> | <kbd>&lt;</kbd> <kbd>&gt;</kbd> ++tab++ |
| `⍬` | Zilde | [Empty numeric vector](../ch3/part1.md#:~:text=The%20empty%20vector%20symbol%20%E2%8D%AC%20is%20added%20here%20as%20filler%20since%20functions%20always%20require%20a%20right%20argument.) | <kbd>PREFIX</kbd> <kbd>}</kbd> | <kbd>0</kbd> <kbd>~</kbd> ++tab++ |
| `⌈` | Upstile | [Ceiling](../ch3/part2.md#:~:text=Monadic%20%E2%8C%88%20and%20%E2%8C%8A%20%3A%20Ceil%20%26%20Floor) / [Maximum](../ch3/part2.md#:~:text=Dyadic%20%E2%8C%88%20and%20%E2%8C%8A%20%3A%20Max%20%26%20Min) | <kbd>PREFIX</kbd> ++s++ | <kbd>7</kbd> <kbd>7</kbd> ++tab++ |
| `⌊` | Downstile | [Floor](../ch3/part2.md#:~:text=Monadic%20%E2%8C%88%20and%20%E2%8C%8A%20%3A%20Ceil%20%26%20Floor) / [Minimum](../ch3/part2.md#:~:text=Dyadic%20%E2%8C%88%20and%20%E2%8C%8A%20%3A%20Max%20%26%20Min) | <kbd>PREFIX</kbd> ++d++ | <kbd>l</kbd> <kbd>l</kbd> ++tab++ |
| <code>&#124;</code> | Stile | [Magnitude](../ch3/part2.md#:~:text=Monadic%20%7C%20%3A%20Absolute%20value%2C%20Magnitude) / [Residue](../ch3/part2.md#:~:text=Dyadic%20%7C%20%3A%20Residue) | <kbd>PREFIX</kbd> ++m++ | <kbd>&#124;</kbd> |
| `∨` | Logical OR | [Greatest common divisor](../ch3/part2.md#:~:text=Dyadic%20%E2%88%A8%20%26%20%E2%88%A7%20%3A%20GCD%20and%20LCM), [Or](../ch3/part3.md#:~:text=As%20suggested%20by%20the%20choice%20of%20glyphs%20for%20the%20Greatest%20Common%20Divisor%20%E2%88%A7%20and%20the%20Least%20Common%20Multiple%20%E2%88%A8%2C%20these%20two%20operations%20are%20also%20used%20for%20the%20boolean%20logic%20%22or%22%20and%20%22and%22%20operations.) | <kbd>PREFIX</kbd> ++9++ | <kbd>v</kbd> <kbd>v</kbd> ++tab++ |
| `∧` | Logical AND | [Lowest common multiple](../ch3/part2.md#:~:text=Dyadic%20%E2%88%A8%20%26%20%E2%88%A7%20%3A%20GCD%20and%20LCM), [And](../ch3/part3.md#:~:text=As%20suggested%20by%20the%20choice%20of%20glyphs%20for%20the%20Greatest%20Common%20Divisor%20%E2%88%A7%20and%20the%20Least%20Common%20Multiple%20%E2%88%A8%2C%20these%20two%20operations%20are%20also%20used%20for%20the%20boolean%20logic%20%22or%22%20and%20%22and%22%20operations.) | <kbd>PREFIX</kbd> ++0++ | <kbd>^</kbd> <kbd>^</kbd> ++tab++ |
| `○` | Circle | [Pi times](../ch3/part2.md#:~:text=Monadic%20%E2%97%8B%20%3A%20Pi%20Times) / [Circular](../ch3/part2.md#:~:text=The%20dyadic%20circle%20%E2%97%8B%20function%20applies%20a%20trigonometric%20function%20to%20its%20right%20argument%20depending%20on%20its%20left%20argument.) | <kbd>PREFIX</kbd> ++o++ | <kbd>O</kbd> <kbd>O</kbd> ++tab++ |
| `=` | Equal | [Equal to](../ch3/part3.md#:~:text=Dyadic%20%3D%2C%20%E2%89%A0%2C%20%E2%89%A4%2C%20%3C%2C%20%3E%2C%20%E2%89%A5%20%3A%20Comparison%20Functions) | <kbd>PREFIX</kbd> ++5++ | <kbd>=</kbd> |
| `≠` | Not equal | [Not equal to](../ch3/part3.md#:~:text=Dyadic%20%3D%2C%20%E2%89%A0%2C%20%E2%89%A4%2C%20%3C%2C%20%3E%2C%20%E2%89%A5%20%3A%20Comparison%20Functions) | <kbd>PREFIX</kbd> ++8++ | <kbd>=</kbd> <kbd>/</kbd> ++tab++ |
| `<` | Less than | [Less than](../ch3/part3.md#:~:text=Dyadic%20%3D%2C%20%E2%89%A0%2C%20%E2%89%A4%2C%20%3C%2C%20%3E%2C%20%E2%89%A5%20%3A%20Comparison%20Functions) | <kbd>PREFIX</kbd> ++3++ | <kbd>&lt;</kbd> |
| `≤` | Less than or equal to | [Less than or equal to](../ch3/part3.md#:~:text=Dyadic%20%3D%2C%20%E2%89%A0%2C%20%E2%89%A4%2C%20%3C%2C%20%3E%2C%20%E2%89%A5%20%3A%20Comparison%20Functions) | <kbd>PREFIX</kbd> ++4++ | <kbd>&lt;</kbd> <kbd>=</kbd> ++tab++ |
| `>` | Greater than | [Greater than](../ch3/part3.md#:~:text=Dyadic%20%3D%2C%20%E2%89%A0%2C%20%E2%89%A4%2C%20%3C%2C%20%3E%2C%20%E2%89%A5%20%3A%20Comparison%20Functions) | <kbd>PREFIX</kbd> ++7++ | <kbd>&gt;</kbd> |
| `≥` | Greater than or equal to | [Greater than or equal to](../ch3/part3.md#:~:text=Dyadic%20%3D%2C%20%E2%89%A0%2C%20%E2%89%A4%2C%20%3C%2C%20%3E%2C%20%E2%89%A5%20%3A%20Comparison%20Functions) | <kbd>PREFIX</kbd> ++6++ | <kbd>&gt;</kbd> <kbd>=</kbd> ++tab++ |
| `≡` | Equal underbar | [Match](../ch3/part3.md#:~:text=To%20compare%20arrays%2C%20use%20the%20dyadic%20%E2%89%A1%20match%20function.) | <kbd>PREFIX</kbd> <kbd>:</kbd> | <kbd>=</kbd> <kbd>=</kbd> ++tab++ |
| `~` | Tilde | [Not](../ch3/part3.md#:~:text=Monadic%20%7E%20%3A%20Logical%20Not) | <kbd>PREFIX</kbd> ++t++ | <kbd>~</kbd> |
| `⍲` | Up caret tilde | [Nand](../ch3/part3.md#:~:text=Dyadic%20%E2%8D%B2%20%26%20%E2%8D%B1%20%3A%20Logical%20Nand%20and%20Logical%20Nor) | <kbd>PREFIX</kbd> <kbd>)</kbd> | <kbd>^</kbd> <kbd>~</kbd> ++tab++ |
| `⍱` | Down caret tilde | [Nor](../ch3/part3.md#:~:text=Dyadic%20%E2%8D%B2%20%26%20%E2%8D%B1%20%3A%20Logical%20Nand%20and%20Logical%20Nor) | <kbd>PREFIX</kbd> <kbd>(</kbd> | <kbd>v</kbd> <kbd>~</kbd> ++tab++ |
| `∇` | Del | [Recursion](../ch3/part4.md#:~:text=The%20special%20symbol%20%E2%88%87%20can%20also%20be%20used%20in%20place%20of%20the%20function%20name.) | <kbd>PREFIX</kbd> ++g++ | <kbd>V</kbd> <kbd>V</kbd> ++tab++ |
| `:` | Colon | [Guard](../ch3/part4.md#:~:text=Guarded%20expressions%20are%20conditional%20expressions%3B%20they%20only%20execute%20a%20statement%20if%20some%20condition%20holds.) | <kbd>:</kbd> | <kbd>:</kbd> |
| `⊣` | Left tack | [Same](../ch3/part5.md#:~:text=They%20%22point%22%20towards%20which%20argument%20they%20return.) / [Left](../ch3/part5.md#:~:text=Some%20other%20important%20functions%20are%20the%20dyadic%20right%20and%20left%20identity%2F%E2%80%9Ctack%E2%80%9D%20functions%20which%20return%20their%20right%20or%20left%20arguments.) | <kbd>PREFIX</kbd> <kbd>&#124;</kbd> | <kbd>-</kbd> <kbd>&#124;</kbd> ++tab++ |
| `⊢` | Right tack | [Same](../ch3/part5.md#:~:text=They%20%22point%22%20towards%20which%20argument%20they%20return.) / [Right](../ch3/part5.md#:~:text=Some%20other%20important%20functions%20are%20the%20dyadic%20right%20and%20left%20identity%2F%E2%80%9Ctack%E2%80%9D%20functions%20which%20return%20their%20right%20or%20left%20arguments.) | <kbd>PREFIX</kbd> <kbd>\</kbd> | <kbd>&#124;</kbd> <kbd>-</kbd> ++tab++ |
| `⍤` | Jot diaeresis | [Atop](../ch3/part5.md#:~:text=The%20most%20basic%20train%20is%20the%202%2Dtrain%20%28fg%29%2C%20in%20operator%20form%20f%E2%8D%A4g%2C%20called%20an%20atop.) | <kbd>PREFIX</kbd> ++shift+j++ | <kbd>o</kbd> <kbd>:</kbd> ++tab++ |
| `∘` | Jot | [Bind](../ch3/part5.md#:~:text=Instead%2C%20the%20bind%20%E2%88%98%20operator%20can%20be%20used%20to%20create%20a%20monadic%20function%20from%20a%20dyadic%20one.) | <kbd>PREFIX</kbd> ++j++ | <kbd>o</kbd> <kbd>o</kbd> ++tab++ |
| `/` | Slash | [Reduce](../ch3/part5.md#:~:text=Before%20starting%20this%20section%2C%20we%20briefly%20introduce%20the%20commonly%20used%20monadic%20reduce%20%2F%20operator%2C%20which%20applies%20its%20left%20function%20argument%20between%20every%20element%20of%20a%20vector.) | <kbd>/</kbd> | <kbd>/</kbd> |
