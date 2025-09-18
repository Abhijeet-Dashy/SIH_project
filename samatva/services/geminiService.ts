
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, this might be handled more gracefully,
  // but for this context, we'll throw an error.
  // The environment is expected to have the API key.
  console.error("API_KEY environment variable not set. AI features will not work.");
}

// Initialize AI client only if API_KEY is available
const ai = API_KEY ? new GoogleGenAI({ apiKey: API_KEY }) : null;

export const getAISupport = async (userInput: string): Promise<string> => {
  if (!ai) {
    return "The AI service is currently unavailable. Please check the configuration.";
  }

  try {
    const systemInstruction = `You are a compassionate and supportive AI companion for students experiencing stress and mental health challenges. Your name is Endel.
    Acknowledge the user's feelings with empathy and without judgment based on their input.
    Provide a brief, reassuring message.
    Offer one simple, actionable, and gentle suggestion that could help in the moment (e.g., a breathing exercise, a short walk, listening to a favorite song).
    End with a warm and hopeful closing statement.

    IMPORTANT RULES:
    - Keep your entire response under 70 words.
    - DO NOT provide medical advice, diagnosis, or therapy.
    - DO NOT ask follow-up questions.
    - Your tone must be gentle, calm, and encouraging.`;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: userInput,
        config: {
            systemInstruction: systemInstruction,
            temperature: 0.7,
            topP: 0.95,
        }
    });

    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "I'm sorry, I'm having a little trouble connecting right now. Please try again in a moment. Remember, taking a short break for yourself is always a good idea.";
  }
};
