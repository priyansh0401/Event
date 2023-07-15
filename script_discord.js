document.addEventListener('DOMContentLoaded', function() {
  var logoutButton = document.getElementById('logoutButton');
  var profileButton = document.getElementById('profileButton');
  var closeButton = document.getElementById('closeButton');
  var userProfileSection = document.getElementById('userProfileSection');

  logoutButton.addEventListener('click', function() {
    
    window.location.href = 'index.html'; 
  });

  profileButton.addEventListener('click', function() {
    userProfileSection.style.display = 'block';
  });

  closeButton.addEventListener('click', function() {
    userProfileSection.style.display = 'none';
  });

  var sendButton = document.getElementById('sendButton');
  var messageInput = document.getElementById('messageInput');
  var chatContainer = document.getElementById('chatContainer');

  sendButton.addEventListener('click', function() {
    var message = messageInput.value;
    if (message.trim() !== '') {
      addMessage('You', getCurrentTime(), message);
      messageInput.value = '';
    }
  });

  function addMessage(username, timestamp, message) {
    var messageElement = document.createElement('div');
    messageElement.classList.add('message');

    var messageUserElement = document.createElement('div');
    messageUserElement.classList.add('message-user');

    var avatarElement = document.createElement('img');
    avatarElement.src = 'avatar_user.jpeg';
    avatarElement.alt = 'User Avatar';
    avatarElement.classList.add('avatar');

    var usernameElement = document.createElement('span');
    usernameElement.classList.add('username');
    usernameElement.textContent = username;

    var timestampElement = document.createElement('span');
    timestampElement.classList.add('timestamp');
    timestampElement.textContent = timestamp;

    var messageContentElement = document.createElement('p');
    messageContentElement.classList.add('message-content');
    messageContentElement.textContent = message;

    messageUserElement.appendChild(avatarElement);
    messageUserElement.appendChild(usernameElement);
    messageElement.appendChild(messageUserElement);
    messageElement.appendChild(timestampElement);
    messageElement.appendChild(messageContentElement);

    chatContainer.appendChild(messageElement);

    chatContainer.scrollTop = chatContainer.scrollHeight;
  }

  function getCurrentTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    return hours + ':' + (minutes < 10 ? '0' : '') + minutes;
  }
});
