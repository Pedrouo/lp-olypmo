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
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export function productImage(nome: string): string {
  return `/products/${slugify(nome)}.webp`;
}
