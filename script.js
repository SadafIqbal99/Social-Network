// App State
let currentUser = {
    id: 'user1',
    firstName: 'Alex',
    lastName: 'Morgan',
    username: 'alexmorgan',
    email: 'alex@example.com',
    profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150',
    coverPhoto: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200',
    bio: 'Digital Creator & Photography Enthusiast 📸',
    location: 'San Francisco, CA',
    work: 'Creative Director at PixelPerfect',
    education: 'Stanford University',
    relationship: 'Married',
    birthday: 'March 15, 1990',
    friends: ['user2', 'user3', 'user4', 'user5'],
    followers: 1200,
    following: 450,
    posts: 124,
    isOnline: true
};

// Sample Data
let posts = [
    {
        id: 'post1',
        userId: 'user1',
        content: 'Just got back from an amazing photoshoot at the Golden Gate Bridge! The sunset was absolutely perfect 🌅',
        media: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600',
        likes: ['user2', 'user3', 'user4', 'user5', 'user6'],
        comments: [
            {
                id: 'comment1',
                userId: 'user2',
                content: 'Wow! These shots are incredible! 🔥',
                timestamp: '2024-01-15T10:30:00Z',
                likes: ['user3', 'user4']
            },
            {
                id: 'comment2',
                userId: 'user3',
                content: 'The lighting is perfect!',
                timestamp: '2024-01-15T11:15:00Z',
                likes: ['user1', 'user5']
            }
        ],
        shares: 23,
        timestamp: '2024-01-15T09:00:00Z',
        privacy: 'public'
    },
    {
        id: 'post2',
        userId: 'user2',
        content: 'New camera gear day! Can\'t wait to test this out 📷',
        media: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600',
        likes: ['user1', 'user3', 'user4'],
        comments: [
            {
                id: 'comment3',
                userId: 'user1',
                content: 'Nice! What model did you get?',
                timestamp: '2024-01-14T15:20:00Z',
                likes: []
            }
        ],
        shares: 5,
        timestamp: '2024-01-14T14:00:00Z',
        privacy: 'public'
    },
    {
        id: 'post3',
        userId: 'user3',
        content: 'Beautiful morning hike in Yosemite! Nature is amazing 🏔️',
        media: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600',
        likes: ['user1', 'user2', 'user4', 'user6', 'user7'],
        comments: [
            {
                id: 'comment4',
                userId: 'user1',
                content: 'One of my favorite places!',
                timestamp: '2024-01-13T18:45:00Z',
                likes: ['user3']
            },
            {
                id: 'comment5',
                userId: 'user4',
                content: 'The views are breathtaking!',
                timestamp: '2024-01-13T19:30:00Z',
                likes: ['user3']
            }
        ],
        shares: 12,
        timestamp: '2024-01-13T16:00:00Z',
        privacy: 'public'
    }
];

let notifications = [
    {
        id: 'notif1',
        type: 'like',
        from: 'user2',
        content: 'Emma Watson liked your post',
        timestamp: '2024-01-15T11:30:00Z',
        read: false
    },
    {
        id: 'notif2',
        type: 'comment',
        from: 'user3',
        content: 'James Chen commented on your photo',
        timestamp: '2024-01-15T10:15:00Z',
        read: false
    },
    {
        id: 'notif3',
        type: 'friend_request',
        from: 'user4',
        content: 'Sarah Johnson sent you a friend request',
        timestamp: '2024-01-15T09:45:00Z',
        read: true
    },
    {
        id: 'notif4',
        type: 'share',
        from: 'user5',
        content: 'Mike Peters shared your post',
        timestamp: '2024-01-14T22:20:00Z',
        read: true
    },
    {
        id: 'notif5',
        type: 'mention',
        from: 'user6',
        content: 'Lisa Ray mentioned you in a comment',
        timestamp: '2024-01-14T18:30:00Z',
        read: false
    }
];

