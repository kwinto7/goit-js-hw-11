

import { getImagesByQuery } from "./js/pixabay-api"
import { clearGallery } from "./js/render-functions";


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

const form = document.querySelector(".form");
const input = document.querySelector(".form input");

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




