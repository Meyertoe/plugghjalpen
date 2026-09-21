import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ProgressBar from "../components/progressBar"
import Avatar from "../components/avatar"
import { useGame } from "../hooks/useGame"
import { subjects } from "../data/subjects"
import { getLevelProgress } from "../utils/level"
import DailyQuestion from "../components/dailyQuestion"

function Dashboard() {
  const navigate = useNavigate()
  const { profile, completeStudyGoal } = useGame()
  const [aiQuestion, setAiQuestion] = useState("")
  const [aiReply, setAiReply] = useState("")
  const level = getLevelProgress(profile.totalXp)
  const goals = [
    { label: "Gör ett quiz", done: profile.quizzesCompleted > 0 },
    { label: "Samla 50 XP", done: profile.todayXp >= 50 },
    { label: "Plugga i 15 minuter", done: profile.studyMinutes >= 15 },
  ]
  const finishedGoals = goals.filter((goal) => goal.done).length
  const askAi = (event) => {
    event.preventDefault()
    if (!aiQuestion.trim()) return
    setAiReply("Bra fråga! AI-pluggkompisen kopplas snart till en riktig förklaring. Under tiden kan du testa ett algebra-quiz.")
  }

  return <main className="app-page dashboard">
    <header className="dashboard-topbar"><button className="brand" onClick={() => navigate("/")}>📚 <span>Plugghjälpen</span></button><div className="topbar-profile"><span className="streak-pill">🔥 {profile.streak}</span><button className="profile-nav" onClick={() => navigate("/profile")}><Avatar avatar={profile.avatar} size="tiny" /><span>{profile.name}</span></button></div></header>
    <section className="dashboard-hero"><div><p className="eyebrow">TORSDAG, 11 SEPTEMBER</p><h1>Välkommen tillbaka, {profile.name}! 👋</h1><p className="muted">Vad vill du plugga idag?</p></div><div className="level-card"><div className="level-number">{level.level}</div><div><p>Du är på <strong>Level {level.level}</strong></p><ProgressBar value={level.progress} /><small>{level.currentXp} / {level.levelXpTarget} XP till nästa level</small></div></div></section>
    <section className="stats-grid" aria-label="Dina framsteg"><article className="stat-card"><span>⭐</span><div><small>Total XP</small><strong>{profile.totalXp.toLocaleString("sv-SE")} XP</strong></div></article><article className="stat-card"><span>⚡</span><div><small>Dagens XP</small><strong>{profile.todayXp} XP</strong></div></article><article className="stat-card"><span>🔥</span><div><small>Din streak</small><strong>{profile.streak} dagar</strong></div></article></section>
    <div className="dashboard-layout"><section className="content-section subject-section"><div className="section-heading"><div><p className="eyebrow">FORTSÄTT LÄRA</p><h2>Välj ett ämne</h2></div><span>{subjects.length} ämnen</span></div><div className="subjects">{subjects.map((subject) => <button className={`subject-card ${subject.color}`} key={subject.name} onClick={() => navigate(`/dashboard/${subject.slug}`)}><span className="subject-icon">{subject.icon}</span><span><strong>{subject.name}</strong><small>{subject.description}</small>{subject.premium && <em className="premium-badge">🔒 Premium</em>}</span><b>→</b></button>)}</div></section>
      <aside className="dashboard-side"><section className="goals-card"><div className="section-heading"><div><p className="eyebrow">DAGENS MÅL</p><h2>{finishedGoals === 3 ? "Mål klart! 🎉" : "Håll igång!"}</h2></div><strong>{finishedGoals}/3</strong></div><ProgressBar value={(finishedGoals / 3) * 100} /><div className="goal-list">{goals.map((goal) => <p key={goal.label} className={goal.done ? "done" : ""}><span>{goal.done ? "✓" : "○"}</span>{goal.label}</p>)}</div>{!goals[2].done && <button className="text-button" onClick={completeStudyGoal}>Markera 15 min plugg →</button>}{finishedGoals === 3 && <p className="goal-bonus">🎁 Dagens bonus: +50 XP</p>}</section>
      <section className="streak-card"><div><p className="eyebrow">STREAK</p><h2>🔥 {profile.streak} dagar</h2></div><div className="week" aria-label="Veckans studier">{"MTOTFLS".split("").map((day, index) => <span key={`${day}-${index}`} className={index < 6 ? "active" : ""}><small>{day}</small><i /></span>)}</div><p>Plugga idag för att hålla din streak vid liv.</p></section>
      <section className="ai-card"><span className="ai-icon">🤖</span><div><p className="eyebrow">AI-PLUGGKOMPIS</p><h2>Fastnat på något?</h2><p>Fråga mig om vad som helst i plugget.</p></div><form onSubmit={askAi}><input value={aiQuestion} onChange={(event) => setAiQuestion(event.target.value)} placeholder="Skriv din fråga..." aria-label="Fråga AI" /><button type="submit">Fråga AI →</button></form>{aiReply && <p className="ai-reply">{aiReply} <button className="text-button" onClick={() => navigate("/dashboard/matematik/algebra")}>Testa quiz</button></p>}</section>
      <section className="rewards-card"><span>🧢</span><div><p className="eyebrow">REWARDS SHOP</p><h2>Din avatar väntar</h2><p>Lås upp outfits och badges med XP.</p></div><button className="text-button" onClick={() => navigate("/profile")}>Öppna profil →</button></section></aside></div>
    <DailyQuestion />
  </main>
}

export default Dashboard
