/*  
En Scroll function til navbar der gør at når du scroller over 0px af Y aksen akitiveres og 
tilføjes "affix" classen med sort baggrund.
 */
function openMenu() {
    document.querySelector("#menu").classList.toggle("open");
}
// NAVBAR END

// ACCORDION START
let acc = document.querySelectorAll(".test");
console.log(acc)

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
// ACCORDION END