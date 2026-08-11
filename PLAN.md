# Prof Kluswerk: website plan

> Levend document. Laatst bijgewerkt: 2026-08-07

## Doel

Een online visitekaartje dat vertrouwen wekt bij mensen die Prof Kluswerk opzoeken
of via Google vinden. Primaire conversie: **offerte aanvragen**. Secundair:
bellen en WhatsApp.

---

## 1. Positionering

Prof Kluswerk is **geen schildersbedrijf** maar een allround klusbedrijf.
Schilderwerk is één van zes diensten.

> **Prof Kluswerk, klusbedrijf uit Arnhem.**
> Onderhoud, renovatie en afwerking. Binnen en buiten.
> Voor particulieren en bedrijven.

Sterkste verkoopargument: **"Alles onder één dak, één aanspreekpunt."**
Concurrenten doen meestal één vak. Hij doet de hele klus.

Pay-off flyer: *"Uw klus, onze zorg!"* · *"Vakwerk tot in detail!"*

### Werkgebied

Twee lagen, bewust gescheiden:

1. **Kernwerkgebied**, Arnhem e.o.: Velp, Oosterbeek, Duiven, Westervoort, Elst,
   Nijmegen, Ede, Doetinchem. Hier zit de lokale ranking, want Google weegt bij
   lokale zoekopdrachten vooral afstand en het Google Bedrijfsprofiel mee.
2. **Landelijk, voor grotere projecten**: Amsterdam, Rotterdam, Utrecht, Den
   Haag, Amersfoort, Apeldoorn, Zwolle, Eindhoven en de rest van Nederland.

Beide staan in het `areaServed`-schema. Op de pagina's staan ze apart onder
"dagelijks in de regio" en "voor grotere projecten ook actief in". In één lijst
zouden Amsterdam en Westervoort naast elkaar ongeloofwaardig overkomen en de
lokale positie verwateren.

---

## 2. Bedrijfsgegevens

| Veld | Waarde | Status |
| --- | --- | --- |
| Bedrijfsnaam | Prof Kluswerk | ✅ |
| Telefoon | 06 24 98 34 63 → `tel:+31624983463` | ✅ |
| WhatsApp | `https://wa.me/31624983463` | ✅ |
| E-mail (formulier-bestemming) | Bekend, staat niet in deze publieke repo. Instellen in het Netlify-dashboard | ✅ |
| E-mail (getoond op site) | info@profkluswerk.nl (alias, doorsturen naar gmail) | ⏳ na domein |
| Standplaats | Omgeving Arnhem | ✅ |
| Domeinnaam | `profkluswerk.nl`, beschikbaarheid checken | ❌ |
| KvK-nummer | | ❌ |
| BTW-nummer | | ❌ |
| Rechtsvorm / volledige naam | | ❌ |
| Eigenaar (naam voor /over-ons) | | ❌ |

> Gmail-adres wordt bewust **niet** op de site getoond, dat leest als hobbymatig.
> CTA's zijn telefoon, WhatsApp en het formulier.

---

## 3. Diensten

Overgenomen van de flyer. Elk krijgt een eigen pagina.

| # | Dienst | Omvat | URL |
| --- | --- | --- | --- |
| 1 | Schilderwerk binnen & buiten | Muren, plafonds, kozijnen, deuren, gevels | `/diensten/schilderwerk` |
| 2 | Onderhoud & renovatie | Gevels, kozijnen, dakkapellen, boeidelen | `/diensten/onderhoud-renovatie` |
| 3 | Tegelwerk | Wand- en vloertegels: keuken, badkamer, toilet | `/diensten/tegelwerk` |
| 4 | Laminaat | Leggen incl. perfecte afwerking en plinten | `/diensten/laminaat` |
| 5 | Bestrating & tuinwerk | Terrassen, opritten, tuinonderhoud | `/diensten/bestrating-tuin` |
| 6 | Alles onder één dak | Kleine klussen t/m complete renovaties | `/diensten/verbouwing` |

Zes pagina's = zes ingangen in Google. "Tegelzetter Arnhem" en "klusbedrijf
Arnhem" zijn verschillende zoekopdrachten.

### USP's (flyer)

De flyer noemt: Kwaliteit · Betrouwbaar · Scherpe prijzen · Op tijd.
Op de site worden dat **toetsbare beloftes** in plaats van bijvoeglijke naamwoorden:

- Reactie binnen 1 werkdag
- Vaste prijs vooraf, geen verrassingen achteraf
- Wij ruimen op als we klaar zijn
- Gratis advies en offerte, vrijblijvend

---

## 4. Sitemap

