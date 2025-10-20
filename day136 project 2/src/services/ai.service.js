const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({});

async function generateCaption(base64ImageFile) {
  const prompt = `
You're the 'Chief Vibe Officer' for social media. Your one job is to look at this photo and cook up 5 absolute banger captions.
Make them super casual, catchy, and feel 100% human—like something a real person would actually post on Instagram or Threads.

Give me one for each of these vibes:
1.  **The Aesthetic one:** (For the artsy, moody post) 🎨
2.  **The 'In My Feels' one:** (A little deep, but zero cheese) ❤️
3.  **The Witty/Sassy one:** (Make 'em smirk) 😂
4.  **The Gen Z one:** (Short, main character energy, maybe a lil unhinged) 🔥
5.  **The Simple & Sweet one:** (Just a nice, simple thought) ✨

Hard Rules:
1.  Keep 'em short and sweet. Under 25 words, tops.
2.  Use emojis, but don't go overboard. Make them count. 💅
3.  ZERO basic captions. Nothing like 'Good vibes' or 'Love this.' I want fresh, authentic stuff.
4.  Make it sound like it's 2025. Authentic, real, and scroll-stopping.
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
    model: "gemini-2.5-flash",
    contents,
    config: {
      systemInstruction: "You're the internet's funniest friend, the one everyone messages for caption ideas. Be witty, a bit cheeky, and absolutely *not* cringe.",
    },
  });

  return response.text;
}

module.exports = generateCaption;