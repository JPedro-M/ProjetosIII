function openSideBar() {
    document.getElementById("conteudo").style.marginLeft = "10%";
    document.getElementById("sideBar").style.width = "100%";
    document.getElementById("sideBar").style.display = "block";
    document.getElementById("openNav").style.display = 'none';
}
function closeSideBar() {
    document.getElementById("conteudo").style.marginLeft = "0%";
    document.getElementById("sideBar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
}
