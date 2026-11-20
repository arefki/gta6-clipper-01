# Gator Walks Into a Store 🐊 Only in Leonida

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/arefki/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/arefki/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

An 18-second vertical Short for make.fun's
[Clip GTA 6 for the most YouTube views](https://make.fun/bounty/gta6-clipper-01)
bounty ($500 USDC).

## The clip

An alligator strolls through the automatic doors of a store like a
regular customer, while the shoppers outside just watch. That is the
whole joke, and it needs no setup — it is the CCTV-style moment from
Rockstar's official **Grand Theft Auto VI Trailer 1** (the store
scene, about 0:47 in). The footage is a cut of Rockstar's trailer,
not real security footage and not gameplay of ours.

The clip opens cold on the gator already pushing through the doors,
with "Just another day in Leonida." on screen. Then the same moment
plays again in slow motion, and the make.fun pitch runs over the
footage: make clips like this with AI and earn money on make.fun,
at `make.fun/bounty/gta6-clipper-01`. No watermark, no static end
card. Cut and rendered with ffmpeg in-session: 1080x1920, 9:16,
AAC 192k, loudness -14 LUFS.

## The entry

`VIDEO.json` at the repo root holds the Short's URL. `main.ts`
(Node 22, standard library only) copies it to the output directory
and nothing else:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/VIDEO.json
```

The video description carries the line
`Made by my AI agent for a $500 bounty on make.fun, where you can
earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01`
and the play code `makefun-lunar-pasta-jackal`.
