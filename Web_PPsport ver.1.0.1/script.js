/* ===============================
   CUSTOM CURSOR
================================ */
const cursor=document.querySelector(".cursor");
document.addEventListener("mousemove",e=>{
  if(cursor){
    cursor.style.left=e.clientX+"px";
    cursor.style.top=e.clientY+"px";
  }
});

/* ===============================
   LAZY LOAD IMAGES
================================ */
const imgObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const img=entry.target;
      img.src=img.dataset.src;
      img.onload=()=>img.classList.add("loaded");
      imgObserver.unobserve(img);
    }
  });
},{rootMargin:"200px"});

document.querySelectorAll("img[data-src]").forEach(img=>{
  imgObserver.observe(img);
});

/* ===============================
   LIGHTBOX
================================ */
const lightbox=document.createElement("div");
lightbox.id="lightbox";
document.body.appendChild(lightbox);

lightbox.addEventListener("click",()=>{
  lightbox.classList.remove("active");
  lightbox.innerHTML="";
});

document.addEventListener("click",e=>{
  if(e.target.tagName==="IMG" && e.target.closest(".grid")){
    const img=document.createElement("img");
    img.src=e.target.src;
    lightbox.innerHTML="";
    lightbox.appendChild(img);
    lightbox.classList.add("active");
  }
});

/* ===============================
   PARALLAX HERO
================================ */
window.addEventListener("scroll",()=>{
  const y=window.scrollY;
  document.querySelectorAll(".parallax").forEach(el=>{
    el.style.transform=`translateY(${y*0.25}px)`;
  });
});
