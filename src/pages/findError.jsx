import { useState } from "react"
import { Navigate, useNavigate, useParams, useSearchParams } from "react-router-dom"
import { getLevelById, getTopicBySlug } from "../data/subjects"
import { useGame } from "../hooks/useGame"
import AiHint from "../components/aiHint"

function FindError() {
  const { subjectName, topicName, levelId } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { profile, completeLevelActivity } = useGame()
  const topic = getTopicBySlug(subjectName, topicName)
  const level = getLevelById(subjectName, topicName, levelId)
  const activityId = searchParams.get("activity")
  const activity = level?.activities.find((item) => item.id === activityId && item.type === "findError")
  const [attempts, setAttempts] = useState(0)
  const [selected, setSelected] = useState(null)
  const [feedback, setFeedback] = useState("")
  const activities = profile.topicProgress[subjectName + "/" + topicName]?.levelActivities?.[levelId] || {}
  const activityIndex = level?.activities.findIndex((item) => item.id === activityId) ?? -1
  const previous = activityIndex > 0 ? level.activities[activityIndex - 1] : null
  if (!topic || !level || !activity || level.number > (profile.topicProgress[subjectName + "/" + topicName]?.unlockedLevel || 1) || (previous && !activities[previous.id] && !activities[previous.type])) return <Navigate to={"/dashboard/" + subjectName + "/" + topicName + "/level/" + levelId} replace />
  const data = activity.data
  const correctId = data.steps.find((step) => !step.correct)?.id
  const correct = selected === correctId
  const selectStep = (step) => {
    if (correct) return
    setSelected(step.id)
    if (!step.correct) setFeedback(data.explanation)
    else { const nextAttempts = attempts + 1; setAttempts(nextAttempts); setFeedback(nextAttempts > 1 ? data.hint : "Det steget kan fungera. Titta på hur parentesen öppnas.") }
  }
  const continueToQuiz = () => { completeLevelActivity(subjectName, topicName, levelId, activityId, { score: 100, xp: data.xp || 35 }); navigate(`/dashboard/${subjectName}/${topicName}/summary/${levelId}/${activityId}`, { state: { xp: data.xp || 35 } }) }
  return <main className="app-page game-page"><header className="simple-topbar"><button className="brand" onClick={() => navigate("/dashboard/" + subjectName + "/" + topicName + "/level/" + levelId)}>← <span>Till nivårundan</span></button><span>🐛 Hitta felet</span></header><section className="game-header"><p className="eyebrow">NIVÅ {level.number} · GRANSKA LÖSNINGEN</p><h1>{data.equation}</h1><p>{data.prompt}</p></section><section className="error-card"><div className="error-steps">{data.steps.map((step, index) => <button key={step.id} className={(selected === step.id ? (correct ? "correct" : "incorrect") : "")} disabled={correct} onClick={() => selectStep(step)}><span>Steg {index + 1}</span><code>{step.text}</code></button>)}</div><AiHint context={{ subject: "Matematik", topic: topic.name, level: level.number, activityType: "findError", question: data.prompt + " " + data.steps.map((step) => step.text).join(" → "), studentAnswer: selected || "", previousHint: feedback }} />{feedback && <div className={correct ? "error-feedback correct" : "error-feedback"}><p>{feedback}</p>{correct && <button className="primary-button" onClick={continueToQuiz}>Fortsätt till quiz →</button>}</div>}</section></main>
}

export default FindError
