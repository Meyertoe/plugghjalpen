import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom"
import { getLevelById, getTopicBySlug } from "../data/subjects"
import { useGame } from "../hooks/useGame"

function ActivitySummary() {
  const { subjectName, topicName, levelId, activityId } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const { profile } = useGame()
  const topic = getTopicBySlug(subjectName, topicName)
  const level = getLevelById(subjectName, topicName, levelId)
  const activity = level?.activities.find((item) => item.id === activityId)
  const result = profile.topicProgress[subjectName + "/" + topicName]?.levelActivities?.[levelId]?.[activityId] || location.state?.result || (location.state && "xp" in location.state ? { xp: location.state.xp } : null)
  if (!topic || !level || !activity || !result) return <Navigate to={`/dashboard/${subjectName}/${topicName}/level/${levelId}`} replace />
  const summary = activity.data.summary || { title: "Det här lärde du dig", points: ["Du tog ett steg vidare i " + topic.name + ".", "Du tränade på att förstå, inte bara välja ett svar."] }
  const next = level.activities[level.activities.findIndex((item) => item.id === activityId) + 1]
  const xp = location.state?.xp ?? result.xp ?? 0
  return <main className="results-page app-page"><section className="results-card activity-summary"><div className="trophy">🎉</div><p className="eyebrow">AKTIVITET KLAR</p><h1>Bra jobbat!</h1><h2>{summary.title || "Det här lärde du dig"}</h2><ul>{summary.points.slice(0, 3).map((point) => <li key={point}>{point}</li>)}</ul>{xp > 0 && <div className="final-xp">⭐ +{xp} XP</div>}<button className="primary-button" onClick={() => navigate(next ? `/dashboard/${subjectName}/${topicName}/activity/${levelId}/${next.id}` : `/dashboard/${subjectName}/${topicName}/level/${levelId}`)}>Fortsätt →</button></section></main>
}

export default ActivitySummary
