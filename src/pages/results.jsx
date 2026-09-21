import { useLocation, useNavigate, useParams } from "react-router-dom"
import { getTopicBySlug } from "../data/subjects"

function Results() {
  const navigate = useNavigate()
  const location = useLocation()
  const { subjectName, topicName, levelId } = useParams()
  const topic = getTopicBySlug(subjectName, topicName)
  const result = location.state || { score: 0, totalXp: 0, totalSeconds: 0, questionCount: 3 }
  const accuracy = Math.round((result.score / result.questionCount) * 100)
  const minutes = Math.floor(result.totalSeconds / 60)
  const seconds = result.totalSeconds % 60

  return <main className="results-page app-page"><section className="results-card"><div className="trophy">🏆</div><p className="eyebrow">QUIZ KLART · NIVÅ {result.levelNumber || 1}</p><h1>{result.passed ? "Nivå klar! 🎉" : "Bra kämpat!"}</h1><p className="result-summary">Du klarade <strong>{result.score} av {result.questionCount}</strong> frågor i {topic?.name || topicName}.</p><div className="result-score"><strong>{accuracy}%</strong><span>accuracy</span></div><div className="result-stats"><div><span>✓</span><strong>{result.score}</strong><small>Rätt</small></div><div><span>✕</span><strong>{result.questionCount - result.score}</strong><small>Fel</small></div><div><span>⏱</span><strong>{minutes}:{String(seconds).padStart(2, "0")}</strong><small>Tid</small></div></div><div className="final-xp">⭐ +{result.totalXp} XP</div>{result.unlockedNext && <p className="level-unlocked">🔓 Nästa nivå upplåst! Nu blir frågorna svårare.</p>}{!result.passed && <p className="level-unlocked retry">Du behöver minst 80 % rätt för att låsa upp nästa nivå.</p>}{accuracy === 100 && <p className="celebration">🔥 Perfekt runda — din streak är säker!</p>}<div className="result-actions"><button className="secondary-button" onClick={() => navigate("/dashboard/" + subjectName + "/" + topicName + "/quiz/" + levelId)}>Försök igen</button><button className="primary-button" onClick={() => navigate("/dashboard/" + subjectName + "/" + topicName)}>Till området →</button></div></section></main>
}

export default Results
