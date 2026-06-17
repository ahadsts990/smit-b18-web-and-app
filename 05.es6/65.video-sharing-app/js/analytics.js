function getVideoAnalytics(videoId) {
    let videos = getData("videos");
    let video = videos.find(v => v.id === videoId);

    return {
        views: video.views,
        likes: video.likes.length,
        comments: video.comments.length
    };
}

// js/analytics.js

function getMyAnalytics() {
  let user = getCurrentUser();
  let videos = getData("videos");

  let myVideos = videos.filter(v => v.userId === user.id);

  let totalViews = 0;
  let totalLikes = 0;
  let totalComments = 0;

  myVideos.forEach(v => {
    totalViews += v.views;
    totalLikes += v.likes.length;
    totalComments += v.comments.length;
  });

  return {
    videos: myVideos.length,
    views: totalViews,
    likes: totalLikes,
    comments: totalComments
  };
}

function renderAnalytics() {
  let data = getMyAnalytics();

  let container = document.getElementById("analytics");

  container.innerHTML = `
    <h3>Analytics</h3>
    <p>Total Videos: ${data.videos}</p>
    <p>Total Views: ${data.views}</p>
    <p>Total Likes: ${data.likes}</p>
    <p>Total Comments: ${data.comments}</p>
  `;
}