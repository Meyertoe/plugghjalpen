export const avatarCategories = [
  {
    id: "skin", label: "Hud", items: [
      { id: "light", label: "Ljus", value: "#f7c9a9", cost: 0 },
      { id: "medium", label: "Varm", value: "#c9825e", cost: 0 },
      { id: "dark", label: "Djup", value: "#7c4a35", cost: 0 },
    ],
  },
  {
    id: "hair", label: "Hår", items: [
      { id: "brown", label: "Brunt", value: "#5b3526", cost: 0 },
      { id: "blonde", label: "Blont", value: "#e8bd54", cost: 0 },
      { id: "purple", label: "Lila", value: "#9a62df", cost: 0 },
    ],
  },
  {
    id: "eyes", label: "Ögon", items: [
      { id: "brown", label: "Bruna", value: "#5a3827", cost: 0 },
      { id: "blue", label: "Blå", value: "#4d9ded", cost: 0 },
      { id: "green", label: "Gröna", value: "#52a773", cost: 0 },
    ],
  },
  {
    id: "outfit", label: "Kläder", items: [
      { id: "tshirt", label: "T-shirt", value: "#7657ee", cost: 0 },
      { id: "hoodie", label: "Hoodie", value: "#f07868", cost: 300 },
      { id: "jacket", label: "Jacka", value: "#3c88d8", cost: 800 },
    ],
  },
  {
    id: "headwear", label: "Huvudbonad", items: [
      { id: "none", label: "Ingen", value: "", cost: 0 },
      { id: "cap", label: "Keps", value: "🧢", cost: 500 },
      { id: "crown", label: "Krona", value: "👑", cost: 2000 },
    ],
  },
  {
    id: "accessory", label: "Accessoar", items: [
      { id: "none", label: "Ingen", value: "", cost: 0 },
      { id: "glasses", label: "Solglasögon", value: "🕶️", cost: 1000 },
      { id: "stars", label: "Stjärnor", value: "✨", cost: 1500 },
    ],
  },
]

export const achievements = [
  { id: "first-quiz", icon: "🏆", title: "Första quizet", description: "Slutför ditt första quiz.", isUnlocked: (profile) => profile.quizzesCompleted >= 1 },
  { id: "streak", icon: "🔥", title: "7 dagar i rad", description: "Håll en streak på 7 dagar.", isUnlocked: (profile) => profile.streak >= 7 },
  { id: "fast", icon: "⚡", title: "10 snabba svar", description: "Svara på 10 frågor under 3 sekunder.", isUnlocked: (profile) => profile.fastAnswers >= 10 },
  { id: "questions", icon: "🧠", title: "100 frågor", description: "Besvara 100 frågor.", isUnlocked: (profile) => profile.questionsAnswered >= 100 },
  { id: "xp", icon: "⭐", title: "1 000 XP", description: "Samla totalt 1 000 XP.", isUnlocked: (profile) => profile.totalXp >= 1000 },
  { id: "goals", icon: "🎯", title: "Dagens mål klart", description: "Slutför alla dagens mål.", isUnlocked: (profile) => profile.studyMinutes >= 15 && profile.quizzesCompleted >= 1 && profile.todayXp >= 50 },
]
