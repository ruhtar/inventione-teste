const hideElements = () => {
  if(document.getElementById("checkbox").checked){
    document.getElementById("hideable-container").style.display = "block"
  }
  else{ 
    document.getElementById("hideable-container").style.display = "none"
  }
}

const getInfos = () => {
  const name = document.getElementById('name').value
  const age = document.getElementById('age').value
  const date = document.getElementById('date').value //YYYY-MM-DD
  const sex = document.querySelector('input[name="sexAnswer"]:checked').value
  const formattedDate = date.split("-").reverse().join("-"); //DD-MM-YYYY
  const number = getWordNumber() //Função que retorna o número de palavras
  return (
`Nome: ${name}
Idade: ${age}
Sexo: ${sex}
Data: ${formattedDate}
Número de palavras contadas: ${number}`);
}

const createAndUpdateTextArea = (event) => {
  event.preventDefault();
/*   if(document.getElementById("readonly-textarea")){
    document.getElementById("readonly-textarea").textContent = "Já existe";
  } */
  const readOnlyTextArea = document.createElement("textarea")
  readOnlyTextArea.setAttribute("class", "readonly-textarea")
  readOnlyTextArea.setAttribute("readonly", "true")
  readOnlyTextArea.value = getInfos();
  document.getElementById("infos").appendChild(readOnlyTextArea)
}

const getWordNumber = () => {
  const textContent = document.getElementById("text-content").value
  return textContent.split(' ').filter((element) =>  element !== '' ).length;
}