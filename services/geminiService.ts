import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const askSustainabilityAdvisor = async (question: string): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please configure the environment variable.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are the AI Sustainability Advisor for "Indi-Océan Collective". 
      Your goal is to help businesses in the Indian Ocean (Mauritius, Seychelles, Reunion, etc.) adopt sustainable practices.
      
      User Question: ${question}
      
      Provide a concise, helpful, and regionally relevant answer. Focus on biodiversity, sustainable agriculture, and eco-friendly hospitality. 
      If pertinent, mention certifications like Green Key, EarthCheck, or TNFD.`,
    });
    
    return response.text || "I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while contacting the knowledge base. Please try again later.";
  }
};