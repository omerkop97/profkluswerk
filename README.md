# Prof Kluswerk

Website voor Prof Kluswerk, een klusbedrijf uit Arnhem. Onderhoud, renovatie en
afwerking, binnen en buiten. Doel van de site: vertrouwen wekken en
offerteaanvragen binnenhalen.

## Stack

| Laag | Keuze |
| --- | --- |
| Framework | Astro (statische HTML, nul JS by default) |
| Styling | Tailwind CSS v4 |
| Content | Astro Content Collections (Markdown) |
| Formulier | Netlify Forms |
| Beeld | `astro:assets` met Sharp |
| Hosting | Netlify |

## Aan de slag

```bash
npm install
npm run dev
```

De site draait dan op `http://localhost:4321`.

| Commando | Wat het doet |
| --- | --- |
| `npm run dev` | Dev-server met hot reload |
| `npm run build` | Productiebuild naar `dist/` |
| `npm run preview` | Bekijk de productiebuild lokaal |

## Structuur

```
src/
  assets/stock/      Tijdelijke stockfoto's, zie BRONNEN.md in die map
  components/        Herbruikbare onderdelen
  content/diensten/  Eén Markdown-bestand per dienst
  layouts/Base.astro Paginaskelet, meta-tags en JSON-LD
  lib/               Kleine helpers
  pages/             Routes
  styles/            Design-tokens en basisopmaak
  consts.ts          Bedrijfsgegevens, werkgebied, USP's, navigatie
```

Een dienst toevoegen of aanpassen gaat via `src/content/diensten/`. Er hoeft
geen code aangeraakt te worden: de homepage, de footer, het overzicht en het
offerteformulier lezen allemaal uit die collectie.

## Documentatie

- [PLAN.md](PLAN.md) is het levende plan: positionering, huisstijl, fasering en
  wat er nog open staat.
- [NETLIFY.md](NETLIFY.md) beschrijft het deployen en het activeren van de
  e-mailmelding voor het offerteformulier.

## Nog te doen voor livegang

- Stockfoto's vervangen door eigen projectfoto's
- KvK- en BTW-nummer, volledige bedrijfsnaam en rechtsvorm invullen
- Portretfoto en persoonlijk verhaal voor `/over-ons`
- Domein koppelen en de mail-alias instellen
- Teksten laten nakijken door Prof Kluswerk zelf
