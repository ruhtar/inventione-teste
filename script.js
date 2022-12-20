const hideElements = () => {
  if(document.getElementById("checkbox").checked){
    document.getElementById("hideable-container").style.display = "block";
  }
  else{ 
    document.getElementById("hideable-container").style.display = "none";
  }
}

const getInfos = () => {
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const sex = document.querySelector('input[name="sexAnswer"]:checked').value;
  const date = document.getElementById('date').value; //YYYY-MM-DD
  const formattedDate = date.split("-").reverse().join("-"); //DD-MM-YYYY
  const numberOfWords = getWordNumber();
  return (
`Nome: ${name}
Idade: ${age} anos
Sexo: ${sex}
Data: ${formattedDate}
Número de palavras digitadas: ${numberOfWords}`);
}

const createAndUpdateTextArea = (event) => {
  event.preventDefault();
  const readOnlyTextArea = document.createElement("textarea");
  readOnlyTextArea.setAttribute("class", "readonly-textarea");
  readOnlyTextArea.setAttribute("readonly", "true");
  readOnlyTextArea.setAttribute("resize", "none");
  readOnlyTextArea.value = getInfos();
  document.getElementById("infos").appendChild(readOnlyTextArea);
  clearInputs();
}

const getWordNumber = () => {
  const textContent = document.getElementById("text-content").value;
  return textContent.split(' ').filter((element) =>  element !== '' ).length;
}

const clearInputs = () => {
  document.getElementById('name').value = '';
  document.getElementById('age').value = '';
  document.getElementById('date').value = '';
  document.getElementById('Feminino').checked = false;
  document.getElementById('Masculino').checked = false;
  document.getElementById("text-content").value = '';
}