import{S as m,i as a}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const h="43875376-ffcf8bec5b4985f5e1efc350d";function g(s){return fetch(`https://pixabay.com/api/?key=${h}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&per_page=200`).then(o=>{if(!o.ok)throw new Error(o.status);return o})}function y(s){const o=document.querySelector(".list-foto"),n=s.reduce((r,e)=>{const{webformatURL:t,largeImageURL:i,tags:l,likes:u,views:f,comments:p,downloads:d}=e;return r+`<li class="gallery-item">
      <a class="gallery-link" href=${i} >
        <img
          class="gallery-image"
          src=${t}
         data-source=${i}
          alt=${l}
        />
      </a>
      <div>
      <p>Likes<br><span>${u}</span></p>
      <p>Views<br><span>${f}</span></p>
      <p>Coments<br><span>${p}</span></p>
      <p>Downloads<br><span>${d}</span></p>
      <div/>
    </li>`},"");o.insertAdjacentHTML("afterbegin",n)}let b=new m(".list-foto a");const L=document.querySelector(".input-search"),c=document.querySelector(".loader");document.querySelector(".input").addEventListener("submit",q);function q(s){s.preventDefault();const o=document.querySelector(".list-foto");o.innerHTML="";const n=L.value.trim();if(n.length<3)return a.error({position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});c.classList.remove("hiden"),g(n).then(r=>(r.status===200&&c.classList.add("hiden"),r.json())).then(r=>{const e=r.hits;e.length>0?(y(e),b.refresh()):a.error({position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(r=>{throw console.log(r),r})}
//# sourceMappingURL=commonHelpers.js.map
