import { useState } from "react"
import { Navigate, useNavigate, useParams, useSearchParams } from "react-router-dom"
import { getLevelById, getTopicBySlug } from "../data/subjects"
import { useGame } from "../hooks/useGame"
import ProgressBar from "../components/progressBar"
import UnderstandingHelp from "../components/understandingHelp"

function PredictOutput() {
  const { subjectName, topicName, levelId } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { profile, completeLevelActivity, recordLearningSignal } = useGame()
  const topic = getTopicBySlug(subjectName, topicName)
  const level = getLevelById(subjectName, topicName, levelId)
  const activityId = searchParams.get("activity")
  const activity = level?.activities.find((item) => item.id === activityId && item.type === "predictOutput")
  const [index, setIndex] = useState(0)
  const [feedback, setFeedback] = useState("")
  const [correct, setCorrect] = useState(false)
  const [attempts, setAttempts] = useState(0)
  const activities = profile.topicProgress[subjectName + "/" + topicName]?.levelActivities?.[levelId] || {}
  const activityIndex = level?.activities.findIndex((item) => item.id === activityId) ?? -1
  const previous = activityIndex > 0 ? level.activities[activityIndex - 1] : null
  if (!topic || !level || !activity || level.number > (profile.topicProgress[subjectName + "/" + topicName]?.unlockedLevel || 1) || (previous && !activities[previous.id])) return <Navigate to={`/dashboard/${subjectName}/${topicName}/level/${levelId}`} replace />
  const item = activity.data.items[index]
  const choose = (option) => {
    if (correct) return
    if (option === item.answer) { setCorrect(true); setFeedback(item.explanation); recordLearningSignal(subjectName, topicName, levelId, activityId, item.id || `item-${index + 1}`, { attempts, solvedOriginal: true }) }
    else { const nextAttempts = attempts + 1; setAttempts(nextAttempts); setFeedback(item.hint); recordLearningSignal(subjectName, topicName, levelId, activityId, item.id || `item-${index + 1}`, { attempts: nextAttempts, rescueUsed: Boolean(item.help && nextAttempts >= item.help.rescue.triggerAfterAttempts), helpUsed: Boolean(item.help && nextAttempts >= item.help.rescue.triggerAfterAttempts), helpLevel: item.help && nextAttempts >= item.help.rescue.triggerAfterAttempts ? 3 : 0 }) }
  }
  const next = () => {
    if (index < activity.data.items.length - 1) { setIndex((value) => value + 1); setFeedback(""); setCorrect(false); setAttempts(0); return }
    completeLevelActivity(subjectName, topicName, levelId, activityId, { score: 100, xp: activity.data.xp || 25 })
    navigate(`/dashboard/${subjectName}/${topicName}/summary/${levelId}/${activityId}`, { state: { xp: activity.data.xp || 25 } })
  }
  return <main className="app-page game-page code-page"><header className="simple-topbar"><button className="brand" onClick={() => navigate(`/dashboard/${subjectName}/${topicName}/level/${levelId}`)}>← <span>Till nivårundan</span></button><span>▶️ Vad händer?</span></header><section className="game-header"><p className="eyebrow">KÖR KODEN I HUVUDET · {index + 1} AV {activity.data.items.length}</p><h1>Vad skriver programmet ut?</h1><ProgressBar value={((index + 1) / activity.data.items.length) * 100} /></section><section className="code-game-card"><pre><code>{item.code}</code></pre><p className="code-prompt">{item.prompt || "Följ variablerna rad för rad."}</p><div className="answers">{item.options.map((option, optionIndex) => <button key={option} className={correct && option === item.answer ? "code-correct" : ""} disabled={correct} onClick={() => choose(option)}><span>{String.fromCharCode(65 + optionIndex)}</span>{option}</button>)}</div><UnderstandingHelp key={item.id || index} help={item.help} attempts={attempts} autoRescue={Boolean(item.help && attempts >= item.help.rescue.triggerAfterAttempts)} onUse={(signal) => recordLearningSignal(subjectName, topicName, levelId, activityId, item.id || `item-${index + 1}`, { attempts, ...signal })} onRescueComplete={() => recordLearningSignal(subjectName, topicName, levelId, activityId, item.id || `item-${index + 1}`, { attempts, rescueCompleted: true })} />{feedback && <div className={correct ? "code-feedback correct" : "code-feedback"}><p>{feedback}</p>{correct && <button className="primary-button" onClick={next}>{index === activity.data.items.length - 1 ? "Fortsätt →" : "Nästa kodrad →"}</button>}</div>}</section></main>
}

export default PredictOutput
