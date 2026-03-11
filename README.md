# minecraft-server-badge

Generate embeddable Minecraft server status badges. Powered by [Minecraft ServerHub](https://minecraft-serverhub.com).

## Install

```bash
npm install minecraft-server-badge
```

## Usage

```javascript
const { badge, html, markdown, bbcode } = require("minecraft-server-badge");

// Get badge URL
const url = badge("play.hypixel.net", { style: "rounded", players: true });
// => https://minecraft-serverhub.com/api/badge/play.hypixel.net?style=rounded

// Get HTML embed code
const embedHtml = html("play.hypixel.net");

// Get Markdown embed code
const embedMd = markdown("play.hypixel.net");

// Get BBCode embed code (for forums)
const embedBB = bbcode("play.hypixel.net");
```

## API

### `badge(address, options?)`

Returns a badge image URL.

### `html(address, options?)`

Returns HTML `<a><img></a>` embed code.

### `markdown(address, options?)`

Returns Markdown badge embed code.

### `bbcode(address, options?)`

Returns BBCode embed code for forums.

## Options

| Option    | Type    | Default     | Description                                      |
|-----------|---------|-------------|--------------------------------------------------|
| `style`   | string  | `"rounded"` | Badge style: `rounded`, `flat`, or `minecraft`   |
| `label`   | string  | Server IP   | Custom label text                                |
| `players` | boolean | `true`      | Show player count                                |
| `version` | boolean | `false`     | Show server version                              |
| `dark`    | boolean | `false`     | Dark theme                                       |

## Badge Styles

**Rounded (default):**
```
https://minecraft-serverhub.com/api/badge/play.hypixel.net?style=rounded
```

**Flat:**
```
https://minecraft-serverhub.com/api/badge/play.hypixel.net?style=flat
```

**Minecraft:**
```
https://minecraft-serverhub.com/api/badge/play.hypixel.net?style=minecraft
```

## Interactive Generator

For a visual editor with live preview, use the [Badge Generator](https://minecraft-serverhub.com/tools/server-badge).

## Links

- [Minecraft ServerHub](https://minecraft-serverhub.com) - Server discovery platform
- [Badge Generator](https://minecraft-serverhub.com/tools/server-badge) - Interactive badge builder
- [API Documentation](https://minecraft-serverhub.com/developers) - Full API docs
- [Statistics](https://minecraft-serverhub.com/statistics) - Live ecosystem data

## License

MIT
