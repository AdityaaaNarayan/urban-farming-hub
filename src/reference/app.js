// app.js

// app.js
import './free-llm.js';
import './index.html';
import './style.improved.css';

const chatWindow = document.getElementById("chat-window");
const plannerContent = document.getElementById("planner-content");
const plannerForm = document.getElementById("planner-form");
const userInput = document.getElementById("user-input"); // Get the input element once

// Use a single, corrected sendMessage function
async function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  addMessage("user", message);
  userInput.value = ""; // Clear input immediately after sending

  // Wait for AI response
  const aiReply = await getAIResponse(message);

  addMessage("ai", aiReply);

  // If AI creates a planner (case-insensitive check)
  if (aiReply.toLowerCase().includes("planner")) {
    // Note: This part of the code needs a way to get user data for the planner.
    // The current code is not set up to pass that from the chat.
    // It's likely better to keep the planner and chat functions separate for now.
    // generatePlanner(some_user_data_here);
  }
}

function addMessage(sender, text) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;
  chatWindow.appendChild(msg);
  chatWindow.scrollTop = chatWindow.scrollHeight; // Auto-scroll to the bottom
}

// Handle Planner Form
plannerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const roofSize = document.getElementById("roof-size").value;
  const sunlight = document.getElementById("sunlight").value;

  generatePlanner(roofSize, sunlight);
});

function generatePlanner(roofSize, sunlight) {
  let suggestion = "";

  if (sunlight < 3) {
    suggestion = "Best for shade-tolerant plants like spinach, lettuce, coriander.";
  } else if (sunlight <= 6) {
    suggestion = "Great for leafy greens, herbs, and small-fruit plants like tomatoes and chilies.";
  } else {
    suggestion = "Perfect for high-sun crops: cucumbers, peppers, beans, even rooftop melons!";
  }

  plannerContent.innerHTML = `
    <h3>🌿 Custom Rooftop Planner</h3>
    <p><b>Roof Size:</b> ${roofSize} sq.ft | <b>Sunlight:</b> ${sunlight} hrs/day</p>
    <ul>
      <li><b>Week 1:</b> Clean and prepare roof, set up lightweight soil containers.</li>
      <li><b>Week 2:</b> Install watering system (drip/sprinkler).</li>
      <li><b>Week 3:</b> Plant suggested crops → ${suggestion}</li>
      <li><b>Maintenance:</b> Water every 2 days, compost monthly, monitor pests.</li>
    </ul>
  `;
}