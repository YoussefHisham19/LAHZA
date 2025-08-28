const filterBtns =document.querySelectorAll('button[data-filter]')
const products =document.querySelectorAll('.product')
filterBtns.forEach(btn=>{
  btn.addEventListener("click", 
    function (){
      filterBtns.forEach(b=>b.classList.remove("active"));
      this.classList.add("active");
    }
  )
})
filterBtns.forEach(btn=>{
  btn.addEventListener('click',()=>{
    const filter=btn.dataset.filter;
    products.forEach(product => {
      if (product.getAttribute("data-category") === filter || filter === "all") {
        product.style.display = "block"; // يظهر
      } else {
        product.style.display = "none";  // يختفي
      }
    });
  });
});


filterBtns.forEach(btn=>{
  btn.addEventListener('click',()=>{
    const filter = btn.dataset.filter;

    gsap.to(".product", {opacity:0, y:20, duration:0.3, onComplete: ()=>{
      products.forEach(product=>{
        if (product.getAttribute("data-category") === filter || filter === "all") {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      });
      gsap.fromTo(".product:not(.hide)", {opacity:0, y:20}, {opacity:1, y:0, duration:0.5});
    }});
  });
});

 const modal=document.getElementById("myModal");
 const openBtn =document.getElementById("openModal");
 const closeBtn=document.getElementById("closeModal");
 openBtn.onclick=function (){
   modal.style.display="flex";
 }
 closeBtn.onclick=function (){
   modal.style.display="none"
 }