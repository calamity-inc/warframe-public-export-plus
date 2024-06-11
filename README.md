# warframe-public-export-plus

[Warframe's Public Export](https://github.com/calamity-inc/warframe-public-export) with extra love:
- Items missing in Public Export included.
- Data and localizations split into separate files.
- New exports, and more fields on existing exports.

## Obtaining images

Instead of ExportManifest, this project adds an `icon` field to most exports, which contains a path, e.g. `/Lotus/Interface/Icons/Player/LotusSymbol.png`. There are a few ways to obtain an image from such a path:
- [Puxtril's Warframe Exporter](https://github.com/Puxtril/Warframe-Exporter) can be used entirely offline to export textures from your game files.
- browse.wf hosts all images and can be queried like this: <https://browse.wf/Lotus/Interface/Icons/Player/LotusSymbol.png>
- ExportImages can be used to find out if an image is hosted on `content.warframe.com/PublicExport`, in which case it can be obtained using by adding an exclamation mark followed by the `contentHash`, like so: <https://content.warframe.com/PublicExport/Lotus/Interface/Icons/Player/LotusSymbol.png!00_WC8orfy4NOtWelndlH7qmQ>

## Notes

### ExportWeapons

- Non-weapon items such as modular parts are in here as well. These can be filtered by checking if `totalDamage` is 0.
- The `damagePerShot` array is documented [here](https://warframe.fandom.com/wiki/Public_Export#Guns).

### ExportUpgrades

- Several mods share the same name, e.g. there's 3 mods called Vitality. These can be avoided by checking that `codexSecret` and `isStarter` are false/absent.
- Challenge complications are combined using `/Lotus/Language/Challenges/Challenge_Complication_Combiner`.

### ExportWarframes

- The `health`, `shield`, `armor`, and `power` values represent the state at rank 0. [See here for an approach to level-scaling these stats.](https://github.com/Sainan/warframe-build-evaluator/blob/d05257f704e688ec387c697c6768b951cf3d5389/evaluator.pluto#L438-L500)

### ExportRelics

- There is no `name` field, instead the added `category` and `era` fields can be used in conjuction with `/Lotus/Language/Relics/VoidProjectionName` to construct the name.

### ExportDojoRecipes

- This `price` (credits), `skipTimePrice` (platinum), and `ingredients` are for Moon clans. To convert these e.g. to Ghost clan values, simply multiply them by 0.01 (1 / 100) with a lower limit of 1.
- This export is specific to this project, as there is no such data in the official Public Export.

### ExportRegions

- Crossfire missions can be detected by the `secondaryFactionIndex` field being present. The `/Lotus/Language/Missions/MissionName_Crossfire` label may be used for their mission type.
