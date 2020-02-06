var btn = document.getElementById('btn');
//get teh button
var modal = document.getElementById("modal");
//get the exit buttn
var modalbtn = document.getElementById("modal_btn");
//open the modal
btn.onclick = function () {
        modal.style.display = "block";
    }
    //close the modal
modalbtn.onclick = function () {
    modal.style.display = "none"
}
document.onkeydown = function (ev) {
    if (ev.keyCode == '27') {
        modal.style.display = "none"
    }
}
window.onclick = function (e) {
    if (e.target == modal) {
        modal.style.display = "none"
    }
}
