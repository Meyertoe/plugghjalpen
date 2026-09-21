import { useNavigate } from "react-router-dom"

function CTA() {
  const navigate = useNavigate()
  return (
    <section className="cta">
      <h2>Redo att börja plugga smartare?</h2>

      <p>
        Få hjälp med plugget, testa dina kunskaper och utvecklas
        tillsammans med Plugghjälpen.
      </p>

      <button onClick={() => navigate("/dashboard")}>Kom igång gratis</button>
    </section>
  )
}

export default CTA
