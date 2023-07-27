document.addEventListener('DOMContentLoaded', function() {
  var sendButton = document.getElementById('sendButton');
  var messageInput = document.getElementById('messageInput');
  var chatContainer = document.getElementById('chatContainer');
  var currentChannel = document.getElementById('currentChannel');
  var userProfileSection = document.getElementById('userProfileSection');
  var settingsSection = document.getElementById('settingsSection');
  var closeButton = document.getElementById('closeButton');
  var closeSettingsButton = document.getElementById('closeSettingsButton');
  var createChannelButton = document.getElementById('createChannelButton');
  var channelList = document.querySelector('.channel-list');

  // Sample channels data
  var channels = [
    { name: 'General', messages: [] },
    { name: 'Random', messages: [] },
    { name: 'Announcements', messages: [] },
    { name: 'Music', messages: [] },
    { name: 'Movies', messages: [] },
    { name: 'Gaming', messages: [] }
    // Add more channels here
  ];

  // Sample servers data with icons
  var servers = [
    { icon: 's1.jpg', channels: ['General', 'Random', 'Announcements', 'Music'] },
    { icon: 's2.jpg', channels: ['General', 'Random', 'Movies', 'Gaming'] }
    // Add more servers and their channels here
  ];

  // Populate server icons in the sidebar
  var serverList = document.querySelector('.server-list');
  servers.forEach(function(server, index) {
    var serverItem = document.createElement('li');
    serverItem.className = 'server';
    serverItem.dataset.server = `server${index + 1}`;
    var serverIcon = document.createElement('img');
    serverIcon.src = server.icon;
    serverIcon.alt = 'Server Icon';
    serverItem.appendChild(serverIcon);
    serverItem.addEventListener('click', function() {
      displayServerChannels(server.channels);
    });
    serverList.appendChild(serverItem);

    // Smooth hover effect for server icons
    serverItem.addEventListener('mouseenter', function() {
      serverItem.style.width = '70px';
      serverItem.style.height = '70px';
    });
    serverItem.addEventListener('mouseleave', function() {
      serverItem.style.width = '60px';
      serverItem.style.height = '60px';
    });
  });

  function displayServerChannels(channels) {
    channelList.innerHTML = '';

    channels.forEach(function(channel) {
      var channelItem = document.createElement('li');
      channelItem.className = 'channel';
      channelItem.dataset.channel = channel;
      channelItem.innerHTML = `<i class="fas fa-comments"></i><span class="channel-name">${channel}</span>`;
      channelItem.addEventListener('click', function() {
        currentChannel.textContent = `# ${channel}`;
        displayChannelMessages([]);
      });
      channelList.appendChild(channelItem);

      // Smooth hover effect for channel names
      channelItem.addEventListener('mouseenter', function() {
        channelItem.style.fontSize = '18px';
      });
      channelItem.addEventListener('mouseleave', function() {
        channelItem.style.fontSize = '16px';
      });
    });
  }

  function displayChannelMessages(messages) {
    chatContainer.innerHTML = '';

    messages.forEach(function(message) {
      var messageItem = document.createElement('div');
      messageItem.className = 'message';

      var senderElement = document.createElement('span');
      senderElement.className = 'sender';
      senderElement.textContent = message.sender;

      var contentElement = document.createElement('span');
      contentElement.textContent = message.content;

      messageItem.appendChild(senderElement);
      messageItem.appendChild(contentElement);

      chatContainer.appendChild(messageItem);
    });
  }

  sendButton.addEventListener('click', function() {
    var messageContent = messageInput.value.trim();
    if (messageContent !== '') {
      var newMessage = {
        sender: 'You', // For simplicity, assuming the user sent the message
        content: messageContent
      };
      channels[0].messages.push(newMessage); // Assuming the first channel (General) is selected
      displayChannelMessages(channels[0].messages);
      messageInput.value = '';
    }
  });

  // Initial display of the General channel messages
  displayChannelMessages(channels[0].messages);

  // User profile button functionality
  document.getElementById('profileButton').addEventListener('click', function() {
    userProfileSection.classList.toggle('active');
  });

  // Settings button functionality
  document.getElementById('settingsButton').addEventListener('click', function() {
    settingsSection.classList.toggle('active');
  });

  // Close button functionality for the user profile section
  closeButton.addEventListener('click', function() {
    userProfileSection.classList.remove('active');
  });

  // Close button functionality for the settings section
  closeSettingsButton.addEventListener('click', function() {
    settingsSection.classList.remove('active');
  });

  // Create Channel button functionality
  createChannelButton.addEventListener('click', function() {
    var newChannelName = prompt('Enter the name for the new channel:');
    if (newChannelName) {
      var newChannel = { name: newChannelName, messages: [] };
      channels.push(newChannel);

      var newChannelItem = document.createElement('li');
      newChannelItem.className = 'channel';
      newChannelItem.dataset.channel = `channel${channels.length}`;
      newChannelItem.innerHTML = `<i class="fas fa-comments"></i><span class="channel-name">${newChannel.name}</span>`;
      newChannelItem.addEventListener('click', function() {
        currentChannel.textContent = `# ${newChannel.name}`;
        displayChannelMessages(newChannel.messages);
      });
      newChannelItem.addEventListener('mouseenter', function() {
        newChannelItem.style.fontSize = '18px';
      });
      newChannelItem.addEventListener('mouseleave', function() {
        newChannelItem.style.fontSize = '16px';
      });

      channelList.appendChild(newChannelItem);
    }
  });

  messageInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      sendButton.click();
    }
  });
});
