
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

const loader = document.createElement("div");
loader.id = "loader";
loader.classList = "hidden";
document.body.appendChild(loader);

const loaderStyles = document.createElement("style");
loaderStyles.textContent = `
  #loader {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        position: relative;
        animation: rotate 1s linear infinite
      }
      #loader::before , #loader::after {
        content: "";
        box-sizing: border-box;
        position: absolute;
        inset: 0px;
        border-radius: 50%;
        border: 5px solid #FFF;
        animation: prixClipFix 2s linear infinite ;
      }
      #loader::after{
        border-color: #FF3D00;
        animation: prixClipFix 2s linear infinite , rotate 0.5s linear infinite reverse;
        inset: 6px;
      }
      
      .hidden{
        display: none;
      }

      @keyframes rotate {
        0%   {transform: rotate(0deg)}
        100%   {transform: rotate(360deg)}
      }

      @keyframes prixClipFix {
          0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
          25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
          50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
          75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
          100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
      }
`;
document.head.appendChild(loaderStyles);

export function createGallery(images) { 
  return images.map(({ previewURL, tags, likes, views, comments, downloads, largeImageURL }) => `
    <li class="gallery-item" style="border: 1px solid #808080">
      <a class="gallery-link" href="${largeImageURL}">
        <img class="gallery-img" src="${previewURL}" alt="${tags}" style="
          width: 360px;
          height: 200px;
          object-fit: cover;"/>
      </a>
      <div class="item-description-wrap" 
        style="
          display: flex; 
          justify-content: space-around; 
          font-size: 12px">
        <div class="description-item" style="">
          <h3 class="item-title">Likes</h3>
          <p class="item-text">${likes}</p>
        </div>
        <div class="description-item">
          <h3 class="item-title">Views</h3>
          <p class="item-text">${views}</p>
        </div>
        <div class="description-item">
          <h3 class="item-title">Comments</h3>
          <p class="item-text">${comments}</p>
        </div>
        <div class="description-item">
          <h3 class="item-title">Downloads</h3>
          <p class="item-text">${downloads}</p>
        </div>
      </div>
    </li>
  `).join("");
}

export function showLoader() { 
  loader.classList.remove("hidden");
  loader.style.position = "fixed";
  loader.style.top = "50%";
  loader.style.left = "50%";
  loader.style.transform = "translate(-50%, -50%)";
  loader.style.zIndex = "9999";
  loader.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
  loader.style.padding = "20px";
  loader.style.borderRadius = "50%";
}

export function hideLoader() { 
  loader.classList.add("hidden");
}

let lightbox = null;

export function updateLightBox() { 
  if (lightbox) {
    lightbox.refresh()
  } else { 
    lightbox = new SimpleLightbox(".gallery a", {
      captionData: "alt",
      captionDelay: 250,
    });
  }
}

export function clearGallery() { 
  gallery.innerHTML = "";
}

