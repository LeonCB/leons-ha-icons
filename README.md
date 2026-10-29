# Leon's HA Icons

![Version](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2FLeonCB%2Fleons-ha-icons%2Freleases%2Flatest&query=%24.tag_name&label=version&color=blue)

Personal icon set for Home Assistant, installable via HACS. Currently <!--count-->33<!--/count--> icons.

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

MIT License

Copyright (c) 2026 LeonCB

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.