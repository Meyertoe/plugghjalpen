import { useState } from "react"
import { Navigate, useNavigate, useParams, useSearchParams } from "react-router-dom"
import { getLevelById, getTopicBySlug } from "../data/subjects"
import { useGame } from "../hooks/useGame"

function FillCode() {
  const { subjectName, topicName, levelId } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { profile, completeLevelActivity } = useGame()
  const topic = getTopicBySlug(subjectName, topicName)
  const level = getLevelById(subjectName, topicName, levelId)
  const activityId = searchParams.get("activity")
  const activity = level?.activities.find((item) => item.id === activityId && item.type === "fillCode")
  const [selected, setSelected] = useState("")
  const [feedback, setFeedback] = useState("")
  const activities = profile.topicProgress[subjectName + "/" + topicName]?.levelActivities?.[levelId] || {}
  const activityIndex = level?.activities.findIndex((item) => item.id === activityId) ?? -1
  const previous = activityIndex > 0 ? level.activities[activityIndex - 1] : null
  if (!topic || !level || !activity || level.number > (profile.topicProgress[subjectName + "/" + topicName]?.unlockedLevel || 1) || (previous && !activities[previous.id])) return <Navigate to={`/dashboard/${subjectName}/${topicName}/level/${levelId}`} replace />
  const correct = selected === activity.data.answer
  const choose = (option) => setSelected(option)
  const check = () => setFeedback(correct ? activity.data.explanation : activity.data.hint)
  const finish = () => { completeLevelActivity(subjectName, topicName, levelId, activityId, { score: 100, xp: activity.data.xp || 25 }); navigate(`/dashboard/${subjectName}/${topicName}/summary/${levelId}/${activityId}`, { state: { xp: activity.data.xp || 25 } }) }
  return <main className="app-page game-page code-page"><header className="simple-topbar"><button className="brand" onClick={() => navigate(`/dashboard/${subjectName}/${topicName}/level/${levelId}`)}>← <span>Till nivårundan</span></button><span>🧩 Fyll i koden</span></header><section className="game-header"><p className="eyebrow">EN LUCKA I TAGET</p><h1>{activity.data.prompt}</h1></section><section className="code-game-card"><pre><code>{activity.data.before}<mark>{selected || " ___ "}</mark>{activity.data.after}</code></pre><div className="code-options">{activity.data.options.map((option) => <button className={selected === option ? "selected" : ""} key={option} onClick={() => choose(option)}><code>{option}</code></button>)}</div><button className="primary-button" disabled={!selected || Boolean(feedback)} onClick={check}>Kontrollera →</button>{feedback && <div className={correct ? "code-feedback correct" : "code-feedback"}><p>{feedback}</p>{correct ? <button className="primary-button" onClick={finish}>Fortsätt →</button> : <button className="text-button" onClick={() => { setSelected(""); setFeedback("") }}>Försök igen</button>}</div>}</section></main>
}

export default FillCode
