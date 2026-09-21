import { useLocation, useNavigate, useParams } from "react-router-dom"
import { getLevelById, getTopicBySlug } from "../data/subjects"
import { useGame } from "../hooks/useGame"

function LevelComplete() {
  const { subjectName, topicName, levelId } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const { profile } = useGame()
  const topic = getTopicBySlug(subjectName, topicName)
  const level = getLevelById(subjectName, topicName, levelId)
  if (!topic || !level) return null
  const activities = profile.topicProgress[subjectName + "/" + topicName]?.levelActivities?.[levelId] || {}
  const result = location.state || activities["bonus-" + level.number] || activities.bonus || { score: 0, xp: 0 }
  const nextLevel = topic.levels.find((item) => item.number === level.number + 1)
  const stats = [
    ...level.activities.filter((activity) => activity.type !== "lesson" && activity.type !== "bonus").map((activity) => [activity.title, activities[activity.id]?.score || 0, "%"]),
    ["Bonus", result.score || 0, "/5"],
  ]
  return <main className="results-page app-page"><section className="results-card level-complete"><div className="trophy">🎉</div><p className="eyebrow">NIVÅ {level.number} KLAR</p><h1>{topic.name}</h1><p className="result-summary">Du har slutfört hela studieronden. Snyggt jobbat!</p><div className="round-stats">{stats.map(([label, value, suffix]) => <div key={label}><span>{label}</span><strong>{value}{suffix}</strong></div>)}</div><div className="final-xp">⭐ +{result.xp || 0} XP</div>{nextLevel ? <p className="level-unlocked">🔓 Nivå {nextLevel.number} upplåst! Nu blir frågorna svårare.</p> : <p className="level-unlocked">🏆 Du har klarat alla nivåer i området!</p>}<div className="result-actions"><button className="secondary-button" onClick={() => navigate("/dashboard/" + subjectName + "/" + topicName)}>Till nivåkartan</button>{nextLevel && <button className="primary-button" onClick={() => navigate("/dashboard/" + subjectName + "/" + topicName + "/level/" + nextLevel.id)}>Fortsätt till nivå {nextLevel.number} →</button>}</div></section></main>
}

export default LevelComplete
