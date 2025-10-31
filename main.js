function menuOpen(){
    let menuDiv = document.getElementById('menuBar')
    if(menuDiv.style.display==="flex"){
        menuDiv.style.display="none"
    }else{
        menuDiv.style.display="flex"
    }
}