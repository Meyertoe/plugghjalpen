# Plugghjälpen

Plugghjälpen är en lärplattform byggd i React där elever kan träna olika skolämnen genom korta aktiviteter, nivåer och quiz.

Tanken med appen är att göra pluggandet lite enklare genom att dela upp lärandet i mindre steg, med tydlig feedback och olika typer av övningar.

## Om projektet

Plugghjälpen är ett eget projekt som jag påbörjade innan examinationen i JavaScript 3. Under examinationen har jag fortsatt utveckla projektet och arbetat vidare med bland annat React Router, state management, API-anrop, formulär och localStorage.

Projektet är fortfarande under utveckling och jag planerar att fortsätta bygga vidare på det efter kursen.

## Funktioner

- Flera skolämnen och områden
- Nivåer med olika typer av aktiviteter
- Quiz och kodövningar
- XP och level-system
- Achievements och streak
- Profil med namn och anpassningsbar avatar
- Progression som sparas mellan besök
- Pedagogiska hjälpfunktioner som "Jag fattar inte" och "Varför?"
- Dagens teknikfråga från ett externt API

## Teknik

- React
- JavaScript
- Vite
- React Router
- Context API
- localStorage
- Fetch API / Open Trivia Database

## Starta projektet

Installera dependencies:

npm install

Starta sedan projektet:

npm run dev

Öppna adressen som visas i terminalen.

## Struktur

Projektet är uppdelat i bland annat:

- `src/components` – återanvändbara komponenter
- `src/pages` – appens olika sidor
- `src/data` – innehåll för ämnen och aktiviteter
- `src/context` – gemensam state genom GameContext

Användarens profil, XP och progression sparas i localStorage.

## Fortsatt utveckling

Jag vill fortsätta utveckla Plugghjälpen efter examinationen. Några saker jag vill lägga till framöver är riktiga användarkonton, databas, fler ämnen och årskurser samt vidareutveckling av AI-hjälpen.