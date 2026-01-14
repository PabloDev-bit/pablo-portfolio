import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO_STATIC, SKILLS } from "../constants";
import { translations, Language } from "../translations";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const generateSystemInstruction = (lang: Language) => {
  const t = translations[lang];
  // Use the translated bio and details for context
  const projects = t.projects.items.map(p => p.title + ": " + p.description).join('\n- ');
  
  // Specific education block for the AI context
  const education = `
    - IPSSI (Bordeaux): Master Data & Intelligence Artificielle [2026-2028] (Upcoming/Next Step).
    - Cégep de Sherbrooke (Quebec): Techniques de l'informatique (Computer Science) [2024-2026].
    - Cégep de Saint-Félicien (Quebec): Techniques de l'informatique (Computer Science) [2022-2023].
    - Lycée (France): Baccalauréat Métiers de la Relation Client (Client Relations) [2019-2022].
  `;

  return `
    You are an AI assistant for the portfolio website of Pablo Hernandez.
    Current Language Setting: ${lang.toUpperCase()}.
    
    IMPORTANT: You MUST answer in ${lang === 'fr' ? 'French' : lang === 'es' ? 'Spanish' : 'English'}.
    
    Context about Pablo:
    - Name: ${PERSONAL_INFO_STATIC.name}
    - Age: ${PERSONAL_INFO_STATIC.age}
    - Location: ${t.hero.location}
    - Role: ${t.hero.role}
    - Education: ${education}
    - Professional Bio: ${t.about.bio}
    - Skills: ${SKILLS.map(s => s.name).join(', ')}.
    - Projects: 
      - ${projects}

    Your Goal: Answer visitor questions with a highly professional tone. Emphasize his dual competency: technical engineering (from Canada) + human/client relations (from France) and his ambition to specialize in AI with his upcoming Master's degree at IPSSI.
    Tone: Executive, precise, helpful.
  `;
};

export const sendMessageToGemini = async (userMessage: string, lang: Language): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: generateSystemInstruction(lang),
      },
    });

    return response.text || (lang === 'fr' ? "Je ne peux pas répondre pour le moment." : "I cannot answer at the moment.");
  } catch (error) {
    console.error("Gemini API Error:", error);
    return lang === 'fr' 
      ? "Je suis actuellement hors ligne pour maintenance. Veuillez utiliser le formulaire de contact." 
      : "I am currently offline due to maintenance. Please use the contact form.";
  }
};