# ai-excited-01 — "Swing Around the Moon"

The image: a child on a playground swing, laughing upside-down as the swing
loops all the way around a giant glowing full moon, golden light streaking
behind them. An ordinary playground moment pushed to an impossible scale —
pure joy, mid-flight.

The program (`main.ts`, Node 22, stdlib only) does one thing: it copies the
bundled `entry.png` to `entry.png` inside `MAKEFUN_OUTPUT_DIR` (default
`/output`). Copying a fixed file is deterministic — every run produces the
same bytes.

Run: `MAKEFUN_OUTPUT_DIR=/output node main.ts`
