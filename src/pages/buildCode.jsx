import { useState } from "react"
import { Navigate, useNavigate, useParams, useSearchParams } from "react-router-dom"
import { getLevelById, getTopicBySlug } from "../data/subjects"
import { useGame } from "../hooks/useGame"

function BuildCode() {
  const { subjectName, topicName, levelId } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { profile, completeLevelActivity } = useGame()
  const topic = getTopicBySlug(subjectName, topicName)
  const level = getLevelById(subjectName, topicName, levelId)
  const activityId = searchParams.get("activity")
  const activity = level?.activities.find((item) => item.id === activityId && item.type === "buildCode")
  const [chosen, setChosen] = useState([])
  const [feedback, setFeedback] = useState("")
  const [correct, setCorrect] = useState(false)
  const blocks = activity?.data.blocks || []
  const activities = profile.topicProgress[subjectName + "/" + topicName]?.levelActivities?.[levelId] || {}
  const activityIndex = level?.activities.findIndex((item) => item.id === activityId) ?? -1
  const previous = activityIndex > 0 ? level.activities[activityIndex - 1] : null
  if (!topic || !level || !activity || level.number > (profile.topicProgress[subjectName + "/" + topicName]?.unlockedLevel || 1) || (previous && !activities[previous.id])) return <Navigate to={`/dashboard/${subjectName}/${topicName}/level/${levelId}`} replace />
  const addBlock = (block) => { if (!correct && !chosen.includes(block)) setChosen((value) => [...value, block]) }
  const check = () => {
    if (chosen.join(" ") === activity.data.answer.join(" ")) { setCorrect(true); setFeedback(activity.data.explanation) }
    else setFeedback(activity.data.hint)
  }
  const finish = () => { completeLevelActivity(subjectName, topicName, levelId, activityId, { score: 100, xp: activity.data.xp || 30 }); navigate(`/dashboard/${subjectName}/${topicName}/summary/${levelId}/${activityId}`, { state: { xp: activity.data.xp || 30 } }) }
  return <main className="app-page game-page code-page"><header className="simple-topbar"><button className="brand" onClick={() => navigate(`/dashboard/${subjectName}/${topicName}/level/${levelId}`)}>← <span>Till nivårundan</span></button><span>🧩 Bygg koden</span></header><section className="game-header"><p className="eyebrow">BYGG RADEN</p><h1>{activity.data.prompt}</h1></section><section className="code-game-card"><pre className="code-builder-output"><code>{chosen.length ? chosen.join(" ") : "// Välj block i rätt ordning"}</code></pre><div className="code-blocks">{blocks.map((block) => <button key={block} disabled={chosen.includes(block) || correct} onClick={() => addBlock(block)}><code>{block}</code></button>)}</div><div className="build-actions"><button className="text-button" onClick={() => { setChosen([]); setFeedback("") }}>Rensa</button><button className="primary-button" disabled={!chosen.length || correct} onClick={check}>Kontrollera →</button></div>{feedback && <div className={correct ? "code-feedback correct" : "code-feedback"}><p>{feedback}</p>{correct && <button className="primary-button" onClick={finish}>Fortsätt →</button>}</div>}</section></main>
}

export default BuildCode
