//-----icon replacement-----
let parent = null;
if ($("img.ytd-yoodle-renderer").length != 0) {
    //doodle replacement

    //remove old icon and store parent reference
    let oldIcon = $("img.ytd-yoodle-renderer")[0]
    parent = oldIcon.parentElement;
    console.log(parent);
    oldIcon.remove();
}

if (parent === null && $("yt-icon#logo-icon").length != 0) {
    //regular replacement

    //remove old icon and store parent reference
    let oldIcon = $("yt-icon#logo-icon")[0];
    parent = oldIcon.parentElement;
    console.log(parent);
    oldIcon.remove();
}

if (parent != null) {
    //create new icon, getting a link to the the locally stored icon
    let newIcon = document.createElement("img");
    newIcon.src = browser.runtime.getURL("yt_wordmark_header_dark.png");
    newIcon.width = 81;
    newIcon.height = 30;
    parent.appendChild(newIcon);
    
    console.log("Chickenify: attempted icon replacement");
}


//-----"GB" --> "CKN"-----
if ($("span#country-code").length != 0){
    $("span#country-code")[0].innerHTML = "CKN";
}
