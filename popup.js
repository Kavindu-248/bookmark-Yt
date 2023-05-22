import { getActiveTabURL } from "./utils.js";



// adding a new bookmark row to the popup

const addNewBookmark = () => {};

const viewBookmarks = (currentBookmarks=[]) => {
    const bookmarksElement = document.getElementById("bookmarks");
    bookmarksElement.innerHTML = "";

    if(currentBookamrks.length > 0){
        for(let i = 0; i < currentBookmarks.length; i++){
            const bookmark = currentBookmarks[i];
            addNewBookmark(bookmark, bookmarksElement)
        }
    }else{
        bookmarksElement.innerHTML = '<i class="row">No bookmarks yet</i>';
    }
};

const onPlay = e => {};

const onDelete = e => {};

const setBookmarkAttributes =  () => {};

document.addEventListener("DOMContentLoaded", async () => {
    const activeTab = await getActiveTabURL();
    const queryParameters = activeTab.url.split("?")[1];
    const urlParameters = new URLSearchParams(queryParameters);

    const videoId = urlParameters.get("v");

    if (activeTab.url.includes("youtube.com/watch") && currentVideo){
        chrome.storage.sync.get([currentVideo], (data) => {
            const currentVideoBookmarks = data[currentVideo] ? JSON.parse(data[currentVideo]) : [];

            viewBookmarks(currentVideoBookmarks);

        })
    }else{
        const container = document.getElementsByClassName("container")[0];

        container.innerHTML = '<div class = "title">This is not a youtube video page </div>'
    }
});
