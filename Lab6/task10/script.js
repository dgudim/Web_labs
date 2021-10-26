setTimeout(function () {
    let container = document.getElementById("container");
    let yacht = document.getElementById("yacht");
    let tower = document.getElementById("tower");

    yacht.onclick = animate;

    function animate() {
        yacht.innerText = "Поплыли!";
        yacht.classList.add("animate_borders");
        tower.classList.add("animate_tower");
        setTimeout(function () {tower.classList.add("animate_sails");}, 300);
        setTimeout(function () {container.classList.add("animate_yacht");}, 900);
    }
}, 1);//бред с загрузкой DOM
// window.addEventListener('DOMContentLoaded', (event) => {
    //console.log('DOM fully loaded and parsed')
//});




