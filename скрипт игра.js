const cat = document.getElementById("cat");
const bug = document.getElementById("bug");

document.addEventListener("keydown", function(event){
    jump();
});
function jump() {
    if (cat.classList !="jump") {
        cat.classList.add("jump")
    }
    setTimeout(function() {
        cat.classList.remove("jump")
        
    }, 300);
}
let isAlive = setInterval (function(){
    let catTop = parseInt(window.getComputedStyle(cat).getPropertyValue("top"));
    let bugleft = parseInt(window.getComputedStyle(bug).getPropertyValue("left"));

    if (bugleft < 50 && bugleft > 0 && catTop >=140) {
        alert("QA от БАГА не убежит!!! Но в этой игре можно) Расслабься и попробуй прыгнуть выше) И чуть не забыл... GAME OVER)")
    }
},10)