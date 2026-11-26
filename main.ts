// Deadpan Forecasts for Cities That Do Not Exist: the forecast for Quist.
// Three hard numbers, one impossible fact stated as routine, and a kicker
// that reframes the whole forecast as normal: locals no longer comment on it.
// Deadpan rule: the absurdity is never announced, only reported.
import { writeFileSync, mkdirSync } from "node:fs";

const line =
  "In Quist, the forecast is a high of 19, a low of 4, and a 100 percent chance of rain that falls upwards on Tuesdays. Locals no longer comment on it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
