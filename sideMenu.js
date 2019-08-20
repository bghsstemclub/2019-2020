//open button for the side menu
function openButton() {
  document.getElementById("side_menu_id").style.width = "200px";
}   
    
//close button for the side menu
function closeButton() {
  document.getElementById("side_menu_id").style.width = "0";
}

//show the extra links in the extra menu section
function showingExtraMenu1() {
  document.getElementById("extra_menu_id1").classList.toggle("show");
}

function showingExtraMenu2() {
  document.getElementById("extra_menu_id2").classList.toggle("show");
}