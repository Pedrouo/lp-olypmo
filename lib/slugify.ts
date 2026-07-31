export function slugify(nome: string): string {
  return nome
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[()"*]/g, "")
    .replace(/[–—]/g, "-")
    .replace(/,/g, "")
    .replace(/°/g, "")
    .trim()
    .replace(/\s+/g, "_")
    .replace(/[^a-z0-9_-]/g, "");
}

export function productImage(nome: string): string {
  return `/products/${slugify(nome)}.webp`;
}
