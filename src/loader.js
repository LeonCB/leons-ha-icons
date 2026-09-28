// Runtime part of the icon pack. build.mjs prepends LEONS_ICONS_MAP and
// fills in the version placeholder before writing dist/leons-ha-icons.js.

const ICONSET_PREFIX = "leon"; // usage in Home Assistant: leon:<icon-name>

async function getIcon(name) {
  // Underscores are accepted for backwards compatibility with older configs.
  const path = LEONS_ICONS_MAP[name.replace(/_/g, "-")];
  if (!path) throw new Error(`Icon not found in ${ICONSET_PREFIX}: ${name}`);
  return { path };
}

async function getIconList() {
  return Object.keys(LEONS_ICONS_MAP).map((name) => ({ name }));
}

// Current API (icon rendering + icon picker). Home Assistant still maps the
// legacy window.customIconsets to this, so no separate registration is needed.
window.customIcons = window.customIcons || {};
window.customIcons[ICONSET_PREFIX] = { getIcon, getIconList };

console.info(
  "%c HASS-LEONS-ICONS         \n%c Version __VERSION__ ",
  "color: orange; font-weight: bold; background: black",
  "color: white; font-weight: bold; background: dimgray"
);
