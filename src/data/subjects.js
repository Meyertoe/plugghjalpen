export const subjects = [
  {
    name: "Matematik", slug: "matematik", icon: "📐", color: "purple", description: "Ekvationer, procent och mer", premium: false,
    topics: [
      { name: "Algebra", slug: "algebra", icon: "➗", description: "Ekvationer, uttryck och mönster", lessons: 12, questions: [
        { question: "Lös ekvationen: x + 7 = 15", options: ["6", "8", "22", "105"], answer: "8" },
        { question: "Vilket uttryck är lika med 3x + 2x?", options: ["5", "6x", "5x", "3x²"], answer: "5x" },
        { question: "Vad är värdet på 4a när a = 3?", options: ["7", "12", "16", "43"], answer: "12" },
      ] },
      { name: "Geometri", slug: "geometri", icon: "📐", description: "Former, vinklar och area", lessons: 8, questions: [
        { question: "Hur många grader är en rät vinkel?", options: ["45°", "90°", "180°", "360°"], answer: "90°" },
        { question: "Vad är arean av en rektangel som är 4 cm × 3 cm?", options: ["7 cm²", "12 cm²", "14 cm²", "24 cm²"], answer: "12 cm²" },
      ] },
      { name: "Procent", slug: "procent", icon: "💯", description: "Förändringar och beräkningar", lessons: 6, questions: [
        { question: "Vad är 25 % av 200?", options: ["25", "50", "75", "100"], answer: "50" },
        { question: "En tröja kostar 400 kr och har 10 % rabatt. Vad kostar den?", options: ["360 kr", "380 kr", "390 kr", "410 kr"], answer: "360 kr" },
      ] },
      { name: "Bråk", slug: "brak", icon: "🍕", description: "Delar, förlängning och addition", lessons: 9, questions: [
        { question: "Vilket bråk är lika med en halv?", options: ["1/4", "2/4", "3/4", "4/2"], answer: "2/4" },
        { question: "Vad är 1/3 + 1/3?", options: ["1/6", "2/3", "2/6", "1"], answer: "2/3" },
      ] },
      { name: "Statistik", slug: "statistik", icon: "📊", description: "Medelvärde, diagram och data", lessons: 7, questions: [
        { question: "Vad är medelvärdet av 2, 4 och 6?", options: ["3", "4", "5", "12"], answer: "4" },
        { question: "Vilken typ av diagram passar bra för delar av en helhet?", options: ["Linjediagram", "Cirkeldiagram", "Stapeldiagram", "Tabell"], answer: "Cirkeldiagram" },
      ] },
    ],
  },
  {
    name: "Svenska", slug: "svenska", icon: "📖", color: "orange", description: "Språk, läsning och skrivande", premium: false,
    topics: [
      { name: "Grammatik", slug: "grammatik", icon: "✏️", description: "Ordklasser och meningsbyggnad", lessons: 10, questions: [
        { question: 'Vilken ordklass är ordet "springer"?', options: ["Substantiv", "Verb", "Adjektiv", "Pronomen"], answer: "Verb" },
        { question: "Vilket ord är ett adjektiv?", options: ["Bok", "Snabb", "Läser", "Hon"], answer: "Snabb" },
      ] },
      { name: "Läsförståelse", slug: "lasforstaelse", icon: "🔎", description: "Hitta budskap och detaljer", lessons: 8, questions: [
        { question: "Vad kallas textens viktigaste tanke?", options: ["Huvudbudskap", "Rubrik", "Exempel", "Stycke"], answer: "Huvudbudskap" },
        { question: "Vad gör du när du drar en slutsats i en text?", options: ["Gissar utan stöd", "Tolkar ledtrådar", "Räknar ord", "Skriver om texten"], answer: "Tolkar ledtrådar" },
      ] },
      { name: "Skrivande", slug: "skrivande", icon: "📝", description: "Bygg tydliga och levande texter", lessons: 7, questions: [
        { question: "Vad hjälper en inledning läsaren att förstå?", options: ["Textens ämne", "Alla detaljer", "Slutet direkt", "Bara rubriken"], answer: "Textens ämne" },
        { question: "Vilket skiljetecken avslutar oftast en påstående-mening?", options: ["?", "!", ".", ":"], answer: "." },
      ] },
      { name: "Litteratur", slug: "litteratur", icon: "📚", description: "Berättelser, genrer och författare", lessons: 6, questions: [
        { question: "Vad är en roman?", options: ["En lång berättelse", "En tidning", "En dikt på en rad", "En faktatabell"], answer: "En lång berättelse" },
        { question: "Vem berättar en berättelse?", options: ["Berättaren", "Läsaren", "Rubriken", "Pärmen"], answer: "Berättaren" },
      ] },
    ],
  },
  {
    name: "Engelska", slug: "engelska", icon: "🇬🇧", color: "blue", description: "Words, grammar and confidence", premium: false,
    topics: [
      { name: "Grammar", slug: "grammar", icon: "✏️", description: "Tenses and sentence structure", lessons: 10, questions: [
        { question: 'Choose the correct word: "She ___ to school."', options: ["go", "goes", "going", "gone"], answer: "goes" },
        { question: 'What is the past tense of "walk"?', options: ["walked", "walking", "walks", "walk"], answer: "walked" },
      ] },
      { name: "Vocabulary", slug: "vocabulary", icon: "💬", description: "Useful words and expressions", lessons: 9, questions: [
        { question: 'What is the Swedish word for "happy"?', options: ["Hungrig", "Glad", "Trött", "Arg"], answer: "Glad" },
        { question: 'Which word means "stor"?', options: ["small", "big", "short", "slow"], answer: "big" },
      ] },
      { name: "Reading", slug: "reading", icon: "🔎", description: "Read, understand and infer", lessons: 7, questions: [
        { question: "What should you look for first in a text?", options: ["The main idea", "Every comma", "The last word", "Only names"], answer: "The main idea" },
        { question: 'What does "because" often introduce?', options: ["A reason", "A question", "A place", "A person"], answer: "A reason" },
      ] },
      { name: "Writing", slug: "writing", icon: "📝", description: "Write clear English texts", lessons: 7, questions: [
        { question: "Which sentence starts with a capital letter?", options: ["i like music.", "I like music.", "i Like music.", "I like Music."], answer: "I like music." },
        { question: "What should an email greeting include?", options: ["A greeting", "Only emojis", "No words", "A full stop only"], answer: "A greeting" },
      ] },
    ],
  },
  {
    name: "SO", slug: "so", icon: "🌍", color: "green", description: "Världen, samhället och historia", premium: false,
    topics: [
      { name: "Historia", slug: "historia", icon: "🏛️", description: "Händelser som format världen", lessons: 9, questions: [
        { question: "Vad studerar historia?", options: ["Det som hänt förr", "Bara framtiden", "Matematiska formler", "Vädret idag"], answer: "Det som hänt förr" },
        { question: "Vad kallas en tidsperiod med egna kännetecken?", options: ["Epok", "Kommun", "Kontinent", "Valuta"], answer: "Epok" },
      ] },
      { name: "Geografi", slug: "geografi", icon: "🗺️", description: "Platser, klimat och natur", lessons: 8, questions: [
        { question: "Vilken världsdel ligger Sverige i?", options: ["Europa", "Asien", "Afrika", "Sydamerika"], answer: "Europa" },
        { question: "Vad visar en karta?", options: ["Platser och områden", "Bara siffror", "En berättelse", "Musik"], answer: "Platser och områden" },
      ] },
      { name: "Religion", slug: "religion", icon: "🕊️", description: "Religioner, livsåskådningar och etik", lessons: 7, questions: [
        { question: "Vad betyder religionsfrihet?", options: ["Att välja eller avstå religion", "Att alla måste tro samma", "Att bara en religion finns", "Att inte få fråga"], answer: "Att välja eller avstå religion" },
        { question: "Vad handlar etik om?", options: ["Rätt och fel", "Väder", "Sportresultat", "Stavning"], answer: "Rätt och fel" },
      ] },
      { name: "Samhällskunskap", slug: "samhallskunskap", icon: "🏙️", description: "Demokrati, lagar och ekonomi", lessons: 8, questions: [
        { question: "Vad betyder demokrati?", options: ["Folket är med och bestämmer", "En person bestämmer allt", "Inga lagar finns", "Bara barn får rösta"], answer: "Folket är med och bestämmer" },
        { question: "Vad är en lag?", options: ["En regel i samhället", "En sorts växt", "Ett språk", "En sport"], answer: "En regel i samhället" },
      ] },
    ],
  },
  {
    name: "NO", slug: "no", icon: "🧬", color: "pink", description: "Upptäck naturvetenskap", premium: true,
    topics: [
      { name: "Biologi", slug: "biologi", icon: "🌱", description: "Livet, kroppen och naturen", lessons: 8, questions: [
        { question: "Vilket organ pumpar blod i kroppen?", options: ["Hjärtat", "Lungan", "Magen", "Hjärnan"], answer: "Hjärtat" },
        { question: "Vad behöver växter för fotosyntes?", options: ["Ljus", "Plast", "Sand", "Metall"], answer: "Ljus" },
      ] },
      { name: "Fysik", slug: "fysik", icon: "⚡", description: "Krafter, energi och rörelse", lessons: 8, questions: [
        { question: "Vilken enhet mäter elektrisk ström?", options: ["Ampere", "Meter", "Liter", "Grad"], answer: "Ampere" },
        { question: "Vad kallas kraften som drar saker mot jorden?", options: ["Tyngdkraft", "Friktion", "Magnetism", "Ljud"], answer: "Tyngdkraft" },
      ] },
      { name: "Kemi", slug: "kemi", icon: "🧪", description: "Ämnen, atomer och reaktioner", lessons: 7, questions: [
        { question: "Vad är vatten kemiskt sett?", options: ["H₂O", "CO₂", "O₂", "NaCl"], answer: "H₂O" },
        { question: "Vad är en atom?", options: ["En byggsten i ämnen", "En planet", "En cell", "Ett diagram"], answer: "En byggsten i ämnen" },
      ] },
      { name: "Rymden", slug: "rymden", icon: "🚀", description: "Planeter, stjärnor och universum", lessons: 6, questions: [
        { question: "Vilken planet bor vi på?", options: ["Jorden", "Mars", "Venus", "Jupiter"], answer: "Jorden" },
        { question: "Vad är solen?", options: ["En stjärna", "En planet", "En måne", "En komet"], answer: "En stjärna" },
      ] },
    ],
  },
  {
    name: "Programmering", slug: "programmering", icon: "💻", color: "cyan", description: "Skapa med kod och logik", premium: true,
    topics: [
      { name: "JavaScript", slug: "javascript", icon: "🟨", description: "Variabler, funktioner och logik", lessons: 12, questions: [
        { question: "Vilket nyckelord kan skapa en variabel som får ändras?", options: ["let", "if", "return", "function"], answer: "let" },
        { question: "Vad skrivs ut av console.log(2 + 3)?", options: ["23", "5", "undefined", "true"], answer: "5" },
        { question: "Vad används en funktion till?", options: ["Återanvända kod", "Färga en knapp", "Spara en bild", "Starta en dator"], answer: "Återanvända kod" },
      ] },
      { name: "HTML & CSS", slug: "html-css", icon: "🎨", description: "Bygg och styla webbsidor", lessons: 10, questions: [
        { question: "Vilket HTML-element används för en länk?", options: ["<a>", "<p>", "<img>", "<div>"], answer: "<a>" },
        { question: "Vad används CSS främst till?", options: ["Utseende och layout", "Databas", "Serverkod", "Lösenord"], answer: "Utseende och layout" },
      ] },
      { name: "React", slug: "react", icon: "⚛️", description: "Komponenter, props och state", lessons: 9, questions: [
        { question: "Vad är en React-komponent?", options: ["En återanvändbar del av UI", "En databas", "En webbläsare", "En CSS-färg"], answer: "En återanvändbar del av UI" },
        { question: "Vilken hook används för lokal state?", options: ["useState", "useRoute", "usePage", "useStyle"], answer: "useState" },
      ] },
      { name: "Algoritmer", slug: "algoritmer", icon: "🧩", description: "Problemlösning steg för steg", lessons: 7, questions: [
        { question: "Vad är en algoritm?", options: ["En steg-för-steg-instruktion", "Ett datorspel", "En bildfil", "En knapp"], answer: "En steg-för-steg-instruktion" },
        { question: "Vad gör en loop i kod?", options: ["Upprepar instruktioner", "Raderar datorn", "Byter språk", "Ritar en bild"], answer: "Upprepar instruktioner" },
      ] },
    ],
  },
  {
    name: "Tyska", slug: "tyska", icon: "🇩🇪", color: "yellow", description: "Ord och uttryck på tyska", premium: true,
    topics: [
      { name: "Grammatik", slug: "grammatik", icon: "✏️", description: "Ordföljd och böjning", lessons: 9, questions: [
        { question: 'Vilket ord betyder "jag" på tyska?', options: ["ich", "du", "sie", "wir"], answer: "ich" },
        { question: "Vilken bestämd artikel används ofta för maskulina ord?", options: ["der", "die", "das", "ein"], answer: "der" },
      ] },
      { name: "Ordförråd", slug: "ordforrad", icon: "💬", description: "Vanliga ord och uttryck", lessons: 8, questions: [
        { question: 'Vad betyder "Hallo"?', options: ["Hej", "Tack", "Hej då", "Ja"], answer: "Hej" },
        { question: 'Vad betyder "Danke"?', options: ["Tack", "Snälla", "Nej", "God morgon"], answer: "Tack" },
      ] },
      { name: "Verb", slug: "verb", icon: "🏃", description: "Vanliga verb och tempus", lessons: 8, questions: [
        { question: 'Vad betyder "sein"?', options: ["Att vara", "Att ha", "Att gå", "Att se"], answer: "Att vara" },
        { question: 'Vilken form betyder "jag går"?', options: ["ich gehe", "du gehst", "er geht", "wir gehen"], answer: "ich gehe" },
      ] },
      { name: "Läsförståelse", slug: "lasforstaelse", icon: "🔎", description: "Förstå tyska texter", lessons: 6, questions: [
        { question: "Vad hjälper dig förstå okända tyska ord i en text?", options: ["Sammanhanget", "Att hoppa över allt", "Bara rubriken", "Att gissa slumpmässigt"], answer: "Sammanhanget" },
        { question: 'Vad betyder "Guten Morgen"?', options: ["God morgon", "God natt", "God kväll", "Välkommen"], answer: "God morgon" },
      ] },
    ],
  },
]

