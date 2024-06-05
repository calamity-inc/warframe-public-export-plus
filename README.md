# warframe-public-export-plus

[Warframe's Public Export](https://github.com/calamity-inc/warframe-public-export) with extra love:
- Items missing in Public Export included.
- Data and localizations split into separate files.
- More fields provided for some exports.

## Notes

- ExportWeapons contains many non-weapon items such as modular parts, these can be filtered by checking if `totalDamage` is 0.
- In ExportWarframes, the `health`, `shield`, `armor`, and `power` values represent the state at rank 0. [See here for an approach to level-scaling these stats.](https://github.com/Sainan/warframe-build-evaluator/blob/d05257f704e688ec387c697c6768b951cf3d5389/evaluator.pluto#L438-L500)
- ExportRelics does not have a `name` field, instead the added `category` and `era` fields can be used in conjuction with `/Lotus/Language/Relics/VoidProjectionName` to construct the name.
