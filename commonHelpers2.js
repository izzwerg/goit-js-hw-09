import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const t=document.querySelector(".feedback-form"),l=t.querySelector("input"),r=t.querySelector("textarea"),a="feedback-form-state";let o={email:"",message:""};n();t.addEventListener("submit",m);function m(e){e.preventDefault(),!(!l.value||!r.value)&&(console.log(localStorage.getItem(a)),localStorage.removeItem(a),t.reset(),o={email:"",message:""})}t.addEventListener("input",e=>{o[e.target.name]=e.target.value.trim(),localStorage.setItem(a,JSON.stringify(o))});function n(){const e=JSON.parse(localStorage.getItem(a));e&&(o=e,l.value=e.email,r.value=e.message)}
//# sourceMappingURL=commonHelpers2.js.map
