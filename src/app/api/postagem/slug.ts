export function generateSlug(title: string): string {
  // Remove accents from the title
  const normalizedStr = title.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  // Convert the title to lowercase and replace spaces with hyphens
  const slug = normalizedStr.toLowerCase().replace(/\s+/g, "-");

  // Remove any non-alphanumeric characters and hyphens at the beginning/end
  const cleanSlug = slug.replace(/[^a-z0-9-]/g, "").replace(/^-+|-+$/g, "");

  return cleanSlug;
}
