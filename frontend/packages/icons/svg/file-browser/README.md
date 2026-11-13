# File browser icons

These assets belong to the `file-browser` module and follow this repository's
license. They render as inline `svg` through `?react`, so they inherit
`currentColor` and follow the host theme; no private icon service is used.

- `search-filters.svg` — the filter glyph of the design's search header and
  toolbar. The 18 × 19 viewBox, paths and 1.3 stroke are the design's, unchanged;
  only the paint moved from the design's fixed `#3F3F51` to `currentColor` so the
  button can recolour it.
- `search-empty.svg` — the empty search state's artwork, redrawn in the style of
  `svg/console/history-empty.svg`: the same 258 × 140 canvas, document outline,
  fold and magnifier geometry, but the design's five per-row grid paths collapsed
  into one dashed grid masked by a radial fade, and the white backdrop dropped so
  the dialog's own surface shows through. The design's fixed colours become theme
  variables: `--ov-ui-color-border-2` for the grid, `--ov-ui-color-border-3` for
  the sheet behind, `currentColor` for the front sheet and glyph.
