# More searching and selecting

!!! abstract "This part will cover"
    
    - Searching and selecting in higher dimensional matrices
---

<link rel="stylesheet" href="/styles/ch5part2.css">

You notice that the user 'YouKnowWho' had taken over several posts and replaced the author with themselves. You've exported an array of posts to look for any suspicious activity that might hint at how the forum was compromised.

Creating the array of posts

```apl
      POSTS ← ('30-08-2024' '') ('Why does DVB-C use QAM instead of OFDM?' 'frequencySniffer') ('DAC in QPSK modulation' 'radioComputer') ('29-08-2024' '') ('Nordtel OC3 Express' 'corporateRaider') ('Record for longest television broadcast' 'YouKnowWho') ('Book on Digital Signal Processing' 'vacuumTubed') ('Trying to obtain a clear QAM signal from cable' 'hadamardMardy') ('28-08-2024' '') ('Early color TV in Finland' 'YouKnowWho') ('Soviet Tube Substitute for 6TGSN7'  'YouKnowWho') ('OFDM, carriers and useful data symbol rate' 'YouKnowWho') ('27-08-2024' '') ('How good was broadcast NTSC/PAL in practice?' 'dataMoshpit') ('Looking for flyback' 'YouKnowWho')
      POSTS
┌─────────────┬──────────────────────────────────────────────────────────┬──────────────────────────────────────┬─────────────┬─────────────────────────────────────┬────────────────────────────────────────────────────┬───────────────────────────────────────────────┬──────────────────────────────────────────────────────────────┬─────────────┬──────────────────────────────────────┬──────────────────────────────────────────────┬───────────────────────────────────────────────────────┬─────────────┬──────────────────────────────────────────────────────────┬────────────────────────────────┐
│┌──────────┬┐│┌───────────────────────────────────────┬────────────────┐│┌──────────────────────┬─────────────┐│┌──────────┬┐│┌───────────────────┬───────────────┐│┌───────────────────────────────────────┬──────────┐│┌─────────────────────────────────┬───────────┐│┌──────────────────────────────────────────────┬─────────────┐│┌──────────┬┐│┌─────────────────────────┬──────────┐│┌─────────────────────────────────┬──────────┐│┌──────────────────────────────────────────┬──────────┐│┌──────────┬┐│┌────────────────────────────────────────────┬───────────┐│┌───────────────────┬──────────┐│
││30-08-2024││││Why does DVB-C use QAM instead of OFDM?│frequencySniffer│││DAC in QPSK modulation│radioComputer│││29-08-2024││││Nordtel OC3 Express│corporateRaider│││Record for longest television broadcast│YouKnowWho│││Book on Digital Signal Processing│vacuumTubed│││Trying to obtain a clear QAM signal from cable│hadamardMardy│││28-08-2024││││Early color TV in Finland│YouKnowWho│││Soviet Tube Substitute for 6TGSN7│YouKnowWho│││OFDM, carriers and useful data symbol rate│YouKnowWho│││27-08-2024││││How good was broadcast NTSC/PAL in practice?│dataMoshpit│││Looking for flyback│YouKnowWho││
│└──────────┴┘│└───────────────────────────────────────┴────────────────┘│└──────────────────────┴─────────────┘│└──────────┴┘│└───────────────────┴───────────────┘│└───────────────────────────────────────┴──────────┘│└─────────────────────────────────┴───────────┘│└──────────────────────────────────────────────┴─────────────┘│└──────────┴┘│└─────────────────────────┴──────────┘│└─────────────────────────────────┴──────────┘│└──────────────────────────────────────────┴──────────┘│└──────────┴┘│└────────────────────────────────────────────┴───────────┘│└───────────────────┴──────────┘│
└─────────────┴──────────────────────────────────────────────────────────┴──────────────────────────────────────┴─────────────┴─────────────────────────────────────┴────────────────────────────────────────────────────┴───────────────────────────────────────────────┴──────────────────────────────────────────────────────────────┴─────────────┴──────────────────────────────────────┴──────────────────────────────────────────────┴───────────────────────────────────────────────────────┴─────────────┴──────────────────────────────────────────────────────────┴────────────────────────────────┘

      ↑POSTS
┌──────────────────────────────────────────────┬────────────────┐
│30-08-2024                                    │                │
├──────────────────────────────────────────────┼────────────────┤
│Why does DVB-C use QAM instead of OFDM?       │frequencySniffer│
├──────────────────────────────────────────────┼────────────────┤
│DAC in QPSK modulation                        │radioComputer   │
├──────────────────────────────────────────────┼────────────────┤
│29-08-2024                                    │                │
├──────────────────────────────────────────────┼────────────────┤
│Nordtel OC3 Express                           │corporateRaider │
├──────────────────────────────────────────────┼────────────────┤
│Record for longest television broadcast       │YouKnowWho      │
├──────────────────────────────────────────────┼────────────────┤
│Book on Digital Signal Processing             │vacuumTubed     │
├──────────────────────────────────────────────┼────────────────┤
│Trying to obtain a clear QAM signal from cable│hadamardMardy   │
├──────────────────────────────────────────────┼────────────────┤
│28-08-2024                                    │                │
├──────────────────────────────────────────────┼────────────────┤
│Early color TV in Finland                     │YouKnowWho      │
├──────────────────────────────────────────────┼────────────────┤
│Soviet Tube Substitute for 6TGSN7             │YouKnowWho      │
├──────────────────────────────────────────────┼────────────────┤
│OFDM, carriers and useful data symbol rate    │YouKnowWho      │
├──────────────────────────────────────────────┼────────────────┤
│27-08-2024                                    │                │
├──────────────────────────────────────────────┼────────────────┤
│How good was broadcast NTSC/PAL in practice?  │dataMoshpit     │
├──────────────────────────────────────────────┼────────────────┤
│Looking for flyback                           │YouKnowWho      │
└──────────────────────────────────────────────┴────────────────┘
```

