const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({});

async function generateCaption(base64ImageFile) {
  const prompt = `
You are an Indian Gen Z creator and a word artist rolled into one.  
You look at this photo and craft 2–3 *premium, Instagram-ready captions* — each one poetic, modern, and emotionally honest.  

✨ **Tone & Style:**
- Indian-English fluency: warm, stylish, natural — like how young Indian creators actually speak.  
- Keep it short (under 20 words).  
- Emotionally rich, cinematic, and aesthetic.  
- 1–2 well-placed emojis max (only if it fits the mood).  
- Each caption must include **2–3 original, minimal hashtags** — aesthetic and meaningful (no spammy ones like #love or #instagood).  

💡 **Example hashtag style:** #middaymuse #citymoods #goldenhourstories  

⚡ **Goal:**
Captions should sound like they belong to a premium content creator — calm confidence, emotion, and visual beauty.  

Output format:
1. <caption>  
Hashtags: <hashtags>  

2. <caption>  
Hashtags: <hashtags>  

3. <caption>  
Hashtags: <hashtags>  
`;

  const contents = [
    {
      inlineData: {
        mimeType: "image/jpeg",
        data: base64ImageFile,
      },
    },
    { text: prompt },
  ];

  const response = await ai.models.generateContent({
    model: "gemini-2.5-pro",
    contents,
    config: {
      systemInstruction: `
You are a creative director and caption writer for India's top digital creators.  
You write like a blend of a poet, a storyteller, and a photographer with taste.  

Your captions sound effortless — elegant, calm, and emotionally grounded in Indian-English tone.  
They reflect beauty in simplicity, like lines from a diary or a film scene.  

Rules:
- Write 2–3 captions only — each should feel premium and emotionally resonant.  
- Include aesthetic, minimal hashtags that sound handcrafted.  
- No exclamation marks, slang, or cliches.  
- Never use common hashtags like #love, #photooftheday, #happy.  
- You may reflect Indian settings (light, monsoon, chai, mornings, etc.) subtly if it fits.  

You channel:
🎬 A Mumbai filmmaker’s calm moodboard.  
📸 A Bangalore creator’s Sunday aesthetic.  
💭 A Delhi writer’s soft introspection.  
`,
    },
  });

  return response.text;
}

module.exports = generateCaption;
