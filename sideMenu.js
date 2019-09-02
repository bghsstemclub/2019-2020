//open button for the side menu
function openButton() {
    document.getElementById("side_menu_id").style.width = "200px";
}

//close button for the side menu
function closeButton() {
    document.getElementById("side_menu_id").style.width = "0";
}

function extraMenu1() {
    document.getElementById("extra_menu_content_id1").classList.toggle("show");
}

function extraMenu2() {
    document.getElementById("extra_menu_content_id2").classList.toggle("show");
}