```
/                              Home
/diensten                      Overzicht (6 tegels)
/diensten/[dienst]             6 detailpagina's
/over-ons                      Wie, waarom, werkgebied
/offerte                       Formulier, primaire CTA
/offerte/bedankt               Bevestiging (noindex)
/contact                       Bel / WhatsApp / werkgebied
/privacy                       Privacyverklaring (verplicht)
/projecten                     Bestaat wel, maar staat niet in het menu
```

> `/projecten` is bewust uit de navigatie gehaald en op `noindex` gezet. Zolang
> er alleen stockfoto's zijn, zou die pagina andermans werk tonen als het zijne.
> Dat is iets anders dan decoratieve stock op een dienstpagina. Terugzetten
> zodra er bruikbare eigen foto's zijn.

---

## 5. Huisstijl

Afgeleid van de flyer.

### Kleuren

| Token | Waarde | Gebruik |
| --- | --- | --- |
| `navy` | `#1B2A47` | Hoofdkleur: header, footer, USP-balk, koppen |
| `gold` | `#EFB22A` | Accent: CTA-knoppen, iconen, onderstrepingen |
| `off-white` | `#F7F8FA` | Sectie-achtergronden |
| `white` | `#FFFFFF` | Kaarten, basis |

> **Contrastregel:** goud op wit haalt WCAG AA niet (~1,9:1). Goud dus alleen als
> vlak of accent, nooit als tekstkleur op wit.
> Primaire CTA = **gouden vlak met navy tekst** (~8:1). Zo doet de flyer het ook.

### Typografie

- **Koppen:** Archivo. Bold, uppercase, strak. Matcht de flyer-koppen.
- **Body:** Inter. Rustig, goed leesbaar.
- Self-hosted via Fontsource. Geen Google Fonts-call → sneller én geen AVG-gedoe.

### Vormtaal

De **kwaststreek** uit de flyer wordt hergebruikt als SVG-vorm voor
sectie-overgangen. Zijn visuele handtekening, nul performance-kosten.

---

## 6. Stack

| Laag | Keuze | Waarom |
| --- | --- | --- |
| Framework | **Astro 5** | Pure HTML output, nul JS by default. Topsnelheid = betere ranking. |
| Styling | **Tailwind CSS v4** | Consistent design-systeem, geen CSS die ontspoort. |
| Taal | **TypeScript** | Schema-validatie op content. |
| Content | **Astro Content Collections** (Markdown) | Diensten/projecten als bestanden. Uitbreiden = bestand toevoegen. |
| Formulier | **Netlify Forms** | Geen backend, geen serverkosten. Incl. file-upload en spamfilter. Gratis tot 100/mnd. |
| Beeld | **`astro:assets`** (Sharp) | Automatisch AVIF/WebP + responsive srcset. Kritiek: foto-zware site. |
| Statistiek | **Plausible** of **Umami** | Cookieloos → geen cookiebanner nodig. |
| Hosting | **Netlify** | Git push = deploy, gratis SSL, deploy previews. |

**Niet gekozen:** Next.js (overkill, geen server nodig). WordPress (permanente
update- en beveiligingslast, trager).

**Optioneel later:** Decap CMS, zodat hij zelf projectfoto's kan toevoegen. Pas
bouwen als hij erom vraagt, anders onderhoud voor niks.

---

## 7. Vertrouwen: de zwakke plek

Er zijn **geen reviews, geen voor/na-foto's en geen certificaten**. Dat is het
grootste risico van dit project. Compensatie:

### In de site

- **Detailfoto's i.p.v. voor/na.** Strakke tegelnaad, scherpe kozijnrand, nette
  plint. "Vakwerk tot in detail" is zijn slogan, die maken we letterlijk waar.
- **Gezicht en naam op `/over-ons`.** Bij nul reviews is een echt persoon het
  sterkste vertrouwenssignaal dat bestaat.
- **KvK-nummer in de footer.**
- **WhatsApp prominent.** Laagste drempel in dit segment. Sticky mobiele balk:
  Bellen · WhatsApp · Offerte.
- **Toetsbare beloftes** i.p.v. vage claims (zie §3).

### Buiten de site: belangrijker dan de site zelf

1. **Google Bedrijfsprofiel aanmaken.** Prioriteit één. Zonder dit verschijnt hij
   niet op de kaart, en daar zoeken mensen.
2. **Reviews vragen na oplevering.** Ik lever een QR-code + kortelink naar zijn
   Google-reviewformulier. Binnen 2 maanden 10 reviews haalbaar.
3. **Vanaf nu elke klus voor én na fotograferen.** Zelfde hoek, zelfde standpunt.
   Over 3 maanden is er wél voor/na-materiaal.

