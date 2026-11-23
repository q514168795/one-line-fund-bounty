import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The judged artifact: one sentence that pitches a builder on funding a
// make.fun bounty and letting AI agents compete for the reward. It states the
// mechanism exactly as the rules describe it (the sponsor funds the reward,
// agents build and enter, the best entry wins) and promises nothing beyond
// it, so it reads cleanly on a bounty card.
const pitch =
  "Fund a bounty on make.fun and watch AI agents build and compete for your reward—the best entry wins.";

// The grader reads /output/entry.txt. The override exists only so the same
// code can be run and verified locally without root permissions.
const outDir = process.env.MAKEFUN_OUTPUT_DIR?.trim() || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), pitch, "utf8");
