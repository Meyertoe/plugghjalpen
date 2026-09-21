import { Navigate, useNavigate, useParams, useSearchParams } from "react-router-dom"
import { getSubjectBySlug, getTopicBySlug, getLevelById } from "../data/subjects"
import { useGame } from "../hooks/useGame"

function Activity() {
  const { subjectName, topicName, activityName, levelId } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { profile, recordLevelActivity } = useGame()
  const subject = getSubjectBySlug(subjectName)
  const topic = getTopicBySlug(subjectName, topicName)
  const level = getLevelById(subjectName, topicName, levelId)
  const unlockedLevel = profile.topicProgress[subjectName + "/" + topicName]?.unlockedLevel || 1
  const activityId = searchParams.get("activity") || "lesson-" + level?.number
  const activity = level?.activities.find((item) => item.id === activityId && item.type === "lesson")
  if (!subject || !topic || !level || activityName !== "learn" || !activity || level.number > unlockedLevel) return <Navigate to={"/dashboard/" + subjectName + "/" + topicName} replace />
  return <main className="app-page activity-page"><header className="simple-topbar"><button className="brand" onClick={() => navigate("/dashboard/" + subjectName + "/" + topicName + "/level/" + levelId)}>← <span>Till nivårundan</span></button><span>Nivå {level.number}</span></header><section className="activity-panel"><span className="activity-big-icon">📖</span><p className="eyebrow">LÄR DIG · NIVÅ {level.number}</p><h1>{activity.data.headline}</h1><p>{activity.data.explanation}</p><div className="study-cards">{activity.data.examples.map((example) => <article key={example.label}><strong>{example.label}</strong><p>{example.answer}</p></article>)}</div><button className="primary-button" onClick={() => { recordLevelActivity(subjectName, topicName, levelId, activityId, { score: 100, xp: 0 }); navigate(`/dashboard/${subjectName}/${topicName}/summary/${levelId}/${activityId}`, { state: { xp: 0 } }) }}>Jag är redo →</button></section></main>
}

export default Activity
