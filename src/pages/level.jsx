import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getLevelById, getSubjectBySlug, getTopicBySlug } from "../data/subjects"
import { useGame } from "../hooks/useGame"
import ProgressBar from "../components/progressBar"

function Level() {
  const { subjectName, topicName, levelId } = useParams()
  const navigate = useNavigate()
  const { profile } = useGame()
  const subject = getSubjectBySlug(subjectName)
  const topic = getTopicBySlug(subjectName, topicName)
  const level = getLevelById(subjectName, topicName, levelId)
  const progress = profile.topicProgress[subjectName + "/" + topicName] || { unlockedLevel: 1, levelActivities: {} }
  if (!subject || !topic || !level || level.number > progress.unlockedLevel) return <Navigate to={"/dashboard/" + subjectName + "/" + topicName} replace />
  const activities = progress.levelActivities?.[levelId] || {}
  const isComplete = (activity) => Boolean(activities[activity.id] || activities[activity.type])
  const completedCount = level.activities.filter(isComplete).length
  const nextActivity = level.activities.find((activity) => !isComplete(activity))
  const startActivity = (activity) => navigate("/dashboard/" + subjectName + "/" + topicName + "/activity/" + levelId + "/" + activity.id)

  return <main className="app-page level-page"><header className="simple-topbar"><button className="brand" onClick={() => navigate("/dashboard/" + subjectName + "/" + topicName)}>← <span>Till {topic.name}</span></button><span>Nivå {level.number}</span></header><section className="level-hero"><span>{topic.icon}</span><div><p className="eyebrow">{subject.name.toUpperCase()} · {topic.name.toUpperCase()}</p><h1>Nivå {level.number}: {level.title}</h1><p>{level.description}</p></div><div><strong>{completedCount}/{level.activities.length}</strong><small>steg klara</small><ProgressBar value={(completedCount / level.activities.length) * 100} /></div></section><section className="journey-card"><p className="eyebrow">DIN STUDIEROND</p><h2>Följ resan steg för steg</h2><div className="journey-steps">{level.activities.map((activity, index) => { const done = isComplete(activity); const available = index === 0 || isComplete(level.activities[index - 1]); return <button key={activity.id} className={done ? "journey-step done" : available ? "journey-step current" : "journey-step"} disabled={!available} onClick={() => startActivity(activity)}><span>{done ? "✓" : activity.icon}</span><div><strong>{activity.title}</strong><p>{done ? "Klar!" : activity.description}</p></div><b>{done ? "✓" : available ? "Starta →" : "🔒"}</b></button> })}</div>{nextActivity && <button className="primary-button continue-button" onClick={() => startActivity(nextActivity)}>Fortsätt: {nextActivity.title} →</button>}</section></main>
}

export default Level
