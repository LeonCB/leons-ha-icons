# Leons HA Icons

![versie](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2FLeonCB%2Fleons-ha-icons%2Freleases%2Flatest&query=%24.tag_name&label=versie&color=blue)

Personal icon set for Home Assistant, installable via HACS. Currently <!--count-->37<!--/count--> icons.

## Installation

### HACS
1. HACS → three-dot menu → **Custom repositories** → add `https://github.com/LeonCB/leons-ha-icons` with category **Dashboard**.
2. Install **Leons HA Icons** and reload your browser (hard refresh).

HACS adds the resource automatically. Manually, add `/local/leons-ha-icons.js` (or the HACS path) as a **JavaScript module** under Settings → Dashboards → Resources.

## Usage

Use the prefix `leon:` followed by the icon name:

```yaml
type: button
icon: leon:afval-grofvuil
```

The icons also show up in the icon picker when you type `leon`.

## Development

Icons live in `src/icons.json` (name → SVG `d` path, 24x24 viewBox). `dist/leons-ha-icons.js` is generated:

```
npm run build
```

The build also updates the icon count at the top of this README (the version badge follows the latest GitHub release automatically). Commit the updated `dist/` and `README.md` together with your change. To release: bump `version` in `package.json`, build, commit, tag (`git tag <version>`) and publish a GitHub release; HACS then offers it as a version.

### License

This work is licensed under a
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License][cc-by-nc-sa].
I do this for fun, without charge, and to give back to the community. You may remix, tweak, and build upon this work non-commercially, as long as you credit the original author, provide a link to the license, and indicate if any changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use unless agreed. If you remix, transform or build upon the material, you must distribute your contributions under the same or compatible license as the original.
