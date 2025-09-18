// free-llm.js
const HF_URL = "https://api-inference.huggingface.co/models/google/gemma-2b";

// Replace 'YOUR_READ_TOKEN_HERE' with your actual Hugging Face access token
const HF_HEADERS = {
  "Content-Type": "application/json",
  "Authorization": "Bearer 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" 
};

async function getAIResponse(message) {
  try {
    const response = await fetch(HF_URL, {
      method: "POST",
      headers: HF_HEADERS,
      body: JSON.stringify({
        inputs: message
      }),
    });

    const data = await response.json();

    // If model is loading
    if (data.error && data.error.includes("is loading")) {
      console.error(`Model is loading on Hugging Face, please retry in ~30s. 🤖: ${data.error}`);
      return "Model is loading on Hugging Face, please retry in ~30s.";
    }

    // If response is an array with generated text
    if (Array.isArray(data) && data[0]?.generated_text) {
      return data[0].generated_text;
    }

    // If response has "generated_text" directly
    if (data.generated_text) {
      return data.generated_text;
    }

    return "⚠️ No response from AI.";

  } catch (error) {
    console.error("Free LLM error:", error);
    return "❌ Error connecting to free AI.";
  }
}