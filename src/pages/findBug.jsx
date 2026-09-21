import { useState } from "react"
import { Navigate, useNavigate, useParams, useSearchParams } from "react-router-dom"
import { getLevelById, getTopicBySlug } from "../data/subjects"
import { useGame } from "../hooks/useGame"

function FindBug() {
  const { subjectName, topicName, levelId } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { profile, completeLevelActivity } = useGame()
  const topic = getTopicBySlug(subjectName, topicName)
  const level = getLevelById(subjectName, topicName, levelId)
  const activityId = searchParams.get("activity")
  const activity = level?.activities.find((item) => item.id === activityId && item.type === "findBug")
  const [selected, setSelected] = useState(null)
  const [attempts, setAttempts] = useState(0)
  const [feedback, setFeedback] = useState("")
  const activities = profile.topicProgress[subjectName + "/" + topicName]?.levelActivities?.[levelId] || {}
  const activityIndex = level?.activities.findIndex((item) => item.id === activityId) ?? -1
  const previous = activityIndex > 0 ? level.activities[activityIndex - 1] : null
  if (!topic || !level || !activity || level.number > (profile.topicProgress[subjectName + "/" + topicName]?.unlockedLevel || 1) || (previous && !activities[previous.id])) return <Navigate to={`/dashboard/${subjectName}/${topicName}/level/${levelId}`} replace />
  const correct = selected === activity.data.bugLine
  const choose = (line) => {
    if (correct) return
    setSelected(line.id)
    if (line.id === activity.data.bugLine) setFeedback(activity.data.explanation)
    else { const nextAttempts = attempts + 1; setAttempts(nextAttempts); setFeedback(nextAttempts > 1 ? activity.data.hint : "Den raden kan fungera. Följ vad programmet ska skriva i varje fall.") }
  }
  const finish = () => { completeLevelActivity(subjectName, topicName, levelId, activityId, { score: 100, xp: activity.data.xp || 30 }); navigate(`/dashboard/${subjectName}/${topicName}/summary/${levelId}/${activityId}`, { state: { xp: activity.data.xp || 30 } }) }
  return <main className="app-page game-page code-page"><header className="simple-topbar"><button className="brand" onClick={() => navigate(`/dashboard/${subjectName}/${topicName}/level/${levelId}`)}>← <span>Till nivårundan</span></button><span>🐛 Hitta buggen</span></header><section className="game-header"><p className="eyebrow">LÄS KODEN</p><h1>{activity.data.prompt}</h1><p>Tryck på raden där logiken blir fel.</p></section><section className="code-game-card"><div className="code-lines">{activity.data.lines.map((line, index) => <button key={line.id} className={`${selected === line.id ? correct ? "correct" : "incorrect" : ""}`} disabled={correct} onClick={() => choose(line)}><span>{index + 1}</span><code>{line.text || " "}</code></button>)}</div>{feedback && <div className={correct ? "code-feedback correct" : "code-feedback"}><p>{feedback}</p>{correct && <button className="primary-button" onClick={finish}>Fortsätt →</button>}</div>}</section></main>
}

export default FindBug
