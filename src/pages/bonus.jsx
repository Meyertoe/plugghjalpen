import { useEffect, useState } from "react"
import { Navigate, useNavigate, useParams, useSearchParams } from "react-router-dom"
import { getLevelById, getTopicBySlug } from "../data/subjects"
import { useGame } from "../hooks/useGame"
import ProgressBar from "../components/progressBar"
import AiHint from "../components/aiHint"

function Bonus() {
  const { subjectName, topicName, levelId } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { profile, completeStudyLevel } = useGame()
  const topic = getTopicBySlug(subjectName, topicName)
  const level = getLevelById(subjectName, topicName, levelId)
  const activityId = searchParams.get("activity") || "bonus-" + level?.number
  const activity = level?.activities.find((item) => item.id === activityId && item.type === "bonus")
  const bonus = activity?.data.questions || level?.bonus || []
  const bonusLength = activity?.data.questions?.length || level?.bonus?.length || 0
  const [index, setIndex] = useState(0)
  const [seconds, setSeconds] = useState(5)
  const [score, setScore] = useState(0)
  const next = (correct) => {
    const nextScore = score + (correct ? 1 : 0)
    if (index === bonusLength - 1) {
      const xp = nextScore * 15 + 50
      completeStudyLevel(subjectName, topicName, levelId, { score: nextScore, xp, activityId })
      navigate("/dashboard/" + subjectName + "/" + topicName + "/level/" + levelId + "/complete", { state: { score: nextScore, xp } })
    } else {
      setScore(nextScore)
      setIndex((value) => value + 1)
      setSeconds(5)
    }
  }

  useEffect(() => {
    if (!level) return undefined
    const countdown = window.setInterval(() => setSeconds((value) => Math.max(0, value - 1)), 1000)
    const expiry = window.setTimeout(() => next(false), 5000)
    return () => { window.clearInterval(countdown); window.clearTimeout(expiry) }
  // The countdown is intentionally reset only when the bonus moment changes.
  // oxlint-disable-next-line react-hooks/exhaustive-deps
  }, [index, level])

  const activities = profile.topicProgress[subjectName + "/" + topicName]?.levelActivities?.[levelId] || {}
  const activityIndex = level?.activities.findIndex((item) => item.id === activityId) ?? -1
  const previousActivity = activityIndex > 0 ? level.activities[activityIndex - 1] : null
  const previousComplete = !previousActivity || activities[previousActivity.id] || activities[previousActivity.type]
  if (!topic || !level || !activity || level.number > (profile.topicProgress[subjectName + "/" + topicName]?.unlockedLevel || 1) || !previousComplete) return <Navigate to={"/dashboard/" + subjectName + "/" + topicName + "/level/" + levelId} replace />
  const item = bonus[index]
  return <main className="app-page bonus-page"><header className="simple-topbar"><button className="brand" onClick={() => navigate("/dashboard/" + subjectName + "/" + topicName + "/level/" + levelId)}>← <span>Avsluta</span></button><span>⚡ Bonusutmaning</span></header><section className="bonus-card"><p className="eyebrow">FINALEN · {item.type.toUpperCase()}</p><div className="bonus-meta"><span>Moment {index + 1} / {bonus.length}</span><strong>⏱ {seconds}.0 s</strong></div><ProgressBar value={((index + 1) / bonus.length) * 100} /><h1>{item.question}</h1><div className="answers">{item.options.map((option, optionIndex) => <button key={option} onClick={() => next(option === item.answer)}><span>{String.fromCharCode(65 + optionIndex)}</span>{option}</button>)}</div><AiHint context={{ subject: "Matematik", topic: topic.name, level: level.number, activityType: "bonus", question: item.question, studentAnswer: "", previousHint: "" }} /><p>⚡ Varje rätt svar ger 15 XP. Du får +50 XP när rundan är klar.</p></section></main>
}

export default Bonus
