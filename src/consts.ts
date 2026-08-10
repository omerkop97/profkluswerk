/**
 * Centrale bedrijfs- en contentgegevens.
 * Eén plek aanpassen = overal bijgewerkt.
 */

export const BEDRIJF = {
  naam: 'Prof Kluswerk',
  payoff: 'Uw klus, onze zorg!',
  slogan: 'Vakwerk tot in detail',
  ondertitel: 'Onderhoud · Renovatie · Afwerking',

  telefoonWeergave: '06 24 98 34 63',
  telefoonLink: 'tel:+31624983463',
  whatsapp:
    'https://wa.me/31624983463?text=' +
    encodeURIComponent('Hallo, ik heb een vraag over een klus. '),

  /*
   * De bestemming van het offerteformulier staat bewust niet in deze repo.
   * Netlify stuurt inzendingen door op basis van de instelling onder
   * Site configuration > Forms > Form notifications. Zie NETLIFY.md.
   *
   * Op de site tonen we voorlopig geen e-mailadres: de CTA's zijn telefoon,
   * WhatsApp en het formulier. Zodra het domein er is komt info@profkluswerk.nl
   * hier terug (PLAN.md §2).
   */

  standplaats: 'Arnhem',
  regio: 'Arnhem en omstreken',

  // TODO: aanleveren (PLAN.md §10)
  kvk: null as string | null,
  btw: null as string | null,
} as const;

/**
 * Kernwerkgebied: hier zit de lokale ranking. Google weegt bij lokale
 * zoekopdrachten vooral afstand en het Google Bedrijfsprofiel mee, dus deze
 * lijst blijft bewust rond de thuisbasis.
 */
export const WERKGEBIED = [
  'Arnhem',
  'Velp',
  'Oosterbeek',
  'Duiven',
  'Westervoort',
  'Elst',
  'Nijmegen',
  'Ede',
  'Doetinchem',
] as const;

/**
 * Landelijk, voor grotere projecten. Apart gehouden van het kernwerkgebied:
 * in één lijst met Velp en Westervoort zou dit ongeloofwaardig overkomen en
 * de lokale ranking verwateren.
 */
export const WERKGEBIED_LANDELIJK = [
  'Amsterdam',
  'Rotterdam',
  'Utrecht',
  'Den Haag',
  'Amersfoort',
  'Apeldoorn',
  'Zwolle',
  'Eindhoven',
] as const;

export type IconNaam =
  | 'roller'
  | 'huis'
  | 'bestrating'
  | 'laminaat'
  | 'tegels'
  | 'gereedschap';

/*
 * De diensten zelf staan als Markdown in src/content/diensten en worden
 * opgehaald met getCollection('diensten'). Zie src/content.config.ts.
 */

/**
 * De vier USP's van de flyer, herschreven naar toetsbare beloftes
 * in plaats van bijvoeglijke naamwoorden (PLAN.md §3).
 */
export const USPS = [
  {
    titel: 'Kwaliteit',
    tekst: 'Vakmanschap en een perfecte afwerking. Tot in het detail.',
  },
  {
    titel: 'Betrouwbaar',
    tekst: 'Afspraak is afspraak. Reactie op uw aanvraag binnen één werkdag.',
  },
  {
    titel: 'Scherpe prijzen',
    tekst: 'Vaste prijs vooraf. Geen verrassingen achteraf.',
  },
  {
    titel: 'Op tijd',
    tekst: 'Snel en netjes gewerkt. En we ruimen op als we klaar zijn.',
  },
] as const;

export const WERKWIJZE = [
  {
    stap: '01',
    titel: 'U vraagt aan',
    tekst:
      'Bel, WhatsApp of vul het formulier in. Foto’s van de klus meesturen mag, dan kunnen we vaak al meteen meedenken.',
  },
  {
    stap: '02',
    titel: 'Gratis advies op locatie',
    tekst:
      'We komen vrijblijvend langs, bekijken het werk en bespreken wat er nodig is. Geen kosten, geen verplichtingen.',
  },
  {
    stap: '03',
    titel: 'Heldere offerte',
    tekst:
      'U krijgt een duidelijke offerte met een vaste prijs. Akkoord? Dan plannen we de klus in.',
  },
] as const;

/*
 * /projecten staat bewust niet in het menu. Zolang er geen echte projectfoto's
 * zijn, zou die pagina stockbeeld tonen als eigen werk. Terugzetten zodra hij
 * bruikbare foto's aanlevert (PLAN.md §10, punt 4).
 */
export const NAV = [
  { href: '/diensten', label: 'Diensten' },
  { href: '/over-ons', label: 'Over ons' },
  { href: '/contact', label: 'Contact' },
] as const;

/** Openingstijden. TODO: laten bevestigen door Prof Kluswerk. */
export const OPENINGSTIJDEN = [
  { dag: 'Maandag t/m vrijdag', tijd: '07:30 - 18:00' },
  { dag: 'Zaterdag', tijd: 'Op afspraak' },
  { dag: 'Zondag', tijd: 'Gesloten' },
] as const;
