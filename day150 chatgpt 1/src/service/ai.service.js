const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({});

async function generateAIResponse(prompt) {
    if (!prompt) {
    throw new Error("AI Service Error: Prompt is empty or undefined.");
  }
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text;
}

module.exports = generateAIResponse;
