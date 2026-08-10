import { getCollection, type CollectionEntry } from 'astro:content';

export type Dienst = CollectionEntry<'diensten'>;

/** Alle diensten op de vaste volgorde uit de frontmatter. */
export async function alleDiensten(): Promise<Dienst[]> {
  const diensten = await getCollection('diensten');
  return diensten.sort((a, b) => a.data.volgorde - b.data.volgorde);
}
