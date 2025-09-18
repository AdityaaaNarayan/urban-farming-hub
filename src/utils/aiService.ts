// AI Service for Farming Chatbot
const HF_URL = "https://api-inference.huggingface.co/models/google/gemma-2b";

// Replace with your actual Hugging Face token
const HF_HEADERS = {
  "Content-Type": "application/json",
  "Authorization": "Bearer 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"
};

export interface ChatMessage {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export async function getAIResponse(message: string): Promise<string> {
  try {
    const farmingContext = `You are an expert urban farming and vertical gardening assistant. 
    Focus on providing helpful, practical advice about rooftop farming, vertical gardening, 
    hydroponics, container gardening, and sustainable urban agriculture. 
    Be concise but informative. User question: ${message}`;

    const response = await fetch(HF_URL, {
      method: "POST",
      headers: HF_HEADERS,
      body: JSON.stringify({
        inputs: farmingContext,
        parameters: {
          max_length: 200,
          temperature: 0.7,
          do_sample: true
        }
      }),
    });

    const data = await response.json();

    // Handle loading state
    if (data.error && data.error.includes("is loading")) {
      return "🌱 The AI farming expert is getting ready! Please try again in about 30 seconds.";
    }

    // Handle rate limiting
    if (data.error && data.error.includes("rate limit")) {
      return "🌱 Too many questions at once! Please wait a moment before asking again.";
    }

    // Extract response
    if (Array.isArray(data) && data[0]?.generated_text) {
      // Clean up the response to remove the context prompt
      const fullText = data[0].generated_text;
      const userQuestion = `User question: ${message}`;
      const answerStart = fullText.indexOf(userQuestion) + userQuestion.length;
      const cleanAnswer = fullText.slice(answerStart).trim();
      
      return cleanAnswer || "🌱 I'd be happy to help with your farming question! Could you be more specific?";
    }

    if (data.generated_text) {
      return data.generated_text;
    }

    return "🌱 I'm here to help with your urban farming questions! Please try rephrasing your question.";

  } catch (error) {
    console.error("AI Service error:", error);
    return "🌱 I'm having trouble connecting right now. Please check your internet connection and try again.";
  }
}

export function generateMessageId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}