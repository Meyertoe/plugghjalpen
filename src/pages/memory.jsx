import { useState } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getLevelById, getTopicBySlug } from "../data/subjects"
import { useGame } from "../hooks/useGame"
import ProgressBar from "../components/progressBar"

function FindRight() {
  const { subjectName, topicName, levelId } = useParams()
  const navigate = useNavigate()
  const { profile, awardXp, recordLevelActivity } = useGame()
  const topic = getTopicBySlug(subjectName, topicName)
  const level = getLevelById(subjectName, topicName, levelId)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [combo, setCombo] = useState(0)
  const [bestCombo, setBestCombo] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [feedback, setFeedback] = useState("Välj svaret som bäst förklarar uttrycket.")
  const activities = profile.topicProgress[subjectName + "/" + topicName]?.levelActivities?.[levelId] || {}
  if (!topic || !level || level.number > (profile.topicProgress[subjectName + "/" + topicName]?.unlockedLevel || 1) || !activities.quiz) return <Navigate to={"/dashboard/" + subjectName + "/" + topicName + "/level/" + levelId} replace />
  const questions = level.findRight
  const question = questions[currentQuestion]

  const chooseAnswer = (option) => {
    if (selectedAnswer) return
    const correct = option === question.answer
    setSelectedAnswer({ option, correct })
    if (correct) {
      const nextCombo = combo + 1
      setCombo(nextCombo)
      setBestCombo((value) => Math.max(value, nextCombo))
      setCorrectAnswers((value) => value + 1)
      setFeedback(nextCombo > 1 ? "🔥 Combo x" + nextCombo + "! +10 XP" : "✓ Rätt svar! +10 XP")
      window.setTimeout(() => {
        if (currentQuestion === questions.length - 1) return
        setCurrentQuestion((value) => value + 1)
        setSelectedAnswer(null)
        setFeedback("Nästa samband — du klarar det!")
      }, 650)
    } else {
      setCombo(0)
      setFeedback("Inte riktigt — prova ett annat alternativ.")
      window.setTimeout(() => { setSelectedAnswer(null); setFeedback("Försök igen och tänk på sambandet.") }, 650)
    }
  }

  const completeGame = correctAnswers === questions.length
  const score = Math.round((correctAnswers / questions.length) * 100)
  const complete = () => { awardXp(30); recordLevelActivity(subjectName, topicName, levelId, "memory", { score, xp: 30 }); navigate("/dashboard/" + subjectName + "/" + topicName + "/matching/" + levelId) }

  return <main className="app-page game-page find-right-page"><header className="simple-topbar"><button className="brand" onClick={() => navigate("/dashboard/" + subjectName + "/" + topicName + "/level/" + levelId)}>← <span>Till nivårundan</span></button><span>🧠 Hitta rätt</span></header><section className="game-header"><p className="eyebrow">REPETERA SMART</p><h1>Hitta rätt svar</h1><p>{feedback}</p><div className="memory-scoreboard"><span>✨ {correctAnswers}/{questions.length} rätt</span><span className={combo > 1 ? "combo-live" : ""}>🔥 Combo {combo}</span></div><ProgressBar value={(correctAnswers / questions.length) * 100} /></section>{!completeGame && <section className="find-right-card"><span>🧩</span><p className="eyebrow">FRÅGA {currentQuestion + 1} AV {questions.length}</p><h2>{question.prompt}</h2><div className="find-right-options">{question.options.map((option) => <button className={(selectedAnswer?.option === option ? (selectedAnswer.correct ? "correct" : "incorrect") : "")} key={option} onClick={() => chooseAnswer(option)}>{option}{selectedAnswer?.option === option && <b>{selectedAnswer.correct ? "✓" : "×"}</b>}</button>)}</div></section>}{completeGame && <section className="game-success"><h2>🎯 Du hittade alla rätta svar!</h2><p>{score}% rätt · Bästa combo: {bestCombo} · +30 XP</p><button className="primary-button" onClick={complete}>Fortsätt till Para ihop →</button></section>}</main>
}

export default FindRight
