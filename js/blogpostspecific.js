const specificBlogContainer = document.querySelector(".wordpress-specific-blog-div");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const baseUrl = "http://wordpress.prebeneide.com/wp-json/wp/v2/posts/";

const corsEnabledUrl = baseUrl;

const url = corsEnabledUrl + id;


async function fetchSpecificBlogPost() {
    try {
        const response = await fetch(url);
        const details = await response.json();

        specificBlogContainer.innerHTML = "";

        createHtml(details);

        createTitle(details);

        getModal(details);

    } catch(error) {
        console.log(error);
        specificBlogContainer.innerHTML = error;
    }
}

fetchSpecificBlogPost();

function createHtml(details) {

    specificBlogContainer.innerHTML +=  `
                                        <h1 class="wordpress-specific-post-title">${details.title.rendered}</h1>
                                        <div class="wordpress-specific-content">${details.content.rendered}</div>
                                        <div id="larger-image-modal" class="image-modal">
                                        <img class="modal-image-class" id="chosen-image">
                                        </div>
                                        `;
}

function createTitle(details) {
    const titleName = document.querySelector(".specificblogtitle");
    const orientationName = document.querySelector(".specificblogorientation");

    titleName.innerHTML += `${details.title.rendered}`;

    orientationName.innerHTML += `${details.title.rendered}`;
}



function getModal() {
const largerImageModal = document.getElementById("larger-image-modal");
const allImages = document.querySelectorAll("figure img");
const modalImage = document.getElementById("chosen-image");

allImages.forEach(function(details){
    details.onclick = function(){
    largerImageModal.style.display = "block";
    modalImage.src = details.src;
        }
    })

const closeModal = document.querySelector(".image-modal");

closeModal.onclick = function() { 
  largerImageModal.style.display = "none";
    }
}




