import { useState } from "react"

function RescueMode({ rescue, onComplete }) {
  const [stepIndex, setStepIndex] = useState(0)
  const [feedback, setFeedback] = useState("")
  const step = rescue.steps[stepIndex]
  const choose = (option) => {
    if (option !== step.answer) { setFeedback(step.hint || "Titta på det lilla steget en gång till."); return }
    if (stepIndex === rescue.steps.length - 1) { setFeedback(step.explanation || "Precis! Du har tränat principen."); return }
    setFeedback(step.explanation || "Bra! Nu tar vi nästa lilla steg.")
  }
  const continueStep = () => {
    if (stepIndex === rescue.steps.length - 1) onComplete()
    else { setStepIndex((value) => value + 1); setFeedback("") }
  }
  return <section className="rescue-mode"><p className="eyebrow">🛟 RÄDDNINGSLÄGE · STEG {stepIndex + 1} AV {rescue.steps.length}</p><h3>{rescue.title || "Vi tar det tillsammans."}</h3><p>{step.intro}</p>{step.visual && <pre className="rescue-visual"><code>{step.visual}</code></pre>}<strong>{step.question}</strong><div className="rescue-options">{step.options.map((option) => <button key={option} onClick={() => choose(option)}>{option}</button>)}</div>{feedback && <div className="rescue-feedback"><p>{feedback}</p>{(feedback === (step.explanation || "Precis! Du har tränat principen.") || (stepIndex < rescue.steps.length - 1 && feedback === (step.explanation || "Bra! Nu tar vi nästa lilla steg."))) && <button className="primary-button" onClick={continueStep}>{stepIndex === rescue.steps.length - 1 ? "Tillbaka till uppgiften →" : "Nästa lilla steg →"}</button>}</div>}</section>
}

function UnderstandingHelp({ help, attempts = 0, autoRescue = false, onUse, onRescueComplete }) {
  const [helpLevel, setHelpLevel] = useState(0)
  const [rescue, setRescue] = useState(false)
  const [rescueComplete, setRescueComplete] = useState(false)
  const startRescue = () => { setRescue(true); setRescueComplete(false); setHelpLevel(3); onUse?.({ helpUsed: true, helpLevel: 3, rescueUsed: true }) }
  if (!help) return null
  const askForHelp = () => {
    if (helpLevel === 0) { setHelpLevel(1); onUse?.({ helpUsed: true, helpLevel: 1 }) }
    else if (helpLevel === 1) { setHelpLevel(2); onUse?.({ helpUsed: true, helpLevel: 2 }) }
    else startRescue()
  }
  const rescueActive = (rescue || autoRescue) && !rescueComplete
  return <aside className="understanding-help">{!rescueActive && <button className="understanding-help-button" onClick={askForHelp}>🧠 {helpLevel ? "Visa på ett enklare sätt" : "Jag fattar inte"}</button>}{helpLevel === 1 && !rescueActive && <div className="help-panel"><strong>Vi provar på ett annat sätt.</strong><p>{help.alternativeExplanation}</p></div>}{helpLevel === 2 && !rescueActive && <div className="help-panel simpler"><strong>Vi gör det enklare först.</strong><pre><code>{help.simplerExample.code}</code></pre><p>{help.simplerExample.explanation}</p><small>Nu provar vi din uppgift igen.</small></div>}{rescueActive && <RescueMode rescue={help.rescue} onComplete={() => { setRescue(false); setRescueComplete(true); onRescueComplete?.(); }} />}{attempts > 0 && !rescueActive && <small className="help-status">Hjälp finns här när du behöver den.</small>}</aside>
}

export default UnderstandingHelp
