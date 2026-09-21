import { useState } from "react"
import { Navigate, useNavigate, useParams, useSearchParams } from "react-router-dom"
import { getLevelById, getTopicBySlug } from "../data/subjects"
import { useGame } from "../hooks/useGame"
import AiHint from "../components/aiHint"

function SolveYourself() {
  const { subjectName, topicName, levelId } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { profile, completeLevelActivity } = useGame()
  const topic = getTopicBySlug(subjectName, topicName)
  const level = getLevelById(subjectName, topicName, levelId)
  const activityId = searchParams.get("activity")
  const activity = level?.activities.find((item) => item.id === activityId && item.type === "solveYourself")
  const [answer, setAnswer] = useState("")
  const [attempts, setAttempts] = useState(0)
  const [feedback, setFeedback] = useState("")
  const [hintIndex, setHintIndex] = useState(-1)
  const [isCorrect, setIsCorrect] = useState(false)
  const activities = profile.topicProgress[subjectName + "/" + topicName]?.levelActivities?.[levelId] || {}
  const activityIndex = level?.activities.findIndex((item) => item.id === activityId) ?? -1
  const previous = activityIndex > 0 ? level.activities[activityIndex - 1] : null
  if (!topic || !level || !activity || level.number > (profile.topicProgress[subjectName + "/" + topicName]?.unlockedLevel || 1) || (previous && !activities[previous.id] && !activities[previous.type])) return <Navigate to={"/dashboard/" + subjectName + "/" + topicName + "/level/" + levelId} replace />
  const data = activity.data
  const checkAnswer = (event) => {
    event.preventDefault()
    const normalized = answer.trim().replace(/^x\s*=\s*/i, "")
    if (normalized === data.answer) { setIsCorrect(true); setFeedback("✓ Rätt! Du löste den själv."); return }
    const nextAttempts = attempts + 1
    setAttempts(nextAttempts)
    setFeedback(data.attemptFeedback?.[Math.min(nextAttempts - 1, data.attemptFeedback.length - 1)] || "Ta en ledtråd och prova igen — du är nära.")
    if (nextAttempts >= 2) setHintIndex((value) => Math.min(value + 1, data.hints.length - 1))
  }
  const useHint = () => setHintIndex((value) => Math.min(value + 1, data.hints.length - 1))
  const continueToQuiz = () => { completeLevelActivity(subjectName, topicName, levelId, activityId, { score: 100, xp: data.xp || 30 }); navigate(`/dashboard/${subjectName}/${topicName}/summary/${levelId}/${activityId}`, { state: { xp: data.xp || 30 } }) }
  return <main className="app-page game-page"><header className="simple-topbar"><button className="brand" onClick={() => navigate("/dashboard/" + subjectName + "/" + topicName + "/level/" + levelId)}>← <span>Till nivårundan</span></button><span>✍️ Lös själv</span></header><section className="game-header"><p className="eyebrow">NIVÅ {level.number} · MER SJÄLVSTÄNDIGT</p><h1>{data.equation}</h1><p>🎯 {data.goal}</p></section><section className="solve-card"><p className="eyebrow">SKRIV DITT SVAR</p><form onSubmit={checkAnswer}><label>{data.answerLabel}<input value={answer} onChange={(event) => setAnswer(event.target.value)} placeholder="?" disabled={isCorrect} inputMode="numeric" autoFocus /></label><button className="primary-button" disabled={!answer.trim() || isCorrect}>Kontrollera →</button></form><AiHint context={{ subject: "Matematik", topic: topic.name, level: level.number, activityType: "solveYourself", question: data.equation + ". " + data.goal, studentAnswer: answer, previousHint: hintIndex >= 0 ? data.hints[hintIndex] : feedback }} />{feedback && <p className={isCorrect ? "solve-feedback correct" : "solve-feedback"}>{feedback}</p>}{!isCorrect && <button className="text-button hint-button" onClick={useHint}>💡 Jag behöver en ledtråd</button>}{hintIndex >= 0 && <div className="hint-card"><strong>Ledtråd {hintIndex + 1}</strong><p>{data.hints[hintIndex]}</p></div>}{isCorrect && <div className="solve-explanation"><p>{data.explanation}</p><button className="primary-button" onClick={continueToQuiz}>Fortsätt till quiz →</button></div>}</section></main>
}

export default SolveYourself
