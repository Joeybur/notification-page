const posts = document.querySelectorAll("#posts");
const readAll = document.getElementById("markread");
const notificationCount = document.getElementById("unread-count");

// Mark posts as unread on click

posts.forEach((post) => {
  post.addEventListener("click", () => {
    post.classList.remove("unread");
  });
});

// Mark all posts as read on button click

readAll.addEventListener("click", () => {
  posts.forEach((p) => {
    p.classList.remove("unread");
    notificationCount.innerText = "0";
  });
});
