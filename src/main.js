

import { getImagesByQuery } from "./js/pixabay-api"
import { clearGallery } from "./js/render-functions";




const body = document.querySelector("body");
const form = document.querySelector(".form");
const input = document.querySelector(".form input");
const button = document.querySelector(".form button");
const gallery = document.querySelector(".gallery");



form.addEventListener("submit", handleSubmit) 

function handleSubmit(event) { 
  event.preventDefault();
  const input_user_text = input.value.trim()
  if (!input_user_text) {
    alert("Порожній запит");
    hideLoader();
    return;
  }
  clearGallery();
  input.value = "";
  getImagesByQuery(input_user_text);
}


Object.assign(body.style, {
  textAlign: "center",
})

Object.assign(form.style, {
  marginTop: `${36}px`,
  marginBottom: `${24}px`,
  fontFamily: "Montserrat, sans-serif",
})

Object.assign(input.style, {
  width: `${272}px`,
  height: `${36}px`,
  borderRadius: `${4}px`,
  border: "1px solid #808080",
  paddingLeft: `${16}px`,
})

Object.assign(button.style, {
  width: `${91}px`,
  height: `${40}px`,    
  fontWeight: 500,
  borderRadius: `${8}px`,
  backgroundColor: "#4e75ff",
  border: "none",
  color: "#fff"
})

Object.assign(gallery.style, {
  display: "flex",
  flexWrap: "wrap",
  gap: `${24}px`,
  justifyContent: "center" 
})

// Object.assign(galleryItem.style, {
//   border: "1px solid #808080",
// })


