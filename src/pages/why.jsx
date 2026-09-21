import { useState } from "react"
import { Navigate, useNavigate, useParams, useSearchParams } from "react-router-dom"
import { getLevelById, getTopicBySlug } from "../data/subjects"
import { useGame } from "../hooks/useGame"

function Why() {
  const { subjectName, topicName, levelId } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { profile, completeLevelActivity } = useGame()
  const topic = getTopicBySlug(subjectName, topicName)
  const level = getLevelById(subjectName, topicName, levelId)
  const activityId = searchParams.get("activity")
  const activity = level?.activities.find((item) => item.id === activityId && item.type === "why")
  const [attempts, setAttempts] = useState(0)
  const [selected, setSelected] = useState("")
  const [feedback, setFeedback] = useState("")
  const activities = profile.topicProgress[subjectName + "/" + topicName]?.levelActivities?.[levelId] || {}
  const activityIndex = level?.activities.findIndex((item) => item.id === activityId) ?? -1
  const previous = activityIndex > 0 ? level.activities[activityIndex - 1] : null
  if (!topic || !level || !activity || level.number > (profile.topicProgress[subjectName + "/" + topicName]?.unlockedLevel || 1) || (previous && !activities[previous.id])) return <Navigate to={`/dashboard/${subjectName}/${topicName}/level/${levelId}`} replace />
  const data = activity.data
  const isCorrect = selected === data.correctOptionId
  const choose = (option) => {
    setSelected(option.id)
    if (option.id === data.correctOptionId) setFeedback(data.explanation)
    else { const nextAttempts = attempts + 1; setAttempts(nextAttempts); setFeedback(nextAttempts > 1 ? data.hints[Math.min(nextAttempts - 1, data.hints.length - 1)] : "Inte riktigt. " + data.hints[0]) }
  }
  const finish = () => {
    completeLevelActivity(subjectName, topicName, levelId, activityId, { score: 100, xp: data.xp || 25 })
    navigate(`/dashboard/${subjectName}/${topicName}/summary/${levelId}/${activityId}`, { state: { xp: data.xp || 25 } })
  }
  return <main className="app-page game-page why-page"><header className="simple-topbar"><button className="brand" onClick={() => navigate(`/dashboard/${subjectName}/${topicName}/level/${levelId}`)}>← <span>Till nivårundan</span></button><span>🔍 Varför?</span></header><section className="game-header"><p className="eyebrow">FÖRSTÅ VARFÖR</p><h1>{data.prompt}</h1></section><section className="why-card">{data.context?.before && <pre><code>{data.context.before}</code></pre>}{data.context?.after && <><span className="why-arrow">↓</span><pre className="result"><code>{data.context.after}</code></pre></>}{data.visual && <pre className="why-visual"><code>{data.visual}</code></pre>}<div className="why-options">{data.options.map((option, index) => <button key={option.id} className={selected === option.id ? isCorrect ? "correct" : "incorrect" : ""} disabled={isCorrect} onClick={() => choose(option)}><span>{String.fromCharCode(65 + index)}</span>{option.text}</button>)}</div>{feedback && <div className={isCorrect ? "why-feedback correct" : "why-feedback"}><p>{feedback}</p>{isCorrect && <button className="primary-button" onClick={finish}>Fortsätt →</button>}</div>}</section></main>
}

export default Why