De projectgalerij wordt zo gebouwd dat voor/na-paren er later in kunnen **zonder
herbouw**.

---

## 8. Design-uitgangspunten

- **Mobile-first.** Lokale dienstverlening is 70%+ mobiel verkeer.
- **Boven de vouw:** wat hij doet + waar, in één zin. Echte foto van eigen werk
  (geen stock, dat is de #1 killer van geloofwaardigheid). CTA + klikbaar
  telefoonnummer.
- **Proces in 3 stappen:** aanvraag → gratis inspectie → offerte binnen X
  werkdagen. Neemt de drempel weg.
- **Offerteformulier kort houden:** naam, telefoon/e-mail, postcode, type klus,
  omschrijving, **optioneel foto's uploaden**. Die upload is de grootste winst:
  hij kan sneller en scherper offreren zonder eerst langs te rijden.
- **Toegankelijkheid:** WCAG AA-contrast, zichtbare focus-states, semantische
  HTML, alt-teksten.
- **Performance:** LCP < 2,5s.
- **SEO:** `LocalBusiness` JSON-LD, sitemap, robots.txt, OG-images per pagina.

---

## 9. Fasering

| Fase | Inhoud | Oplevering |
| --- | --- | --- |
| 1 | ✅ Astro + Tailwind opgezet, design-tokens, layout, navigatie | `npm run dev` op :4321 |
| 2 | ✅ Homepage | Lokale preview, jij beoordeelt vóór we verder gaan |
| 3a | ✅ 6 dienstpagina's | Teksten staan in `src/content/diensten/` |
| 3b | Projectgalerij | Wacht op zijn foto's |
| 4 | ✅ Offerte-flow: formulier, validatie, upload, bevestiging | Testmail kan pas na deploy, zie NETLIFY.md |
| 5 | ✅ `/over-ons`, `/contact`, privacyverklaring, OG-afbeelding, SEO- en toegankelijkheidscheck | Statistiek nog niet gekozen |
| 6 | Domein koppelen, Netlify, Google Bedrijfsprofiel, mail-alias | Live |

---

## 10. Openstaande punten

| # | Nodig | Blokkeert | Status |
| --- | --- | --- | --- |
| 1 | Domeinnaam, check `profkluswerk.nl` | Live gaan (niet de bouw) | ❌ |
| 2 | KvK + BTW-nummer | Footer, privacyverklaring | ❌ |
| 3 | Volledige bedrijfsnaam + rechtsvorm | Juridisch | ❌ |
| 4 | Projectfoto's, ik sorteer per dienst | Galerij | ⏳ aanwezig, nog aanleveren |
| 5 | Portretfoto + zijn persoonlijke verhaal | `/over-ons`, staat nu een werkfoto zonder gezicht | ❌ |
| 9 | Openingstijden bevestigen | `/contact`, nu ingevuld als aanname | ❌ |
| 10 | Keuze statistiek: Plausible, Umami of niets | Fase 6 | ❌ |
| 6 | Logo als vector (AI/EPS/SVG), anders trek ik het uit de flyer | Scherpte op retina | ❌ |
| 7 | Certificaten / verzekering / garantie, navragen | Vertrouwensblok | ❌ |
| 8 | Bestaande reviews, navragen | Reviewsectie | ❌ |

Bouwen kan starten met placeholders voor 1, 2, 3 en 6.

> **`/over-ons` en de privacyverklaring zijn door mij geschreven.** In de
> over-ons staat bewust geen oprichtingsjaar, aantal jaren ervaring, teamgrootte
> of certificering: die feiten ken ik niet en verzin ik niet. De
> privacyverklaring is een concept dat klopt met wat het formulier verzamelt en
> met Netlify als verwerker, maar hoort juridisch nagekeken te worden en mist
> nog het KvK-nummer.

> **Teksten nakijken:** de dienstpagina's zijn door mij geschreven op basis van
> de flyer plus vakinhoudelijke aannames (werkwijze, doorlooptijden, wat wel en
> niet wordt meegenomen). Laat hem ze doorlezen voordat we live gaan, want hij
> weet als enige of het klopt met hoe hij echt werkt. Elke dienst is één
> Markdown-bestand in `src/content/diensten/`, dus aanpassen kan zonder code.

> **Let op, blokkeert livegang:** de site draait nu op tijdelijke stockfoto's
> van Pexels (`src/assets/stock/`, zie `BRONNEN.md` in die map). Die moeten eruit
> voordat we live gaan. Uitsnedes uit de flyerfoto zijn geprobeerd maar te laag
> van resolutie: de dienstfoto's zijn op de flyer zelf maar circa 180 x 150
> pixels.
