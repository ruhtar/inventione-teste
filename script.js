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

const createTextArea = (event) => {
  event.preventDefault();
  if(document.getElementById("readonly-textarea")){
    document.getElementById("readonly-textarea").textContent = "Já existe";
    showInfos();
  }
  else{
    const readonlyTextArea = document.createElement("textarea")
    readonlyTextArea.setAttribute("id", "readonly-textarea")
    readonlyTextArea.setAttribute("readonly", "true")
    showInfos();
    document.getElementById("infos").appendChild(readonlyTextArea)
  }
}

const showInfos = () => {
  const name = document.getElementById('name').value
  const age = document.getElementById('age').value
  const date = document.getElementById('date').value
  const sex =  document.getElementById('date').value

}