let friends = [
    {
        id: 'user2',
        name: 'Emma Watson',
        profilePic: 'https://images.unsplash.com/photo-1494790108777-296fd3c7e5e0?w=150',
        bio: 'Actor & Activist',
        status: 'online',
        mutualFriends: 15
    },
    {
        id: 'user3',
        name: 'James Chen',
        profilePic: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
        bio: 'Software Engineer',
        status: 'offline',
        mutualFriends: 8
    },
    {
        id: 'user4',
        name: 'Sarah Johnson',
        profilePic: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
        bio: 'Digital Artist',
        status: 'online',
        mutualFriends: 23
    },
    {
        id: 'user5',
        name: 'Mike Peters',
        profilePic: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
        bio: 'Travel Photographer',
        status: 'online',
        mutualFriends: 5
    },
    {
        id: 'user6',
        name: 'Lisa Ray',
        profilePic: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150',
        bio: 'Fashion Designer',
        status: 'offline',
        mutualFriends: 12
    }
];

let friendRequests = [
    {
        id: 'req1',
        from: 'user7',
        name: 'David Kim',
        profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
        bio: 'Music Producer',
        mutualFriends: 7
    },
    {
        id: 'req2',
        from: 'user8',
        name: 'Anna Martinez',
        profilePic: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=150',
        bio: 'Fitness Coach',
        mutualFriends: 3
    },
    {
        id: 'req3',
        from: 'user9',
        name: 'Tom Wilson',
        profilePic: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150',
        bio: 'Chef & Food Blogger',
        mutualFriends: 11
    }
];

let conversations = [
    {
        id: 'conv1',
        participants: ['user1', 'user2'],
        messages: [
            {
                id: 'msg1',
                senderId: 'user2',
                content: 'Hey! How\'s it going?',
                timestamp: '2024-01-15T10:30:00Z',
                read: true
            },
            {
                id: 'msg2',
                senderId: 'user1',
                content: 'Great! Just working on some photos',
                timestamp: '2024-01-15T10:32:00Z',
                read: true
            },
            {
                id: 'msg3',
                senderId: 'user2',
                content: 'Awesome! Can\'t wait to see them',
                timestamp: '2024-01-15T10:33:00Z',
                read: true
            }
        ]
    },
    {
        id: 'conv2',
        participants: ['user1', 'user3'],
        messages: [
            {
                id: 'msg4',
                senderId: 'user3',
                content: 'Did you see the new camera release?',
                timestamp: '2024-01-14T15:20:00Z',
                read: true
            },
            {
                id: 'msg5',
                senderId: 'user1',
                content: 'Yes! The specs look amazing',
                timestamp: '2024-01-14T15:25:00Z',
                read: true
            }
        ]
    }
];

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    loadFeed();
    loadFriends();
    loadNotifications();
    loadSuggestions();
    loadOnlineFriends();
    updateUI();
    startRealTimeSimulation();
});

// UI Update Functions
function updateUI() {
    // Update profile information
    document.getElementById('navUsername').textContent = currentUser.firstName;
    document.getElementById('navProfilePic').src = currentUser.profilePic;
    document.getElementById('sidebarProfilePic').src = currentUser.profilePic;
    document.getElementById('sidebarName').textContent = `${currentUser.firstName} ${currentUser.lastName}`;
    document.getElementById('sidebarBio').textContent = currentUser.bio;
    document.getElementById('postProfilePic').src = currentUser.profilePic;
    
    // Update profile page
    document.getElementById('profilePic').src = currentUser.profilePic;
    document.getElementById('profileName').textContent = `${currentUser.firstName} ${currentUser.lastName}`;
    document.getElementById('profileBio').textContent = currentUser.bio;
    
    // Update stats
    document.getElementById('postCount').textContent = currentUser.posts;
    document.getElementById('friendCount').textContent = currentUser.friends.length;
    document.getElementById('followerCount').textContent = currentUser.followers + 'k';
    
    // Update badges
    document.getElementById('friendRequestBadge').textContent = friendRequests.length;
    document.getElementById('notificationBadge').textContent = notifications.filter(n => !n.read).length;
    document.getElementById('requestCount').textContent = friendRequests.length;
    document.getElementById('onlineCount').textContent = friends.filter(f => f.status === 'online').length + ' online';
}

// Feed Functions
function showFeed() {
    hideAllViews();
    document.getElementById('feedView').style.display = 'block';
    renderPosts();
}