const algebra = subjects.find((subject) => subject.slug === "matematik")
  ?.topics.find((topic) => topic.slug === "algebra")
const javascript = subjects.find((subject) => subject.slug === "programmering")
  ?.topics.find((topic) => topic.slug === "javascript")

subjects.forEach((subject) => {
  subject.topics.forEach((topic) => {
    topic.levels = [
      {
        id: "level-1",
        number: 1,
        title: "Grunderna",
        description: "Lär dig de viktigaste grunderna i området.",
        questions: topic.questions,
      },
    ]
  })
})

if (algebra) {
  algebra.levels = [
    {
      id: "level-1",
      number: 1,
      title: "Enkla ekvationer",
      description: "Lös ekvationer med ett obekant tal.",
      questions: algebra.questions,
    },
    {
      id: "level-2",
      number: 2,
      title: "Ekvationer i flera steg",
      description: "Lös ekvationer genom att göra en sak i taget.",
      questions: [
        { question: "3x + 5 = 20. Vad bör du göra först?", options: ["−5 på båda sidor", "÷3 på båda sidor", "+5 på båda sidor", "×3 på båda sidor"], answer: "−5 på båda sidor" },
        { question: "Efter 4x − 7 = 21 och +7 på båda sidor, vad får du?", options: ["4x = 14", "4x = 28", "x = 28", "4x = 21"], answer: "4x = 28" },
        { question: "Lös ekvationen: 5x + 10 = 35", options: ["3", "5", "7", "9"], answer: "5" },
        { question: "Sant eller falskt: Du måste göra samma operation på båda sidor av likhetstecknet.", options: ["Sant", "Falskt"], answer: "Sant" },
      ],
    },
    {
      id: "level-3",
      number: 3,
      title: "Parenteser och ekvationer",
      description: "Öppna parenteser och lös ekvationen självständigt.",
      questions: [
        { question: "Vad blir 3(x + 4) när parentesen öppnas?", options: ["3x + 12", "3x + 4", "7x", "12x"], answer: "3x + 12" },
        { question: "Lös ekvationen: 2(x + 5) = 18", options: ["3", "4", "8", "13"], answer: "4" },
        { question: "Efter 3x + 12 = 21, vad gör du först för att få 3x ensamt?", options: ["−12 på båda sidor", "÷3 på båda sidor", "+12 på båda sidor", "×3 på båda sidor"], answer: "−12 på båda sidor" },
        { question: "Lös ekvationen: 3(x + 4) = 2x + 17", options: ["3", "5", "7", "13"], answer: "5" },
      ],
    },
  ]
}

