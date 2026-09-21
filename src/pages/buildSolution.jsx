import { useState } from "react"
import { Navigate, useNavigate, useParams, useSearchParams } from "react-router-dom"
import { getLevelById, getTopicBySlug } from "../data/subjects"
import { useGame } from "../hooks/useGame"
import ProgressBar from "../components/progressBar"
import AiHint from "../components/aiHint"
import UnderstandingHelp from "../components/understandingHelp"

function BuildSolution() {
  const { subjectName, topicName, levelId } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { profile, completeLevelActivity, recordLearningSignal } = useGame()
  const topic = getTopicBySlug(subjectName, topicName)
  const level = getLevelById(subjectName, topicName, levelId)
  const activityId = searchParams.get("activity")
  const activity = level?.activities.find((item) => item.id === activityId && item.type === "buildSolution")
  const [stepIndex, setStepIndex] = useState(0)
  const [mistakes, setMistakes] = useState(0)
  const [feedback, setFeedback] = useState("")
  const [showSolution, setShowSolution] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const activities = profile.topicProgress[subjectName + "/" + topicName]?.levelActivities?.[levelId] || {}
  const activityIndex = level?.activities.findIndex((item) => item.id === activityId) ?? -1
  const previousActivity = activityIndex > 0 ? level.activities[activityIndex - 1] : null
  const previousComplete = !previousActivity || activities[previousActivity.id] || activities[previousActivity.type]

  if (!topic || !level || !activity || level.number > (profile.topicProgress[subjectName + "/" + topicName]?.unlockedLevel || 1) || !previousComplete) return <Navigate to={"/dashboard/" + subjectName + "/" + topicName + "/level/" + levelId} replace />

  const step = activity.data.steps[stepIndex]
  const advance = () => {
    if (stepIndex === activity.data.steps.length - 1) {
      completeLevelActivity(subjectName, topicName, levelId, activityId, { score: 100, xp: activity.data.xp || 35 })
      navigate(`/dashboard/${subjectName}/${topicName}/summary/${levelId}/${activityId}`, { state: { xp: activity.data.xp || 35 } })
      return
    }
    setStepIndex((value) => value + 1)
    setMistakes(0)
    setFeedback("")
    setShowSolution(false)
    setIsCorrect(false)
  }
  const chooseOption = (option) => {
    if (isCorrect || showSolution) return
    if (option === step.correctAnswer) {
      setIsCorrect(true)
      setFeedback(step.explanation)
      recordLearningSignal(subjectName, topicName, levelId, activityId, step.id || `step-${stepIndex + 1}`, { attempts: mistakes, solvedOriginal: true })
      return
    }
    const nextMistakes = mistakes + 1
    setMistakes(nextMistakes)
    recordLearningSignal(subjectName, topicName, levelId, activityId, step.id || `step-${stepIndex + 1}`, { attempts: nextMistakes, rescueUsed: Boolean(step.help && nextMistakes >= step.help.rescue.triggerAfterAttempts), helpUsed: Boolean(step.help && nextMistakes >= step.help.rescue.triggerAfterAttempts), helpLevel: step.help && nextMistakes >= step.help.rescue.triggerAfterAttempts ? 3 : 0 })
    if (nextMistakes === 1) setFeedback("Nästan! " + step.hint1)
    else if (nextMistakes === 2) setFeedback(step.hint2)
    else if (!step.help) {
      setFeedback("Så här gör du. Läs lösningen och fortsätt när du är redo.")
      setShowSolution(true)
    } else setFeedback("Den här var klurig. Vi kan dela upp principen i mindre steg.")
  }

  const nextActivity = level.activities[activityIndex + 1]
  return <main className="app-page game-page"><header className="simple-topbar"><button className="brand" onClick={() => navigate("/dashboard/" + subjectName + "/" + topicName + "/level/" + levelId)}>← <span>Till nivårundan</span></button><span>🧩 Lös steg för steg</span></header><section className="game-header step-solver-header"><p className="eyebrow">STEG {stepIndex + 1} AV {activity.data.steps.length}</p><h1>{step.equation}</h1><div className="step-goal">🎯 Mål: {step.goal}</div><ProgressBar value={((stepIndex + 1) / activity.data.steps.length) * 100} /></section><section className="build-card step-solver"><p className="eyebrow">EN SAK I TAGET</p><h2>{step.question}</h2><div className="step-options">{step.options.map((option) => <button key={option} disabled={isCorrect || showSolution} className={isCorrect && option === step.correctAnswer ? "correct" : ""} onClick={() => chooseOption(option)}>{option}{isCorrect && option === step.correctAnswer && <b>✓</b>}</button>)}</div><UnderstandingHelp key={step.id || stepIndex} help={step.help} attempts={mistakes} autoRescue={Boolean(step.help && mistakes >= step.help.rescue.triggerAfterAttempts)} onUse={(signal) => recordLearningSignal(subjectName, topicName, levelId, activityId, step.id || `step-${stepIndex + 1}`, { attempts: mistakes, ...signal })} onRescueComplete={() => recordLearningSignal(subjectName, topicName, levelId, activityId, step.id || `step-${stepIndex + 1}`, { attempts: mistakes, rescueCompleted: true })} /><AiHint context={{ subject: "Matematik", topic: topic.name, level: level.number, activityType: "solveStepByStep", question: step.question + " " + step.equation, studentAnswer: feedback, previousHint: feedback }} />{feedback && <div className={"step-feedback " + (isCorrect ? "correct" : showSolution ? "solution" : "")}><p>{feedback}</p>{(isCorrect || showSolution) && <div className="equation-visual">{step.visual.map((line) => <code key={line}>{line}</code>)}</div>}{(isCorrect || showSolution) && <button className="primary-button" onClick={advance}>{stepIndex === activity.data.steps.length - 1 ? `Fortsätt till ${nextActivity?.title || "nästa steg"} →` : "Nästa lilla steg →"}</button>}</div>}</section>{(isCorrect || showSolution) && stepIndex === activity.data.steps.length - 1 && <section className="solver-summary"><h2>🎉 Du löste ekvationen!</h2><p>{activity.data.steps.map((item) => item.visual[item.visual.length - 1]).join(" → ")}</p><small>Du får +{activity.data.xp || 35} XP när aktiviteten är klar.</small></section>}</main>
}

export default BuildSolution
