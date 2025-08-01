import{S as f,a as h,i as a}from"./assets/vendor-rOMtvQ2t.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const u=document.querySelector(".gallery"),r=document.querySelector(".loader"),m=document.createElement("style");m.textContent=`
 .loader {
  color: #FFF;
  display: inline-block;
  position: relative;
  font-size: 48px;
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
}
.loader::after {
  content: '';  
  width: 5px;
  height: 5px;
  background: currentColor;
  position: absolute;
  bottom: 10px;
  right: -5px;
  box-sizing: border-box;
  animation: animloader 1s linear infinite;
}
.hidden {
display: none;
}

@keyframes animloader {
  0% {
    box-shadow: 10px 0 rgba(255, 255, 255, 0), 20px 0 rgba(255, 255, 255, 0);
  }
  50% {
    box-shadow: 10px 0 white, 20px 0 rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 10px 0 white, 20px 0 white;
  }
}
`;document.head.appendChild(m);function y(s){return s.map(({webformatURL:i,tags:t,likes:l,views:e,comments:o,downloads:n,largeImageURL:p})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${p}">
        <img class="gallery-img" src="${i}" alt="${t}"/>
      </a>
      <div class="item-description-wrap">
        <div class="description-item">
          <h3 class="item-title">Likes</h3>
          <p class="item-text">${l}</p>
        </div>
        <div class="description-item">
          <h3 class="item-title">Views</h3>
          <p class="item-text">${e}</p>
        </div>
        <div class="description-item">
          <h3 class="item-title">Comments</h3>
          <p class="item-text">${o}</p>
        </div>
        <div class="description-item">
          <h3 class="item-title">Downloads</h3>
          <p class="item-text">${n}</p>
        </div>
      </div>
    </li>
  `).join("")}function g(){r.classList.remove("hidden"),r.style.position="fixed",r.style.top="50%",r.style.left="50%",r.style.transform="translate(-50%, -50%)",r.style.zIndex="9999",r.style.backgroundColor="rgba(0, 0, 0, 0.2)",r.style.padding="20px",r.style.borderRadius="50%"}function x(){r.classList.add("hidden")}let c=null;function b(s){const i=y(s);u.insertAdjacentHTML("beforeend",i),c?c.refresh():c=new f(".gallery a",{captionData:"alt",captionDelay:250})}function v(){u.innerHTML=""}const w="51435495-8626d86cd8f20f3f9ed789055",L="https://pixabay.com/api/";document.querySelector(".gallery");function S(s){const i={key:w,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"};return g(),h.get(L,{params:i}).then(t=>t.data).catch(t=>{throw console.error("Fetch error",t),t}).finally(()=>{x()})}document.querySelector("body");const q=document.querySelector(".form"),d=document.querySelector(".form input");document.querySelector(".form button");document.querySelector(".gallery");q.addEventListener("submit",$);function $(s){s.preventDefault();const i=d.value.trim();if(!i){a.warning({title:"",message:"Порожній запит!",position:"topRight",timeout:3e3});return}v(),S(i).then(t=>{if(!t.hits||t.hits.length===0){a.error({title:"",message:"Зображення не знайдені. Спробуйте інший запит.",position:"topRight",timeout:4e3,close:!1,maxWidth:300,messageColor:"#fff",color:"#e23232"});return}b(t.hits)}).catch(t=>{a.error({title:"",message:"Помилка запиту. Спробуйте пізніше.",position:"topRight",timeout:4e3})}).finally(()=>{d.value=""})}
//# sourceMappingURL=index.js.map
