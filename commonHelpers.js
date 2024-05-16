import{S as d,i as p}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function m(n,o){const s=document.querySelector(".loader");return s.classList.remove("hiden"),fetch(`https://pixabay.com/api/?key=${n}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(t.status===200)return s.classList.add("hiden"),t.json();if(!t.ok)throw new Error(t.status);return t.json()}).catch(t=>{throw console.log(t),t})}function h(n){const o=document.querySelector(".list-foto");o.innerHTML='<ul class="list-foto">';const s=n.reduce((t,e)=>{const{webformatURL:r,largeImageURL:i,tags:a,likes:c,views:l,comments:u,downloads:f}=e;return t+`<li class="gallery-item">
      <a class="gallery-link" href=${i} >
        <img
          class="gallery-image"
          src=${r}
         data-source=${i}
          alt=${a}
        />
      </a>
      <div>
      <p>Likes<br><span>${c}</span></p>
      <p>Views<br><span>${l}</span></p>
      <p>Coments<br><span>${u}</span></p>
      <p>Downloads<br><span>${f}</span></p>
      <div/>
    </li>`},"");o.insertAdjacentHTML("afterbegin",s)}let g=new d(".list-foto a");const y=document.querySelector(".input-search"),b="43875376-ffcf8bec5b4985f5e1efc350d";document.querySelector(".input").addEventListener("submit",L);function L(n){n.preventdefault(),m(b,y.value).then(o=>{const s=o.hits;s.length>0?(h(s),g.refresh()):p.error({position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})})}
//# sourceMappingURL=commonHelpers.js.map