function renderPosts() {
    const container = document.getElementById('postsContainer');
    container.innerHTML = '';
    
    posts.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
        .forEach(post => {
            const postElement = createPostElement(post);
            container.appendChild(postElement);
        });
}

function createPostElement(post) {
    const postDiv = document.createElement('div');
    postDiv.className = 'post-card';
    postDiv.dataset.postId = post.id;
    
    const user = findUserById(post.userId);
    const isLiked = post.likes.includes(currentUser.id);
    
    postDiv.innerHTML = `
        <div class="post-header">
            <img src="${user?.profilePic || currentUser.profilePic}" alt="${user?.name || 'User'}" onclick="viewProfile('${post.userId}')">
            <div class="post-info">
                <h4 onclick="viewProfile('${post.userId}')">${user?.name || `${currentUser.firstName} ${currentUser.lastName}`}</h4>
                <small><i class="far fa-clock"></i> ${formatTime(post.timestamp)} · ${getPrivacyIcon(post.privacy)}</small>
            </div>
        </div>
        <div class="post-content">
            <p>${post.content}</p>
        </div>
        ${post.media ? `
            <div class="post-media" onclick="openMediaViewer('${post.media}')">
                <img src="${post.media}" alt="Post media">
            </div>
        ` : ''}
        <div class="post-stats">
            <span><i class="fas fa-thumbs-up"></i> ${post.likes.length} likes</span>
            <span><i class="fas fa-comment"></i> ${post.comments.length} comments</span>
            <span><i class="fas fa-share"></i> ${post.shares} shares</span>
        </div>
        <div class="post-actions-bottom">
            <button class="post-action-bottom ${isLiked ? 'liked' : ''}" onclick="toggleLike('${post.id}')">
                <i class="fas fa-thumbs-up"></i> ${isLiked ? 'Liked' : 'Like'}
            </button>
            <button class="post-action-bottom" onclick="openComments('${post.id}')">
                <i class="fas fa-comment"></i> Comment
            </button>
            <button class="post-action-bottom" onclick="sharePost('${post.id}')">
                <i class="fas fa-share"></i> Share
            </button>
        </div>
        <div class="comments-section" id="comments-${post.id}" style="display: none;">
            ${renderComments(post.comments)}
        </div>
    `;
    
    return postDiv;
}

