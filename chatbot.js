  // Show and hide the chatbox
  const chatbotIcon = document.querySelector('.chatbot-icon');
  const chatbox = document.getElementById('chatbox');
  const closeChatboxBtn = document.querySelector('.close-chatbox');

  chatbotIcon.addEventListener('click', () => {
    chatbox.style.display = 'block';
  });

  closeChatboxBtn.addEventListener('click', () => {
    chatbox.style.display = 'none';
  });

  // Chatbot responses based on user input
  const sendButton = document.getElementById('chatbot-send');
  const inputField = document.getElementById('chatbot-input');
  const chatboxMessages = document.getElementById('chatbox-messages');

  const responses = {
    "whales": "Whales are fascinating creatures. Did you know they can communicate using songs?",
    "marine life": "Marine life includes a diverse range of species, from tiny plankton to massive blue whales.",
    "conservation": "Marine conservation is critical to maintaining healthy oceans and protecting marine species.",
    "dolphins": "Dolphins are highly intelligent and social animals known for their playful behavior."
  };

  sendButton.addEventListener('click', () => {
    const userInput = inputField.value.toLowerCase();
    addMessage('User', userInput);

    let response = "I don't know about that, but I can tell you more about marine life!";
    Object.keys(responses).forEach(key => {
      if (userInput.includes(key)) {
        response = responses[key];
      }
    });

    setTimeout(() => {
      addMessage('Chatbot', response);
    }, 500);

    inputField.value = '';
  });

  function addMessage(sender, message) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = `${sender}: ${message}`;
    chatboxMessages.appendChild(messageDiv);
  }