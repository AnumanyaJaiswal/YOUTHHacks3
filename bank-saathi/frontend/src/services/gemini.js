import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

export async function detectIntent(transcript) {
  try {
    const prompt = `
You are a banking intent classifier.

Possible intents:
- BLOCK_CARD
- BALANCE
- COMPLAINT
- FRAUD
- PANIC

Rules:
1. Return ONLY valid JSON.
2. Do not return markdown.
3. Do not return explanations.
4. The intent value must be one of the listed intents only.

Example Output:
{
  "intent": "BLOCK_CARD"
}

User Message:
"${transcript}"
`;

    const result = await model.generateContent(prompt);

    const responseText = result.response
      .text()
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    console.log(
      "Raw Gemini Response:",
      responseText
    );

    const parsedResponse =
      JSON.parse(responseText);

    return {
      intent:
        parsedResponse.intent?.toUpperCase() ||
        "UNKNOWN",
    };

  } catch (error) {
    console.error(
      "Intent Detection Error:",
      error
    );

    return {
      intent: "UNKNOWN",
    };
  }
}