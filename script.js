// Seus scripts aqui

/* function datetime() {
  var title = document.getElementById('title');
  var now = new Date();
  
  title.innerHTML = title.innerHTML + ' (' + now.toLocaleTimeString() + ')';
}


datetime(); */

const hideElements = () => {
  if(document.getElementById("checkbox").checked){
    document.getElementById("hideable-container").style.display = "block"
  }
  else{ 
    document.getElementById("hideable-container").style.display = "none"
  }
}
