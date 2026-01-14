import { GoogleGenerativeAI } from "@google/generative-ai";
import { PERSONAL_INFO_STATIC, SKILLS } from "../constants";
import { translations, Language } from "../translations";

const generateSystemInstruction = (lang: Language) => {
  const t = translations[lang];
  const projects = t.projects.items.map(p => p.title + ": " + p.description).join('\n- ');
  
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
    const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
    if (!apiKey) throw new Error("Clé API manquante");

    // Initialisation avec la nouvelle librairie standard
    const genAI = new GoogleGenerativeAI(apiKey);
    
    // On récupère le modèle spécifique
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: generateSystemInstruction(lang)
    });

    const result = await model.generateContent(userMessage);
    const response = await result.response;
    
    return response.text();

  } catch (error) {
    console.error("ERREUR GEMINI:", error);
    return lang === 'fr' 
      ? "Je rencontre une erreur technique momentanée." 
      : "I am encountering a temporary technical error.";
  }
};