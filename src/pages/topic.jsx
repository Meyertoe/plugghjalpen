import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getSubjectBySlug, getTopicBySlug } from "../data/subjects"
import { useGame } from "../hooks/useGame"
import ProgressBar from "../components/progressBar"

function Topic() {
  const { subjectName, topicName } = useParams()
  const navigate = useNavigate()
  const { profile } = useGame()
  const subject = getSubjectBySlug(subjectName)
  const topic = getTopicBySlug(subjectName, topicName)

  if (!subject || !topic) return <Navigate to="/dashboard" replace />

  const progressKey = subject.slug + "/" + topic.slug
  const progress = profile.topicProgress[progressKey] || { unlockedLevel: 1, completedLevels: [], xp: 0, bestAccuracy: 0 }
  const selectedLevel = topic.levels.find((level) => level.number === Math.min(progress.unlockedLevel, topic.levels.length)) || topic.levels[0]

  const openActivity = () => navigate("/dashboard/" + subject.slug + "/" + topic.slug + "/level/" + selectedLevel.id)

  return <main className="app-page topic-page">
    <header className="simple-topbar"><button className="brand" onClick={() => navigate("/dashboard/" + subject.slug)}>← <span>Till {subject.name}</span></button><span>⭐ {progress.xp} XP i {topic.name}</span></header>
    <section className="topic-hero"><span>{topic.icon}</span><div><p className="eyebrow">{subject.name.toUpperCase()} · OMRÅDE</p><h1>{topic.name}</h1><p>Lär dig {topic.name.toLowerCase()} steg för steg och utvecklas genom olika nivåer.</p></div><div className="topic-metrics"><strong>Nivå {selectedLevel.number}</strong><span>{progress.bestAccuracy}% bästa resultat</span></div></section>
    <section className="profile-section level-overview"><div className="section-heading"><div><p className="eyebrow">DIN PROGRESSION</p><h2>Välj din nivå</h2></div><span>{progress.completedLevels.length}/{topic.levels.length} klara</span></div><div className="level-list">{topic.levels.map((level) => { const isUnlocked = level.number <= progress.unlockedLevel; const isCompleted = progress.completedLevels.includes(level.number); return <article className={isUnlocked ? "topic-level unlocked" : "topic-level"} key={level.id}><span className="level-state">{isCompleted ? "✓" : isUnlocked ? "●" : "🔒"}</span><div><strong>Nivå {level.number} · {level.title}</strong><p>{isCompleted ? "Klar — snyggt jobbat!" : isUnlocked ? level.description : "Klara föregående nivå med minst 80 % rätt."}</p>{isUnlocked && <ProgressBar value={isCompleted ? 100 : level.number === selectedLevel.number ? 55 : 0} />}</div><em>{isCompleted ? "Klar" : isUnlocked ? "Pågår" : "Låst"}</em></article> })}</div></section>
    <section className="topic-activities"><div className="section-heading"><div><p className="eyebrow">DIN NÄSTA STUDIEROND</p><h2>Lär dig → träna → klara nivån</h2></div><span>{selectedLevel.activities.length} steg</span></div><div className="activity-grid">{selectedLevel.activities.map((activity, index) => <article className={"activity-card " + activity.type} key={activity.id}><span>{activity.icon}</span><div><h3>{index + 1}. {activity.title}</h3><p>{activity.description}</p></div></article>)}</div><button className="primary-button continue-button" onClick={openActivity}>Fortsätt där du slutade →</button></section>
  </main>
}

export default Topic
