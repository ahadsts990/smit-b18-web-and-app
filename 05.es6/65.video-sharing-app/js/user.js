function toggleStatus(id) {
  let videos = getData("videos");
  let user = getCurrentUser();

  let video = videos.find(v => v.id === id && v.userId === user.id);

  if (!video) {
    alert("Not allowed!");
    return;
  }

  // 🔄 toggle logic
  if (video.status === "public") {
    video.status = "private";
  } else {
    video.status = "public";
  }

  setData("videos", videos);

  alert("Status updated!");

  renderProfile();
}

function deleteVideo(id) {
  let videos = getData("videos");
  let user = getCurrentUser();

  // only delete your own video
  videos = videos.filter(v => !(v.id === id && v.userId === user.id));

  setData("videos", videos);

  alert("Video deleted!");

  renderProfile(); // refresh UI
}

function editVideo(id) {
  let videos = getData("videos");
  let user = getCurrentUser();

  let video = videos.find(v => v.id === id && v.userId === user.id);

  if (!video) {
    alert("Not allowed!");
    return;
  }

  let newTitle = prompt("Enter new title", video.title);
  let newDesc = prompt("Enter new description", video.description);

  if (newTitle !== null) video.title = newTitle;
  if (newDesc !== null) video.description = newDesc;

  setData("videos", videos);

  alert("Video updated!");

  renderProfile();
}

function renderProfile() {
  let user = getCurrentUser();
  let videos = getData("videos");

  let myVideos = videos.filter(v => v.userId === user.id);

  document.getElementById("username").innerText = user.username;
  document.getElementById("followers").innerText = user.followers.length;

  let container = document.getElementById("myVideos");

  container.innerHTML = ""; // ✅ IMPORTANT FIX

  myVideos.forEach(v => {
    container.innerHTML += `
    <div class="video">
    <h3>${v.title}</h3>
    <p>${v.views} views</p>

    <button onclick="editVideo(${v.id})">Edit</button>
    <button onclick="deleteVideo(${v.id})">Delete</button>
    <button onclick="toggleStatus(${v.id})">
  ${v.status === "public" ? "Make Private" : "Make Public"}
</button>
  </div>
`;
  });
}

function updateProfile() {
  let currentUser = getCurrentUser();
  let users = getData("users");

  let newUsername = document.getElementById("newUsername").value;
  let newPassword = document.getElementById("newPassword").value;

  let user = users.find(u => u.id === currentUser.id);

  if (!user) return;

  // update fields only if not empty
  if (newUsername.trim() !== "") {
    user.username = newUsername;
  }

  if (newPassword.trim() !== "") {
    user.password = newPassword;
  }

  setData("users", users);

  // update current session too
  setCurrentUser(user);

  alert("Profile updated!");

  // refresh UI
  renderProfile();
}
