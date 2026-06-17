function timeAgo(date) {
    let seconds = Math.floor((new Date() - new Date(date)) / 1000);

    let intervals = [
        { label: "year", seconds: 31536000 },
        { label: "month", seconds: 2592000 },
        { label: "day", seconds: 86400 },
        { label: "hour", seconds: 3600 },
        { label: "minute", seconds: 60 },
        { label: "second", seconds: 1 }
    ];

    for (let i of intervals) {
        let count = Math.floor(seconds / i.seconds);
        if (count > 0) {
            return count + " " + i.label + (count > 1 ? "s" : "") + " ago";
        }
    }

    return "Just now";
}

function uploadVideo(e) {
  e.preventDefault();

  let videos = getData("videos");
  let user = getCurrentUser();

  let thumbnailFile = document.getElementById("thumbnail").files[0];
  let videoFile = document.getElementById("videoFile").files[0];
  let statusValue = document.getElementById("status").value;

  if (!thumbnailFile || !videoFile) {
    alert("Please select files");
    return;
  }

  let thumbReader = new FileReader();
  let videoReader = new FileReader();

  // Step 1: Read Thumbnail
  thumbReader.onload = function () {
    let thumbnailData = thumbReader.result;

    // Step 2: Read Video
    videoReader.onload = function () {
      let videoData = videoReader.result;

      let video = {
        id: Date.now(),
        userId: user.id,
        title: title.value,
        description: description.value,
        thumbnail: thumbnailData, // BASE64
        videoUrl: videoData,      // BASE64
        status: status.value,
        views: 0,
        likes: [],
        comments: [],
        status: statusValue
      };

      videos.push(video);
      setData("videos", videos);

      alert("Uploaded Successfully!");
    };

    videoReader.readAsDataURL(videoFile);
  };

  thumbReader.readAsDataURL(thumbnailFile);
  window.location.href = "index.html";

}

function shareVideo(videoId) {
  let url = `${window.location.origin}/video.html?id=${videoId}`;

  navigator.clipboard.writeText(url)
    .then(() => {
      alert("Link copied to clipboard!");
    })
    .catch(() => {
      alert("Copy failed");
    });
}

function renderVideos(list = null) {
  let videos = list || getData("videos");
  let container = document.getElementById("videos");

  container.innerHTML = "";

  videos.forEach(v => {
    if (v.status === "private") return;

    container.innerHTML += `
      <div class="video">
        <img src="${v.thumbnail}" width="200"><br>
        <h3>${v.title}</h3>
         <p>${v.views} views • ${timeAgo(v.id)}</p>
        <p>${v.comments.length} comments</p>
        <button onclick="shareVideo(${v.id})">Share</button>
        <button onclick="likeVideo(${v.id})">Like (${v.likes.length})</button>
        <button onclick="viewVideo(${v.id})">Watch</button>
      </div>
    `;
  });
}

function likeVideo(id) {
  let user = getCurrentUser();
  let videos = getData("videos");

  let v = videos.find(x => x.id === id);

  let index = v.likes.indexOf(user.id);

  if (index === -1) {
    // LIKE
    v.likes.push(user.id);
  } else {
    // UNLIKE
    v.likes.splice(index, 1);
  }

  setData("videos", videos);

  // refresh UI
  if (typeof renderVideos === "function") {
    renderVideos();
  }

  if (typeof loadVideo === "function") {
    loadVideo();
  }
}

// Redirect to video page
function goToVideo(id) {
  window.location.href = `video.html?id=${id}`;
}

function viewVideo(id) {
  let videos = getData("videos");
  let v = videos.find(x => x.id === id);

  v.views++;
  setData("videos", videos);

  goToVideo(id); // redirect instead of alert
}

function loadVideo() {
  let videoId = getVideoIdFromURL();
  let videos = getData("videos");
  let user = getCurrentUser();

  let v = videos.find(x => x.id === videoId);

  let container = document.getElementById("videoContainer");

  container.innerHTML = `
    <h2>${v.title}</h2>
    <video width="500" controls>
      <source src="${v.videoUrl}">
    </video>
    <p>${v.description}</p>
    <p>${v.views} views</p>

    <button onclick="likeVideo(${v.id})">
      Like (${v.likes.length})
    </button>
  `;

  renderComments(v);
}

function deleteComment(videoId, commentId) {
  let videos = getData("videos");
  let video = videos.find(v => v.id === videoId);

  video.comments = video.comments.filter(c => c.id !== commentId);

  setData("videos", videos);
  loadVideo();
}

function editComment(videoId, commentId) {
  let newText = prompt("Edit your comment:");

  if (!newText) return;

  let videos = getData("videos");
  let video = videos.find(v => v.id === videoId);

  let comment = video.comments.find(c => c.id === commentId);

  comment.text = newText;

  setData("videos", videos);
  loadVideo();
}

function likeComment(videoId, commentId) {
  let user = getCurrentUser();
  let videos = getData("videos");

  let video = videos.find(v => v.id === videoId);
  let comment = video.comments.find(c => c.id === commentId);

  let index = comment.likes.indexOf(user.id);

  if (index === -1) {
    comment.likes.push(user.id);
  } else {
    comment.likes.splice(index, 1);
  }

  setData("videos", videos);
  loadVideo();
}

function renderComments(video) {
  let container = document.getElementById("comments");
  let user = getCurrentUser();
  let users = getData("users");

  container.innerHTML = "";

  video.comments.forEach(c => {

    // 👇 Find comment user
    let commentUser = users.find(u => u.id === c.userId);

    let isLiked = c.likes.includes(user.id);

    container.innerHTML += `
      <div style="border:1px solid gray; margin:10px; padding:10px;">
        
        <strong>${commentUser ? commentUser.username : "Unknown User"}</strong>
        
        <p>${c.text}</p>

        <button onclick="likeComment(${video.id}, ${c.id})">
          ${isLiked ? "Unlike" : "Like"} (${c.likes.length})
        </button>

        ${c.userId === user.id
        ? `
              <button onclick="editComment(${video.id}, ${c.id})">Edit</button>
              <button onclick="deleteComment(${video.id}, ${c.id})">Delete</button>
            `
        : ""
      }

      </div>
    `;
  });
}

function postComment() {
  let text = document.getElementById("commentText").value;
  let videoId = getVideoIdFromURL();

  let videos = getData("videos");
  let user = getCurrentUser();

  let v = videos.find(x => x.id === videoId);

  v.comments.push({
    id: Date.now(),
    userId: user.id,
    text: text,
    likes: []
  });

  setData("videos", videos);

  loadVideo();
}
