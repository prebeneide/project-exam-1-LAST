const baseUrl = "http://wordpress.prebeneide.com/wp-json/wp/v2/posts";
const listOfPostsContainer = document.querySelector(".wordpresslistofblogposts");
const perPage = document.querySelector("#dropdown-per-page");
const categories = document.querySelector("#dropdown-categories");
const corsEnabledUrl = "https://cors.noroff.dev/" + baseUrl;
const searchButton = document.querySelector(".search-button");

async function getListOfPosts(url){
    const response = await fetch(url);
    const posts = await response.json();
    posts.forEach(function(post){
        listOfPostsContainer.innerHTML +=
        `<div class="wordpresspostsdiv">
        <a href="blogpostspecificpages.html?id=${post.id}">
        <img class="fetched-image" src="${post.better_featured_image.source_url}">
        <h2 class="wordpressposttitle">${post.title.rendered}</h2>
        <p class="wordpresstext">${post.excerpt.rendered}</p>
        </a></div>`
    })
}

getListOfPosts(corsEnabledUrl);



perPage.onchange = function(event){
    const newUrl = corsEnabledUrl + `?per_page=${event.target.value}`;
    console.log(newUrl);
    listOfPostsContainer.innerHTML = "";
    getListOfPosts(newUrl);
}

categories.onchange = function(event) {
    const newUrl = corsEnabledUrl + `?categories=${event.target.value}`;
    listOfPostsContainer.innerHTML = "";
    getListOfPosts(newUrl);
}

searchButton.onclick = function() {
    const searchInput = document.querySelector("#search-input").value;
    const newUrl = corsEnabledUrl + `?search=${searchInput}`;
    listOfPostsContainer.innerHTML = "";
    getListOfPosts(newUrl);
}



