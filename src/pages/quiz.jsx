import { useEffect, useState } from "react"
import { Navigate, useNavigate, useParams, useSearchParams } from "react-router-dom"
import ProgressBar from "../components/progressBar"
import ResultPopup from "../components/resultPopup"
import { useGame } from "../hooks/useGame"
import { getSubjectBySlug, getTopicBySlug, getLevelById } from "../data/subjects"
import AiHint from "../components/aiHint"

function Quiz() {
  const { subjectName, topicName, levelId } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { profile, awardXp, recordTopicQuiz, completeLevelActivity } = useGame()
  const subject = getSubjectBySlug(subjectName)
  const topic = getTopicBySlug(subjectName, topicName)
  const level = getLevelById(subjectName, topicName, levelId)
  const questions = level?.questions || []
  const isChallenge = searchParams.get("mode") === "challenge"
  const activityId = searchParams.get("activity") || "quiz-" + level?.number
  const activity = level?.activities.find((item) => item.id === activityId && item.type === "quiz")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [answerResult, setAnswerResult] = useState(null)
  const [score, setScore] = useState(0)
  const [totalXp, setTotalXp] = useState(0)
  const [totalSeconds, setTotalSeconds] = useState(0)
  const [fastAnswers, setFastAnswers] = useState(0)

  useEffect(() => {
    if (answerResult) return undefined
    const timer = window.setInterval(() => setSeconds((time) => time + 1), 1000)
    return () => window.clearInterval(timer)
  }, [answerResult, currentQuestion])

  const getXpForTime = (time) => {
    if (time <= 3) return 20
    if (time <= 6) return 15
    if (time <= 10) return 10
    return 5
  }

  const checkAnswer = (option) => {
    if (answerResult) return
    const isCorrect = option === questions[currentQuestion].answer
    const earnedXp = isCorrect ? getXpForTime(seconds) * (isChallenge ? 2 : 1) : 0
    setAnswerResult({ isCorrect, earnedXp, option })
    setScore((value) => value + (isCorrect ? 1 : 0))
    setTotalXp((value) => value + earnedXp)
    setTotalSeconds((value) => value + seconds)
    setFastAnswers((value) => value + (earnedXp === 20 ? 1 : 0))
  }

  const nextQuestion = () => {
    if (currentQuestion === questions.length - 1) {
      const accuracy = Math.round((score / questions.length) * 100)
      if (isChallenge) {
        awardXp(totalXp, {
          questionsAnswered: questions.length,
          correctAnswers: score,
          fastAnswers,
        })
        recordTopicQuiz(subjectName, topicName, level.id, { accuracy, xp: totalXp })
        navigate(`/dashboard/${subjectName}/${topicName}/quiz/${level.id}/results`, { state: { score, totalXp, totalSeconds, questionCount: questions.length, levelNumber: level.number, passed: accuracy >= 80, unlockedNext: accuracy >= 80 && level.number < topic.levels.length } })
      } else {
        completeLevelActivity(subjectName, topicName, level.id, activityId, { score: accuracy, accuracy, xp: totalXp }, {
          quizCompleted: true,
          questionsAnswered: questions.length,
          correctAnswers: score,
          fastAnswers,
        })
        navigate(`/dashboard/${subjectName}/${topicName}/summary/${level.id}/${activityId}`, { state: { xp: totalXp } })
      }
      return
    }
    setCurrentQuestion((value) => value + 1)
    setSeconds(0)
    setAnswerResult(null)
  }

  const unlockedLevel = profile.topicProgress[subjectName + "/" + topicName]?.unlockedLevel || 1
  const previousActivity = activity ? level.activities[level.activities.findIndex((item) => item.id === activityId) - 1] : null
  const hasCompletedPrevious = !previousActivity || profile.topicProgress[subjectName + "/" + topicName]?.levelActivities?.[levelId]?.[previousActivity.id] || profile.topicProgress[subjectName + "/" + topicName]?.levelActivities?.[levelId]?.[previousActivity.type]

  if (!subject || !topic || !level || !activity || questions.length === 0 || level.number > unlockedLevel || (!isChallenge && !hasCompletedPrevious)) {
    return <Navigate to={subject && topic ? `/dashboard/${subject.slug}/${topic.slug}` : subject ? `/dashboard/${subject.slug}` : "/dashboard"} replace />
  }

  const question = questions[currentQuestion]
  const timeIsUp = isChallenge && seconds >= 15

  return <main className="quiz-page app-page">
    <header className="quiz-topbar"><button className="back-button" onClick={() => navigate(`/dashboard/${subjectName}/${topicName}`)}>← Avsluta quiz</button><span>{isChallenge ? "🔥 Utmaning" : "⭐ +" + totalXp + " XP"}</span></header>
    {!answerResult ? <section className="quiz-card"><div className="quiz-meta"><span>{topic.name} · Nivå {level.number}{isChallenge ? " · Utmaning" : ""}</span><span>Fråga {currentQuestion + 1} av {questions.length}</span></div><ProgressBar value={((currentQuestion + 1) / questions.length) * 100} /><div className="timer" aria-label={`${seconds} sekunder`}><span>⏱</span> {seconds}s {isChallenge && <small>/ 15s</small>}</div><p className="eyebrow">VÄLJ ETT SVAR</p><h1>{question.question}</h1><div className="answers">{question.options.map((option, index) => <button key={option} disabled={timeIsUp} onClick={() => checkAnswer(option)}><span>{String.fromCharCode(65 + index)}</span>{option}</button>)}</div><AiHint context={{ subject: subject.name, topic: topic.name, level: level.number, activityType: isChallenge ? "bonusQuiz" : "quiz", question: question.question, studentAnswer: "", previousHint: "" }} />{timeIsUp && <button className="time-up-button" onClick={() => checkAnswer(null)}>Tiden är ute — se svar</button>}<p className="quiz-tip">{isChallenge ? "🔥 Dubbla XP, men bara 15 sekunder per fråga!" : "⚡ Svara snabbt för upp till 20 XP!"}</p></section> : <ResultPopup isCorrect={answerResult.isCorrect} correctAnswer={question.answer} xpEarned={answerResult.earnedXp} onNext={nextQuestion} isLastQuestion={currentQuestion === questions.length - 1} hintContext={{ subject: subject.name, topic: topic.name, level: level.number, activityType: isChallenge ? "bonusQuiz" : "quiz", question: question.question, studentAnswer: answerResult.option || "", previousHint: "" }} />}
  </main>
}

export default Quiz
