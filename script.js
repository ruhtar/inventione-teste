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
/*   if(document.getElementById("readonly-textarea")){
    document.getElementById("readonly-textarea").textContent = "Já existe";
  } */
    const readOnlyTextArea = document.createElement("textarea")
    readOnlyTextArea.setAttribute("class", "readonly-textarea")
    readOnlyTextArea.setAttribute("readonly", "true")
    const name = document.getElementById('name').value
    const age = document.getElementById('age').value
    const date = document.getElementById('date').value
    console.log(date);
    const sex = document.querySelector('input[name="sexAnswer"]:checked').value
    const textContent = document.getElementById('text-content').value
    const number = getWordNumber(textContent)
    const formattedDate = date.split("-").reverse().join("-");
    readOnlyTextArea.value = 
`Nome: ${name}
Idade: ${age}
Sexo: ${sex}
Data: ${formattedDate}
Número de palavras contadas: ${number}`
    document.getElementById("infos").appendChild(readOnlyTextArea)
}
 
const getWordNumber = (text) => {
  return text.split(' ').filter((element) =>  element !== '' ).length;
}