import http from "node:http"

const port = Number(process.env.PORT || 3001)
const maxBodySize = 12_000
const developerInstructions = [
  "You are Plugghjälpen's pedagogical hint engine for Swedish students.",
  "Help the student take exactly one small next step.",
  "Never give the final answer, solve the entire exercise, or provide a complete chain of solution steps.",
  "Write in short, concrete, age-appropriate Swedish with encouragement.",
  "If the student asks for the answer, politely refuse and give a helpful next-step hint instead.",
  "Use hintLevel 1 for a gentle question, 2 for a clearer concept or operation, and 3 only for a visual or procedural clue without completing the answer.",
  "If a previous attempt is wrong, explain the relevant concept briefly without revealing the result.",
  "Return only the requested structured response.",
].join(" ")

const hintSchema = {
  type: "object",
  additionalProperties: false,
  required: ["hint", "hintLevel", "encouragement"],
  properties: {
    hint: { type: "string" },
    hintLevel: { type: "integer", minimum: 1, maximum: 3 },
    encouragement: { type: "string" },
  },
}

function readJson(request) {
  return new Promise((resolve, reject) => {
    let body = ""
    request.on("data", (chunk) => {
      body += chunk
      if (body.length > maxBodySize) request.destroy()
    })
    request.on("end", () => {
      try { resolve(JSON.parse(body || "{}")) } catch { reject(new Error("Ogiltig JSON.")) }
    })
    request.on("error", reject)
  })
}

function sendJson(response, status, data) {
  response.writeHead(status, { "Content-Type": "application/json" })
  response.end(JSON.stringify(data))
}

function validContext(context) {
  return context && typeof context.subject === "string" && typeof context.topic === "string" && typeof context.level === "number" && typeof context.question === "string"
}

const server = http.createServer(async (request, response) => {
  if (request.method !== "POST" || request.url !== "/api/hint") return sendJson(response, 404, { error: "Hittades inte." })
  if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY.includes("your_api_key_here")) return sendJson(response, 503, { error: "AI-hjälpen saknar en riktig OpenAI API-nyckel i .env." })
  try {
    const context = await readJson(request)
    if (!validContext(context)) return sendJson(response, 400, { error: "Ofullständig uppgiftskontext." })
    const openaiResponse = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-5-mini",
        store: false,
        instructions: developerInstructions,
        input: JSON.stringify({
          subject: context.subject.slice(0, 80), topic: context.topic.slice(0, 80), level: context.level,
          activityType: String(context.activityType || "activity").slice(0, 80), question: context.question.slice(0, 500),
          studentAnswer: String(context.studentAnswer || "").slice(0, 300), previousHint: String(context.previousHint || "").slice(0, 500),
          hintRequests: Number(context.hintRequests || 0),
        }),
        text: { format: { type: "json_schema", name: "pedagogical_hint", strict: true, schema: hintSchema } },
      }),
    })
    if (!openaiResponse.ok) {
      const errorText = await openaiResponse.text()
      console.error("OpenAI error status:", openaiResponse.status)
      console.error("OpenAI error body:", errorText)
      return sendJson(response, 502, { error: "AI-hjälpen kunde inte svara just nu. Kontrollera serverns terminal för mer information." })
    }
    const result = await openaiResponse.json()
    return sendJson(response, 200, JSON.parse(result.output_text))
  } catch {
    return sendJson(response, 500, { error: "Något gick fel när ledtråden skulle hämtas." })
  }
})

server.listen(port)
