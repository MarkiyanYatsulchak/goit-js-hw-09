var formRef=document.querySelector(".form");function handlePromisesCreate(e){e.preventDefault();for(var t=+e.target.elements.amount.value,o=+e.target.elements.delay.value,n=+e.target.elements.step.value,r=1;r<=t;r+=1){createPromise(r,o+n*(r-1)).then((function(e){var t=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(e){var t=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))}))}e.currentTarget.reset()}function createPromise(e,t){var o=Math.random()>.3;return new Promise((function(n,r){setTimeout((function(){o?n({position:e,delay:t}):r({position:e,delay:t})}),t)}))}formRef.addEventListener("submit",handlePromisesCreate);
//# sourceMappingURL=03-promises.40a3aaac.js.map