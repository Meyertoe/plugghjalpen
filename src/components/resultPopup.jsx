import AiHint from "./aiHint"

function ResultPopup({ isCorrect, correctAnswer, xpEarned, onNext, isLastQuestion, hintContext }) {
  return (
    <section className={`result-popup ${isCorrect ? "correct" : "incorrect"}`}>
      <div className="result-icon">{isCorrect ? "🎉" : "❌"}</div>
      <p className="eyebrow">{isCorrect ? "SNYGGT JOBBAT" : "INGEN FARA"}</p>
      <h1>{isCorrect ? "Rätt svar!" : "Fel svar!"}</h1>
      {isCorrect ? (
        <p className="result-message">{xpEarned === 20 ? "⚡ Supersnabbt!" : "Du är på rätt spår!"}</p>
      ) : (
        <p className="result-message">Rätt svar: <strong>{correctAnswer}</strong></p>
      )}
      <div className="xp-reward">{xpEarned > 0 ? `+${xpEarned} XP` : "+0 XP"}</div>
      {!isCorrect && hintContext && <AiHint context={hintContext} />}
      <button className="primary-button" onClick={onNext}>
        {isLastQuestion ? "Se resultat →" : "Nästa fråga →"}
      </button>
    </section>
  )
}

export default ResultPopup