In order to split the above array apart into a new dimension, where each layer is a different day of posts, we can use the partition enclose `⊂` function. The left argument to this function is the number of splits to put at each position in the array
```apl
      'otherworldlier'
otherworldlier

      1=5|⍳15
1 0 0 0 0 1 0 0 0 0 1 0 0 0 0

      (1=5|⍳15) ⊂ 'otherworldlier'
┌─────┬─────┬────┐
│other│world│lier│
└─────┴─────┴────┘

      (1=5|⍳15) ⊂ 'stockbrokerages'
┌─────┬─────┬─────┐
│stock│broke│rages│
└─────┴─────┴─────┘

      (1=5|⍳15) ⊂ 'supersonically'
┌─────┬─────┬────┐
│super│sonic│ally│
└─────┴─────┴────┘

      (1=4|⍳12) ⊂ 'showmanships'
┌────┬────┬────┐
│show│mans│hips│
└────┴────┴────┘

      (1=4|⍳10) ⊂ 'workfellow'
┌────┬────┬──┐
│work│fell│ow│
└────┴────┴──┘

      1 1 1 1 ⊂ 'bars'
┌─┬─┬─┬─┐
│b│a│r│s│
└─┴─┴─┴─┘

      ↑(1=5|⍳15) ⊂ 'otherworldlier'
other
world
lier


      1 0 0 1 0 0 0 0 1 0 0 0 1⊂[1]↑POSTS
┌──────────────────────────────────────────────────────────┬────────────────────────────────────────────────────────────────┬───────────────────────────────────────────────────────┬──────────────────────────────────────────────────────────┐
│┌───────────────────────────────────────┬────────────────┐│┌──────────────────────────────────────────────┬───────────────┐│┌──────────────────────────────────────────┬──────────┐│┌────────────────────────────────────────────┬───────────┐│
││30-08-2024                             │                │││29-08-2024                                    │               │││28-08-2024                                │          │││27-08-2024                                  │           ││
│├───────────────────────────────────────┼────────────────┤│├──────────────────────────────────────────────┼───────────────┤│├──────────────────────────────────────────┼──────────┤│├────────────────────────────────────────────┼───────────┤│
││Why does DVB-C use QAM instead of OFDM?│frequencySniffer│││Nordtel OC3 Express                           │corporateRaider│││Early color TV in Finland                 │YouKnowWho│││How good was broadcast NTSC/PAL in practice?│dataMoshpit││
│├───────────────────────────────────────┼────────────────┤│├──────────────────────────────────────────────┼───────────────┤│├──────────────────────────────────────────┼──────────┤│├────────────────────────────────────────────┼───────────┤│
││DAC in QPSK modulation                 │radioComputer   │││Record for longest television broadcast       │YouKnowWho     │││Soviet Tube Substitute for 6TGSN7         │YouKnowWho│││Looking for flyback                         │YouKnowWho ││
│└───────────────────────────────────────┴────────────────┘│├──────────────────────────────────────────────┼───────────────┤│├──────────────────────────────────────────┼──────────┤│└────────────────────────────────────────────┴───────────┘│
│                                                          ││Book on Digital Signal Processing             │vacuumTubed    │││OFDM, carriers and useful data symbol rate│YouKnowWho││                                                          │
│                                                          │├──────────────────────────────────────────────┼───────────────┤│└──────────────────────────────────────────┴──────────┘│                                                          │
│                                                          ││Trying to obtain a clear QAM signal from cable│hadamardMardy  ││                                                       │                                                          │
│                                                          │└──────────────────────────────────────────────┴───────────────┘│                                                       │                                                          │
└──────────────────────────────────────────────────────────┴────────────────────────────────────────────────────────────────┴───────────────────────────────────────────────────────┴──────────────────────────────────────────────────────────┘

      ↑1 0 0 1 0 0 0 0 1 0 0 0 1⊂[1]↑POSTS
┌──────────────────────────────────────────────┬───────────────────┐
│30-08-2024                                    │                   │
├──────────────────────────────────────────────┼───────────────────┤
│Why does DVB-C use QAM instead of OFDM?       │frequencySniffer   │
├──────────────────────────────────────────────┼───────────────────┤
│DAC in QPSK modulation                        │radioComputer      │
├──────────────────────────────────────────────┼───────────────────┤
│                                              │                   │
├──────────────────────────────────────────────┼───────────────────┤
│                                              |                   │
└──────────────────────────────────────────────┴───────────────────┘
┌──────────────────────────────────────────────┬───────────────────┐
│29-08-2024                                    │                   │
├──────────────────────────────────────────────┼───────────────────┤
│Nordtel OC3 Express                           │corporateRaider    │
├──────────────────────────────────────────────┼───────────────────┤
│Record for longest television broadcast       │YouKnowWho         │
├──────────────────────────────────────────────┼───────────────────┤
│Book on Digital Signal Processing             │vacuumTubed        │
├──────────────────────────────────────────────┼───────────────────┤
│Trying to obtain a clear QAM signal from cable│hadamardMardy      │
└──────────────────────────────────────────────┴───────────────────┘
┌──────────────────────────────────────────────┬───────────────────┐
│28-08-2024                                    │                   │
├──────────────────────────────────────────────┼───────────────────┤
│Early color TV in Finland                     │YouKnowWho         │
├──────────────────────────────────────────────┼───────────────────┤
│Soviet Tube Substitute for 6TGSN7             │YouKnowWho         │
├──────────────────────────────────────────────┼───────────────────┤
│OFDM, carriers and useful data symbol rate    │YouKnowWho         │
├──────────────────────────────────────────────┼───────────────────┤
│Varicap-tuned filters                         │thomasedison96     │
└──────────────────────────────────────────────┴───────────────────┘
┌──────────────────────────────────────────────┬───────────────────┐
│27-08-2024                                    │                   │
├──────────────────────────────────────────────┼───────────────────┤
│How good was broadcast NTSC/PAL in practice?  │dataMoshpit        │
├──────────────────────────────────────────────┼───────────────────┤
│Looking for flyback                           │YouKnowWho         │
├──────────────────────────────────────────────┼───────────────────┤
│CTCSS in NBFM                                 │Radiovangelist     │
├──────────────────────────────────────────────┼───────────────────┤
│455 kHz and 10.7 MHz as intermediate freqs    |Decibels_per_Kg    │
└──────────────────────────────────────────────┴───────────────────┘
```

