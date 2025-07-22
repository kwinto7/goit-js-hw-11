
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

export function createGallery(images) { 
  return images.map(({ previewURL, tags, likes, views, comments, downloads, largeImageURL }) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img src="${previewURL}" alt="${tags}" width="300"/>
      </a>
      <p>Likes: ${likes}</p>
      <p>Views: ${views}</p>
      <p>Comments: ${comments}</p>
      <p>Downloads: ${downloads}</p>
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

