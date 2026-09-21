import { Navigate, useParams, useNavigate } from "react-router-dom"
import { getSubjectBySlug } from "../data/subjects"
import { useGame } from "../hooks/useGame"

function Subject() {
  const { subjectName } = useParams()
  const navigate = useNavigate()
  const { profile } = useGame()
  const subject = getSubjectBySlug(subjectName)

  if (!subject) return <Navigate to="/dashboard" replace />

  return <main className="app-page subject-page">
    <header className="simple-topbar"><button className="brand" onClick={() => navigate("/dashboard")}>← <span>Till dashboard</span></button><span>⭐ {profile.totalXp.toLocaleString("sv-SE")} XP</span></header>
    <section className="subject-hero"><span className="subject-hero-icon">{subject.icon}</span><div><p className="eyebrow">ÄMNE</p><h1>{subject.name}</h1><p>Välj ett område och börja träna i din egen takt.</p></div></section>
    <section className="content-section"><div className="section-heading"><div><p className="eyebrow">ÖVNINGSOMRÅDEN</p><h2>Vad vill du träna på?</h2></div><span>{subject.topics.length} områden</span></div><div className="topic-grid">{subject.topics.map((topic) => <button className="topic-card" key={topic.slug} onClick={() => navigate(`/dashboard/${subject.slug}/${topic.slug}`)}><span>{topic.icon}</span><div><h3>{topic.name}</h3><p>{topic.description}</p><small>{topic.lessons} övningar</small></div><b>→</b></button>)}</div></section>
  </main>
}

export default Subject
