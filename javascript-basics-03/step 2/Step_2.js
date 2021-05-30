var a = document.getElementById('show');
var b = document.getElementById('hide');
function clicks() {

    a.addEventListener("click", () => {

        document.getElementById("texte").style.display = "unset";
    })

    b.addEventListener("click", () => {
        document.getElementById("texte").style.display = "none";
    })
}