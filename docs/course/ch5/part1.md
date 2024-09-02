# Elements of set theory

!!! abstract "This part will cover"
    
    - Unique
    - Union
    - Set difference
    - Intersection

---

You are a system administrator aboard the corporate OC-3. You are currently deploying a database change affecting 413 customers at a speed of 155.52Mbit/s.

In brief intervals of time spent waiting between helping your sales staff with Excel, you enjoy maintaining a forum dedicated to signal processing. Unfortunately for you, you had a lapse of judgement and your forum's been completely spammed. Unfortunately for management, you’ve decided to use company time to fix this issue.

```apl
      POSTS
┌──────────┬─────┬────────────────────────────────────────────────────────────────────┬────────────────┐
│30-08-2024│18:52│Why does DVB-C use QAM instead of OFDM?                             │frequencySniffer│
├──────────┼─────┼────────────────────────────────────────────────────────────────────┼────────────────┤
│30-08-2024│10:34│DAC in QPSK modulation                                              │radioComputer   │
├──────────┼─────┼────────────────────────────────────────────────────────────────────┼────────────────┤
│30-08-2024│02:30│We’ve Received Your Payment                                         │fccvrybkas      │
├──────────┼─────┼────────────────────────────────────────────────────────────────────┼────────────────┤
│30-08-2024│02:16│Order number 1045534719 / Nice savings with this offer...           │cherylebowmiq   │
├──────────┼─────┼────────────────────────────────────────────────────────────────────┼────────────────┤
│30-08-2024│02:03│TREND ALERT: Discover one of a kind items                           │k.a6            │
├──────────┼─────┼────────────────────────────────────────────────────────────────────┼────────────────┤
│30-08-2024│00:12│WARNING! This is not a joke! Carry on reading or you will be cursed!│mark0847        │
├──────────┼─────┼────────────────────────────────────────────────────────────────────┼────────────────┤
│29-08-2024│23:28│I know your password T.J Eckleburg                                  │johnsmith       │
├──────────┼─────┼────────────────────────────────────────────────────────────────────┼────────────────┤
│29-08-2024│23:17│Whats with all the spam??                                           │fluxLinker      │
├──────────┼─────┼────────────────────────────────────────────────────────────────────┼────────────────┤
│29-08-2024│22:36│HACKED BY APT1 // FIX YOUR SITE                                     │YouKnowWho      │
├──────────┼─────┼────────────────────────────────────────────────────────────────────┼────────────────┤
│01-01-1970│00:00│XXXXXXXXXX                                                          │XXXXXXXXXX      │
├──────────┼─────┼────────────────────────────────────────────────────────────────────┼────────────────┤
│01-01-1970│00:00│XXXXXXXXXX                                                          │XXXXXXXXXX      │
├──────────┼─────┼────────────────────────────────────────────────────────────────────┼────────────────┤
│01-01-1970│00:00│XXXXXXXXXX                                                          │XXXXXXXXXX      │
├──────────┼─────┼────────────────────────────────────────────────────────────────────┼────────────────┤
│01-01-1970│00:00│XXXXXXXXXX                                                          │XXXXXXXXXX      │
├──────────┼─────┼────────────────────────────────────────────────────────────────────┼────────────────┤
│01-01-1970│00:00│XXXXXXXXXX                                                          │XXXXXXXXXX      │
├──────────┼─────┼────────────────────────────────────────────────────────────────────┼────────────────┤
│01-01-1970│00:00│XXXXXXXXXX                                                          │XXXXXXXXXX      │
├──────────┼─────┼────────────────────────────────────────────────────────────────────┼────────────────┤
│01-01-1970│00:00│XXXXXXXXXX                                                          │XXXXXXXXXX      │
├──────────┼─────┼────────────────────────────────────────────────────────────────────┼────────────────┤
│01-01-1970│00:00│XXXXXXXXXX                                                          │XXXXXXXXXX      │
├──────────┼─────┼────────────────────────────────────────────────────────────────────┼────────────────┤
│29-08-2024│21:38│Nordtel OC3 Express                                                 │corporateRaider │
└──────────┴─────┴────────────────────────────────────────────────────────────────────┴────────────────┘
```

Not this again, you need to get rid of all the spam before the situation gets out of hand. You first remove all duplicate posts using the monadic unique ∪ function.

