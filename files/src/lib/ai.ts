import { newsScript, NewsScript } from "../data/news";

export function buildScriptFromArticle(articleText: string): NewsScript {
  // Simulação de IA:
  // em produção você pode trocar por OpenAI, Claude, Gemini, etc.
  // Este exemplo usa um script mockado, mas mantém a estrutura do pipeline.
  console.log("Texto de entrada recebido:", articleText.slice(0, 120));

  return {
    ...newsScript,
    narration:
      `${newsScript.hook} ${newsScript.points.join(" ")} ${newsScript.conclusion}`,
  };
}