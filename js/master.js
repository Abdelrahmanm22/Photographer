
var typed = new Typed('.writing', {
    strings: [
        'Professional Photographer',
        'Designer',
        'Freelancer'
    ],
    typeSpeed: 60,
    backSpeed: 80,
    loop: true,
    smartBackspace: true

});


var reveal = gsap.utils.toArray('.reveal');
        reveal.forEach((text, i) => {
            ScrollTrigger.create({
                trigger: text,
                toggleClass: 'active',
                start: 'top 80%',
                end: '',
                // markers: true
            })
        })
var lol = gsap.utils.toArray('.lol');
lol.forEach((text, i) => {
    ScrollTrigger.create({
        trigger: text,
        toggleClass: 'active',
        start: 'top 80%',
        end: "top 1%",
        // markers: true
    })
})

let serve = document.querySelectorAll('.serve-img')

let circles = document.querySelectorAll('.circle')
circles.forEach(e => {
    var dots = e.getAttribute('data-dots')
    var marked = e.getAttribute('data-percent')
    var percent = Math.floor(dots*marked/100)
    var rotate = 360/dots;
    var points ="" ;
    for(let i = 0 ; i<dots ; i++) {
        points +=`<div class="points" style="--i:${i}; --rot: ${rotate}deg"></div>`
    }
    e.innerHTML = points 

    const pointsMarked = e.querySelectorAll('.points')
    for(let i = 0 ; i < percent ; i++) {
        pointsMarked[i].classList.add('marked')
    }
})
    AOS.init({
        duration: 1000,
        once: false,
        mirror: true
    })
//selecting all required elements
// const filterItem = document.querySelector(".items");
// const filterImg = document.querySelectorAll(".gallery .image");

// window.onload = ()=>{ //after window loaded
//   filterItem.onclick = (selectedItem)=>{ //if user click on filterItem div
//     if(selectedItem.target.classList.contains("item")){ //if user selected item has .item class
//       filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
//       selectedItem.target.classList.add("active"); //add that active class on user selected item
//       let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
//       filterImg.forEach((image) => {
//         let filterImges = image.getAttribute("data-name"); //getting image data-name value
//         //if user selected item data-name value is equal to images data-name value
//         //or user selected item data-name value is equal to "all"
//         if((filterImges == filterName) || (filterName == "all")){
//           image.classList.remove("hide"); //first remove the hide class from the image
//           image.classList.add("show"); //add show class in image
//         }else{
//           image.classList.add("hide"); //add hide class in image
//           image.classList.remove("show"); //remove show class from the image
//         }
//       });
//     }
//   }
//   for (let i = 0; i < filterImg.length; i++) {
//     filterImg[i].setAttribute("onclick", "preview(this)"); //adding onclick attribute in all available images
//   }
// }


const filterContainer = document.querySelector(".gallery-filter"),
galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) =>{
  if(event.target.classList.contains("filter-item")){
       // deactivate existing active 'filter-item'
       filterContainer.querySelector(".active").classList.remove("active");
       // activate new 'filter-item'
       event.target.classList.add("active");
       const filterValue = event.target.getAttribute("data-filter");
       galleryItems.forEach((item) =>{
      if(item.classList.contains(filterValue) || filterValue === 'all'){
          item.classList.remove("hide");
           item.classList.add("show");
      }
      else{
          item.classList.remove("show");
          item.classList.add("hide");
      }
       });
  }
});


  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Initiate portfolio details lightbox 
   */
  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '80%',
    height: '90vh',
    touchNavigation: true
  });