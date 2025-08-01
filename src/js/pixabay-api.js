import axios from "axios";
import { showLoader, hideLoader, createGallery, updateLightBox } from "./render-functions";

const API_KEY = "51435495-8626d86cd8f20f3f9ed789055";
const BASE_URL = "https://pixabay.com/api/";

const gallery = document.querySelector(".gallery");

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true"
  };

  showLoader();

  return axios
    .get(BASE_URL, { params })
    .then(response => response.data)
    .catch(error => {
      console.error("Fetch error", error);
      throw error;
    })
    .finally(() => {
      hideLoader();
    });
}