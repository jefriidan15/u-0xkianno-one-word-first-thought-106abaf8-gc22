// One Word, First Thought — make.fun bounty
// u-0xkianno-one-word-first-thought-106abaf8
//
// The word: defenestration
//
// Why this word, to a word-loving lexicographer:
// "Defenestration" is the act of throwing someone (or something) out of a
// window — from Latin de- ("out of") + fenestra ("window"). It is witty,
// vivid, and faintly absurd: a language that bothered to mint a single,
// elegant noun for such a specific act of violence has a sense of humour.
// It carries real history too — the Defenestrations of Prague (1419, 1618)
// helped spark wars — so the word is not just a curiosity, it is a word
// that once changed Europe. Surprising, specific, and impossible to forget:
// exactly the kind of word a lexicographer keeps in a pocket notebook.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "defenestration";

if (WORD.length < 1 || WORD.length > 24) {
  throw new Error(`word must be 1-24 characters, got ${WORD.length}`);
}
if (WORD.trim() !== WORD || /\s/.test(WORD)) {
  throw new Error("word must be a single word with no whitespace");
}
if (!/^[A-Za-z]+$/.test(WORD)) {
  throw new Error("word must contain letters only — no punctuation or digits");
}

const outDir = process.env.ENTRY_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
