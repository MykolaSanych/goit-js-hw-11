import{S as m,i as a}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const h="43875376-ffcf8bec5b4985f5e1efc350d";function g(s){return fetch(`https://pixabay.com/api/?key=${h}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(o=>{if(!o.ok)throw new Error(o.status);return o})}function y(s){const o=document.querySelector(".list-foto"),i=s.reduce((r,e)=>{const{webformatURL:t,largeImageURL:n,tags:l,likes:u,views:f,comments:d,downloads:p}=e;return r+`<li class="gallery-item">
      <a class="gallery-link" href=${n} >
        <img
          class="gallery-image"
          src=${t}
         data-source=${n}
          alt=${l}
        />
      </a>
      <div>
      <p>Likes<br><span>${u}</span></p>
      <p>Views<br><span>${f}</span></p>
      <p>Coments<br><span>${d}</span></p>
      <p>Downloads<br><span>${p}</span></p>
      <div/>
    </li>`},"");o.insertAdjacentHTML("afterbegin",i)}let b=new m(".list-foto a");const L=document.querySelector(".input-search"),c=document.querySelector(".loader");document.querySelector(".input").addEventListener("submit",q);function q(s){s.preventDefault();const o=document.querySelector(".list-foto");o.innerHTML='<ul class="list-foto">';const i=L.value.trim();if(i.length<3)return a.error({position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});c.classList.remove("hiden"),g(i).then(r=>(r.status===200&&c.classList.add("hiden"),r.json())).then(r=>{const e=r.hits;e.length>0?(y(e),b.refresh()):a.error({position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(r=>{throw console.log(r),r})}
//# sourceMappingURL=commonHelpers.js.map
