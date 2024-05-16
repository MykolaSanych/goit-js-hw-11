import{S as d,i as p}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function m(s,o){const i=document.querySelector(".loader");return i.classList.remove("hiden"),fetch(`https://pixabay.com/api/?key=${s}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(r.status===200&&i.classList.add("hiden"),!r.ok)throw new Error(r.status);return r.json()}).catch(r=>{throw console.log(r),r})}function h(s){const o=document.querySelector(".list-foto");o.innerHTML='<ul class="list-foto">';const i=s.reduce((r,e)=>{const{webformatURL:t,largeImageURL:n,tags:a,likes:c,views:l,comments:u,downloads:f}=e;return r+`<li class="gallery-item">
      <a class="gallery-link" href=${n} >
        <img
          class="gallery-image"
          src=${t}
         data-source=${n}
          alt=${a}
        />
      </a>
      <div>
      <p>Likes<br><span>${c}</span></p>
      <p>Views<br><span>${l}</span></p>
      <p>Coments<br><span>${u}</span></p>
      <p>Downloads<br><span>${f}</span></p>
      <div/>
    </li>`},"");o.insertAdjacentHTML("afterbegin",i)}let g=new d(".list-foto a");const y=document.querySelector(".input-search"),b="43875376-ffcf8bec5b4985f5e1efc350d";document.querySelector(".input").addEventListener("submit",L);function L(){m(b,y.value).then(s=>{const o=s.hits;o.length>0?(h(o),g.refresh()):p.error({position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})})}
//# sourceMappingURL=commonHelpers.js.map
