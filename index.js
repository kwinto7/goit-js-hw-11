import{S as u,a as f,i as m}from"./assets/vendor-D8_O3--j.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y=document.querySelector(".gallery");function h(i){return i.map(({previewURL:r,tags:o,likes:a,views:e,comments:t,downloads:n,largeImageURL:p})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${p}">
        <img src="${r}" alt="${o}" width="300"/>
      </a>
      <p>Likes: ${a}</p>
      <p>Views: ${e}</p>
      <p>Comments: ${t}</p>
      <p>Downloads: ${n}</p>
    </li>
  `).join("")}function g(){loader.classList.remove("hidden"),loader.style.position="fixed",loader.style.top="50%",loader.style.left="50%",loader.style.transform="translate(-50%, -50%)",loader.style.zIndex="9999",loader.style.backgroundColor="rgba(0, 0, 0, 0.2)",loader.style.padding="20px",loader.style.borderRadius="50%"}function x(){loader.classList.add("hidden")}let l=null;function b(){l?l.refresh():l=new u(".gallery a",{captionData:"alt",captionDelay:250})}function L(){y.innerHTML=""}const S="51435495-8626d86cd8f20f3f9ed789055",v="https://pixabay.com/api/",$=document.querySelector(".gallery");function F(i){g();const r={key:S,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"};return f.get(v,{params:r}).then(({data:o})=>{if(!o.hits||o.hits.length===0){m.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:4e3});return}$.insertAdjacentHTML("beforeend",h(o.hits)),b()}).catch(o=>{console.log(o)}).finally(()=>{x()})}const s=document.createElement("div");s.id="loader";s.classList="hidden";document.body.appendChild(s);const c=document.createElement("style");c.textContent=`
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
`;document.head.appendChild(c);const C=document.querySelector(".form"),d=document.querySelector(".form input");C.addEventListener("submit",q);function q(i){i.preventDefault();const r=d.value.trim();if(!r){alert("Порожній запит"),hideLoader();return}L(),d.value="",F(r)}
//# sourceMappingURL=index.js.map
