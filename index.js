import{S as f,a as m,i as y}from"./assets/vendor-BhSeNu3C.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const h=document.querySelector(".gallery"),i=document.querySelector(".loader"),d=document.createElement("style");d.textContent=`
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
`;document.head.appendChild(d);function g(s){return s.map(({previewURL:o,tags:r,likes:l,views:e,comments:t,downloads:n,largeImageURL:u})=>`
    <li class="gallery-item" style="border: 1px solid #808080">
      <a class="gallery-link" href="${u}">
        <img class="gallery-img" src="${o}" alt="${r}" style="
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
          <p class="item-text">${l}</p>
        </div>
        <div class="description-item">
          <h3 class="item-title">Views</h3>
          <p class="item-text">${e}</p>
        </div>
        <div class="description-item">
          <h3 class="item-title">Comments</h3>
          <p class="item-text">${t}</p>
        </div>
        <div class="description-item">
          <h3 class="item-title">Downloads</h3>
          <p class="item-text">${n}</p>
        </div>
      </div>
    </li>
  `).join("")}function x(){i.classList.remove("hidden"),i.style.position="fixed",i.style.top="50%",i.style.left="50%",i.style.transform="translate(-50%, -50%)",i.style.zIndex="9999",i.style.backgroundColor="rgba(0, 0, 0, 0.2)",i.style.padding="20px",i.style.borderRadius="50%"}function b(){i.classList.add("hidden")}let a=null;function v(){a?a.refresh():a=new f(".gallery a",{captionData:"alt",captionDelay:250})}function $(){h.innerHTML=""}const L="51435495-8626d86cd8f20f3f9ed789055",w="https://pixabay.com/api/",S=document.querySelector(".gallery");function q(s){x();const o={key:L,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"};return m.get(w,{params:o}).then(({data:r})=>{if(!r.hits||r.hits.length===0){y.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:4e3,close:!1,maxWidth:300,messageColor:"#fff",color:"#e23232"});return}S.insertAdjacentHTML("beforeend",g(r.hits)),v()}).catch(r=>{console.log(r)}).finally(()=>{b()})}const O=document.querySelector("body"),p=document.querySelector(".form"),c=document.querySelector(".form input"),j=document.querySelector(".form button"),C=document.querySelector(".gallery");p.addEventListener("submit",z);function z(s){s.preventDefault();const o=c.value.trim();if(!o){alert("Порожній запит"),hideLoader();return}$(),c.value="",q(o)}Object.assign(O.style,{textAlign:"center"});Object.assign(p.style,{marginTop:"36px",marginBottom:"24px",fontFamily:"Montserrat, sans-serif"});Object.assign(c.style,{width:"272px",height:"36px",borderRadius:"4px",border:"1px solid #808080",paddingLeft:"16px"});Object.assign(j.style,{width:"91px",height:"40px",fontWeight:500,borderRadius:"8px",backgroundColor:"#4e75ff",border:"none",color:"#fff"});Object.assign(C.style,{display:"flex",flexWrap:"wrap",gap:"24px",justifyContent:"center"});
//# sourceMappingURL=index.js.map
