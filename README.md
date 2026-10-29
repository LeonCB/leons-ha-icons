# Leon's HA Icons

![Version](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2FLeonCB%2Fleons-ha-icons%2Freleases%2Flatest&query=%24.tag_name&label=version&color=blue)

Personal icon set for Home Assistant, installable via HACS. Currently <!--count-->29<!--/count--> icons.

![Overview of all icons](https://raw.githubusercontent.com/LeonCB/leons-ha-icons/main/docs/preview.png)

## Installation

### Option 1: Install through HACS (recommended)

1. Open **HACS**.
2. Go to **Custom repositories** from the three-dot menu.
3. Add `https://github.com/LeonCB/leons-ha-icons` with category **Dashboard**.
4. Search for **Leon's HA Icons** and install it.
5. Reload your browser (hard refresh).

HACS automatically adds the required resource.

### Option 2: Manual installation

1. Download the latest release from the **Releases** page.
2. Copy `leons-ha-icons.js` to your Home Assistant `www` folder:

   ```text
   config/www/leons-ha-icons.js
   ```

3. In Home Assistant, go to **Settings → Dashboards → Resources**.
4. Add a new resource:

   - **URL:** `/local/leons-ha-icons.js`
   - **Type:** JavaScript Module

5. Reload your browser (hard refresh).

## Usage

Use the prefix `leon:` followed by the icon name:

```yaml
type: button
icon: leon:afval-grofvuil
```

The icons will also appear in the Home Assistant icon picker when you search for `leon`.

## License

The code and the original icons in this repository are released under the [MIT License](LICENSE).

Some icons are logos or trademarks of other projects and companies. They remain the property of their owners, are included only to identify the related product, and are **not** covered by this license. See [ATTRIBUTIONS.md](ATTRIBUTIONS.md) for the icon sources.