subjects.forEach((subject) => {
  subject.topics.forEach((topic) => {
    topic.levels.forEach((level) => {
      const sampleQuestions = level.questions
      level.lesson = level.lesson || {
        headline: level.title,
        explanation: "Här lär du dig grunderna i små steg. Läs exemplen, fundera på mönstret och testa sedan dina kunskaper.",
        examples: sampleQuestions.slice(0, 2).map((question) => ({
          label: question.question,
          answer: question.answer,
        })),
      }
      level.memory = level.memory || sampleQuestions.slice(0, 3).map((question, index) => ({
        id: "pair-" + index,
        left: question.question,
        right: question.answer,
      }))
      level.matching = level.matching || sampleQuestions.slice(0, 3).map((question, index) => ({
        id: "match-" + index,
        left: index === 0 ? "Begrepp" : question.question,
        right: index === 0 ? question.answer : "Rätt svar: " + question.answer,
      }))
      level.findRight = level.findRight || level.memory.map((pair, index) => {
        const choices = [...new Set([
          pair.right,
          ...level.memory.filter((_, pairIndex) => pairIndex !== index).map((item) => item.right),
          ...sampleQuestions.map((question) => question.answer),
          "Inget av alternativen",
        ])].slice(0, 6)
        return { id: pair.id, prompt: pair.left, answer: pair.right, options: choices }
      })
      level.bonus = level.bonus || Array.from({ length: 5 }, (_, index) => {
        const question = sampleQuestions[index % sampleQuestions.length]
        return {
          type: index % 2 === 0 ? "Snabbfråga" : "Finalmix",
          question: question.question,
          options: question.options,
          answer: question.answer,
        }
      })
    })
  })
})

