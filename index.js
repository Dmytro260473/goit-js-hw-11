/* empty css                      */import{a as h,S as y,i as c}from"./assets/vendor-Cip_4kvj.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const b="https://pixabay.com/api/",v="23963114-6d0d5d874ae460d9125bacd21";function L(i){const r={key:v,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return h.get(b,{params:r}).then(function(s){return s.data})}const u=document.querySelector(".loader-wrapper");function p(){u.classList.remove("is-hidden")}function o(){u.classList.add("is-hidden")}let S=new y(".gallery a",{captionsData:"alt",captionDelay:250});function q(i,r){p();const s=i.map(({webformatURL:a,largeImageURL:e,tags:t,likes:n,views:m,comments:f,downloads:g})=>`
        <li class="gallery-item">
          <a href="${e}" class="gallery-link">
            <img src="${a}" alt="${t}" class="gallery-image" />
          </a>
          <div class="image-info">
            <div class="image-info-item"><span><b>Likes</b></span><span>${n}</span></div>
            <div class="image-info-item"><span><b>Views</b></span><span>${m}</span></div>
            <div class="image-info-item"><span><b>Comments</b></span><span>${f}</span></div>
            <div class="image-info-item"><span><b>Downloads</b></span><span>${g}</span></div>
          </div>
        </li>
      `).join("");r.insertAdjacentHTML("beforeend",s),o(),S.refresh()}function w(i){i.innerHTML=""}const l=document.querySelector(".form"),d=document.querySelector(".gallery");l.addEventListener("submit",function(i){i.preventDefault();const r=l.elements["search-text"].value.trim();r&&(w(d),p(),L(r).then(function(s){if(o(),s.hits.length===0){c.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}q(s.hits,d)}).catch(function(){o(),loader.classList.add("is-hidden"),c.error({message:"Error!",position:"topRight"})}))});
//# sourceMappingURL=index.js.map