This array is three dimensional, where each axis represents, respectively, Date, Post order, Post information.

```apl
      ⍝ First day of posts
      POSTS[1;;]
┌───────────────────────────────────────┬────────────────┐
│30-08-2024                             │                │
├───────────────────────────────────────┼────────────────┤
│Why does DVB-C use QAM instead of OFDM?│frequencySniffer│
├───────────────────────────────────────┼────────────────┤
│DAC in QPSK modulation                 │radioComputer   │
├───────────────────────────────────────┼────────────────┤
│                                       │                │
├───────────────────────────────────────┼────────────────┤
│                                       │                │
└───────────────────────────────────────┴────────────────┘
      ⍝ Second post from every day
      POSTS[;2;]
┌────────────────────────────────────────────┬────────────────┐
│Why does DVB-C use QAM instead of OFDM?     │frequencySniffer│
├────────────────────────────────────────────┼────────────────┤
│Nordtel OC3 Express                         │corporateRaider │
├────────────────────────────────────────────┼────────────────┤
│Early color TV in Finland                   │YouKnowWho      │
├────────────────────────────────────────────┼────────────────┤
│How good was broadcast NTSC/PAL in practice?│dataMoshpit     │
└────────────────────────────────────────────┴────────────────┘
      ⍝ Title of every post
      POSTS[;;1]
┌──────────┬────────────────────────────────────────────┬───────────────────────────────────────┬──────────────────────────────────────────┬──────────────────────────────────────────────┐
│30-08-2024│Why does DVB-C use QAM instead of OFDM?     │DAC in QPSK modulation                 │                                          │                                              │
├──────────┼────────────────────────────────────────────┼───────────────────────────────────────┼──────────────────────────────────────────┼──────────────────────────────────────────────┤
│29-08-2024│Nordtel OC3 Express                         │Record for longest television broadcast│Book on Digital Signal Processing         │Trying to obtain a clear QAM signal from cable│
├──────────┼────────────────────────────────────────────┼───────────────────────────────────────┼──────────────────────────────────────────┼──────────────────────────────────────────────┤
│28-08-2024│Early color TV in Finland                   │Soviet Tube Substitute for 6TGSN7      │OFDM, carriers and useful data symbol rate│                                              │
├──────────┼────────────────────────────────────────────┼───────────────────────────────────────┼──────────────────────────────────────────┼──────────────────────────────────────────────┤
│27-08-2024│How good was broadcast NTSC/PAL in practice?│Looking for flyback                    │                                          │                                              │
└──────────┴────────────────────────────────────────────┴───────────────────────────────────────┴──────────────────────────────────────────┴──────────────────────────────────────────────┘
      ⍝ Username of every post
      POSTS[;;2]
┌─┬────────────────┬─────────────┬──────────────┬───────────────┐
│ │frequencySniffer│radioComputer│              │               │
├─┼────────────────┼─────────────┼──────────────┼───────────────┤
│ │corporateRaider │YouKnowWho   │vacuumTubed   │hadamardMardy  │
├─┼────────────────┼─────────────┼──────────────┼───────────────┤
│ │YouKnowWho      │YouKnowWho   │YouKnowWho    │thomasedison96 │
├─┼────────────────┼─────────────┼──────────────┼───────────────┤
│ │dataMoshpit     │YouKnowWho   │Radiovangelist│Decibels_per_Kg│
└─┴────────────────┴─────────────┴──────────────┴───────────────┘
```

