/**
 * Prefixes a public asset path with the base path (set via NEXT_PUBLIC_BASE_PATH).
 * Needed because plain <img src="..."> tags don't auto-prepend basePath like next/image does.
 *
 * Usage: <img src={asset("/academia.webp")} />
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${basePath}${path}`;
}
