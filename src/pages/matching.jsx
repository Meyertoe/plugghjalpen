import { useMemo, useState } from "react"
import { Navigate, useNavigate, useParams, useSearchParams } from "react-router-dom"
import { getLevelById, getTopicBySlug } from "../data/subjects"
import { useGame } from "../hooks/useGame"
import ProgressBar from "../components/progressBar"
import AiHint from "../components/aiHint"

const shuffle = (items) => [...items].sort(() => Math.random() - 0.5)

const derangeAnswers = (answers, prompts) => {
  if (answers.length < 2) return answers
  let shuffled = shuffle(answers)
  let attempts = 0
  while (shuffled.some((answer, index) => answer.pairId === prompts[index].pairId) && attempts < 30) {
    shuffled = shuffle(answers)
    attempts += 1
  }
  if (shuffled.some((answer, index) => answer.pairId === prompts[index].pairId)) {
    shuffled = answers.map((_, index) => answers[(index + 1) % answers.length])
  }
  return shuffled
}

function Matching() {
  const { subjectName, topicName, levelId } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { profile, completeLevelActivity } = useGame()
  const topic = getTopicBySlug(subjectName, topicName)
  const level = getLevelById(subjectName, topicName, levelId)
  const activityId = searchParams.get("activity") || "matching-" + level?.number
  const activity = level?.activities.find((item) => item.id === activityId && item.type === "matching")
  const [selected, setSelected] = useState(null)
  const [matched, setMatched] = useState([])
  const [wrong, setWrong] = useState(null)
  const pairs = useMemo(() => activity?.data.pairs || level?.matching || [], [activity, level])
  const prompts = useMemo(() => pairs.map((pair) => ({ pairId: pair.id, text: pair.left })), [pairs])
  const shuffledAnswers = useMemo(() => {
    const answers = pairs.map((pair) => ({ pairId: pair.id, text: pair.right }))
    return derangeAnswers(answers, prompts)
  }, [pairs, prompts])
  const activities = profile.topicProgress[subjectName + "/" + topicName]?.levelActivities?.[levelId] || {}
  const activityIndex = level?.activities.findIndex((item) => item.id === activityId) ?? -1
  const previousActivity = activityIndex > 0 ? level.activities[activityIndex - 1] : null
  const previousComplete = !previousActivity || activities[previousActivity.id] || activities[previousActivity.type]
  if (!topic || !level || !activity || level.number > (profile.topicProgress[subjectName + "/" + topicName]?.unlockedLevel || 1) || !previousComplete) return <Navigate to={"/dashboard/" + subjectName + "/" + topicName + "/level/" + levelId} replace />
  const selectRight = (answer) => {
    if (!selected || matched.includes(answer.pairId)) return
    if (selected.pairId === answer.pairId) { setMatched((value) => [...value, answer.pairId]); setSelected(null) }
    else { setWrong(answer.pairId); window.setTimeout(() => { setWrong(null); setSelected(null) }, 600) }
  }
  const complete = () => { completeLevelActivity(subjectName, topicName, levelId, activityId, { score: 100, xp: 30 }); navigate(`/dashboard/${subjectName}/${topicName}/summary/${levelId}/${activityId}`, { state: { xp: 30 } }) }
  const completeGame = matched.length === pairs.length
  return <main className="app-page game-page"><header className="simple-topbar"><button className="brand" onClick={() => navigate("/dashboard/" + subjectName + "/" + topicName + "/level/" + levelId)}>← <span>Till nivårundan</span></button><span>🔗 Para ihop</span></header><section className="game-header"><p className="eyebrow">FÖRSTÅ SAMBANDEN</p><h1>Vad hör ihop?</h1><p>Välj ett begrepp till vänster och hitta dess rätta partner.</p><ProgressBar value={(matched.length / pairs.length) * 100} /></section><div className="matching-board"><div>{prompts.map((prompt) => <button className={"match-item " + (selected?.pairId === prompt.pairId ? "selected" : "") + (matched.includes(prompt.pairId) ? "matched" : "")} disabled={matched.includes(prompt.pairId)} onClick={() => setSelected(prompt)} key={prompt.pairId}>{prompt.text}</button>)}</div><div>{shuffledAnswers.map((answer) => <button className={"match-item answer " + (wrong === answer.pairId ? "wrong" : "") + (matched.includes(answer.pairId) ? "matched" : "")} disabled={matched.includes(answer.pairId)} onClick={() => selectRight(answer)} key={answer.pairId}>{matched.includes(answer.pairId) ? "✓ " : ""}{answer.text}</button>)}</div></div><AiHint context={{ subject: "Matematik", topic: topic.name, level: level.number, activityType: "matching", question: selected ? "Vad hör ihop med: " + selected.text : "Välj ett begrepp och hitta dess partner.", studentAnswer: wrong || "", previousHint: "" }} />{completeGame && <section className="game-success"><h2>🎯 Du ser sambanden!</h2><p>+30 XP — nästa steg väntar.</p><button className="primary-button" onClick={complete}>Fortsätt →</button></section>}</main>
}

export default Matching
