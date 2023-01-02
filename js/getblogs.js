const baseUrl = "http://wordpress.prebeneide.com/wp-json/wp/v2/posts";
const wordpressContainer = document.querySelector(".wordpress");
const corsEnabledUrl = baseUrl + "?per_page=20";


async function getFirstPosts(url) {
    const response = await fetch(url);
    const post = await response.json();
    for (let i = 0; i <= 3; i++) {
        wordpressContainer.innerHTML +=
        `<a href="blogpostspecificpages.html?id=${post[i].id}"
        <div class="wordpress-latest-post-div">
        <p class="wordpress-latest-post-title">${post[i].title.rendered}</p>
        </div>
        </a>`
    }
}

getFirstPosts(corsEnabledUrl);



async function getNextPosts(url) {
    const response = await fetch(url);
    const post = await response.json();
    wordpressContainer.innerHTML = ""
    for (let i = 4; i <= 7; i++) {
        wordpressContainer.innerHTML +=
        `<a href="blogpostspecificpages.html?id=${post[i].id}"
        <div class="wordpress-latest-post-div">
        <p class="wordpress-latest-post-title">${post[i].title.rendered}</p>
        </div>
        </a>`
    }
}

async function getMorePosts(url) {
    const response = await fetch(url);
    const post = await response.json();
    wordpressContainer.innerHTML = ""
    for (let i = 8; i <= 11; i++) {
        wordpressContainer.innerHTML +=
        `<a href="blogpostspecificpages.html?id=${post[i].id}"
        <div class="wordpress-latest-post-div">
        <p class="wordpress-latest-post-title">${post[i].title.rendered}</p>
        </div>
        </a>`
    }
}



async function firstPreviousButton(url) {
    const response = await fetch(url);
    const post = await response.json();
    wordpressContainer.innerHTML = ""
    for (let i = 0 ; i <= 3; i++) {
        wordpressContainer.innerHTML +=
        `<a href="blogpostspecificpages.html?id=${post[i].id}"
        <div class="wordpress-latest-post-div">
        <p class="wordpress-latest-post-title">${post[i].title.rendered}</p>
        </div>
        </a>`
    }
}

async function secondPreviousButton(url) {
    const response = await fetch(url);
    const post = await response.json();
    wordpressContainer.innerHTML = ""
    for (let i = 4 ; i <= 7; i++) {
        wordpressContainer.innerHTML +=
        `<a href="blogpostspecificpages.html?id=${post[i].id}"
        <div class="wordpress-latest-post-div">
        <p class="wordpress-latest-post-title">${post[i].title.rendered}</p>
        </div>
        </a>`
    }
}


document.querySelector("#nextbutton").addEventListener("click", function(){
    document.querySelector("#morebutton").style.display = "block";
    document.querySelector("#nextbutton").style.display = "none";
    document.querySelector("#firstpreviousbutton").style.display = "block";

})

document.querySelector("#firstpreviousbutton").addEventListener("click", function(){
    document.querySelector("#morebutton").style.display = "none";
    document.querySelector("#nextbutton").style.display = "block";
    document.querySelector("#firstpreviousbutton").style.display = "none";

})

document.querySelector("#morebutton").addEventListener("click", function(){
    document.querySelector("#morebutton").style.display = "none";
    document.querySelector("#firstpreviousbutton").style.display = "none";
    document.querySelector("#secondpreviousbutton").style.display = "block";


})

document.querySelector("#secondpreviousbutton").addEventListener("click", function(){
    document.querySelector("#morebutton").style.display = "block";
    document.querySelector("#firstpreviousbutton").style.display = "block";
    document.querySelector("#secondpreviousbutton").style.display = "none";


})





















