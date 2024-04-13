let oldIcon = $("yt-icon#logo-icon")[0];
let parent = oldIcon.parentElement;
oldIcon.remove();

let newIcon = document.createElement("img");
newIcon.src = browser.runtime.getURL("yt_wordmark_header_dark.png");
newIcon.width = 81;
newIcon.height = 30;
parent.appendChild(newIcon);