/* empty css                      */import{a as y,S as h,i as c}from"./assets/vendor-Cip_4kvj.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const b="https://pixabay.com/api/",v="23963114-6d0d5d874ae460d9125bacd21";function L(i){const r={key:v,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return y.get(b,{params:r}).then(function(n){return n.data})}const u=document.querySelector(".loader-wrapper");function p(){u.classList.remove("is-hidden")}function a(){u.classList.add("is-hidden")}let S=new h(".gallery a",{captionsData:"alt",captionDelay:250});function q(i,r){p();const n=i.map(({webformatURL:o,largeImageURL:e,tags:t,likes:s,views:m,comments:f,downloads:g})=>`
        <li class="gallery-item">
          <a href="${e}" class="gallery-link">
            <img src="${o}" alt="${t}" class="gallery-image" />
          </a>
          <div class="image-info">
            <div class="image-info-item"><span><b>Likes</b></span><span>${s}</span></div>
            <div class="image-info-item"><span><b>Views</b></span><span>${m}</span></div>
            <div class="image-info-item"><span><b>Comments</b></span><span>${f}</span></div>
            <div class="image-info-item"><span><b>Downloads</b></span><span>${g}</span></div>
          </div>
        </li>
      `).join("");r.insertAdjacentHTML("beforeend",n),a(),S.refresh()}function w(i){i.innerHTML=""}const l=document.querySelector(".form"),d=document.querySelector(".gallery");document.querySelector(".loader");l.addEventListener("submit",function(i){i.preventDefault();const r=l.elements["search-text"].value.trim();r&&(w(d),p(),L(r).then(function(n){if(a(),n.hits.length===0){c.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}q(n.hits,d)}).catch(function(){a(),c.error({message:"Error!",position:"topRight"})}))});
//# sourceMappingURL=index.js.map