if (algebra) {
  algebra.levels[0].lesson = {
    headline: "Vad är en variabel?",
    explanation: "En variabel är ett värde som vi inte känner ännu. Vi använder ofta bokstaven x som en liten platshållare. Målet är att ta reda på vilket tal x är.",
    examples: [
      { label: "x + 5 = 12", answer: "Ta bort 5 från båda sidor: x = 7." },
      { label: "x − 3 = 8", answer: "Lägg till 3 på båda sidor: x = 11." },
    ],
  }
  algebra.levels[0].memory = [
    { id: "variable", left: "Variabel", right: "Ett värde som kan förändras" },
    { id: "solve", left: "x + 5 = 12", right: "x = 7" },
    { id: "expand", left: "3(x + 2)", right: "3x + 6" },
  ]
  algebra.levels[0].matching = [
    { id: "variable", left: "Variabel", right: "Ett värde som kan förändras" },
    { id: "solve", left: "x + 5 = 12", right: "x = 7" },
    { id: "multiply", left: "3x", right: "3 × x" },
  ]
  algebra.levels[0].findRight = [
    { id: "variable", prompt: "Vad betyder en variabel?", answer: "Ett värde som kan förändras", options: ["Ett värde som kan förändras", "Ett svar i en ekvation", "Ett räknesätt", "En konstant"] },
    { id: "solve", prompt: "x + 5 = 12 — vilket värde har x?", answer: "x = 7", options: ["x = 5", "x = 7", "x = 12", "x = 17"] },
    { id: "multiply", prompt: "Vad betyder 3x?", answer: "3 × x", options: ["3 + x", "x − 3", "3 × x", "x ÷ 3"] },
  ]
}

subjects.forEach((subject) => {
  subject.topics.forEach((topic) => {
    topic.levels.forEach((level) => {
      level.activities = [
        { id: "lesson-" + level.number, type: "lesson", title: "Lär dig", icon: "📖", description: "Kort teori och tydliga exempel.", data: level.lesson },
        { id: "quiz-" + level.number, type: "quiz", title: "Quiz", icon: "🎮", description: "Testa det du precis lärt dig.", data: { questions: level.questions } },
        { id: "matching-" + level.number, type: "matching", title: "Para ihop", icon: "🔗", description: "Förstå viktiga samband.", data: { pairs: level.matching } },
        { id: "bonus-" + level.number, type: "bonus", title: "Bonusutmaning", icon: "⚡", description: "Finalen med snabba moment.", data: { questions: level.bonus } },
      ]
    })
  })
})

