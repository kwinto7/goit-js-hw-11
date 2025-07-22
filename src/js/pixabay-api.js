import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { showLoader, hideLoader, createGallery, updateLightBox } from "./render-functions";

const API_KEY = "51435495-8626d86cd8f20f3f9ed789055";
const BASE_URL = "https://pixabay.com/api/";

const gallery = document.querySelector(".gallery");

export function getImagesByQuery(query) { 
  showLoader();
  const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true"
  };
  return axios
    .get(BASE_URL, {params})
    .then(({data}) => { 
      if (!data.hits || data.hits.length === 0) {
        iziToast.error({
          title: "",
          message: "Sorry, there are no images matching your search query. Please try again!",
          position: "topRight",
          timeout: 4000,
          close: false,
          maxWidth: 300,
          messageColor: "#fff",
          color: "#e23232"
        });
        return;
      }
      
      gallery.insertAdjacentHTML("beforeend", createGallery(data.hits))
      updateLightBox()
    })
    .catch(error => { 
      console.log(error);
    })
    .finally(() => { 
      hideLoader()
    })
}
