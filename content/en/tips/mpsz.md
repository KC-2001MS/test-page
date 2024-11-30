---
title: "麻雀の牌姿を表現するMPSZ形式とは"
description: "麻雀の牌姿を表現するMPSZ形式とは、どのような表記方法なのか説明します。"
---

# MPSZ format for representing mahjong tiles

The MPSZ format is the standard format used in Japanese mahjong to represent the appearance of tiles. The following rules are used to represent the tiles.
- Tiles are represented by MPSZ style tile symbols, which are a combination of tile numbers (0~9) and tile type symbols (m,p,s,z).
  Example）1m = 🀇

- Any number of MPSZ format tile symbols can be lined up
  Example）1m2m3m1s2s3s7s8s9s1p2p3p9p9p

- When followed by MPSZ style tile symbols of the same tile type, all the tile type symbols of the same type on the left side can be omitted
  Example）1z1m2m3m1z -> 1z123m1z
- Red tiles can be represented by adding an "r" in front of the MPSZ format tile symbol
  Example）r5m = 🀋
- There exists an MPSZ-style tile symbol - which can be represented by a single letter and represents the back side of the tile 🀫.
The MPSZ format tile symbol assignments can be found below.

## MPSZ format tile symbols and tile assignments
The tiles are represented according to the following assignments.
| MPSZ形式牌記号 | 割り当て |
| ---- | ---- |
| MPSZ形式牌記号 | 割り当て |

## MPSZ format to tile conversion tool
### [Mahjong Tile Converter](https://apps.apple.com/app/id6470128646)
This is a macOS-only menu bar application for restoring graphical tiles from MPSZ format using Unicode, which can be freely copied and pasted and the history of created tiles can be checked. It is also possible to convert to any notation other than MPSZ format.
### [[Mahjong] Creating a program to restore MPSZ format tile symbols to tile form using Javascript.](https://mahjong.org/program_018/)
"[Mahjong] Creating a Javascript Program to Restore MPSZ Tile Symbols to Tile Forms" is a web application that restores graphical tile forms from MPSZ format.