```apl
      ∪ POSTS
┌──────────┬─────┬────────────────────────────────────────────────────────────────────┬────────────────┐
│30-08-2024│18:52│Why does DVB-C use QAM instead of OFDM?                             │frequencySniffer│
├──────────┼─────┼────────────────────────────────────────────────────────────────────┼────────────────┤
│30-08-2024│10:34│DAC in QPSK modulation                                              │radioComputer   │
├──────────┼─────┼────────────────────────────────────────────────────────────────────┼────────────────┤
│30-08-2024│02:30│We’ve Received Your Payment                                         │fccvrybkas      │
├──────────┼─────┼────────────────────────────────────────────────────────────────────┼────────────────┤
│30-08-2024│02:16│Order number 1045534719 / Nice savings with this offer...           │cherylebowmiq   │
├──────────┼─────┼────────────────────────────────────────────────────────────────────┼────────────────┤
│30-08-2024│02:03│TREND ALERT: Discover one of a kind items                           │k.a6            │
├──────────┼─────┼────────────────────────────────────────────────────────────────────┼────────────────┤
│30-08-2024│00:12│WARNING! This is not a joke! Carry on reading or you will be cursed!│mark0847        │
├──────────┼─────┼────────────────────────────────────────────────────────────────────┼────────────────┤
│29-08-2024│23:28│I know your password T.J Eckleburg                                  │johnsmith       │
├──────────┼─────┼────────────────────────────────────────────────────────────────────┼────────────────┤
│29-08-2024│23:17│Whats with all the spam??                                           │fluxLinker      │
├──────────┼─────┼────────────────────────────────────────────────────────────────────┼────────────────┤
│29-08-2024│22:36│HACKED BY APT1 // FIX YOUR SITE                                     │YouKnowWho      │
├──────────┼─────┼────────────────────────────────────────────────────────────────────┼────────────────┤
│01-01-1970│00:00│XXXXXXXXXX                                                          │XXXXXXXXXX      │
├──────────┼─────┼────────────────────────────────────────────────────────────────────┼────────────────┤
│29-08-2024│21:38│Nordtel OC3 Express                                                 │corporateRaider │
└──────────┴─────┴────────────────────────────────────────────────────────────────────┴────────────────┘
```

The duplicate 'XXXXXXXXXX' spam posts have been removed. Next is removing specific posts using the set difference ~ function. First, listing all the indices of the post then removing the specific spam posts.

```apl
      ⍴ POSTS
11 4
      ⍳11
1 2 3 4 5 6 7 8 9 10 11
      (⍳11) ~ 3 4 5 6 7 8 9 10
1 2 11
      POSTS ← POSTS[(⍳13) ~ 3 4 5 6 7 8 9 10]
      POSTS
┌──────────┬─────┬───────────────────────────────────────┬────────────────┐
│30-08-2024│18:52│Why does DVB-C use QAM instead of OFDM?│frequencySniffer│
├──────────┼─────┼───────────────────────────────────────┼────────────────┤
│30-08-2024│10:34│DAC in QPSK modulation                 │radioComputer   │
├──────────┼─────┼───────────────────────────────────────┼────────────────┤
│29-08-2024│21:38│Nordtel OC3 Express                    │corporateRaider │
└──────────┴─────┴───────────────────────────────────────┴────────────────┘
```

That's better! Let's take a closer look at some other set functions, too.

Take the following vectors of [emoticons](https://en.wikipedia.org/wiki/List_of_emoticons)

```apl
HAPPY_EMOTICONS ← ':)' ':-)' ':D' ':]' ':o)' '8)' ':3' 'c:' ':x'

SAD_EMOTICONS ← '):' ':c' ']:' ')-:' 'D:' '>:(' ':/' ':x' ':|'
```

The symbol ∪ acts *dyadically* as Set Union.

```apl
       HAPPY_EMOTICONS ∪ SAD_EMOTICONS
:) :-) :D :] :o) 8) :3 c: :x ): :c ]: )-: D: >:( :/ :|
```

Notice how the element ‘:x’ only appears once, where it would appear twice if we were to use the dyadic catenate , operator introduced in Chapter 2.

```apl
       HAPPY_EMOTICONS , SAD_EMOTICONS
:) :-) :D :] :o) 8) :3 c: :x ): :c ]: )-: D: :x >:( :/ :|
```

Similarly, the symbol ∩ acts dyadically as the Set Intersection operation.

```apl
       HAPPY_EMOTICONS ∩ SAD_EMOTICONS
:x
```

The symbol ~, which monadically refers to boolean NOT, is dyadically the Set Difference operation.

```apl
       HAPPY_EMOTICONS ~ SAD_EMOTICONS
:) :-) :D :] :o) 8) :3 c:
       ⍝ Notice the ':x' emoticon is gone
```

Monadically, the symbol ∪ acts as the Unique operator, removing duplicate entries in a vector.

```apl
       ∪ HAPPY_EMOTICONS , SAD_EMOTICONS
:) :-) :D :] :o) 8) :3 c: :x ): :c ]: )-: D: >:( :/ :|
       ⍝ Notice the ':x' emoticon only appears once
```
