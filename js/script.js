// console.log("hello world")

//Portfolio Item Filter
const filterContainer = document.querySelector(".portfolio-filter");
// console.log(filterContainer)
filterBtns = filterContainer.children;
// console.log(filterBtns)
totalFilterBtn = filterBtns.length;
// console.log(totalFilterBtn)
portfolioItems = document.querySelectorAll(".portfolio-item");
// console.log(portfolioItems)
totalPortFolioItem = portfolioItems.length
console.log(totalPortFolioItem)

// for (let i = 0; i < totalFilterBtn; i++){
    // console.log(filterBtns[i]);
    // filterBtns[i].addEventListener("click", function () {
        // console.log(this.innerHTML)
        // console.log(filterBtns[i].innerHTML);
        // this.classList.add("active")
        // filterContainer.querySelector("active").classList.remove("active");     
    // })
// }

for (let i = 0; i < totalFilterBtn; i++) {
    filterBtns[i].addEventListener("click", function () {
        filterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active")

        const filterValue = this.getAttribute("data-filter")
        // console.log(filterValue);
        for(let k=0; k < totalPortFolioItem; k++){
            if(filterValue === portfolioItems[k].getAttribute("data-category")){
                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show")
            }else{
                portfolioItems[k].classList.remove("show");
                portfolioItems[k].classList.add("hide");
            }
            if (filterValue === "all") {
                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show")
            }
        }
    })
}

// //Portfolio Lightbox
const lightbox = document.querySelector(".lightbox"),
    lightboxImg = lightbox.querySelector(".lightbox-img"),
    lightboxText = lightbox.querySelector(".caption-text"),
    lightboxCounter = lightbox.querySelector(".caption-counter");
    lightboxClose = lightbox.querySelector(".lightbox-close");
console.log(lightboxClose)
let itemIndex = 0

// for (let i = 0;  i < totalPortFolioItem; i++) {
//     console.log(portfolioItems[i]);
//     portfolioItems[i].addEventListener("click", function() {
//         console.log(i) //when clicking  on thr portfolio item its will return the index number
//         itemIndex = i
//         changeItem();
//         toggleLightbox()
//     })
// }

// function changeItem(){
//     imgSrc = portfolioItems[itemIndex]
//     .querySelector(".portfolio-img img")
//     .getAttribute("src")
//     // console.log(imgSrc);
//     lightboxImg.src = imgSrc;
//     // console.log(lightboxImg.src); //click on each item and see the 
//     lightboxText.innerHTML = 
//     portfolioItems[itemIndex].querySelector("h4").innerHTML;
//     // console.log(lightboxText.innerHTML);
//     lightboxCounter.innerHTML = itemIndex + 1 + " of " + totalPortFolioItem;
//     // console.log(lightboxCounter.innerHTML)
// }

// //open lightbox
function toggleLightbox() {
    lightbox.classList.toggle("open"); //popup the lightbox by dynamically 
}

//previous button
function prevItem(){
    if(itemIndex === 0){
        itemIndex = totalPortFolioItem - 1
    }else{
        itemIndex--;
    }
    // console.log(itemIndex)
    changeItem();
}   

//next button
function nextItem(){
    if(itemIndex === totalPortFolioItem - 1){
        itemIndex = 0
    }else{
        itemIndex ++;
    }
    changeItem();
}

//close lightbox
lightbox.addEventListener("click", function(e){
    // console.log(e.target)
    // console.log(e.target === lightboxClose)
    if(e.target === lightboxClose || e.target === lightbox){
        toggleLightbox()
    }
})

//Aside Navbar
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;
// console.log(allSection)
// console.log(totalSection)

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");

  a.addEventListener("click", function () {
    removeBackSectionClass();

    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        // console.log(navList[i])
        addBackSectionClass(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");

    showSection(this);
    //
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function removeBackSectionClass() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

function addBackSectionClass(num) {
  allSection[num].classList.add("back-section");
  // console.log(allSection[num])
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
    // console.log(allSection[i])
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
  console.log(element.getAttribute("href").split("#")[1]);
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    console.log(target);
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

//hire me button
document.querySelector(".hire-me").addEventListener("click", function () {
  // console.log(this)
  const sectionIndex = this.getAttribute("data-section-index");
  // console.log(sectionIndex) //it will return 1 which is it returing the value in the data-section-index
  showSection(this);
  updateNav(this);
  removeBackSectionClass();
  addBackSectionClass(sectionIndex); //this fun
});

//toggling of nav button
const aside = document.querySelector(".aside"),
  navToggleBtn = document.querySelector(".nav-toogler");
// console.log(aside);
// console.log(navToggleBtn)
// navToggleBtn.addEventListener("click", ()=> {
//     asideSectionTogglerBtn();
// })
//Alternative way of calling asideSectionTogglerBtn()
navToggleBtn.addEventListener("click", asideSectionTogglerBtn);

function asideSectionTogglerBtn() {
  // console.log(aside);
  aside.classList.toggle("open");
  navToggleBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}

// When the user clicks on div, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

//preloader
window.addEventListener("load", function(){
    document.querySelector(".preloader").classList.add("opacity-0")
    setTimeout(function(){
        document.querySelector(".preloader").style.display = "none"
    }, 1000)
})