if (algebra) {
  const levelOne = algebra.levels[0]
  levelOne.activities = [
    { id: "lesson-1", type: "lesson", title: "Lär dig", icon: "📖", description: "Vad är en variabel?", data: levelOne.lesson },
    { id: "quiz-1", type: "quiz", title: "Quiz", icon: "🎮", description: "Testa algebra-grunderna.", data: { questions: levelOne.questions } },
    { id: "matching-1", type: "matching", title: "Para ihop", icon: "🔗", description: "Koppla ihop uttryck och betydelser.", data: { pairs: levelOne.matching } },
    { id: "build-1", type: "buildSolution", title: "Lös steg för steg", icon: "🧩", description: "Lär dig lösa ekvationen i små steg.", data: {
      equation: "3x + 6 = 18",
      steps: [
        {
          id: "remove-six",
          goal: "Få x ensamt",
          equation: "3x + 6 = 18",
          question: "Vad behöver du göra först?",
          options: ["−6 på båda sidor", "÷3 på båda sidor", "+6 på båda sidor", "×3 på båda sidor"],
          correctAnswer: "−6 på båda sidor",
          explanation: "Bra! Vi tog bort +6 genom att göra −6 på båda sidor. Då fortsätter ekvationen vara i balans.",
          hint1: "Vad behöver försvinna först för att få x ensamt?",
          hint2: "Motsatsen till +6 är −6. Gör samma sak på båda sidor.",
          visual: ["3x + 6 = 18", "    −6   −6", "────────────", "3x = 12"],
          help: {
            alternativeExplanation: "Målet är att få x ensamt. Just nu står +6 i vägen. Vad skulle kunna ta bort +6 utan att ekvationen blir obalanserad?",
            simplerExample: { code: "x + 2 = 5\nx + 2 − 2 = 5 − 2\nx = 3", explanation: "När vi tar bort 2 från ena sidan gör vi samma sak på andra sidan. Då är ekvationen fortfarande i balans." },
            rescue: { triggerAfterAttempts: 3, title: "Vi tar det tillsammans.", steps: [
              { intro: "Vi börjar med ett enklare exempel av samma idé.", visual: "x + 2 = 5", question: "Vad behöver vi ta bort för att få x ensamt?", options: ["2", "5", "x"], answer: "2", explanation: "Bra! +2 är det som står i vägen." },
              { intro: "Vi gör samma sak på båda sidor.", visual: "x + 2 − 2 = 5 − 2", question: "Vad blir höger sida?", options: ["3", "2", "7"], answer: "3", explanation: "Precis! Då blir x = 3." },
            ] },
          },
        },
        {
          id: "divide-three",
          goal: "Få x ensamt",
          equation: "3x = 12",
          question: "Hur får du x ensamt?",
          options: ["÷3 på båda sidor", "×3 på båda sidor", "−3 på båda sidor", "+3 på båda sidor"],
          correctAnswer: "÷3 på båda sidor",
          explanation: "3x betyder 3 × x. Vi delar båda sidor med 3 för att bara x ska vara kvar.",
          hint1: "Vilket tal multipliceras med x just nu?",
          hint2: "Motsatsen till ×3 är ÷3. Dela båda sidor med 3.",
          visual: ["3x = 12", "÷3   ÷3", "────────", "x = 4"],
          help: {
            alternativeExplanation: "3x betyder 3 gånger x. För att få bort gånger 3 använder vi motsatsen till multiplikation.",
            simplerExample: { code: "2x = 8\n2x ÷ 2 = 8 ÷ 2\nx = 4", explanation: "När x är multiplicerat med ett tal delar vi båda sidor med samma tal." },
            rescue: { triggerAfterAttempts: 3, title: "Vi tränar en liten del först.", steps: [
              { intro: "Titta på den enklare ekvationen.", visual: "2x = 8", question: "Vilken operation tar bort gånger 2?", options: ["÷2", "×2", "+2"], answer: "÷2", explanation: "Rätt, division är motsatsen till multiplikation." },
              { intro: "Nu delar vi båda sidor.", visual: "2x ÷ 2 = 8 ÷ 2", question: "Vad blir 8 ÷ 2?", options: ["4", "6", "16"], answer: "4", explanation: "Precis! Nu kan du prova din egen uppgift igen." },
            ] },
          },
        },
      ],
    } },
    { id: "why-1", type: "why", title: "Varför?", icon: "🔍", description: "Förklara varför ekvationen förändras så här.", data: {
      xp: 25,
      prompt: "Varför får vi skriva 3x = 12?",
      context: { before: "3x + 6 = 18", after: "3x = 12" },
      visual: "3x + 6 − 6 = 18 − 6\n3x = 12",
      options: [
        { id: "subtract", text: "Vi tog bort 6 från båda sidor" },
        { id: "divide", text: "Vi delade båda sidor med 3" },
        { id: "move", text: "Vi flyttade x till andra sidan" },
        { id: "automatic", text: "18 blev automatiskt 12" },
      ],
      correctOptionId: "subtract",
      explanation: "Precis! Vi subtraherar 6 från båda sidor för att behålla ekvationen i balans.",
      hints: ["Fundera på vad som faktiskt försvann mellan de två stegen.", "Talet +6 finns på vänster sida. Vilken motsatt operation användes på båda sidor?"],
      summary: { title: "Det här lärde du dig", points: ["Du såg varför samma operation görs på båda sidor.", "Du tränade på att hålla en ekvation i balans.", "Du kopplade ett lösningssteg till rätt princip."] },
    } },
    { id: "bonus-1", type: "bonus", title: "Bonusutmaning", icon: "⚡", description: "Finalen med snabba moment.", data: { questions: levelOne.bonus } },
  ]
  const levelTwo = algebra.levels[1]
  levelTwo.lesson = {
    headline: "Ekvationer i flera steg",
    explanation: "Målet är fortfarande att få x ensamt. Ta bort talet som ligger bredvid x först, och dela sedan för att få bara x kvar.",
    examples: [
      { label: "3x + 5 = 20", answer: "Ta bort +5: 3x = 15." },
      { label: "3x = 15", answer: "Dela båda sidor med 3: x = 5." },
    ],
  }
  levelTwo.bonus = [
    { type: "Snabb uträkning", question: "3x = 15. Vad är x?", options: ["3", "5", "12", "18"], answer: "5" },
    { type: "Nästa steg", question: "4x − 7 = 21. Vilken operation passar först?", options: ["+7 på båda sidor", "−7 på båda sidor", "÷4 på båda sidor", "×4 på båda sidor"], answer: "+7 på båda sidor" },
    { type: "Sant eller falskt", question: "Du får bara ändra vänster sida i en ekvation.", options: ["Sant", "Falskt"], answer: "Falskt" },
    { type: "Kort ekvation", question: "5x + 10 = 35. Vad är x?", options: ["4", "5", "7", "9"], answer: "5" },
    { type: "Finalmix", question: "Efter 4x = 28, vad gör du?", options: ["÷4 på båda sidor", "−4 på båda sidor", "+4 på båda sidor", "×4 på båda sidor"], answer: "÷4 på båda sidor" },
  ]
  levelTwo.activities = [
    { id: "lesson-2", type: "lesson", title: "Lär dig", icon: "📖", description: "Lär dig lösa en ekvation i flera små steg.", data: levelTwo.lesson },
    { id: "build-2", type: "buildSolution", title: "Lös steg för steg", icon: "🧩", description: "Välj rätt operation, ett steg i taget.", data: {
      xp: 35,
      equation: "3x + 5 = 20",
      steps: [
        { goal: "Få 3x ensamt", equation: "3x + 5 = 20", question: "Vad behöver du göra först?", options: ["−5 på båda sidor", "÷3 på båda sidor", "+5 på båda sidor", "×3 på båda sidor"], correctAnswer: "−5 på båda sidor", explanation: "Bra! När +5 tas bort från båda sidor blir ekvationen balanserad och 3x blir ensamt.", hint1: "Vilket tal ligger bredvid 3x?", hint2: "Motsatsen till +5 är −5. Gör det på båda sidor.", visual: ["3x + 5 = 20", "    −5   −5", "────────────", "3x = 15"] },
        { goal: "Få x ensamt", equation: "3x = 15", question: "Vilken operation gör att bara x blir kvar?", options: ["÷3 på båda sidor", "×3 på båda sidor", "−3 på båda sidor", "+3 på båda sidor"], correctAnswer: "÷3 på båda sidor", explanation: "Precis. 3x är 3 × x, så vi använder motsatsen: dela båda sidor med 3.", hint1: "Vilket tal är x multiplicerat med?", hint2: "Motsatsen till ×3 är ÷3.", visual: ["3x = 15", "÷3   ÷3", "────────", "x = 5"] },
      ],
    } },
    { id: "quiz-2", type: "quiz", title: "Quiz", icon: "🎮", description: "Testa motsatta operationer och flera steg.", data: { questions: levelTwo.questions } },
    { id: "solve-2", type: "solveYourself", title: "Lös själv", icon: "✍️", description: "Skriv svaret själv. Hjälp visas när den behövs.", data: {
      equation: "4x + 8 = 28",
      goal: "Lös ekvationen och skriv värdet på x.",
      answer: "5",
      answerLabel: "x =",
      xp: 30,
      explanation: "4x + 8 = 28 → 4x = 20 → x = 5.",
      attemptFeedback: ["Fundera på vad du behöver få bort först för att få 4x ensamt.", "Börja med att ta bort +8 från båda sidor.", "Bra att du försöker. Nu vet du att 4x = 20 — vad behöver du göra med 4x för att få x ensamt?"],
      hints: ["Motsatsen till +8 är −8. Gör samma sak på båda sidor.", "Efter första steget är 4x = 20. 4x betyder 4 × x.", "Vilket tal gånger 4 blir 20?"],
    } },
    { id: "bonus-2", type: "bonus", title: "Bonusutmaning", icon: "⚡", description: "Finalen med snabba moment.", data: { questions: levelTwo.bonus } },
  ]
  const levelThree = algebra.levels[2]
  levelThree.lesson = {
    headline: "Öppna parenteser",
    explanation: "Ett tal framför en parentes ska multipliceras med allt som finns inne i parentesen. Sedan kan du lösa ekvationen som vanligt.",
    examples: [
      { label: "3(x + 4)", answer: "3 × x + 3 × 4 = 3x + 12." },
      { label: "3x + 12 = 21", answer: "Ta bort 12 först: 3x = 9. Dela sedan med 3." },
    ],
  }
  levelThree.bonus = [
    { type: "Parenteser", question: "Vad blir 2(x + 5)?", options: ["2x + 10", "2x + 5", "7x", "10x"], answer: "2x + 10" },
    { type: "Snabbfråga", question: "3x = 9. Vad är x?", options: ["2", "3", "6", "9"], answer: "3" },
    { type: "Nästa steg", question: "3x + 12 = 21. Vad gör du först?", options: ["−12 på båda sidor", "÷3 på båda sidor", "+12 på båda sidor", "×3 på båda sidor"], answer: "−12 på båda sidor" },
    { type: "Kort ekvation", question: "2(x + 5) = 18. Vad är x?", options: ["3", "4", "8", "13"], answer: "4" },
    { type: "Finalmix", question: "Vilket uttryck är lika med 3(x + 2)?", options: ["3x + 6", "3x + 2", "5x", "6x"], answer: "3x + 6" },
  ]
  levelThree.activities = [
    { id: "lesson-3", type: "lesson", title: "Lär dig", icon: "📖", description: "Se hur du öppnar parenteser innan du löser.", data: levelThree.lesson },
    { id: "error-3", type: "findError", title: "Hitta felet", icon: "🐛", description: "Granska en lösning och hitta det felaktiga steget.", data: {
      xp: 35,
      equation: "3(x + 2) = 15",
      prompt: "🐛 I vilket steg blev det fel?",
      steps: [
        { id: "step-1", text: "3(x + 2) = 15", correct: true },
        { id: "step-2", text: "3x + 2 = 15", correct: false },
        { id: "step-3", text: "3x = 13", correct: true },
        { id: "step-4", text: "x = 4,33", correct: true },
      ],
      explanation: "Precis! Trean ska multipliceras med BÅDA termerna: 3(x + 2) → 3 × x + 3 × 2 → 3x + 6.",
      hint: "Kontrollera vad som händer när 3 multipliceras in i parentesen — påverkas både x och 2?",
    } },
    { id: "build-3", type: "buildSolution", title: "Lös steg för steg", icon: "🧩", description: "Träna parenteser med lagom stöd.", data: {
      xp: 40,
      equation: "3(x + 4) = 21",
      steps: [
        { goal: "Öppna parentesen", equation: "3(x + 4) = 21", question: "Vilket uttryck blir vänster sida?", options: ["3x + 12", "3x + 4", "7x", "12x"], correctAnswer: "3x + 12", explanation: "Rätt. Trean multipliceras med både x och 4.", hint1: "Multiplicera 3 med varje term i parentesen.", hint2: "3 × x är 3x och 3 × 4 är 12.", visual: ["3(x + 4) = 21", "3x + 12 = 21"] },
        { goal: "Få 3x ensamt", equation: "3x + 12 = 21", question: "Vad gör du nu?", options: ["−12 på båda sidor", "÷3 på båda sidor", "+12 på båda sidor", "×3 på båda sidor"], correctAnswer: "−12 på båda sidor", explanation: "Bra. Då försvinner +12 och 3x blir ensamt.", hint1: "Vilket tal behöver bort från vänster sida?", hint2: "Motsatsen till +12 är −12.", visual: ["3x + 12 = 21", "   −12    −12", "────────────", "3x = 9"] },
        { goal: "Få x ensamt", equation: "3x = 9", question: "Hur får du x ensamt?", options: ["÷3 på båda sidor", "×3 på båda sidor", "−3 på båda sidor", "+3 på båda sidor"], correctAnswer: "÷3 på båda sidor", explanation: "Precis. Dela båda sidor med 3.", hint1: "3x betyder 3 × x.", hint2: "Använd motsatsen till ×3.", visual: ["3x = 9", "÷3  ÷3", "──────", "x = 3"] },
      ],
    } },
    { id: "solve-3", type: "solveYourself", title: "Lös själv", icon: "✍️", description: "Visa att du kan lösa med parenteser själv.", data: {
      equation: "2(x + 5) = 18",
      goal: "Lös ekvationen och skriv värdet på x.",
      answer: "4",
      answerLabel: "x =",
      xp: 35,
      explanation: "2(x + 5) = 18 → 2x + 10 = 18 → 2x = 8 → x = 4.",
      attemptFeedback: ["Kontrollera först hur 2 påverkar hela parentesen.", "Öppna parentesen innan du fortsätter: 2(x + 5) blir 2x + 10.", "Nu har du 2x + 10 = 18. Vad behöver bort innan x kan bli ensamt?"],
      hints: ["2 ska multipliceras med både x och 5.", "Efter att du tagit bort 10 blir 2x = 8.", "Vad blir 8 delat med 2?"],
    } },
    { id: "bonus-3", type: "bonus", title: "Bonusutmaning", icon: "⚡", description: "Finalen med snabba moment.", data: { questions: levelThree.bonus } },
  ]
}

