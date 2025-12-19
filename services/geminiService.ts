import { GoogleGenAI } from "@google/genai";

const getApiKey = () => {
  try {
    // Safely attempt to access process.env. 
    // In some environments, accessing 'process' when it's not defined throws an error.
    if (typeof process !== 'undefined' && process.env) {
      return process.env.API_KEY || '';
    }
  } catch (e) {
    console.warn("Could not access process.env");
  }
  return '';
};

export const askSustainabilityAdvisor = async (question: string): Promise<string> => {
  const apiKey = getApiKey();

  if (!apiKey) {
    return "The AI Advisor is currently offline (Missing API Key). Please check your configuration.";
  }

  try {
    // Initialize the client strictly within the function scope
    const ai = new GoogleGenAI({ apiKey });
    
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