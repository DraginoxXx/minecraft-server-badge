interface BadgeOptions {
  /** Badge style */
  style?: "rounded" | "flat" | "minecraft";
  /** Custom label text */
  label?: string;
  /** Show player count (default: true) */
  players?: boolean;
  /** Show server version (default: false) */
  version?: boolean;
  /** Dark theme (default: false) */
  dark?: boolean;
}

/**
 * Generate a Minecraft server status badge URL
 * @param address - Server IP or hostname
 * @param options - Badge customization options
 * @returns Badge image URL
 */
export function badge(address: string, options?: BadgeOptions): string;

/**
 * Generate HTML embed code for a server status badge
 * @param address - Server IP or hostname
 * @param options - Badge customization options
 * @returns HTML embed code string
 */
export function html(address: string, options?: BadgeOptions): string;

/**
 * Generate Markdown embed code for a server status badge
 * @param address - Server IP or hostname
 * @param options - Badge customization options
 * @returns Markdown embed code string
 */
export function markdown(address: string, options?: BadgeOptions): string;

/**
 * Generate BBCode embed code for a server status badge
 * @param address - Server IP or hostname
 * @param options - Badge customization options
 * @returns BBCode embed code string
 */
export function bbcode(address: string, options?: BadgeOptions): string;