function renderComments(comments) {
    if (!comments || comments.length === 0) return '';
    
    return comments.map(comment => {
        const user = findUserById(comment.userId);
        return `
            <div class="comment">
                <img src="${user?.profilePic || currentUser.profilePic}" alt="${user?.name || 'User'}" onclick="viewProfile('${comment.userId}')">
                <div class="comment-content">
                    <h5 onclick="viewProfile('${comment.userId}')">${user?.name || 'User'}</h5>
                    <p>${comment.content}</p>
                    <div class="comment-actions">
                        <span onclick="likeComment('${comment.id}')"><i class="far fa-thumbs-up"></i> ${comment.likes?.length || 0}</span>
                        <span onclick="replyToComment('${comment.id}')">Reply</span>
                        <span>${formatTime(comment.timestamp)}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function toggleLike(postId) {
    const post = posts.find(p => p.id === postId);
    if (!post) return;
    
    const index = post.likes.indexOf(currentUser.id);
    if (index === -1) {
        post.likes.push(currentUser.id);
        createNotification('like', `${currentUser.firstName} liked your post`, post.userId);
        
        // Add animation
        const button = event.target.closest('.post-action-bottom');
        button.classList.add('like-animation');
        setTimeout(() => button.classList.remove('like-animation'), 300);
    } else {
        post.likes.splice(index, 1);
    }
    
    renderPosts();
}

function openComments(postId) {
    const commentsSection = document.getElementById(`comments-${postId}`);
    if (commentsSection) {
        commentsSection.style.display = commentsSection.style.display === 'none' ? 'block' : 'none';
    }
    
    const modal = document.getElementById('commentModal');
    const commentsContainer = document.getElementById('commentsContainer');
    const post = posts.find(p => p.id === postId);
    
    if (post) {
        commentsContainer.innerHTML = post.comments.map(comment => {
            const user = findUserById(comment.userId);
            return `
                <div class="comment">
                    <img src="${user?.profilePic || currentUser.profilePic}" alt="${user?.name || 'User'}">
                    <div class="comment-content">
                        <h5>${user?.name || 'User'}</h5>
                        <p>${comment.content}</p>
                        <div class="comment-actions">
                            <span><i class="far fa-thumbs-up"></i> ${comment.likes?.length || 0}</span>
                            <span>Reply</span>
                            <span>${formatTime(comment.timestamp)}</span>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }
    
    modal.classList.add('active');
    modal.dataset.postId = postId;
}

function addComment() {
    const modal = document.getElementById('commentModal');
    const postId = modal.dataset.postId;
    const commentInput = document.getElementById('commentInput');
    const content = commentInput.value;
    
    if (!content.trim()) return;
    
    const post = posts.find(p => p.id === postId);
    if (!post) return;
    
    const comment = {
        id: 'c' + Date.now(),
        userId: currentUser.id,
        content: content,
        timestamp: new Date().toISOString(),
        likes: []
    };
    
    if (!post.comments) post.comments = [];
    post.comments.push(comment);
    
    commentInput.value = '';
    openComments(postId);
    
    if (post.userId !== currentUser.id) {
        createNotification('comment', `${currentUser.firstName} commented on your post`, post.userId);
    }
}

function sharePost(postId) {
    const post = posts.find(p => p.id === postId);
    if (post) {
        post.shares++;
        createNotification('share', `${currentUser.firstName} shared your post`, post.userId);
        alert('Post shared successfully!');
    }
}

// Friend Functions
function showFriends() {
    hideAllViews();
    document.getElementById('friendsView').style.display = 'block';
    showAllFriends();
}

function showAllFriends() {
    const container = document.getElementById('friendsContainer');
    container.innerHTML = '';
    
    friends.forEach(friend => {
        const friendCard = createFriendCard(friend);
        container.appendChild(friendCard);
    });
}

function showFriendRequests() {
    const container = document.getElementById('friendsContainer');
    container.innerHTML = '';
    
    friendRequests.forEach(request => {
        const requestCard = document.createElement('div');
        requestCard.className = 'friend-card';
        requestCard.innerHTML = `
            <span class="friend-status ${request.status || 'online'}"></span>
            <img src="${request.profilePic}" alt="${request.name}">
            <h4>${request.name}</h4>
            <p>${request.bio}</p>
            <p class="mutual-friends"><i class="fas fa-user-friends"></i> ${request.mutualFriends} mutual friends</p>
            <div class="friend-actions">
                <button class="accept-btn" onclick="acceptFriendRequest('${request.id}')">
                    <i class="fas fa-check"></i> Accept
                </button>
                <button class="decline-btn" onclick="declineFriendRequest('${request.id}')">
                    <i class="fas fa-times"></i> Decline
                </button>
            </div>
        `;
        container.appendChild(requestCard);
    });
    
    // Update active tab
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

function showSuggestions() {
    const container = document.getElementById('friendsContainer');
    container.innerHTML = '';
    
    // Sample suggestions
    const suggestions = [
        {
            id: 's1',
            name: 'Chris Evans',
            profilePic: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
            bio: 'Actor',
            mutualFriends: 8
        },
        {
            id: 's2',
            name: 'Natalie Portman',
            profilePic: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=150',
            bio: 'Actor & Director',
            mutualFriends: 12
        },
        {
            id: 's3',
            name: 'Tom Holland',
            profilePic: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150',
            bio: 'Actor',
            mutualFriends: 5
        }
    ];
    
    suggestions.forEach(suggestion => {
        const suggestionCard = document.createElement('div');
        suggestionCard.className = 'friend-card';
        suggestionCard.innerHTML = `
            <img src="${suggestion.profilePic}" alt="${suggestion.name}">
            <h4>${suggestion.name}</h4>
            <p>${suggestion.bio}</p>
            <p class="mutual-friends"><i class="fas fa-user-friends"></i> ${suggestion.mutualFriends} mutual friends</p>
            <div class="friend-actions">
                <button class="accept-btn" onclick="sendFriendRequest('${suggestion.id}')">
                    <i class="fas fa-user-plus"></i> Add Friend
                </button>
                <button class="message-btn" onclick="startChat('${suggestion.id}')">
                    <i class="fas fa-comment"></i> Message
                </button>
            </div>
        `;
        container.appendChild(suggestionCard);
    });
    
    // Update active tab
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

function createFriendCard(friend) {
    const card = document.createElement('div');
    card.className = 'friend-card';
    
    card.innerHTML = `
        <span class="friend-status ${friend.status}"></span>
        <img src="${friend.profilePic}" alt="${friend.name}" onclick="viewProfile('${friend.id}')">
        <h4 onclick="viewProfile('${friend.id}')">${friend.name}</h4>
        <p>${friend.bio}</p>
        <p class="mutual-friends"><i class="fas fa-user-friends"></i> ${friend.mutualFriends} mutual friends</p>
        <div class="friend-actions">
            <button class="message-btn" onclick="startChat('${friend.id}')">
                <i class="fas fa-comment"></i> Message
            </button>
            <button class="remove-btn" onclick="removeFriend('${friend.id}')">
                <i class="fas fa-user-minus"></i>
            </button>
        </div>
    `;
    
    return card;
}

function acceptFriendRequest(requestId) {
    const index = friendRequests.findIndex(r => r.id === requestId);
    if (index !== -1) {
        const accepted = friendRequests[index];
        friendRequests.splice(index, 1);
        
        // Add to friends list
        friends.push({
            id: accepted.from,
            name: accepted.name,
            profilePic: accepted.profilePic,
            bio: accepted.bio,
            status: 'online',
            mutualFriends: accepted.mutualFriends
        });
        
        createNotification('friend_accept', `${currentUser.firstName} accepted your friend request`, accepted.from);
        updateUI();
        showFriendRequests();
    }
}

function declineFriendRequest(requestId) {
    const index = friendRequests.findIndex(r => r.id === requestId);
    if (index !== -1) {
        friendRequests.splice(index, 1);
        updateUI();
        showFriendRequests();
    }
}

function sendFriendRequest(userId) {
    createNotification('friend_request', `${currentUser.firstName} sent you a friend request`, userId);
    alert('Friend request sent!');
}

function removeFriend(friendId) {
    if (confirm('Are you sure you want to remove this friend?')) {
        const index = friends.findIndex(f => f.id === friendId);
        if (index !== -1) {
            friends.splice(index, 1);
            updateUI();
            showAllFriends();
        }
    }
}

// Notification Functions
function showNotifications() {
    hideAllViews();
    document.getElementById('notificationsView').style.display = 'block';
    renderNotifications();
}

function renderNotifications() {
    const container = document.getElementById('notificationsContainer');
    container.innerHTML = '';
    
    notifications.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
        .forEach(notification => {
            const notifElement = createNotificationElement(notification);
            container.appendChild(notifElement);
        });
    
    updateUI();
}

function createNotificationElement(notification) {
    const div = document.createElement('div');
    div.className = `notification-item ${notification.read ? '' : 'unread'}`;
    div.onclick = () => markNotificationAsRead(notification.id);
    
    const user = findUserById(notification.from) || { name: 'Someone', profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50' };
    
    div.innerHTML = `
        <img src="${user.profilePic}" alt="${user.name}">
        <div class="notification-content">
            <p>${notification.content}</p>
            <small>${formatTime(notification.timestamp)}</small>
        </div>
        ${!notification.read ? '<span class="unread-dot"></span>' : ''}
    `;
    
    return div;
}

function createNotification(type, content, userId = null) {
    const notification = {
        id: 'n' + Date.now(),
        type,
        content,
        from: currentUser.id,
        to: userId || 'all',
        read: false,
        timestamp: new Date().toISOString()
    };
    
    notifications.unshift(notification);
    updateUI();
    
    // Show browser notification if permitted
    if (Notification.permission === 'granted') {
        new Notification('SocialNet', {
            body: content,
            icon: currentUser.profilePic
        });
    }
}

function markNotificationAsRead(notificationId) {
    const notification = notifications.find(n => n.id === notificationId);
    if (notification) {
        notification.read = true;
        renderNotifications();
    }
}

function markAllAsRead() {
    notifications.forEach(n => n.read = true);
    renderNotifications();
}

// Message Functions
function showMessages() {
    hideAllViews();
    document.getElementById('messagesView').style.display = 'block';
    loadConversations();
}

function loadConversations() {
    const conversationsList = document.getElementById('conversationsList');
    conversationsList.innerHTML = '';
    
    conversations.forEach(conv => {
        const otherUserId = conv.participants.find(id => id !== currentUser.id);
        const otherUser = friends.find(f => f.id === otherUserId) || {
            name: 'Unknown User',
            profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50'
        };
        const lastMessage = conv.messages[conv.messages.length - 1];
        
        const convElement = document.createElement('div');
        convElement.className = 'conversation-item';
        convElement.onclick = () => openConversation(conv.id);
        
        convElement.innerHTML = `
            <img src="${otherUser.profilePic}" alt="${otherUser.name}">
            <div class="conversation-info">
                <h4>${otherUser.name}</h4>
                <p>${lastMessage ? lastMessage.content : 'No messages yet'}</p>
            </div>
            <span class="conversation-time">${lastMessage ? formatTime(lastMessage.timestamp) : ''}</span>
        `;
        
        conversationsList.appendChild(convElement);
    });
}

function openConversation(conversationId) {
    const conversation = conversations.find(c => c.id === conversationId);
    if (!conversation) return;
    
    const otherUserId = conversation.participants.find(id => id !== currentUser.id);
    const otherUser = friends.find(f => f.id === otherUserId) || {
        name: 'Unknown User',
        profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50'
    };
    
    document.getElementById('chatHeader').innerHTML = `
        <div class="chat-user-info">
            <img src="${otherUser.profilePic}" alt="${otherUser.name}">
            <div>
                <h4>${otherUser.name}</h4>
                <span class="online-status ${otherUser.status || 'online'}">${otherUser.status || 'Online'}</span>
            </div>
        </div>
        <div class="chat-actions">
            <button onclick="startVideoCall('${otherUserId}')"><i class="fas fa-video"></i></button>
            <button onclick="showUserInfo('${otherUserId}')"><i class="fas fa-info-circle"></i></button>
        </div>
    `;
    
    renderMessages(conversation);
}

function renderMessages(conversation) {
    const messagesContainer = document.getElementById('chatMessages');
    messagesContainer.innerHTML = '';
    
    conversation.messages.forEach(message => {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${message.senderId === currentUser.id ? 'sent' : 'received'}`;
        
        if (message.senderId !== currentUser.id) {
            const sender = friends.find(f => f.id === message.senderId) || {
                profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50'
            };
            messageDiv.innerHTML = `
                <img src="${sender.profilePic}" alt="Sender">
                <div class="message-content">
                    <p>${message.content}</p>
                    <span class="message-time">${formatTime(message.timestamp)}</span>
                </div>
            `;
        } else {
            messageDiv.innerHTML = `
                <div class="message-content">
                    <p>${message.content}</p>
                    <span class="message-time">${formatTime(message.timestamp)}</span>
                </div>
            `;
        }
        
        messagesContainer.appendChild(messageDiv);
    });
    
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById('messageInput');
    const content = input.value;
    
    if (!content.trim()) return;
    
    // Simplified: using first conversation
    const conversation = conversations[0];
    
    if (conversation) {
        const message = {
            id: 'm' + Date.now(),
            senderId: currentUser.id,
            content: content,
            timestamp: new Date().toISOString(),
            read: false
        };
        
        conversation.messages.push(message);
        input.value = '';
        renderMessages(conversation);
        loadConversations();
    }
}

function newChat() {
    alert('Start a new conversation! (Demo feature)');
}

function startChat(userId) {
    showMessages();
    // Find or create conversation
    let conversation = conversations.find(c => 
        c.participants.includes(currentUser.id) && c.participants.includes(userId)
    );
    
    if (!conversation) {
        conversation = {
            id: 'conv' + Date.now(),
            participants: [currentUser.id, userId],
            messages: []
        };
        conversations.push(conversation);
    }
    
    openConversation(conversation.id);
}

// Profile Functions
function showProfile() {
    hideAllViews();
    document.getElementById('profileView').style.display = 'block';
    showProfilePosts();
}

function showProfilePosts() {
    document.getElementById('profileAbout').style.display = 'none';
    document.getElementById('profilePostsContainer').style.display = 'block';
    
    const container = document.getElementById('profilePostsContainer');
    container.innerHTML = '';
    
    const userPosts = posts.filter(p => p.userId === currentUser.id)
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    
    userPosts.forEach(post => {
        const postElement = createPostElement(post);
        container.appendChild(postElement);
    });
    
    // Update active tab
    document.querySelectorAll('.profile-tab').forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
}

function showProfileAbout() {
    document.getElementById('profilePostsContainer').style.display = 'none';
    document.getElementById('profileAbout').style.display = 'block';
    
    // Update active tab
    document.querySelectorAll('.profile-tab').forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
}

function editProfile() {
    const newBio = prompt('Enter your bio:', currentUser.bio);
    if (newBio !== null) {
        currentUser.bio = newBio;
        updateUI();
        showProfile();
    }
}

function editCover() {
    alert('Change cover photo feature (Demo)');
}

function addToStory() {
    alert('Add to story feature (Demo)');
}

// Search Function
document.getElementById('searchInput').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    if (query.length < 2) return;
    
    const results = friends.filter(f => 
        f.name.toLowerCase().includes(query)
    );
    
    // Could display search results dropdown here
    console.log('Search results:', results);
});

// Sidebar Functions
function loadSuggestions() {
    const container = document.getElementById('suggestionsContainer');
    container.innerHTML = '';
    
    const suggestions = [
        {
            id: 's1',
            name: 'Chris Evans',
            profilePic: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
            bio: 'Actor',
            mutualFriends: 8
        },
        {
            id: 's2',
            name: 'Natalie Portman',
            profilePic: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=150',
            bio: 'Actor & Director',
            mutualFriends: 12
        },
        {
            id: 's3',
            name: 'Tom Holland',
            profilePic: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150',
            bio: 'Actor',
            mutualFriends: 5
        }
    ];
    
    suggestions.forEach(suggestion => {
        const suggestionElement = document.createElement('div');
        suggestionElement.className = 'suggestion-item';
        suggestionElement.innerHTML = `
            <img src="${suggestion.profilePic}" alt="${suggestion.name}">
            <div class="suggestion-info">
                <h4>${suggestion.name}</h4>
                <p>${suggestion.mutualFriends} mutual friends</p>
            </div>
            <button class="add-friend-btn" onclick="sendFriendRequest('${suggestion.id}')">
                <i class="fas fa-user-plus"></i>
            </button>
        `;
        container.appendChild(suggestionElement);
    });
}

function loadOnlineFriends() {
    const container = document.getElementById('onlineFriendsContainer');
    container.innerHTML = '';
    
    const onlineFriends = friends.filter(f => f.status === 'online');
    
    onlineFriends.forEach(friend => {
        const friendElement = document.createElement('div');
        friendElement.className = 'online-friend-item';
        friendElement.onclick = () => startChat(friend.id);
        friendElement.innerHTML = `
            <img src="${friend.profilePic}" alt="${friend.name}">
            <div class="suggestion-info">
                <h4>${friend.name}</h4>
            </div>
            <span class="online-status"></span>
        `;
        container.appendChild(friendElement);
    });
}

// Modal Functions
function openMediaUpload() {
    openModal('postModal');
}

function openVideoUpload() {
    alert('Video upload feature (Demo)');
}

function openFeeling() {
    alert('Feeling/Activity feature (Demo)');
}

function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

function submitPost() {
    const content = document.getElementById('modalPostContent').value;
    const privacy = document.querySelector('.privacy-select').value;
    
    if (!content.trim()) return;
    
    const newPost = {
        id: 'p' + Date.now(),
        userId: currentUser.id,
        content: content,
        likes: [],
        comments: [],
        shares: 0,
        timestamp: new Date().toISOString(),
        privacy: privacy
    };
    
    posts.unshift(newPost);
    
    closeModal('postModal');
    document.getElementById('modalPostContent').value = '';
    
    if (document.getElementById('feedView').style.display !== 'none') {
        renderPosts();
    }
    
    createNotification('post', `${currentUser.firstName} created a new post`);
}

function openMediaViewer(mediaUrl) {
    const modal = document.getElementById('mediaViewer');
    const image = document.getElementById('mediaViewerImage');
    image.src = mediaUrl;
    modal.classList.add('active');
}

// View Functions
function hideAllViews() {
    document.getElementById('feedView').style.display = 'none';
    document.getElementById('friendsView').style.display = 'none';
    document.getElementById('notificationsView').style.display = 'none';
    document.getElementById('messagesView').style.display = 'none';
    document.getElementById('profileView').style.display = 'none';
    
    // Update active menu
    document.querySelectorAll('.menu-item').forEach(item => item.classList.remove('active'));
}

function viewProfile(userId) {
    if (userId === currentUser.id) {
        showProfile();
    } else {
        alert(`Viewing profile of user ${userId} (Demo)`);
    }
}

// Utility Functions
function findUserById(userId) {
    if (userId === currentUser.id) {
        return {
            name: `${currentUser.firstName} ${currentUser.lastName}`,
            profilePic: currentUser.profilePic
        };
    }
    return friends.find(f => f.id === userId);
}

function formatTime(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;
    
    if (diff < 60000) return 'Just now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
    if (diff < 604800000) return `${Math.floor(diff / 86400000)}d ago`;
    
    return date.toLocaleDateString();
}

function getPrivacyIcon(privacy) {
    switch(privacy) {
        case 'public': return '🌎 Public';
        case 'friends': return '👥 Friends';
        case 'private': return '🔒 Only me';
        default: return '🌎 Public';
    }
}

// Real-time Simulation
function startRealTimeSimulation() {
    // Request notification permission
    if (Notification.permission === 'default') {
        Notification.requestPermission();
    }
    
    // Simulate incoming notifications
    setInterval(() => {
        if (Math.random() > 0.7) {
            const randomFriend = friends[Math.floor(Math.random() * friends.length)];
            const actions = ['liked your post', 'commented on your photo', 'shared your post'];
            const action = actions[Math.floor(Math.random() * actions.length)];
            
            createNotification('simulated', `${randomFriend.name} ${action}`);
        }
    }, 30000);
    
    // Simulate online status changes
    setInterval(() => {
        friends.forEach(friend => {
            friend.status = Math.random() > 0.3 ? 'online' : 'offline';
        });
        updateUI();
        loadOnlineFriends();
    }, 20000);
}

// Menu Navigation Functions
function showMessenger() {
    showMessages();
}

function showSaved() {
    alert('Saved items feature (Demo)');
}

function showEvents() {
    alert('Events feature (Demo)');
}

function showGroups() {
    alert('Groups feature (Demo)');
}

function showMarketplace() {
    alert('Marketplace feature (Demo)');
}

function showSettings() {
    alert('Settings feature (Demo)');
}

function showAllSuggestions() {
    alert('View all suggestions (Demo)');
}

function showProfileFriends() {
    alert('Friends list on profile (Demo)');
}

function showProfilePhotos() {
    alert('Photos gallery (Demo)');
}

function showProfileVideos() {
    alert('Videos gallery (Demo)');
}

function showProfileMore() {
    alert('More profile sections (Demo)');
}

function showMoreOptions() {
    alert('More options (Demo)');
}

function startVideoCall(userId) {
    alert(`Starting video call with user ${userId} (Demo)`);
}

function showUserInfo(userId) {
    alert(`Showing info for user ${userId} (Demo)`);
}

function addPhoto() {
    alert('Add photo feature (Demo)');
}

function addVideo() {
    alert('Add video feature (Demo)');
}

function addFeeling() {
    alert('Add feeling/activity (Demo)');
}

function addLocation() {
    alert('Add location (Demo)');
}

function likeComment(commentId) {
    alert('Like comment feature (Demo)');
}

function replyToComment(commentId) {
    alert('Reply to comment feature (Demo)');
}

// Initialize click handlers for menu items
document.addEventListener('DOMContentLoaded', () => {
    // Set active menu item based on current view
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
});