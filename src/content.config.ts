import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Diensten staan als losse Markdown-bestanden in src/content/diensten.
 * Een dienst toevoegen = een bestand toevoegen, geen code aanpassen.
 */
const diensten = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/diensten' }),
  schema: ({ image }) =>
    z.object({
      /** Volledige naam, gebruikt als H1 en in de footer */
      titel: z.string(),
      /** Korte naam voor kaarten en navigatie */
      kort: z.string(),
      /** Bepaalt de volgorde overal op de site */
      volgorde: z.number(),
      icoon: z.enum(['roller', 'huis', 'bestrating', 'laminaat', 'tegels', 'gereedschap']),
      /** Eén zin, gebruikt op de kaart op de homepage */
      omschrijving: z.string(),
      /** <title> van de dienstpagina */
      seoTitel: z.string(),
      /** meta description van de dienstpagina */
      seoOmschrijving: z.string(),
      /** Kop boven aan de dienstpagina */
      kop: z.string(),
      /** Lead-alinea onder de kop */
      inleiding: z.string(),
      foto: image(),
      /** Opsomming van wat er onder de dienst valt */
      punten: z.array(z.string()),
      /** Blokken die uitleggen hoe we te werk gaan */
      aanpak: z.array(z.object({ titel: z.string(), tekst: z.string() })),
      /** Komt ook in FAQPage-schema terecht */
      faq: z.array(z.object({ vraag: z.string(), antwoord: z.string() })),
    }),
});

export const collections = { diensten };
