import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const t=document.querySelector(".feedback-form"),o=t.querySelector("input"),r=t.querySelector("textarea"),a="feedback-form-state";let l={email:"",message:""};s();t.addEventListener("submit",i);function i(e){if(e.preventDefault(),!o.value||!r.value)return alert("Please fill in all the fields!");console.log(localStorage.getItem(a)),localStorage.removeItem(a),t.reset(),l={email:"",message:""}}t.addEventListener("input",e=>{l[e.target.name]=e.target.value.trim(),localStorage.setItem(a,JSON.stringify(l))});function s(){const e=JSON.parse(localStorage.getItem(a));e&&(l=e,o.value=e.email,r.value=e.message)}
//# sourceMappingURL=commonHelpers2.js.map
