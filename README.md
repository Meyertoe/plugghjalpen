# Plugghjälpen

## Om projektet

Plugghjälpen är en React-baserad lärplattform där elever tränar ämnen genom nivåer, korta pedagogiska aktiviteter och spelifierad progression. Appen är byggd som ett projektarbete i JavaScript 3 / React.

## Funktioner

- Ämnen, områden och nivåer med dynamisk routing.
- Algebra nivå 1–3 med quiz, para ihop, lös steg för steg, lös själv, hitta felet och bonusutmaningar.
- JavaScript nivå 1–3 med kodspecifika aktiviteter: förutsäg output, bygg kod, hitta buggen, fyll i kod och skriv kod.
- XP, levels, streak, achievements, avatar och upplåsning av nivåer.
- Profil med redigerbart visningsnamn och avatar-anpassning.
- `🧠 Jag fattar inte` och räddningsläge i utvalda aktiviteter.
- `🔍 Varför?` och datadrivna lärsummeringar efter aktiviteter.
- Dagens techfråga från ett externt API, med loading-, fel- och tomt tillstånd.
- Responsiv design för desktop och mobil.
- Persistens av profil och progression med `localStorage`.

## Teknik

- React
- Vite
- JavaScript
- React Router
- Context API (`GameContext`)
- `localStorage`
- [Open Trivia Database](https://opentdb.com/api_config.php) för dagens techfråga

## Installation och start

```bash
npm install
npm run dev
```

Öppna sedan adressen som Vite visar i terminalen.

### Valfri AI-hjälp

AI-ledtrådar är en valfri framtidsfunktion och behövs inte för att demonstrera projektets huvudfunktioner eller externa API-krav.

Skapa vid behov en `.env`-fil från `.env.example` och lägg in en giltig `OPENAI_API_KEY`. Starta sedan servern i en separat terminal:

```bash
npm run server
```

## Examinationskrav

| Krav | Lösning i Plugghjälpen |
| --- | --- |
| Komponentstruktur | Återanvändbara komponenter i `src/components`, vyer i `src/pages`, central data i `src/data` och delad state i `src/context`. |
| Routing | React Router i `src/App.jsx` med statiska och dynamiska routes för ämne, område, nivå och aktivitet. |
| State management | `GameContext` delar profil, XP, progression och avatar. Lokalt state hanterar exempelvis svar, timers, formulär och UI-feedback. |
| Externt API | `DailyQuestion` hämtar en gratis techfråga från Open Trivia Database via `fetch`. |
| Loading/fel | API-komponenten visar loading, begripligt nätverksfel och tomt tillstånd utan att störa övriga appen. |
| Formulär/validering | `ProfileEditForm` använder ett kontrollerat React-formulär, trimning, required-fält och fel-/sparfeedback. |
| Persistens | `GameContext` sparar profilen, inklusive namn, XP och progression, i `localStorage`. |
| Kodkvalitet | `npm run lint` används för statisk kontroll och `npm run build` för produktionsbygge. |

## VG-funktioner

Projektet kan försvaras mot minst följande VG-kriterier:

1. Utökad felhantering: extern API-funktion har loading, nätverksfel och empty state.
2. Genomtänkt komponentarkitektur: återanvändbara aktivitetstyper, data-driven rendering och `GameContext`.
3. Responsiv design: CSS har brytpunkter för dashboard, profil, nivåer och aktiviteter.
4. Utökad funktionalitet: progression, XP, avatar, achievements, räddningsläge och flera ämnesspecifika aktivitetstyper.

## Kontrollkommandon

```bash
npm run lint
npm run build
```
