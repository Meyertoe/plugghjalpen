# Plugghjälpen

Plugghjälpen är en React-baserad lärplattform där elever kan träna skolämnen genom korta aktiviteter, nivåer och spelifierad progression. Tanken är att göra det lättare att ta ett steg i taget: först få en förklaring, sedan träna och få tydlig feedback.

## Om projektet

Plugghjälpen är ett eget projekt som jag påbörjade innan examinationen i JavaScript 3. Plugghjälpen är ett eget projekt som jag påbörjade innan examinationen i JavaScript 3. Under examinationen har jag valt att vidareutveckla projektet och använda det för att arbeta med kursens moment, bland annat komponentstruktur, routing, state-hantering, persistens, formulär och externa API-anrop.

Appen har alltså inte byggts helt från grunden under examinationsperioden. Den används som grund för att visa och utveckla de delar som bedöms inom kursen.

## Funktioner

- Ämnen, områden och nivåer med dynamisk navigation.
- Datastyrda läraktiviteter för bland annat algebra och JavaScript.
- Quiz, para ihop, lös steg för steg, lös själv, hitta felet och kodövningar.
- XP, level-system, nivåupplåsning, achievements och avatar.
- Profil där användaren kan välja visningsnamn och anpassa sin avatar.
- Pedagogisk hjälp i utvalda aktiviteter, bland annat `Jag fattar inte`, räddningsläge och `Varför?`.
- Kort summering efter aktiviteter med vad eleven har tränat på.
- Dagens teknikfråga från ett externt API.
- Sparad profil och progression i webbläsarens `localStorage`.

## Teknik

- React
- Vite
- JavaScript
- React Router
- Context API genom `GameContext`
- `localStorage`
- Fetch API och [Open Trivia Database](https://opentdb.com/api_config.php) för dagens teknikfråga

## Så startar man projektet

Installera beroenden och starta utvecklingsservern:

```bash
npm install
npm run dev
```

Öppna sedan den adress som Vite visar i terminalen.

### Valfri AI-hjälp

Projektets vanliga funktioner och examinationsdelar kräver inte AI-servern. Det finns en separat, valfri server för AI-ledtrådar som kan användas om en giltig `OPENAI_API_KEY` har lagts i en lokal `.env`-fil. Den startas då med:

```bash
npm run server
```

## Examinationskrav

| Krav | Hur det visas i projektet |
| --- | --- |
| Komponentstruktur | Återanvändbara komponenter finns i `src/components`, sidor i `src/pages`, innehåll i `src/data` och delat tillstånd i `src/context`. Exempel är `progressBar.jsx`, `avatar.jsx` och `resultPopup.jsx`. |
| Routing | `src/App.jsx` använder React Router med både vanliga och dynamiska routes för ämne, område, nivå och aktivitet. |
| State management | `src/context/GameContext.jsx` hanterar profil, XP, statistik, avatar och nivåprogression. Lokalt state används också för exempelvis quizsvar, timers, formulär och feedback. |
| Externt API med loading/felhantering | `src/components/dailyQuestion.jsx` hämtar en teknikfråga från Open Trivia Database med `fetch`. Komponenten har loading-, fel- och tomt tillstånd. |
| Formulär och validering | `src/components/profileEditForm.jsx` är ett kontrollerat React-formulär. Namnet trimmas och tomt namn ger tydlig valideringsfeedback. |
| Persistens | `GameContext` läser och sparar profil, avatar, XP och progression i `localStorage` under nyckeln `plugghjalpen-profile`. |
| Kodkvalitet | Projektet är uppdelat efter ansvar mellan komponenter, sidor, data och context. `npm run lint` används för kodkontroll och `npm run build` för att testa produktionsbygget. |

## VG-kriterier som projektet kan styrka

- **Genomtänkt komponentarkitektur:** återanvändbara komponenter, datastyrt utbildningsinnehåll och ett gemensamt `GameContext` gör att nya aktiviteter och nivåer kan läggas till utan att hela gränssnittet skrivs om.
- **Responsiv design:** gränssnittet är anpassat för både desktop och mobil, bland annat för dashboard, profil, nivåer och aktiviteter.
- **Utökad relevant funktionalitet:** projektet innehåller mer än ett grundläggande quiz, till exempel nivåprogression, avatar, achievements, pedagogiska hjälplägen och flera typer av övningar.
- **Utökad felhantering:** den externa API-komponenten hanterar laddning, nätverksfel och tomt svar utan att resten av appen slutar fungera.

Git-repot initierades sent i arbetet. Projektet gör därför inte anspråk på att uppfylla ett eventuellt VG-kriterium om en väl underhållen Git-historik genom hela utvecklingsprocessen.

## Fortsatt utveckling

Plugghjälpen är ett pågående projekt som jag planerar att fortsätta utveckla efter examinationen. Exempel på möjliga nästa steg är riktiga användarkonton och databas, mer innehåll för fler ämnen och årskurser samt vidareutveckling av AI-hjälpen. Dessa delar är framtida utveckling och inte färdiga funktioner i den här versionen.

## Kontrollkommandon

```bash
npm run lint
npm run build
```
