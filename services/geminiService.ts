import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateSystemInsight = async (query: string): Promise<string> => {
  if (!apiKey) {
    return "API Key not configured. Please set the environment variable.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are an AI assistant built into a high-end PC System Manager application called OmniGuard. 
      The user is asking a question about computer optimization, hardware, or system maintenance.
      Keep the answer concise, professional, and helpful. Use markdown formatting.
      
      User Query: ${query}`,
    });
    return response.text || "Unable to generate insight.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "System analysis temporarily unavailable.";
  }
};
