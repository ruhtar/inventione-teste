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

const createAndUpdateTextArea = (event) => {
  event.preventDefault();
  if(document.getElementById("readonly-textarea")){
    document.getElementById("readonly-textarea").textContent = "Já existe";
  }
  else{
    const readOnlyTextArea = document.createElement("textarea")
    readOnlyTextArea.setAttribute("id", "readonly-textarea")
    readOnlyTextArea.setAttribute("readonly", "true")
    const name = document.getElementById('name').value
    const age = document.getElementById('age').value
    const date = document.getElementById('date').value
    const sex = document.querySelector('input[name="sexAnswer"]:checked').value
    const textContent = document.getElementById('text-content').value
    const number = getWordNumber(textContent)
    readOnlyTextArea.value = 
`Nome:${name} 
Idade:${age}  
Sexo:${sex}
Data:${date}
Número de palavras contadas: ${number}`
    document.getElementById("infos").appendChild(readOnlyTextArea)
  }
}

function getWordNumber(text) {
  return text.split(' ').filter((n) =>  n != '' ).length;
}