if (javascript) {
  javascript.levels = [
    {
      id: "level-1", number: 1, title: "Variabler och datatyper", description: "Se vad enkel JavaScript-kod betyder.",
      questions: [
        { question: "Vilket nyckelord skapar en variabel som kan ändras?", options: ["let", "if", "return", "console"], answer: "let" },
        { question: "Vilken datatyp är \"Hej\"?", options: ["string", "number", "boolean", "array"], answer: "string" },
        { question: "Vad skriver console.log(12) ut?", options: ["12", "\"12\"", "true", "ingenting"], answer: "12" },
      ],
    },
    {
      id: "level-2", number: 2, title: "If, else och jämförelser", description: "Följ hur program tar beslut.",
      questions: [
        { question: "Vad betyder === i en if-sats?", options: ["är exakt lika med", "tilldelas", "är större än", "lägg ihop"], answer: "är exakt lika med" },
        { question: "När körs else-blocket?", options: ["När if-villkoret är falskt", "Alltid först", "Bara när villkoret är sant", "Aldrig"], answer: "När if-villkoret är falskt" },
        { question: "Vilket villkor är sant när score är 10?", options: ["score > 5", "score < 5", "score === 5", "score === 0"], answer: "score > 5" },
      ],
    },
    {
      id: "level-3", number: 3, title: "Loopar och arrays", description: "Läs listor och skriv enkel kod själv.",
      questions: [
        { question: "Vilket värde har fruits[1] i [\"äpple\", \"banan\", \"päron\"]?", options: ["banan", "äpple", "päron", "1"], answer: "banan" },
        { question: "Var börjar index i en array?", options: ["0", "1", "−1", "Det varierar"], answer: "0" },
        { question: "Vad ger [2, 4, 6].length?", options: ["3", "2", "6", "12"], answer: "3" },
      ],
    },
  ]
  const [levelOne, levelTwo, levelThree] = javascript.levels
  levelOne.lesson = { headline: "Variabler sparar värden", explanation: "En variabel är som en namngiven låda. Vi sparar ett värde i den och kan använda namnet senare.", examples: [{ label: 'let name = "Sara";', answer: "let skapar variabeln, name är namnet och \"Sara\" är värdet." }, { label: "console.log(name);", answer: "console.log visar värdet som finns i name." }] }
  levelOne.bonus = [
    { type: "Output", question: "let age = 15; console.log(age);", options: ["15", "age", "true", "ingenting"], answer: "15" },
    { type: "Datatyp", question: "Vilken datatyp är false?", options: ["boolean", "string", "number", "array"], answer: "boolean" },
    { type: "Kodrad", question: "Vilken rad skapar name med värdet \"Ali\"?", options: ['let name = "Ali";', 'name let "Ali";', 'console.log(name);', 'let "Ali" = name;'], answer: 'let name = "Ali";' },
    { type: "Output", question: 'const city = "Umeå"; console.log(city);', options: ["Umeå", "city", "const", "0"], answer: "Umeå" },
    { type: "Finalmix", question: "Vilket värde är ett number?", options: ["42", "\"42\"", "true", "\"hej\""], answer: "42" },
  ]
  levelOne.activities = [
    { id: "lesson-1", type: "lesson", title: "Lär dig", icon: "📖", description: "Se delarna i en enkel variabel.", data: levelOne.lesson },
    { id: "predict-1", type: "predictOutput", title: "Vad händer?", icon: "▶️", description: "Följ koden och förutsäg resultatet.", data: { xp: 25, items: [{ code: "let age = 12;\nconsole.log(age);", options: ["12", "age", "\"age\"", "true"], answer: "12", explanation: "Precis! age innehåller värdet 12, så console.log(age) skriver ut 12.", hint: "Titta på vilket värde som sparades i variabeln age." }, { code: 'const name = "Sara";\nconsole.log(name);', options: ["Sara", "name", "const", "0"], answer: "Sara", explanation: "Rätt! Variabeln name har värdet \"Sara\".", hint: "console.log visar värdet i variabeln, inte själva variabelnamnet." }] } },
    { id: "build-code-1", type: "buildCode", title: "Bygg koden", icon: "🧩", description: "Sätt ihop en kodrad av block.", data: { xp: 30, prompt: 'Skapa variabeln name med värdet "Ali".', blocks: ['"Ali";', "let", "name", "=", "console.log", "12"], answer: ["let", "name", "=", '"Ali";'], explanation: "Snyggt! Du skapade en variabel med namn och värde.", hint: "Börja med nyckelordet som skapar en variabel. Sedan behövs namn, = och värde." } },
    { id: "why-1", type: "why", title: "Varför?", icon: "🔍", description: "Förklara varför koden skriver ut rätt värde.", data: {
      xp: 25,
      prompt: "Varför skriver console.log(name) ut \"Sara\"?",
      context: { before: 'const name = "Sara";\nconsole.log(name);', after: "Sara" },
      options: [
        { id: "value", text: "Variabeln name innehåller värdet \"Sara\"" },
        { id: "sort", text: "console.log sorterar text automatiskt" },
        { id: "keyword", text: "const skriver alltid ut sitt namn" },
        { id: "first", text: "JavaScript väljer första ordet" },
      ],
      correctOptionId: "value",
      explanation: "Precis! console.log(name) hämtar det aktuella värdet som sparats i variabeln name.",
      hints: ["Titta på vilken text som sparas efter = i första raden.", "console.log visar värdet i en variabel, inte ett slumpmässigt ord."],
      summary: { title: "Det här lärde du dig", points: ["Du följde en variabel från värde till utskrift.", "Du såg att console.log använder variabelns aktuella värde.", "Du förklarade varför kodens resultat blev rätt."] },
    } },
    { id: "quiz-1", type: "quiz", title: "Quiz", icon: "🎮", description: "Testa variabler och datatyper.", data: { questions: levelOne.questions } },
    { id: "bonus-1", type: "bonus", title: "Bonusutmaning", icon: "⚡", description: "Snabb kodförståelse.", data: { questions: levelOne.bonus } },
  ]
  levelOne.activities.find((activity) => activity.id === "predict-1").data.items[0].help = {
    alternativeExplanation: "Följ värdet på age en rad i taget. Första raden sparar 12 i variabeln age. console.log visar sedan värdet som finns där.",
    simplerExample: { code: "let score = 3;\nscore = score + 1;\n\nscore: 3 → 4", explanation: "Det gamla värdet används först och sedan sparas det nya värdet i samma variabel." },
    rescue: { triggerAfterAttempts: 3, title: "Vi kör koden tillsammans.", steps: [
      { intro: "Vi börjar med första raden.", visual: "let age = 12;", question: "Vilket värde har age nu?", options: ["12", "age", "0"], answer: "12", explanation: "Precis! age sparar värdet 12." },
      { intro: "Nu kör programmet nästa rad.", visual: "console.log(age);", question: "Vad visar console.log när age är 12?", options: ["12", "age", "true"], answer: "12", explanation: "Bra! Nu kan du svara på originaluppgiften själv." },
    ] },
  }
  levelOne.activities.find((activity) => activity.id === "predict-1").data.items[0].id = "age-output"
  levelTwo.lesson = { headline: "Kod kan välja väg", explanation: "En if-sats testar ett villkor. Om det är sant körs if-blocket, annars körs else-blocket.", examples: [{ label: "if (age >= 18)", answer: "Frågan är: är age minst 18?" }, { label: "else", answer: "Den här vägen körs när villkoret inte stämmer." }] }
  levelTwo.bonus = [
    { type: "Output", question: "let age = 18; if (age >= 18) console.log(\"Vuxen\"); Vad skrivs ut?", options: ["Vuxen", "Barn", "18", "ingenting"], answer: "Vuxen" },
    { type: "Villkor", question: "Vilket tecken betyder större än?", options: [">", "<", "===", "="], answer: ">" },
    { type: "Buggen", question: "Vad ska else skriva ut när age är under 18?", options: ["Barn", "Vuxen", "age", "true"], answer: "Barn" },
    { type: "Finalmix", question: "score är 10. Är score > 5 sant eller falskt?", options: ["Sant", "Falskt"], answer: "Sant" },
    { type: "Jämförelse", question: "Vilket villkor testar om score är exakt 5?", options: ["score === 5", "score = 5", "score > 5", "score + 5"], answer: "score === 5" },
  ]
  levelTwo.activities = [
    { id: "lesson-2", type: "lesson", title: "Lär dig", icon: "📖", description: "Förstå if, else och villkor.", data: levelTwo.lesson },
    { id: "predict-2", type: "predictOutput", title: "Vad händer?", icon: "▶️", description: "Följ ett beslut i koden.", data: { xp: 25, items: [{ code: 'let age = 17;\nif (age >= 18) {\n  console.log("Vuxen");\n} else {\n  console.log("Barn");\n}', options: ["Barn", "Vuxen", "17", "true"], answer: "Barn", explanation: "Rätt! 17 är inte minst 18, därför körs else-blocket.", hint: "Testa villkoret först: är 17 större än eller lika med 18?" }] } },
    { id: "bug-2", type: "findBug", title: "Hitta buggen", icon: "🐛", description: "Läs koden och hitta det logiska felet.", data: { xp: 30, prompt: "Något blir fel när någon är under 18. Var?", bugLine: "line-5", lines: [{ id: "line-1", text: "let age = 20;" }, { id: "line-2", text: "if (age >= 18) {" }, { id: "line-3", text: '  console.log("Vuxen");' }, { id: "line-4", text: "} else {" }, { id: "line-5", text: '  console.log("Vuxen");' }, { id: "line-6", text: "}" }], explanation: "Precis! else körs när personen inte är vuxen, så den raden ska skriva \"Barn\".", hint: "Jämför vad if-vägen och else-vägen skriver ut." } },
    { id: "fill-code-2", type: "fillCode", title: "Fyll i koden", icon: "🧩", description: "Välj det som saknas i ett villkor.", data: { xp: 25, prompt: "Vilken jämförelse saknas?", before: "let score = 10;\n\nif (score ", after: ' 5) {\n  console.log("Bra!");\n}', options: [">", "<", "=", "+"], answer: ">", explanation: "Rätt! score > 5 frågar om score är större än 5.", hint: "Programmet ska skriva Bra! när score är större än 5." } },
    { id: "bonus-2", type: "bonus", title: "Bonusutmaning", icon: "⚡", description: "Snabba beslut i kod.", data: { questions: levelTwo.bonus } },
  ]
  levelThree.lesson = { headline: "Arrays är listor", explanation: "En array sparar flera värden i ordning. Index börjar på 0, så första värdet har index 0.", examples: [{ label: 'const fruits = ["äpple", "banan", "päron"];', answer: "Arrayen har tre värden." }, { label: "fruits[1]", answer: "Index 1 är det andra värdet: banan." }] }
  levelThree.bonus = [
    { type: "Index", question: 'const colors = ["red", "blue"]; console.log(colors[0]);', options: ["red", "blue", "0", "colors"], answer: "red" },
    { type: "Array", question: "Vad ger [2, 4, 6].length?", options: ["3", "2", "6", "12"], answer: "3" },
    { type: "Output", question: "let n = [2, 4, 6]; console.log(n[0] + n[2]);", options: ["8", "6", "12", "24"], answer: "8" },
    { type: "Loop", question: "Vilken del av en for-loop ändras för varje varv?", options: ["Räknaren", "Arrayens namn", "console.log", "const"], answer: "Räknaren" },
    { type: "Finalmix", question: "Vilken kod skapar en array?", options: ['const colors = ["red", "blue"];', 'const colors = "red", "blue";', "colors = red + blue;", "console.log(colors);"], answer: 'const colors = ["red", "blue"];' },
  ]
  levelThree.activities = [
    { id: "lesson-3", type: "lesson", title: "Lär dig", icon: "📖", description: "Förstå arrays, index och loopar.", data: levelThree.lesson },
    { id: "predict-3", type: "predictOutput", title: "Kör koden i huvudet", icon: "▶️", description: "Följ flera kodrader i rätt ordning.", data: { xp: 30, items: [{ code: "let numbers = [2, 4, 6];\nlet result = numbers[0] + numbers[2];\nconsole.log(result);", options: ["8", "6", "12", "2"], answer: "8", explanation: "Rätt! numbers[0] är 2 och numbers[2] är 6. Du räknar själv ihop dem till 8.", hint: "Vilka värden finns på index 0 och index 2?" }] } },
    { id: "bug-3", type: "findBug", title: "Hitta buggen", icon: "🐛", description: "Hitta raden som använder fel index.", data: { xp: 30, prompt: "Koden ska skriva ut banan. Vilken rad är fel?", bugLine: "line-2", lines: [{ id: "line-1", text: 'const fruits = ["äpple", "banan", "päron"];' }, { id: "line-2", text: "console.log(fruits[2]);" }], explanation: "Precis! Array-index börjar på 0. banan ligger på index 1, inte index 2.", hint: "Räkna positionerna från 0: äpple är först, banan är tvåa." } },
    { id: "write-code-3", type: "writeCode", title: "Skriv koden", icon: "💻", description: "Skriv en egen, liten array.", data: { xp: 35, prompt: 'Skapa en array som heter colors med värdena "red" och "blue".', placeholder: 'const colors = ["red", "blue"];', accepted: ['const colors = ["red", "blue"];', "const colors = ['red', 'blue'];", 'let colors = ["red", "blue"];', "let colors = ['red', 'blue'];"], explanation: "Snyggt! colors är nu en array med två värden.", hints: ["Börja med const eller let och ge arrayen namnet colors.", "En array skrivs med hakparenteser: [ ].", "Värdena ska ligga i hakparenteserna och skiljas åt med ett kommatecken."] } },
    { id: "bonus-3", type: "bonus", title: "Bonusutmaning", icon: "⚡", description: "Snabb kodförståelse med arrays.", data: { questions: levelThree.bonus } },
  ]
}

