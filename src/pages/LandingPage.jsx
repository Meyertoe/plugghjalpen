import "../App.css"
import Navbar from "../components/navbar"
import FeatureCard from "../components/featureCard"
import HowItWorks from "../components/howItWorks" 
import CTA from "../components/cta"   
import { useNavigate } from "react-router-dom"  

function LandingPage() {
    const navigate = useNavigate()
  return (
    <main>
      <Navbar />

      <section className="hero">
  <div className="hero-content">
    <p>DIN PERSONLIGA PLUGGKOMPIS</p>

    <h2>
      Plugga smartare.
      <br />
      Lär dig mer.
    </h2>

    <p>
      Din personliga AI-pluggkompis som hjälper dig att
      förstå, träna och utvecklas.
    </p>

   <button onClick={() => navigate("/dashboard")}>
  Kom igång gratis
</button>
  </div>

  <div className="dashboard-preview">
    <div className="preview-header">
      <span>👋 Hej!</span>
      <span>⭐ 1 240 XP</span>
    </div>

    <h3>Dagens mål</h3>

    <div className="progress-bar">
      <div className="progress"></div>
    </div>

    <p>3 av 4 uppgifter klara</p>

    <div className="preview-subjects">
      <div>📐 Matematik</div>
      <div>📖 Svenska</div>
      <div>🇬🇧 Engelska</div>
    </div>
  </div>
</section>
        <section className="features">
  <FeatureCard
    icon="🤖"
    title="AI-pluggkompis"
    description="Få hjälp och förklaringar när du fastnar."
  />

  <FeatureCard
    icon="🎮"
    title="Quiz"
    description="Testa dina kunskaper och se hur mycket du kan."
  />

  <FeatureCard
    icon="🧠"
    title="Memory"
    description="Repetera viktiga saker och få dem att fastna."
  />

  <FeatureCard
    icon="🏆"
    title="XP & Rewards"
    description="Plugga, samla XP och lås upp belöningar."
  />

  
</section>

<HowItWorks />
<CTA />
    </main>
  )

}

export default LandingPage