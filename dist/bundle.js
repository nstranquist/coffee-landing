!function(e){var t={};function n(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(r,c,function(t){return e[t]}.bind(null,c));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const r=[{name:"Drip Coffee",description:"A tried and true, high-caffeine beverage",price:"$12",src:"drip-coffee-01.png"},{name:"Espresso",description:"The classic fair for an artistic coffee enthusaist",price:"$4.50",src:"espresso.png"},{name:"Cappuccino",description:"The delicious beverage you'll probably try right before your first Espresso",price:"$6",src:"cappuccino.png"},{name:"Americano",description:"There's always something for everyone, I guess",price:"$4.50",src:"americano.png"},{name:"Black Tea",description:"The go-to beverage once you realize how painful kicking a coffee habit is",price:"$7.50",src:"black-tea.png"},{name:"Green Tea",description:"Ah, finally! A healthy, delicious beverage with a little caffeine. Congrats, you've reached caffeine maturity",price:"$7.50",src:"green-tea.png"},{name:"Kombucha",description:"That mystically strange drink which is supposed to make you live longer, essentially",price:"$50",src:"kombucha.png"}],c=document.querySelector(".menu-toggle"),o=document.querySelector(".fa-bars"),i=document.querySelector(".fa-times"),a=document.querySelector(".navbar"),s=document.querySelector(".overlay"),u=document.getElementById("coffees"),l=document.getElementById("coffee-name"),d=document.getElementById("coffee-description"),f=document.getElementById("coffee-price"),p=document.getElementById("coffee-image");function m(){const e=g(r,u.value);l.textContent=e.name,d.textContent=e.description,f.textContent=e.price,p.setAttribute("src",`lib/images/${e.src}`),p.setAttribute("alt",e.src)}const g=function(e,t){return e.find(function(e,n){return e.name===t})};m(),u.addEventListener("click",()=>{m()}),c.addEventListener("click",e=>{console.log(e.target),c.classList.add("active"),a.classList.add("nav-open"),s.classList.add("menu-open")}),o.addEventListener("click",()=>{c.classList.add("active"),a.classList.add("nav-open"),s.classList.add("menu-open")}),i.addEventListener("click",()=>{c.classList.remove("active"),a.classList.remove("nav-open"),s.classList.remove("menu-open")}),s.addEventListener("click",()=>{c.classList.remove("active"),a.classList.remove("nav-open"),s.classList.remove("menu-open")})}]);