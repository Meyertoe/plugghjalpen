import { useState } from "react"
import { Navigate, useNavigate, useParams, useSearchParams } from "react-router-dom"
import { getLevelById, getTopicBySlug } from "../data/subjects"
import { useGame } from "../hooks/useGame"

function normalise(code) {
  return code.replace(/\s+/g, "").replace(/;/g, "")
}

function WriteCode() {
  const { subjectName, topicName, levelId } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { profile, completeLevelActivity } = useGame()
  const topic = getTopicBySlug(subjectName, topicName)
  const level = getLevelById(subjectName, topicName, levelId)
  const activityId = searchParams.get("activity")
  const activity = level?.activities.find((item) => item.id === activityId && item.type === "writeCode")
  const [code, setCode] = useState("")
  const [attempts, setAttempts] = useState(0)
  const [feedback, setFeedback] = useState("")
  const [correct, setCorrect] = useState(false)
  const activities = profile.topicProgress[subjectName + "/" + topicName]?.levelActivities?.[levelId] || {}
  const activityIndex = level?.activities.findIndex((item) => item.id === activityId) ?? -1
  const previous = activityIndex > 0 ? level.activities[activityIndex - 1] : null
  if (!topic || !level || !activity || level.number > (profile.topicProgress[subjectName + "/" + topicName]?.unlockedLevel || 1) || (previous && !activities[previous.id])) return <Navigate to={`/dashboard/${subjectName}/${topicName}/level/${levelId}`} replace />
  const check = () => {
    const isValid = activity.data.accepted.some((answer) => normalise(answer) === normalise(code))
    if (isValid) { setCorrect(true); setFeedback(activity.data.explanation); return }
    const nextAttempts = attempts + 1
    setAttempts(nextAttempts)
    setFeedback(activity.data.hints[Math.min(nextAttempts - 1, activity.data.hints.length - 1)])
  }
  const finish = () => { completeLevelActivity(subjectName, topicName, levelId, activityId, { score: 100, xp: activity.data.xp || 35 }); navigate(`/dashboard/${subjectName}/${topicName}/summary/${levelId}/${activityId}`, { state: { xp: activity.data.xp || 35 } }) }
  return <main className="app-page game-page code-page"><header className="simple-topbar"><button className="brand" onClick={() => navigate(`/dashboard/${subjectName}/${topicName}/level/${levelId}`)}>← <span>Till nivårundan</span></button><span>💻 Skriv koden</span></header><section className="game-header"><p className="eyebrow">SKRIV SJÄLV</p><h1>{activity.data.prompt}</h1><p>Din kod körs inte — den kontrolleras bara mot godkända lösningar.</p></section><section className="code-game-card"><textarea className="code-editor" value={code} disabled={correct} onChange={(event) => setCode(event.target.value)} placeholder={activity.data.placeholder} spellCheck="false" /><button className="primary-button" disabled={!code.trim() || correct} onClick={check}>Kontrollera kod →</button>{feedback && <div className={correct ? "code-feedback correct" : "code-feedback"}><p>{feedback}</p>{correct && <button className="primary-button" onClick={finish}>Fortsätt →</button>}</div>}</section></main>
}

export default WriteCode