const summaryLead = {
  lesson: "Du fick en tydlig grund innan du tränade vidare.",
  quiz: "Du testade kunskapen i flera små frågor.",
  matching: "Du tränade på att se viktiga samband.",
  buildSolution: "Du tränade på att välja rätt steg i rätt ordning.",
  solveYourself: "Du tog ansvar för lösningen själv.",
  findError: "Du tränade på att granska ett resonemang.",
  predictOutput: "Du följde vad som händer steg för steg.",
  buildCode: "Du byggde upp en kodrad av viktiga delar.",
  findBug: "Du läste koden för att hitta ett logiskt fel.",
  fillCode: "Du tränade på vilken del som saknas i koden.",
  writeCode: "Du skrev en egen liten kodlösning.",
  why: "Du förklarade principen bakom ett korrekt svar.",
}

subjects.forEach((subject) => subject.topics.forEach((topic) => topic.levels.forEach((level) => level.activities.forEach((activity) => {
  activity.data.summary = activity.data.summary || {
    title: "Det här lärde du dig",
    points: [summaryLead[activity.type] || "Du tog ett steg vidare i din förståelse.", activity.description, `Du bygger vidare på ${topic.name} i nästa steg.`],
  }
}))))

export function getSubjectBySlug(subjectSlug) {
  return subjects.find((subject) => subject.slug === subjectSlug)
}

export function getTopicBySlug(subjectSlug, topicSlug) {
  const subject = getSubjectBySlug(subjectSlug)
  return subject?.topics.find((topic) => topic.slug === topicSlug)
}

export function getLevelById(subjectSlug, topicSlug, levelId = "level-1") {
  const topic = getTopicBySlug(subjectSlug, topicSlug)
  return topic?.levels.find((level) => level.id === levelId)
}
