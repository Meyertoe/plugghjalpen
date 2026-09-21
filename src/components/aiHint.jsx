import { useState } from "react"

function AiHint({ context }) {
  const [hintResult, setHintResult] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const requestHint = async () => {
    setIsLoading(true)
    setError("")
    try {
      const response = await fetch("/api/hint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...context,
          previousHint: hintResult?.hint || context.previousHint || "",
          hintRequests: (context.hintRequests || 0) + (hintResult ? 1 : 0),
        }),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || "Kunde inte hämta en ledtråd.")
      setHintResult(data)
    } catch (requestError) {
      setError(requestError.message)
    } finally {
      setIsLoading(false)
    }
  }

  return <aside className="ai-hint"><button className="ai-hint-button" onClick={requestHint} disabled={isLoading}>{isLoading ? "🤖 Tänker..." : hintResult ? "🤖 En tydligare ledtråd" : "🤖 Få en ledtråd"}</button>{hintResult && <div className="ai-hint-result"><span>🤖</span><div><strong>AI-pluggkompis</strong><p>{hintResult.hint}</p><small>{hintResult.encouragement}</small></div></div>}{error && <p className="ai-hint-error">{error}</p>}</aside>
}

export default AiHint
