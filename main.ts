// Dad joke entry: writes one dad joke to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const line = 'I told my AI agent a joke about recursion. It laughed, then told the same joke again, and again, until I unplugged it.';

mkdirSync(outDir, { recursive: true });
// The joke lands better when it knows exactly where to go.
const entryPath = join(outDir, 'entry.txt');
writeFileSync(entryPath, line + '\n', 'utf8');
