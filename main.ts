import { mkdirSync, writeFileSync } from "node:fs";

// The One-Liner Groan-Off
// A dad joke delivered at the dinner table: praise the toaster,
// and it takes the compliment a little too literally.
const JOKE =
  "I told my toaster it was doing a great job — it popped up and now it thinks it's the breadwinner.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");

// Output contract (per the bounty kit):
// - exactly one line, 97 characters, no trailing newline
// - deterministic: no input, no network, no file reads
// - the punchline lands in the last word: the toaster that pops up
//   is, literally, the breadwinner of the house
// - /output is created if missing; entry.txt is overwritten in place
