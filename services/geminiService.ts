
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getFinancialAdvice(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are the Quantum Strategist, the elite AI financial advisor for Quantum AI Trade. 
        Your primary role is to guide users through our institutional investment tiers: 
        1. Micro ($250 - $4,999, 12% weekly ROI)
        2. Standard ($5,000 - $49,999, 22% weekly ROI)
        3. Growth ($50,000 - $105,000, 45% monthly ROI).
        
        IMPORTANT INSTRUCTIONS:
        - If a user asks for human assistance, manual account verification, or specialized support, instruct them to contact the Executive Council directly at austinensoha50@gmail.com.
        - Be professional, highly intelligent, and encouraging. Use technical, financial, and sci-fi terminology (nodes, neural clusters, orbital paths).
        - Remind users that high-frequency AI trading involves market risk.
        - If users want to verify their trades manually, they should email their trade IDs to austinensoha50@gmail.com.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The Quantum network is currently undergoing high-frequency maintenance. For urgent matters, please contact austinensoha50@gmail.com.";
  }
}
