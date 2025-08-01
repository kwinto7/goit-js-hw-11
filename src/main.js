

import { getImagesByQuery } from "./js/pixabay-api"
import {
  clearGallery,
  renderGallery
} from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const body = document.querySelector("body");
const form = document.querySelector(".form");
const input = document.querySelector(".form input");
const button = document.querySelector(".form button");
const gallery = document.querySelector(".gallery");



form.addEventListener("submit", handleSubmit) 

function handleSubmit(event) { 
  event.preventDefault();

  const inputUserText = input.value.trim()
  if (!inputUserText) {
    iziToast.warning({
    title: '',
    message: 'Порожній запит!',
    position: 'topRight',
    timeout: 3000,
  });
    return;
  }

  clearGallery();

  getImagesByQuery(inputUserText)
    .then(data => { 
      if (!data.hits || data.hits.length === 0) {
        iziToast.error({
          title: "",
          message: "Зображення не знайдені. Спробуйте інший запит.",
          position: "topRight",
          timeout: 4000,
          close: false,
          maxWidth: 300,
          messageColor: "#fff",
          color: "#e23232"
        });
        return;
      }

      renderGallery(data.hits);
    })
    .catch(error => {
      iziToast.error({
        title: "",
        message: "Помилка запиту. Спробуйте пізніше.",
        position: "topRight",
        timeout: 4000,
      });
    })
    .finally(() => {
      input.value = "";
    });
}






