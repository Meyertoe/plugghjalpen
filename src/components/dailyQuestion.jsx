import { useEffect, useState } from "react"

const decodeHtml = (value) => {
  const element = document.createElement("textarea")
  element.innerHTML = value
  return element.value
}

const shuffle = (items) => [...items].sort(() => Math.random() - 0.5)

function DailyQuestion() {
  const [status, setStatus] = useState("loading")
  const [question, setQuestion] = useState(null)
  const [selected, setSelected] = useState("")

  useEffect(() => {
    const controller = new AbortController()
    const loadQuestion = async () => {
      try {
        const response = await fetch("https://opentdb.com/api.php?amount=1&category=18&type=multiple", { signal: controller.signal })
        if (!response.ok) throw new Error("API-fel")
        const data = await response.json()
        if (data.response_code !== 0 || !data.results?.length) { setStatus("empty"); return }
        const item = data.results[0]
        setQuestion({ prompt: decodeHtml(item.question), answer: decodeHtml(item.correct_answer), options: shuffle([...item.incorrect_answers, item.correct_answer].map(decodeHtml)) })
        setStatus("ready")
      } catch (error) {
        if (error.name !== "AbortError") setStatus("error")
      }
    }
    loadQuestion()
    return () => controller.abort()
  }, [])

  return <section className="daily-question" aria-live="polite"><div><p className="eyebrow">DAGENS TECHFRÅGA</p><h2>En extra tankeövning</h2></div>{status === "loading" && <p className="api-state">Hämtar en fråga…</p>}{status === "error" && <p className="api-state error">Kunde inte hämta dagens fråga just nu. Resten av Plugghjälpen fungerar som vanligt.</p>}{status === "empty" && <p className="api-state">Det finns ingen ny fråga just nu. Prova igen senare.</p>}{status === "ready" && <><p className="daily-question-prompt">{question.prompt}</p><div className="daily-question-options">{question.options.map((option) => <button key={option} className={selected === option ? option === question.answer ? "correct" : "incorrect" : ""} disabled={Boolean(selected)} onClick={() => setSelected(option)}>{option}</button>)}</div>{selected && <p className={selected === question.answer ? "daily-answer correct" : "daily-answer incorrect"}>{selected === question.answer ? "Rätt! Snyggt resonemang." : `Inte riktigt. Rätt svar är: ${question.answer}.`}</p>}</>}</section>
}

export default DailyQuestion
