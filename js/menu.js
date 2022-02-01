function openSlideMenu () {
    document.getElementById("menu").style.right = 0;
}
function closeSlideMenu () {
    document.getElementById("menu").style.right = '';
}
function check () {
    if (document.getElementById("menu").style.right == ''){
        openSlideMenu();
    }
    else{
        closeSlideMenu();
    }
}