Obtaining the indices of 'YouKnowWho' using ⍷ where

```apl
      'YouKnowWho' ⍷ POSTS[;;2]
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0
```

we run into a problem. The where ⍷ function returns all zeroes! The reason for this is that 'YouKnowWho' really isn't in the array, only the box that contains 'YouKnowWho'

```apl
      POSTS[;;2][2;3]
┌──────────┐
│YouKnowWho│
└──────────┘
```

Then, replacing 'YouKnowWho' with ⊂'YouKnowWho',

```apl
      (⊂'YouKnowWho') ⍷ POSTS[;;2]
0 0 0 0 0
0 0 1 0 0
0 1 1 1 0
0 0 1 0 0
      ⍸(⊂'YouKnowWho') ⍷ POSTS[;;2]
┌───┬───┬───┬───┬───┐
│2 3│3 2│3 3│3 4│4 3│
└───┴───┴───┴───┴───┘
      POSTS[;;1][⍸(⊂'YouKnowWho') ⍷ POSTS[;;2]]
┌───────────────────────────────────────┬─────────────────────────┬─────────────────────────────────┬─────────────────────
│Record for longest television broadcast│Early color TV in Finland│Soviet Tube Substitute for 6TGSN7│OFDM, carriers and us
└───────────────────────────────────────┴─────────────────────────┴─────────────────────────────────┴─────────────────────
      ─────────────────────┬───────────────────┐
      eful data symbol rate│Looking for flyback│
      ─────────────────────┴───────────────────┘
```

Nothing yet, maybe if you take the first letter of each title?

```apl
      ↑POSTS[;;1][⍸(⊂'YouKnowWho') ⍷ POSTS[;;2]]
Record for longest television broadcast   
Early color TV in Finland                 
Soviet Tube Substitute for 6TGSN7         
OFDM, carriers and useful data symbol rate
Looking for flyback    

      (↑POSTS[;;1][⍸(⊂'YouKnowWho') ⍷ POSTS[;;2]])[;1]
RESOL

      ⌽(↑POSTS[;;1][⍸(⊂'YouKnowWho') ⍷ POSTS[;;2]])[;1]
LOSER
```

You decide to shut the forum down.