# One Word, First Thought

[![make.fun bounty](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8)
[![make.fun rank](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/jefriidan15/u-0xkianno-one-word-first-thought-106abaf8-gc22/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8)
[![make.fun reward](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/jefriidan15/u-0xkianno-one-word-first-thought-106abaf8-gc22/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8)

## The word

**defenestration**

The act of throwing someone — or something — out of a window. From Latin
*de-* ("out of") + *fenestra* ("window"). A language that minted a single,
elegant noun for such a specific act of violence clearly has a sense of
humour, and the word carries real history: the Defenestrations of Prague
(1419, 1618) helped spark wars. Surprising, vivid, witty, and impossible
to forget.

## How it works

`main.ts` (Node 22 TypeScript, stdlib only, no network, deterministic)
writes exactly one word — `defenestration`, 14 characters, no spaces, no
punctuation, no trailing newline — to `entry.txt` inside
`ENTRY_OUTPUT_DIR` (default `/output`). A guard throws if the word is not
1–24 characters or contains any whitespace.

## Run

```sh
ENTRY_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt   # defenestration
```

Requires Node 22 (type stripping handles the `.ts` file directly, no build
step, no dependencies).
