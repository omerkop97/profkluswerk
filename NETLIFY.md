# Netlify: deployen en het offerteformulier activeren

Het offerteformulier draait op **Netlify Forms**. Er is geen backend en geen
serverkosten, maar het werkt alleen op Netlify zelf. Op de lokale dev-server kun
je het formulier invullen en de validatie testen, maar er wordt niets verstuurd.

## 1. Site koppelen

1. Zet de map in een Git-repository (GitHub, GitLab of Bitbucket).
2. Maak op [netlify.com](https://www.netlify.com) een site aan via
   *Add new site → Import an existing project* en kies de repository.
3. De build-instellingen komen uit `netlify.toml` en staan al goed:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node-versie: 22

Na de eerste deploy krijg je een URL zoals `random-naam-123.netlify.app`. Die
kun je meteen delen om mee te kijken.

> Het aanmaken van het Netlify-account en het koppelen van de repository moet je
> zelf doen. Dat gaat niet via mij.

## 2. Formulier controleren

Netlify leest de formulierdefinitie bij elke deploy uit de statische HTML. Na de
eerste geslaagde deploy staat er onder **Forms** een formulier met de naam
`offerte`. Zie je het niet, controleer dan of `dist/offerte/index.html` deze
onderdelen bevat:

- `data-netlify="true"`
- `<input type="hidden" name="form-name" value="offerte">`
- `netlify-honeypot="bot-field"`
- `enctype="multipart/form-data"` (nodig voor de foto-upload)

## 3. Meldingen instellen

Standaard komen inzendingen alleen in het Netlify-dashboard te staan. Zet de
e-mailmelding aan, anders mist hij aanvragen:

**Site configuration → Forms → Form notifications → Add notification →
Email notification**

- Event: *New form submission*
- Form: `offerte`
- Email to notify: het privéadres van Prof Kluswerk

> Het adres zelf staat bewust niet in deze repository, die is publiek. Vul het
> rechtstreeks in het Netlify-dashboard in.
>
> Zodra `profkluswerk.nl` gekoppeld is, hier `info@profkluswerk.nl` invullen en
> dat adres bij de registrar laten doorsturen naar het privéadres.

Zet daarna een testaanvraag door en controleer of de mail binnenkomt, inclusief
de bijgevoegde foto's.

## 4. Grenzen van het gratis plan

| Wat | Limiet |
| --- | --- |
| Inzendingen | 100 per maand |
| Bestandsuploads | Inbegrepen, meegerekend in de bandbreedte |
| Spamfilter | Akismet, zit erin |

Bij meer dan 100 aanvragen per maand kost het plan geld. Voor een eenmanszaak is
dat een luxeprobleem, en dan is het die paar euro dubbel en dwars waard.

## 5. Domein koppelen

**Domain management → Add a domain.** Netlify regelt daarna automatisch het
SSL-certificaat. Vergeet niet om na het koppelen deze plekken bij te werken:

- `site` in `astro.config.mjs` (staat nu al op `https://profkluswerk.nl`)
- `Sitemap:` in `public/robots.txt`
